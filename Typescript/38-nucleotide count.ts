export function nucleotideCounts(sequence: string): Record<string, number> {
  const validNucleotides = ["A", "C", "G", "T"];
  const counts: Record<string, number> = { A: 0, C: 0, G: 0, T: 0 };

  for (const char of sequence) {
    if (!validNucleotides.includes(char)) {
      throw new Error("Invalid nucleotide in strand");
    }
    counts[char]++;
  }

  return counts;
}
