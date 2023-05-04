import React from 'react';
import Stack from '$components/Stack';
import CodeBlock from '$components/CodeBlock';
import Text from '$components/Text';
import $ from './index.module.scss';
import useGamepadState from '~src/lib/hooks/useGamepadState';

export default function Slide() {
  const [_progress, setProgress] = React.useState(0);
  const state = useGamepadState();
  const progress =
    state.stick.x || state.stick.y ? (state.stick.x + 1) / 2 : _progress;

  React.useEffect(() => {
    const id = window.setInterval(() => {
      setProgress((p) => (p + 0.005) % 1);
    }, 10);

    return () => window.clearInterval(id);
  }, []);

  return (
    <Stack fill vertical>
      <Stack vertical fill>
        <Text variant="title">Recipe - progress bar</Text>
        <Stack fill>
          <Stack vertical>
            <div>😔</div>
            <CodeBlock
              language="html"
              code={`
<div class="progress">
  <div class="fill" style="width:${Math.floor(progress * 100)}%;"></div>
</div>
          `}
            />
            <CodeBlock
              language="css"
              code={`
.fill {
  width: 0%; /* default width */
}
          `}
            />
          </Stack>

          <Stack vertical>
            <div>😊</div>

            <CodeBlock
              language="html"
              code={`
<div class="progress" style="--progress: ${progress.toFixed(2)};">
  <div class="fill"></div>
</div>
          `}
            />
            <CodeBlock
              language="css"
              code={`
.progress {
  --progress: 0; /* default progress */
}
.fill {
  width: calc(100% * var(--progress));
}
          `}
            />
          </Stack>
        </Stack>
      </Stack>
      <Stack>
        <div className={$.progress} style={{ ['--progress' as any]: progress }}>
          <div className={$.fill}></div>
        </div>
      </Stack>
    </Stack>
  );
}
