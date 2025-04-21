export function translate(word: string) {
  const vowels = ["a", "e", "i", "o", "u"];
  const clusters = ["ch", "qu", "th"];
  const triClusters = ["squ", "thr", "sch"];

  const wordsArr = word.split(" ");
  let returnedValue = "";
  for (word of wordsArr) {
    if (triClusters.find((cluster) => word.substr(0, 3) === cluster)) {
      const prefix = word.substr(0, 3);
      word = word.substr(3) + prefix + "ay";
      returnedValue += word;
    } else if (clusters.find((cluster) => word.substr(0, 2) === cluster)) {
      const prefix = word.substr(0, 2);
      word = word.substr(2) + prefix + "ay";
      returnedValue += word;
    } else if (vowels.find((vowel) => word.charAt(0) === vowel)) {
      word += "ay";
      returnedValue += word;
    } else {
      const firstLetter = word.charAt(0);
      word = word.substr(1) + firstLetter + "ay";
      returnedValue += word;
    }
    returnedValue += " ";
  }
  return returnedValue.trim();
}
