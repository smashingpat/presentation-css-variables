import React from 'react';
import { keyboardEvent } from '$lib/utils/keyboard';
import useRefValue from './useRefValue';

export default function useKeybind(key: string, cb: () => void) {
  const keyRef = useRefValue(key);
  const cbRef = useRefValue(cb);

  React.useEffect(() => {
    const cleanup = keyboardEvent.on((key) => {
      if (keyRef.current === key) {
        cbRef.current();
      }
    });

    return () => cleanup();
  }, [cbRef, keyRef]);
}
