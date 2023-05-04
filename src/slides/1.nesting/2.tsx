import CodeBlock from '~src/lib/components/CodeBlock';
import Stack from '~src/lib/components/Stack';
import Text from '~src/lib/components/Text';
import $ from './index.module.scss';
import cx from '~src/lib/utils/cx';

export default function Slide() {
  return (
    <Stack fill vertical>
      <Text variant="title">What are CSS Variables?</Text>
      <Stack fill>
        <CodeBlock
          language="css"
          code={`
.button {
  background-color: var(--button-bg-color);
  color: var(--button-text-color);
}

.button.is-red {
  --button-bg-color: red;
}
.button.is-purple {
  --button-bg-color: purple;
}
.button.is-green {
  --button-bg-color: green;
}
.button.is-yellow {
  --button-bg-color: yellow;
  --button-text-color: black;
}
      `}
        />
        <Stack fill bg centered vertical>
          <button className={cx($.button, $.red)}>red button</button>
          <button className={cx($.button, $.purple)}>purple button</button>
          <button className={cx($.button, $.green)}>green button</button>
          <button className={cx($.button, $.yellow)}>yellow button</button>
        </Stack>
      </Stack>
    </Stack>
  );
}
