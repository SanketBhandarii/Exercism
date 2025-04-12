export function countNucleotides(strand) {
  if (/[^ACGT]/.test(strand)) throw new Error("Invalid nucleotide in strand");

  const counts = { A: 0, C: 0, G: 0, T: 0 };

  for (const nucleotide of strand) {
    counts[nucleotide]++;
  }

  return `${counts.A} ${counts.C} ${counts.G} ${counts.T}`;
}
