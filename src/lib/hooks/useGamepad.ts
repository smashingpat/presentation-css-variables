import React from 'react';
import { GamepadState, gamepadEvent } from '$lib/utils/gamepad';
import useRefValue from './useRefValue';

export default function useGamepad(key: keyof GamepadState, cb: () => void) {
  const keyRef = useRefValue(key);
  const cbRef = useRefValue(cb);

  React.useEffect(() => {
    const cleanup = gamepadEvent.on((state) => {
      if (state[keyRef.current]) {
        cbRef.current();
      }
    });

    return () => cleanup();
  }, [cbRef, keyRef]);
}
