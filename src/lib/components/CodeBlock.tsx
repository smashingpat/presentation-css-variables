import * as React from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import $ from './CodeBlock.module.scss';
import cx from '../utils/cx';

type Props = { code: string; language: string };

const CodeBlock = React.memo<Props>(({ code, language }) => {
  return (
    <Highlight theme={themes.vsDark} code={code.trim()} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        return (
          <pre style={style} className={cx($.code, className)}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                <span className={$.number}>{i + 1}</span>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        );
      }}
    </Highlight>
  );
});

export default CodeBlock;
