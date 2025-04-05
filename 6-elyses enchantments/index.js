export function getItem(stack, position) {
  return stack[position];
}

export function setItem(stack, position, replacementCard) {
  stack[position] = replacementCard;
  return stack;
}

export function insertItemAtTop(stack, newCard) {
  stack.push(newCard);
  return stack;
}

export function removeItem(stack, position) {
  stack.splice(position, 1);
  return stack;
}

export function removeItemFromTop(stack) {
  stack.pop();
  return stack;
}

export function insertItemAtBottom(stack, newCard) {
  stack.unshift(newCard);
  return stack;
}

export function removeItemAtBottom(stack) {
  stack.shift();
  return stack;
}

export function checkSizeOfStack(stack, stackSize) {
  return stack.length === stackSize;
}
