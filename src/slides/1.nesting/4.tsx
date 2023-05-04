import CodeBlock from '~src/lib/components/CodeBlock';
import Stack from '~src/lib/components/Stack';
import Text from '~src/lib/components/Text';

export default function Slide() {
  return (
    <Stack fill vertical>
      <Text variant="title">What are CSS Variables?</Text>
      <Stack fill>
        <CodeBlock
          language="css"
          code={`
:root {
  --gutter: 1em;
  --background-color: black;
  --text-color: white;
}

@media (min-width: 900px) {
  :root {
    --gutter: 2em; /* bigger gutter for bigger screens. */
  }
}

@media (prefers-color-scheme: light) {
  :root {
    --background-color: white;
    --text-color: black;
  }
}
      `}
        />
      </Stack>
    </Stack>
  );
}
