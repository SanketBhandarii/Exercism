export const hey = (message) => {
  const trimmed = message.trim();

  const isSilent = trimmed === "";
  const isQuestion = trimmed.endsWith("?");
  const hasLetters = /[a-zA-Z]/.test(trimmed);
  const isShouting = trimmed === trimmed.toUpperCase() && hasLetters;

  if (isSilent) {
    return "Fine. Be that way!";
  } else if (isShouting && isQuestion) {
    return "Calm down, I know what I'm doing!";
  } else if (isShouting) {
    return "Whoa, chill out!";
  } else if (isQuestion) {
    return "Sure.";
  } else {
    return "Whatever.";
  }
};
