export function twoSum(arr1, arr2) {
  const num1 = Number(arr1.join(""));
  const num2 = Number(arr2.join(""));
  return num1 + num2;
}

export function luckyNumber(value) {
  const str = value.toString();
  return str === str.split("").reverse().join("");
}

export function errorMessage(input) {
  if (input === "" || input === null || input === undefined) {
    return "Required field";
  }

  const number = Number(input);
  return number === 0 || isNaN(number) ? "Must be a number besides 0" : "";
}
