const deepcopy = (x) => JSON.parse(JSON.stringify(x));

export class GradeSchool {
  constructor() {
    this.db = {};
  }

  roster() {
    return deepcopy(this.db);
  }

  grade(grade) {
    return deepcopy(this.db[grade] || []);
  }

  add(student, grade) {
    for (let g in this.db) {
      let s = this.db[g].indexOf(student);
      if (s > -1) {
        this.db[g].splice(s, 1);
      }
    }
    if (!this.db[grade]) this.db[grade] = [student];
    else {
      this.db[grade].push(student);
      this.db[grade].sort();
    }
  }
}
