import React from 'react';
import CodeBlock from '~src/lib/components/CodeBlock';
import Stack from '~src/lib/components/Stack';
import Text from '~src/lib/components/Text';
import $ from './index.module.css';

export default function Slide() {
  const [hue, setHue] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => {
      setHue((p) => (p + 1) % 360);
    }, 10);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <Stack fill vertical>
      <Text variant="title">Recipe - color shift</Text>
      <Stack>
        <CodeBlock
          language="css"
          code={`
:root {
  --hue: ${Math.floor(hue)};
  --color: hsl(var(--hue), 50%, 50%);
}
        `}
        />

        <div style={{ ['--hue' as any]: hue }} className={$.wheel} />
      </Stack>
    </Stack>
  );
}
