export class GradeSchool {
    private db: Record<number, string[]> = {};
  
    roster(): Record<number, string[]> {
      return JSON.parse(JSON.stringify(this.db));
    }
  
    grade(grade: number): string[] {
      return [...(this.db[grade] || [])];
    }
  
    add(student: string, grade: number): void {
        for (const g in this.db) {
        const idx = this.db[+g].indexOf(student);
        if (idx !== -1) {
          this.db[+g].splice(idx, 1);
        }
      }
  
      if (!this.db[grade]) this.db[grade] = [];
      this.db[grade].push(student);
      this.db[grade].sort();
    }
  }
  