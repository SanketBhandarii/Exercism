export function toRna(dna: string): string {
  const transcriptionMap: { [key: string]: string } = {
    G: "C",
    C: "G",
    T: "A",
    A: "U",
  };

  for (const nucleotide of dna) {
    if (!(nucleotide in transcriptionMap)) {
      throw new Error("Invalid input DNA.");
    }
  }

  return [...dna].map((nucleotide) => transcriptionMap[nucleotide]).join("");
}
