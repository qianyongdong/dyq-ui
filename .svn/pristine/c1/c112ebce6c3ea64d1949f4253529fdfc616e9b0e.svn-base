class EventEmitter {
  #eventNames: string[] = [];
  #listeners: Record<string, Set<Function>> = {};
  constructor(eventNames: string[]) {
    this.#eventNames = eventNames;
    this.#listeners = Object.fromEntries(
      this.#eventNames.map((e) => [e, new Set()])
    );
  }

  on(eventName: string, listener: Function) {
    this.#listeners[eventName].add(listener);
  }

  emit(eventName: string, ...args: any[]) {
    this.#listeners[eventName].forEach((listener) => listener(...args));
  }
}

export default EventEmitter;
