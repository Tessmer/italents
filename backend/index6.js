class People {
  constructor(name, age, height, gender) {
    (this.name = name),
      (this.age = age),
      (this.height = height),
      (this.gender = gender);
  }

  infos = function () {
    return this.name + " " + this.age;
  };
}

class Teacher extends People {
  constructor(name, age, height, gender, salary, classes) {
    /* super: preenche as informações que vem da classe pai */
    super(name, age, height, gender);
    /* adiciona infos novas */
    (this.salary = salary), (this.classes = classes);
  }

  /* polimorfismo: utiliza o mesmo método, mas passa características diferentes */
  infos = function () {
    return this.name + " " + this.classes + " " + this.salary;
  };
}

class Student extends People {
  constructor(name, age, height, gender, team, RM) {
    super(name, age, height, gender);
    (this.team = team), (this.RM = RM);
  }

  infos = function () {
    return this.name + " " + this.age + " " + this.RM;
  };
}

const prof = new Teacher("samanta", 21, 1.68, "F", 1000, [12, 14, 16]);
console.log(prof);
console.log(prof.infos());

const student = new Student("alice", 15, 1.75, "F", 12, 42564);
console.log(student);
console.log(student.infos());
