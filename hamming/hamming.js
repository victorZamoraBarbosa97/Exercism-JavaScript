export const compute = (strand_A, strand_B) => {
  if (strand_A.length != strand_B.length)
    throw new Error("strands must be of equal length");
  let count = 0;
  for (let i = 0; i < strand_A.length; i++) {
    if (strand_A[i] != strand_B[i]) count++;
  }
  return count;
};
