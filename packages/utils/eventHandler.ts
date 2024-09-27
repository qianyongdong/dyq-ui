interface Transform {
  scale: number;
  origin: [number, number];
}

interface Region {
  id: number;
  rect: DOMRect;
}

export default class EventHandler {
  private element: HTMLElement;
  private transform: Transform;
  private ctrlKeyPressed: boolean = false;
  private isFirstPageRendered: boolean = true; // 根据你的逻辑设置初始值
  private drawing: boolean = false;
  private startX: number = 0;
  private startY: number = 0;
  private regions: Region[] = [];
  private nextId: number = 1; // 唯一标识符

  constructor(element: HTMLElement, transform: Transform) {
    this.element = element;
    this.transform = transform;

    this.bindEvents();
  }

  private bindEvents() {
    window.addEventListener('keydown', this.handleKeyDown.bind(this));
    window.addEventListener('keyup', this.handleKeyUp.bind(this));
    this.element.addEventListener('wheel', this.handleWheel.bind(this), {
      passive: false,
    });
    this.element.addEventListener('mousedown', this.startDrawing.bind(this));
    this.element.addEventListener('mousemove', this.drawRegion.bind(this));
    this.element.addEventListener('mouseup', this.finalizeRegion.bind(this));
    this.element.addEventListener('mouseleave', this.finalizeRegion.bind(this));
  }

  private handleWheel(event: WheelEvent) {
    if (!this.ctrlKeyPressed || !this.isFirstPageRendered) return;

    event.preventDefault();
    const rect = this.element.getBoundingClientRect();
    const delta = Math.max(-1, Math.min(1, event.deltaY || -event.detail));
    const x = (event.clientX - rect.left) / this.transform.scale;
    const y = (event.clientY - rect.top) / this.transform.scale;

    this.transform.origin = [x, y];
    const zoomFn = delta > 0 ? this.zoomOut : this.zoomIn;
    zoomFn.call(this);
  }

  private handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Control') {
      this.ctrlKeyPressed = true;
    }
  }

  private handleKeyUp(event: KeyboardEvent) {
    if (event.key === 'Control') {
      this.ctrlKeyPressed = false;
      if (this.drawing) {
        this.finalizeRegion();
      }
    }
  }

  private zoomIn() {
    console.log('Zooming In');
    // 实现缩放放大逻辑，例如：this.transform.scale *= 1.1;
  }

  private zoomOut() {
    console.log('Zooming Out');
    // 实现缩放缩小逻辑，例如：this.transform.scale *= 0.9;
  }

  private startDrawing(event: MouseEvent) {
    if (this.ctrlKeyPressed) {
      this.drawing = true;
      this.startX = event.offsetX;
      this.startY = event.offsetY;
    }
  }

  private drawRegion(event: MouseEvent) {
    if (!this.drawing) return;

    const currentX = event.offsetX;
    const currentY = event.offsetY;
    const width = currentX - this.startX;
    const height = currentY - this.startY;

    // 清空当前绘制的区域
    this.clearCurrentRegion();

    // 创建新的区域元素
    const region = document.createElement('div');
    region.className = 'region';
    region.style.position = 'absolute';
    region.style.left = `${Math.min(this.startX, currentX)}px`;
    region.style.top = `${Math.min(this.startY, currentY)}px`;
    region.style.width = `${Math.abs(width)}px`;
    region.style.height = `${Math.abs(height)}px`;
    region.dataset.id = this.nextId.toString(); // 记录唯一标识符
    this.element.appendChild(region);
  }

  private finalizeRegion() {
    if (this.drawing) {
      this.drawing = false;

      const regionsElements = this.element.querySelectorAll(
        '.region'
      ) as NodeListOf<HTMLElement>;
      regionsElements.forEach((region) => {
        const rect = region.getBoundingClientRect();
        this.regions.push({
          id: parseInt(region.dataset.id || '0'),
          rect: rect,
        });
      });
      this.nextId++;
    }
  }

  private clearCurrentRegion() {
    const tempRegion = this.element.querySelector('.region');
    if (tempRegion) {
      tempRegion.remove();
    }
  }

  public removeRegionById(id: number) {
    const region = [...this.element.children].find(
      (child) => (child as HTMLElement).dataset.id === id.toString()
    );
    if (region) {
      region.remove();
      this.regions = this.regions.filter((r) => r.id !== id);
    }
  }

  public destroy() {
    window.removeEventListener('keydown', this.handleKeyDown.bind(this));
    window.removeEventListener('keyup', this.handleKeyUp.bind(this));
    this.element.removeEventListener('wheel', this.handleWheel.bind(this));
    this.element.removeEventListener('mousedown', this.startDrawing.bind(this));
    this.element.removeEventListener('mousemove', this.drawRegion.bind(this));
    this.element.removeEventListener('mouseup', this.finalizeRegion.bind(this));
    this.element.removeEventListener(
      'mouseleave',
      this.finalizeRegion.bind(this)
    );
  }
}
