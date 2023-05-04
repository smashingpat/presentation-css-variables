import $ from './Text.module.scss';

type Props = React.PropsWithChildren<{
  variant?: keyof typeof classNameMap;
}>;

const classNameMap = {
  title: $.title,
  'mega-title': $.megaTitle,
  body: $.body,
};

export default function Text({ children, variant = 'body' }: Props) {
  return (
    <div className={classNameMap[variant]}>
      <span>{children}</span>
    </div>
  );
}
