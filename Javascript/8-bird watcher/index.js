export function totalBirdCount(birdsPerDay) {
  let total = 0;
  for (let i = 0; i < birdsPerDay.length; i++) {
    total += birdsPerDay[i];
  }
  return total;
}

export function birdsInWeek(birdsPerDay, week) {
  let total = 0;
  const start = (week - 1) * 7;
  const end = start + 7;
  for (let i = start; i < end; i++) {
    total += birdsPerDay[i];
  }
  return total;
}

export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i += 2) {
    birdsPerDay[i] += 1;
  }
  return birdsPerDay;
}
