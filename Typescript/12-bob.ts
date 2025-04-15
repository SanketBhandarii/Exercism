export function hey(message: string): string {
  const trimmed = message.trim();

  const isQuestion = trimmed.endsWith("?");
  const isShouting = /[A-Z]/.test(trimmed) && trimmed === trimmed.toUpperCase();

  if (trimmed === "") return "Fine. Be that way!";
  if (isShouting && isQuestion) return "Calm down, I know what I'm doing!";
  if (isShouting) return "Whoa, chill out!";
  if (isQuestion) return "Sure.";
  return "Whatever.";
}
