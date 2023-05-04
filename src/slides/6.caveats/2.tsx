import CodeBlock from '~src/lib/components/CodeBlock';
import Stack from '~src/lib/components/Stack';
import Text from '~src/lib/components/Text';

export default function Slide() {
  return (
    <Stack fill vertical>
      <Text variant="title">Caveats - sass</Text>
      <CodeBlock
        language="sass"
        code={`
$primary-color: red;

:root {
  // will output "--primary-color: $primary-color" :(
  --primary-color: $primary-color;
}
      `}
      />
      <CodeBlock
        language="sass"
        code={`
$primary-color: red;

:root {
  // wrap in #{SASS_CODE}
  --primary-color: #{$primary-color};
}
      `}
      />
    </Stack>
  );
}
