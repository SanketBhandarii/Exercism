export function buildSign(occasion, name) {
  return `Happy ${occasion} ${name}!`;
}

export function buildBirthdaySign(age) {
  const messageType = age >= 50 ? "mature" : "young";
  return `Happy Birthday! What a ${messageType} fellow you are.`;
}

export function graduationFor(name, year) {
  return `Congratulations ${name}!\nClass of ${year}`;
}

export function costOf(sign, currency) {
  const baseCost = 20;
  const letterCost = 2;
  const totalCost = baseCost + sign.length * letterCost;
  return `Your sign costs ${totalCost.toFixed(2)} ${currency}.`;
}
