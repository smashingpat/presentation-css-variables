import CodeBlock from '~src/lib/components/CodeBlock';
import Stack from '~src/lib/components/Stack';
import Text from '~src/lib/components/Text';

export default function Slide() {
  return (
    <Stack fill vertical>
      <Text variant="title">Recipe - responsive grids</Text>
      <CodeBlock
        language="css"
        code={`
.grid {
  --cols: 1;
  display: flex;

  @media (min-width: 400px) {
    --cols: 2
  }

  @media (min-width: 800px) {
    --cols: 3;
  }

  @media (min-width: 1200px) {
    --cols: 4;
  }
}

.item {
  width: calc(12 / var(--cols) * 100%);
}
        `}
      />
    </Stack>
  );
}
