import React from 'react';

export default function useRefValue<T>(value: T): React.MutableRefObject<T> {
  const ref = React.useRef(value);

  React.useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref;
}
