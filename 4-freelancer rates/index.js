export function dayRate(hourlyRate) {
  return hourlyRate * 8;
}

export function daysInBudget(fixedBudget, hourlyRate) {
  return Math.floor(fixedBudget / dayRate(hourlyRate));
}

export function priceWithMonthlyDiscount(hourlyRate, totalDays, discount) {
  const fullMonths = Math.floor(totalDays / 22);
  const daysLeft = totalDays % 22;
  const dailyRate = dayRate(hourlyRate);

  return Math.ceil(
    fullMonths * 22 * dailyRate * (1 - discount) + daysLeft * dailyRate
  );
}
