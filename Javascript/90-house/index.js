const lastLine = "that lay in the house that Jack built.",
  words = [
    { verb: "ate", noun: "malt" },
    { verb: "killed", noun: "rat" },
    { verb: "worried", noun: "cat" },
    { verb: "tossed", noun: "dog" },
    { verb: "milked", noun: "cow with the crumpled horn" },
    { verb: "kissed", noun: "maiden all forlorn" },
    { verb: "married", noun: "man all tattered and torn" },
    { verb: "woke", noun: "priest all shaven and shorn" },
    { verb: "kept", noun: "rooster that crowed in the morn" },
    { verb: "belonged to", noun: "farmer sowing his corn" },
    { noun: "horse and the hound and the horn" },
  ];

export class House {
  static verse(n) {
    if (n === 1) {
      return ["This is the house that Jack built."];
    }

    let firstLine = "This is the <noun>",
      midLine = "that <verb> the <noun>",
      phrase = "";

    phrase = [firstLine.replace("<noun>", words[n - 2].noun)];
    for (let i = 2; i < n; i++) {
      phrase.push(
        midLine
          .replace("<verb>", words[n - i - 1].verb)
          .replace("<noun>", words[n - i - 1].noun)
      );
    }
    phrase.push(lastLine);
    return phrase;
  }

  static verses(start, end) {
    let phrase = House.verse(start);
    for (let i = start + 1; i <= end; i++) {
      phrase = phrase.concat([""], House.verse(i));
    }
    return phrase;
  }
}
