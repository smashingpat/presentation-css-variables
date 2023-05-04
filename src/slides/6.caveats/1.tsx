import CodeBlock from '~src/lib/components/CodeBlock';
import Stack from '~src/lib/components/Stack';
import Text from '~src/lib/components/Text';

export default function Slide() {
  return (
    <Stack fill vertical>
      <Text variant="title">Caveats - psuedo elements</Text>
      <CodeBlock
        language="css"
        code={`
:root {
  --primary-color: red;
}

.cool-thing::after {
  content: "";
  display: block;
  width: 10px
  height: 10px;
  background-color: var(--primary-color); /* won't be red :( */
}
      `}
      />
    </Stack>
  );
}
