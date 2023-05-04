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

.button.is-outlined {
  background-color: transparent;
  border: 3px solid var(--button-bg-color);
  color: var(--button-bg-color);
}
      `}
        />
        <Stack fill bg centered>
          <Stack vertical centered>
            <button className={cx($.button, $.red)}>red button</button>
            <button className={cx($.button, $.purple)}>purple button</button>
            <button className={cx($.button, $.green)}>green button</button>
          </Stack>
          <Stack vertical centered>
            <button className={cx($.button, $.outlined, $.red)}>
              red button
            </button>
            <button className={cx($.button, $.outlined, $.purple)}>
              purple button
            </button>
            <button className={cx($.button, $.outlined, $.green)}>
              green button
            </button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
