type ValidClassName = string | false | null | undefined;

export default function cx(...classNames: ValidClassName[]): string {
  return classNames.filter(Boolean).join(' ');
}
