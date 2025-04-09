export function isValidCommand(command) {
  return /^chatbot\b/i.test(command);
}

export function removeEmoji(message) {
  const regex = new RegExp("emoji\\d+", "g");
  return message.replace(regex, "");
}

export function checkPhoneNumber(number) {
  const isValid = /^\(\+\d{2}\) \d{3}-\d{3}-\d{3}$/.test(number);

  if (isValid) {
    return "Thanks! You can now download me to your phone.";
  } else {
    return `Oops, it seems like I can't reach out to ${number}`;
  }
}

export function getURL(message) {
  const regex = /[\w-]+\.\w+/g;
  return message.match(regex) || [];
}

export function niceToMeetYou(name) {
  return name.replace(/(\w+), (\w+)/, "Nice to meet you, $2 $1");
}
