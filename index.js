class Subject {
    constructor(subject) {
        this.subject = [subject];
    }
}

class Student {
    constructor({name, surname, group, school, grade}) {
        this.name = name;
        this.surname = surname;
        this.group = group;
        this.school = school;
        this.class = grade;
    }
}

class Diary {
    constructor(diary, student = null, subject) {
        this.diary = diary;
        this.student = student;
        this.subject = subject;
        this.grade = [];
    }

    addSubject(subject) {
        this.subject.subject.push(subject);
    }

    deleteSubject(subject) {
        this.subject = this.subject.subject.filter(item => item != subject);
    }

    addGrade({subject, grade, date}) {
        this.grade.push({subject, grade, date});
    }
}

let math = new Subject("Math");
let Baha = new Student({name: "Baha", surname: "Kirkorov", group: "m3", school: "70", grade: 9});
let diaryOfBaha = new Diary("Дневник 1", Baha, math);
diaryOfBaha.addSubject("chemistry");
diaryOfBaha.addGrade({subject: "chemistry", grade: 5, date: "14/03/2023"});
console.log(diaryOfBaha);