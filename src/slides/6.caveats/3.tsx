import CodeBlock from '~src/lib/components/CodeBlock';
import Stack from '~src/lib/components/Stack';
import Text from '~src/lib/components/Text';

export default function Slide() {
  return (
    <Stack fill vertical>
      <Text variant="title">Caveats - it respect inheritance</Text>
      <CodeBlock
        language="css"
        code={`
:root {
  --hue: 50;
  --color: hsl(var(--hue), 50%, 50%);
}

.cool-thing {
  --hue: 100;
  /* The color won't use the above hue as it is calculated before this element. */
  background-color: var(--color);
}
      `}
      />
    </Stack>
  );
}
