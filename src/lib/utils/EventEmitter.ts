export type EventEmitterHandler<T> = (value: T) => void;

export default class EventEmitter<T> {
  handlers = new Set<EventEmitterHandler<T>>();

  on(handler: EventEmitterHandler<T>) {
    this.handlers.add(handler);

    return () => {
      this.off(handler);
    };
  }

  off(handler: EventEmitterHandler<T>) {
    this.handlers.delete(handler);
  }

  emit(value: T) {
    this.handlers.forEach((handler) => handler(value));
  }
}
