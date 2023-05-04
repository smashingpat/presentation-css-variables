import React from 'react';
import CodeBlock from '~src/lib/components/CodeBlock';
import Stack from '~src/lib/components/Stack';
import Text from '~src/lib/components/Text';
import $ from './index.module.scss';

export default function Slide() {
  const [cols, setCols] = React.useState(1);

  React.useEffect(() => {
    const id = setInterval(() => {
      setCols((p) => {
        if (p >= 12) {
          return 1;
        }
        return p + 1;
      });
    }, 500);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <Stack fill vertical>
      <Text variant="title">Recipe - responsive grids</Text>
      <CodeBlock
        language="css"
        code={`
.grid {
  --cols: ${cols};
  display: flex;
}

.item {
  width: calc(12 / var(--cols) * 100%);
}
        `}
      />

      <div className={$.grid} style={{ ['--cols' as any]: cols }}>
        {Array.from({ length: 12 }, (_, index) => (
          <div key={index} className={$.box}>
            {index + 1}
          </div>
        ))}
      </div>
    </Stack>
  );
}
