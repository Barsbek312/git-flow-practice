class Subject {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

class Student {
    constructor(name, surname, group, school, grade) {
        this.name = name;
        this.surname = surname;
        this.group = group;
        this.school = school;
        this.grade = grade;
    }


    getFullInfo() {
        return `${this.name} ${this.surname} учится в ${this.grade}${this.group} в ${this.school} школе`;
    }
}

class Diary {
    constructor(student) {
        this.student = student;
        this.subjects = [];
        this.grades = [];
    }

    addSubject(subject) {
        this.subjects.push(subject);
    }

    removeSubject(subjectName) {
        this.subjects = this.subjects.filter(sub => sub.getName() !== subjectName);
    }

    addGrade(subject, grade, date) {
        this.grades.push({subject: subject.getName(), grade, date});
    }

    getGrades(subjectName) {
        return this.grades.filter(grade => grade.subject === subjectName);
    }
}


let math = new Subject("Math");
let baha = new Student("Baha", "Kirkorov", "m3", "70", 9);
let diaryOfBaha = new Diary(baha);

diaryOfBaha.addSubject(math);
diaryOfBaha.addGrade(math, 5, "14/03/2023");

console.log(diaryOfBaha.getGrades("Math")); 
console.log(baha.getFullInfo())

