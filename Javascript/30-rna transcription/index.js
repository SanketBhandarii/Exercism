export function toRna(dna) {
  const transcription = {
    G: "C",
    C: "G",
    T: "A",
    A: "U",
  };

  return [...dna].map((nucleotide) => transcription[nucleotide]).join("");
}
