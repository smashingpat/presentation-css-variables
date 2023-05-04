import CodeBlock from '~src/lib/components/CodeBlock';
import Stack from '~src/lib/components/Stack';
import Text from '~src/lib/components/Text';
import $ from './index.module.scss';

export default function Slide() {
  return (
    <Stack fill vertical>
      <Text variant="title">What are CSS Variables?</Text>
      <Stack fill>
        <CodeBlock
          language="css"
          code={`
html {
  --button-bg-color: red;
  --button-text-color: white;
}

.button {
  background-color: var(--button-bg-color);
  color: var(--button-text-color);
}
      `}
        />
        <Stack fill bg centered>
          <button className={$.button}>button</button>
        </Stack>
      </Stack>
    </Stack>
  );
}
