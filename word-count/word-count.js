export const countWords = (subtitle) => {
  const wordCounts = {};

  const regex = /\b[a-zA-Z0-9]+(?:'[a-zA-Z0-9]+)?\b/g; // incluye contracciones como that's, you're

  const matches = subtitle.toLowerCase().match(regex);
  if (matches) {
    for (const word of matches) {
      wordCounts[word] = (wordCounts[word] || 0) + 1;
    }
  }

  return wordCounts;
};
