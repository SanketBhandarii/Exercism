export function flatten(input: any[]): any[] {
  const result: any[] = [];

  for (const item of input) {
    if (Array.isArray(item)) {
      result.push(...flatten(item));
    } else if (item != null) {
      result.push(item);
    }
  }

  return result;
}
