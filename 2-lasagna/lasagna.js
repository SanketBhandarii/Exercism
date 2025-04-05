export const EXPECTED_MINUTES_IN_OVEN = 40;

export function remainingMinutesInOven(mins) {
  return EXPECTED_MINUTES_IN_OVEN - mins;
}

export function preparationTimeInMinutes(noOfLayers) {
  return noOfLayers * 2;
}

export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven;
}
