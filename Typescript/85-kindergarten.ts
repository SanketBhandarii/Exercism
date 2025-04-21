const DEFAULT_STUDENTS: Student[] = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve",
  "Fred",
  "Ginny",
  "Harriet",
  "Ileana",
  "Joseph",
  "Kincaid",
  "Larry",
];

const PLANT_CODES = {
  G: "grass",
  V: "violets",
  R: "radishes",
  C: "clover",
} as const;

type Student = string;
type PlantCode = keyof typeof PLANT_CODES;
type Plant = (typeof PLANT_CODES)[PlantCode];
type Plants = Plant[];
type Pots = Plants[];

export class Garden {
  private lines: string[];
  private studentsInOrder: string[];

  constructor(diagram: string, students = DEFAULT_STUDENTS) {
    this.lines = diagram.split("\n");
    this.studentsInOrder = students.sort();
  }

  public plants(student: Student): Plants {
    const idx = this.studentsInOrder.indexOf(student);
    return [
      ...this.lines[0].slice(idx * 2, (idx + 1) * 2),
      ...this.lines[1].slice(idx * 2, (idx + 1) * 2),
    ].map((letter) => PLANT_CODES[letter as PlantCode]);
  }
}
