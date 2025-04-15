export function timeToMixJuice(name) {
  switch (name) {
    case "Pure Strawberry Joy":
      return 0.5;
    case "Energizer":
    case "Green Garden":
      return 1.5;
    case "Tropical Island":
      return 3;
    case "All or Nothing":
      return 5;
    default:
      return 2.5;
  }
}

export function limesToCut(wedgesNeeded, limes) {
  if (wedgesNeeded === 0) return 0;

  let wedgesCut = 0;
  let limesUsed = 0;

  for (const lime of limes) {
    if (wedgesCut >= wedgesNeeded) break;

    limesUsed++;

    switch (lime) {
      case "small":
        wedgesCut += 6;
        break;
      case "medium":
        wedgesCut += 8;
        break;
      case "large":
        wedgesCut += 10;
        break;
    }
  }

  return limesUsed;
}

export function remainingOrders(timeLeft, orders) {
  let remainingTime = timeLeft;
  let i = 0;

  while (i < orders.length && remainingTime > 0) {
    remainingTime -= timeToMixJuice(orders[i]);
    i++;
  }

  return orders.slice(i);
}
