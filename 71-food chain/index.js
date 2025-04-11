const Animals = [
    {},
    { name: "fly", line: "" },
    {
      name: "spider",
      line: "It wriggled and jiggled and tickled inside her.\n",
    },
    { name: "bird", line: "How absurd to swallow a bird!\n" },
    { name: "cat", line: "Imagine that, to swallow a cat!\n" },
    { name: "dog", line: "What a hog, to swallow a dog!\n" },
    { name: "goat", line: "Just opened her throat and swallowed a goat!\n" },
    { name: "cow", line: "I don't know how she swallowed a cow!\n" },
    { name: "horse", line: "She's dead, of course!\n" },
  ],
  firstLine = "I know an old lady who swallowed a <animal>.\n",
  lastLine = "I don't know why she swallowed the fly. Perhaps she'll die.\n",
  midLine = "She swallowed the <animal> to catch the <animal-1>",
  birdLine = " that wriggled and jiggled and tickled inside her.\n";

export class Song {
  constructor() {}

  verse(no) {
    const { name, line } = Animals[no];
    let v = firstLine.replace("<animal>", name) + line;
    if (name === "horse") {
      return v;
    }

    for (let i = no; i > 1; i--) {
      v += midLine
        .replace("<animal>", Animals[i].name)
        .replace("<animal-1>", Animals[i - 1].name);
      v += Animals[i].name === "bird" ? birdLine : ".\n";
    }
    v += lastLine;
    return v;
  }

  verses(start = 1, end = 8) {
    let v = "";
    for (let i = start; i <= end; i++) {
      v += this.verse(i) + "\n";
    }
    return v;
  }
}
