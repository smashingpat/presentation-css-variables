import EventEmitter from './EventEmitter';
import shallowCompare from './shallowEqual';
import Vector from './Vector';

export interface GamepadState {
  stick: Vector;
  buttonA: boolean;
  buttonB: boolean;
}

export let gamepadState: GamepadState = {
  stick: new Vector(),
  buttonA: false,
  buttonB: false,
};
const gamepadStateKeys = Object.keys(gamepadState) as (keyof GamepadState)[];

export const gamepadEvent = new EventEmitter<typeof gamepadState>();

let lastTime = performance.now();
let count = 0;
function pollGamepadState(time: number) {
  const nextGamepadState = { ...gamepadState };

  const delta = time - lastTime;
  lastTime = time;
  count = (count + delta * 0.0005) % 1;

  const gamepad = navigator.getGamepads().at(0);

  if (gamepad) {
    const [y = 0, x = 0] = gamepad.axes;
    const buttonA = gamepad.buttons.at(0);
    const buttonB = gamepad.buttons.at(2);

    if (gamepadState.stick.x !== x || gamepadState.stick.y !== y) {
      nextGamepadState.stick = new Vector(x, y).limit(1);
    }
    nextGamepadState.buttonA = buttonA?.pressed ?? false;
    nextGamepadState.buttonB = buttonB?.pressed ?? false;
  } else {
    const x = Math.cos(count * Math.PI * 2);
    const y = Math.sin(count * Math.PI * 2);
    nextGamepadState.stick = new Vector(x, y);
  }

  if (!shallowCompare(gamepadState, nextGamepadState, gamepadStateKeys)) {
    gamepadState = nextGamepadState;
    gamepadEvent.emit(gamepadState);
  }
  requestAnimationFrame(pollGamepadState);
}
requestAnimationFrame(pollGamepadState);

if (import.meta.hot) {
  import.meta.hot.accept(() => {
    window.location.reload();
  });
}
