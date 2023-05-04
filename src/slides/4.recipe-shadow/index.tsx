import { css } from '@emotion/css';
import Stack from '~src/lib/components/Stack';
import Text from '~src/lib/components/Text';
import useGamepadState from '~src/lib/hooks/useGamepadState';
import $ from './index.module.scss';
import CodeBlock from '~src/lib/components/CodeBlock';

export default function Slide() {
  const { stick } = useGamepadState();
  const direction = stick.mult(-1);
  direction.x *= -1

  return (
    <Stack fill vertical>
      <Text variant="title">Recipe - shadow</Text>
      <Stack fill>
        <Stack vertical>
          <CodeBlock
            language="html"
            code={`
<body style="--x: ${direction.x.toFixed(1)}; --y: ${direction.y.toFixed(1)};">
  <!-- html -->
            `}
          />
          <CodeBlock
            language="css"
            code={`
.box {
  box-shadow:
    calc(var(--x) * 10px)
    calc(var(--y) * 10px + 3px)
    5px rgba(0, 0, 0, 0.4);
}
        `}
          />
        </Stack>
        <div
          className={$.grid}
          style={{
            ['--x' as any]: direction.x,
            ['--y' as any]: direction.y,
          }}
        >
          {Array.from({ length: 20 }, (_, i) => (
            <div key={i} className={$.box}></div>
          ))}
        </div>
      </Stack>
    </Stack>
  );
}
