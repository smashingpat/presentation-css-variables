import EventEmitter from './EventEmitter';

export const keyboardEvent = new EventEmitter<string>();

document.addEventListener('keydown', ({ key }) =>
  keyboardEvent.emit(key.toLowerCase())
);

if (import.meta.hot) {
  import.meta.hot.accept(() => {
    window.location.reload();
  });
}
