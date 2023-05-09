const people = {
  name: "samanta",
  lastName: "tessmer",
  height: 1.67,
  age: 21,

  older: function (years) {
    this.age += years;
  },
};

console.log(typeof people);

console.log(people);

people.older(3);

console.log(people.age);
