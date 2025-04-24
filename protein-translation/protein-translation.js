const mapping = {
  Methionine: ["AUG"],
  Phenylalanine: ["UUU", "UUC"],
  Leucine: ["UUA", "UUG"],
  Serine: ["UCU", "UCC", "UCA", "UCG"],
  Tyrosine: ["UAU", "UAC"],
  Cysteine: ["UGU", "UGC"],
  Tryptophan: ["UGG"],
  STOP: ["UAA", "UAG", "UGA"],
};

// devuelve el nombre del aminoácido o undefined si no lo encuentra
const findAminoAcid = (codon) => {
  return Object.entries(mapping).find(([aminoAcid, codons]) =>
    codons.includes(codon)
  )?.[0];
};

export const translate = (secuencia = "") => {
  if (secuencia === "") return [];
  else {
    let retorno = [];
    for (let i = 0; i < secuencia.length; i += 3) {
      let aminoAcid = findAminoAcid(secuencia.slice(i, i + 3));
      if (aminoAcid === "STOP") return retorno;
      else if (aminoAcid) {
        retorno.push(aminoAcid);
      } else throw new Error("Invalid codon");
    }
    return retorno;
  }
};
