export function cookingStatus(timer) {
  if (timer === 0) return "Lasagna is done.";
  if (timer === undefined) return "You forgot to set the timer.";
  return "Not done, please wait.";
}

export function preparationTime(layers, avg = 2) {
  return layers.length * avg;
}

export function quantities(layers) {
  let noodles = 0;
  let sauce = 0;
  for (let layer of layers) {
    if (layer === "noodles") noodles += 50;
    if (layer === "sauce") sauce += 0.2;
  }
  return { noodles, sauce };
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1]);
}

export function scaleRecipe(recipe, portions) {
  const scaled = {};
  for (let key in recipe) {
    scaled[key] = recipe[key] * (portions / 2);
  }
  return scaled;
}
