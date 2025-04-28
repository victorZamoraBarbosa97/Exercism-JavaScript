const sharpTonics = [
  "C",
  "G",
  "D",
  "A",
  "E",
  "B",
  "F#",
  "a",
  "e",
  "b",
  "f#",
  "c#",
  "g#",
  "d#",
];
const flatTonics = [
  "F",
  "Bb",
  "Eb",
  "Ab",
  "Db",
  "Gb",
  "d",
  "g",
  "c",
  "f",
  "bb",
  "eb",
];

const sharpScale = [
  "A",
  "A#",
  "B",
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
];
const flatScale = [
  "A",
  "Bb",
  "B",
  "C",
  "Db",
  "D",
  "Eb",
  "E",
  "F",
  "Gb",
  "G",
  "Ab",
];

const normalizeTonic = (tonic) => {
  if (!tonic) return "";
  if (tonic.length === 1) {
    // una sola letra
    if (tonic === tonic.toLowerCase()) {
      return tonic; // menor (no tocar, minúscula)
    } else {
      return tonic.toUpperCase(); // mayor
    }
  }
  // Si es más larga (como F# o bb), mayúscula primer letra, respetar #
  return tonic[0].toUpperCase() + tonic.slice(1);
};

const selectScale = (tonic) => {
  if (sharpTonics.includes(tonic)) return sharpScale;
  if (flatTonics.includes(tonic)) return flatScale;
  throw new Error(`Unknown tonic: ${tonic}`);
};

export class Scale {
  constructor(tonic) {
    this.tonic = normalizeTonic(tonic);
    this.scale = selectScale(tonic);
  }

  chromatic() {
    const startIndex = this.scale.findIndex(
      (note) => note.toUpperCase() === this.tonic.toUpperCase()
    );
    return [
      ...this.scale.slice(startIndex),
      ...this.scale.slice(0, startIndex),
    ];
  }

  interval(intervals = "") {
    const result = [];
    const fullScale = this.chromatic();
    let index = 0;
    result.push(fullScale[index]);

    for (const interval of intervals) {
      if (interval === "m") {
        index += 1;
      } else if (interval === "M") {
        index += 2;
      } else if (interval === "A") {
        index += 3;
      } else {
        throw new Error(`Unknown interval: ${interval}`);
      }
      result.push(fullScale[index % fullScale.length]);
    }
    return result;
  }
}
