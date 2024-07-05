class BmpDecoder {
  constructor(buffer, is_with_alpha) {
    this.pos = 0;
    this.buffer = new DataView(buffer);
    this.is_with_alpha = !!is_with_alpha;
    this.bottom_up = true;
    this.flag = this.readString(2);
    if (this.flag !== "BM") throw new Error("Invalid BMP File");
    this.parseHeader();
    this.parseRGBA();
  }

  readUInt8() {
    const value = this.buffer.getUint8(this.pos);
    this.pos += 1;
    return value;
  }

  readUInt16LE() {
    const value = this.buffer.getUint16(this.pos, true);
    this.pos += 2;
    return value;
  }

  readUInt32LE() {
    const value = this.buffer.getUint32(this.pos, true);
    this.pos += 4;
    return value;
  }

  readInt32LE() {
    const value = this.buffer.getInt32(this.pos, true);
    this.pos += 4;
    return value;
  }

  readString(length) {
    let str = "";
    for (let i = 0; i < length; i++) {
      str += String.fromCharCode(this.readUInt8());
    }
    return str;
  }

  parseHeader() {
    this.fileSize = this.readUInt32LE();
    this.reserved = this.readUInt32LE();
    this.offset = this.readUInt32LE();
    this.headerSize = this.readUInt32LE();
    this.width = this.readUInt32LE();
    this.height = this.readInt32LE();
    this.planes = this.readUInt16LE();
    this.bitPP = this.readUInt16LE();
    this.compress = this.readUInt32LE();
    this.rawSize = this.readUInt32LE();
    this.hr = this.readUInt32LE();
    this.vr = this.readUInt32LE();
    this.colors = this.readUInt32LE();
    this.importantColors = this.readUInt32LE();

    if (this.bitPP === 16 && this.is_with_alpha) {
      this.bitPP = 15;
    }
    if (this.bitPP < 15) {
      const len = this.colors === 0 ? 1 << this.bitPP : this.colors;
      this.palette = new Array(len);
      for (let i = 0; i < len; i++) {
        const blue = this.readUInt8();
        const green = this.readUInt8();
        const red = this.readUInt8();
        const quad = this.readUInt8();
        this.palette[i] = { red, green, blue, quad };
      }
    }
    if (this.height < 0) {
      this.height *= -1;
      this.bottom_up = false;
    }
  }

  parseRGBA() {
    const bitFn = "bit" + this.bitPP;
    const len = this.width * this.height * 4;
    this.data = new Uint8ClampedArray(len);
    this[bitFn]();
  }

  setPixelData(index, location) {
    const rgb = this.palette[index];
    this.data[location] = 0;
    this.data[location + 1] = rgb.blue;
    this.data[location + 2] = rgb.green;
    this.data[location + 3] = rgb.red;
  }

  bit1() {
    const xlen = Math.ceil(this.width / 8);
    const mode = xlen % 4;
    for (let y = this.height - 1; y >= 0; y--) {
      const line = this.bottom_up ? y : this.height - 1 - y;
      for (let x = 0; x < xlen; x++) {
        const b = this.readUInt8();
        const location = line * this.width * 4 + x * 8 * 4;
        for (let i = 0; i < 8; i++) {
          if (x * 8 + i < this.width) {
            const rgb = this.palette[(b >> (7 - i)) & 0x1];
            this.data[location + i * 4] = 0;
            this.data[location + i * 4 + 1] = rgb.blue;
            this.data[location + i * 4 + 2] = rgb.green;
            this.data[location + i * 4 + 3] = rgb.red;
          } else {
            break;
          }
        }
      }
      if (mode !== 0) {
        this.pos += 4 - mode;
      }
    }
  }

  bit4() {
    const xlen = Math.ceil(this.width / 2);
    const mode = xlen % 4;
    for (let y = this.height - 1; y >= 0; y--) {
      const line = this.bottom_up ? y : this.height - 1 - y;
      for (let x = 0; x < xlen; x++) {
        const b = this.readUInt8();
        const location = line * this.width * 4 + x * 2 * 4;
        const before = b >> 4;
        const after = b & 0x0F;

        let rgb = this.palette[before];
        this.data[location] = 0;
        this.data[location + 1] = rgb.blue;
        this.data[location + 2] = rgb.green;
        this.data[location + 3] = rgb.red;

        if (x * 2 + 1 >= this.width) break;

        rgb = this.palette[after];
        this.data[location + 4] = 0;
        this.data[location + 4 + 1] = rgb.blue;
        this.data[location + 4 + 2] = rgb.green;
        this.data[location + 4 + 3] = rgb.red;
      }
      if (mode !== 0) {
        this.pos += 4 - mode;
      }
    }
  }

  bit8() {
    const mode = this.width % 4;
    for (let y = this.height - 1; y >= 0; y--) {
      const line = this.bottom_up ? y : this.height - 1 - y;
      for (let x = 0; x < this.width; x++) {
        const b = this.readUInt8();
        const location = line * this.width * 4 + x * 4;
        const rgb = this.palette[b] || { red: 0xFF, green: 0xFF, blue: 0xFF };
        this.data[location] = 0;
        this.data[location + 1] = rgb.blue;
        this.data[location + 2] = rgb.green;
        this.data[location + 3] = rgb.red;
      }
      if (mode !== 0) {
        this.pos += 4 - mode;
      }
    }
  }

  bit24() {
    for (let y = this.height - 1; y >= 0; y--) {
      const line = this.bottom_up ? y : this.height - 1 - y;
      for (let x = 0; x < this.width; x++) {
        const blue = this.readUInt8();
        const green = this.readUInt8();
        const red = this.readUInt8();
        const location = line * this.width * 4 + x * 4;
        this.data[location] = 0;
        this.data[location + 1] = blue;
        this.data[location + 2] = green;
        this.data[location + 3] = red;
      }
      this.pos += this.width % 4;
    }
  }

  bit32() {
    for (let y = this.height - 1; y >= 0; y--) {
      const line = this.bottom_up ? y : this.height - 1 - y;
      for (let x = 0; x < this.width; x++) {
        const alpha = this.readUInt8();
        const blue = this.readUInt8();
        const green = this.readUInt8();
        const red = this.readUInt8();
        const location = line * this.width * 4 + x * 4;
        this.data[location] = alpha;
        this.data[location + 1] = blue;
        this.data[location + 2] = green;
        this.data[location + 3] = red;
      }
    }
  }

  getData() {
    return this.data;
  }
}
function decodeImage(arrayBuffer, page) {
  const decoder = new BmpDecoder(arrayBuffer);
  const buffer = decoder.getData();
  page.buffer = buffer

}
function toRGBA8(page) {
  return page.buffer
}

function decode(arrayBuffer) {
  const dataView = new DataView(arrayBuffer)
  const width = dataView.getInt32(18, true);
  const height = Math.abs(dataView.getInt32(22, true));
  return [{ width, height }];
}

var BMP = { decode, toRGBA8, decodeImage };