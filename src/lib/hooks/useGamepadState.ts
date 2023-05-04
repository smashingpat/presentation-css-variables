import React from 'react';
import { gamepadEvent, gamepadState } from '$lib/utils/gamepad';

export default function useGamepadState() {
  const [state, setState] = React.useState(gamepadState);

  React.useEffect(() => {
    const cleanup = gamepadEvent.on(setState);

    return () => cleanup();
  }, []);

  return state;
}
