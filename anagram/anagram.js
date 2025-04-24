const normalize = (word) => word.toLowerCase().split("").sort().join("");

export const findAnagrams = (target_word = "", candidates = []) => {
  const normalizedTarget = normalize(target_word);
  return candidates.filter((word) => {
    const normalizedCandidate = normalize(word);
    return (
      word.toLowerCase() !== target_word.toLowerCase() &&
      normalizedCandidate === normalizedTarget
    );
  });
};
