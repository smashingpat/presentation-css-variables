import cx from '$lib/utils/cx';
import $ from './Stack.module.scss';

type Props = React.PropsWithChildren<{
  fill?: boolean;
  vertical?: boolean;
  centered?: boolean;
  bg?: boolean;
}>;

export default function Stack({
  children,
  fill,
  vertical,
  centered,
  bg,
}: Props) {
  return (
    <div
      className={cx(
        $.stack,
        fill && $.isFill,
        centered && $.isCentered,
        vertical && $.isVertical,
        bg && $.hasBg
      )}
    >
      {children}
    </div>
  );
}
