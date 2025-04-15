export const commands = (num) => {
  const actions = ["wink", "double blink", "close your eyes", "jump"];
  const result = [];

  for (let i = 0; i < 4; i++) {
    if ((num >> i) & 1) result.push(actions[i]);
  }

  if ((num >> 4) & 1) result.reverse();
  return result;
};
