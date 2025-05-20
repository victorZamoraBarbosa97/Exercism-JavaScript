export function countNucleotides(strand = "") {
  strand = strand.toUpperCase();
  const counts = {
    A: 0,
    C: 0,
    G: 0,
    T: 0,
  };

  for (let char of strand) {
    if (!(char in counts)) {
      throw new Error("Invalid nucleotide in strand");
    }
    counts[char]++;
  }

  return `${counts.A} ${counts.C} ${counts.G} ${counts.T}`;
}
