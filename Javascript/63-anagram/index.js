export const findAnagrams = (target, candidates) => {
  const normalize = (word) => word.toLowerCase().split("").sort().join("");
  const normalizedTarget = normalize(target);

  return candidates.filter((candidate) => {
    const lowerCandidate = candidate.toLowerCase();

    if (lowerCandidate === target.toLowerCase()) return false;

    return normalize(candidate) === normalizedTarget;
  });
};