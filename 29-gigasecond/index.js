export function gigasecond(date) {
  const GIGASECOND_IN_MS = 1e9 * 1000;
  return new Date(date.getTime() + GIGASECOND_IN_MS);
}
