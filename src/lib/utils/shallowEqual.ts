export default function shallowCompare<T>(
  a: T,
  b: T,
  keys: (keyof T)[]
): boolean {
  for (const key of keys) {
    if (a[key] !== b[key]) {
      return false;
    }
  }

  return true;
}
