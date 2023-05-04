import React from 'react';

export default function usePersistedState<T>(key: string, initialValue: T) {
  const keyRef = React.useRef(key);
  const [state, setState] = React.useState<T>(() => {
    try {
      const persistedStateString = localStorage.getItem(keyRef.current);
      return persistedStateString
        ? JSON.parse(persistedStateString)
        : initialValue;
    } catch {
      initialValue;
    }
  });

  React.useEffect(() => {
    const id = setTimeout(() => {
      localStorage.setItem(keyRef.current, JSON.stringify(state));
    }, 300);

    return () => {
      clearTimeout(id);
    };
  }, [state]);

  return [state, setState] as const;
}
