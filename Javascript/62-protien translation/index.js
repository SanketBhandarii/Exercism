const CODON_TO_PROTEIN = {
  'AUG': 'Methionine',
  'UUU': 'Phenylalanine', 'UUC': 'Phenylalanine',
  'UUA': 'Leucine', 'UUG': 'Leucine',
  'UCU': 'Serine', 'UCC': 'Serine', 'UCA': 'Serine', 'UCG': 'Serine',
  'UAU': 'Tyrosine', 'UAC': 'Tyrosine',
  'UGU': 'Cysteine', 'UGC': 'Cysteine',
  'UGG': 'Tryptophan',
  'UAA': 'STOP', 'UAG': 'STOP', 'UGA': 'STOP'
};

export function translate(rna = '') {
  const proteins = [];

  for (let i = 0; i < rna.length; i += 3) {
    const codon = rna.slice(i, i + 3);
    const protein = CODON_TO_PROTEIN[codon];

    if (protein === 'STOP') break;
    if (!protein) throw new Error('Invalid codon');

    proteins.push(protein);
  }

  return proteins;
}
