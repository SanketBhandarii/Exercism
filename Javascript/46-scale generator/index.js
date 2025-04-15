const SHARP_SCALE = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const FLAT_SCALE  = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];

const USE_FLATS = [
  "F", "Bb", "Eb", "Ab", "Db", "Gb",
  "d", "g", "c", "f", "bb", "eb"
];

function normalizeTonic(tonic) {
  return tonic[0].toUpperCase() + (tonic[1] ? tonic[1] : '');
}

function rotateScale(scale, tonic) {
  const idx = scale.findIndex(note => note.toLowerCase() === tonic.toLowerCase());
  return [...scale.slice(idx), ...scale.slice(0, idx)];
}

function getSteps(intervals) {
  return intervals.split('').map(i => {
    if (i === 'm') return 1;
    if (i === 'M') return 2;
    if (i === 'A') return 3;
    throw new Error('Invalid interval: ' + i);
  });
}

export class Scale {
  constructor(tonic) {
    this.tonic = normalizeTonic(tonic);
    const useFlats = USE_FLATS.includes(tonic);
    const baseScale = useFlats ? FLAT_SCALE : SHARP_SCALE;
    this.scale = rotateScale(baseScale, this.tonic);
  }

  chromatic() {
    return this.scale.slice(0, 12);
  }

  interval(intervals) {
    const notes = [this.scale[0]];
    let index = 0;
    for (const step of getSteps(intervals)) {
      index = (index + step) % 12;
      notes.push(this.scale[index]);
    }
    return notes;
  }
}
