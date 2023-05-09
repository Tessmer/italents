const json = '{ "name": "Samanta", "age": 21, "teacher": true}';

/* transforma string em json */
const obj = JSON.parse(json);
console.log(obj);
console.log(obj.name);

const people = {
  name: "Leonardo",
  lastName: "Orabona",
  age: 25,
  height: 1.88,
  teacher: true,

  old: function () {
    this.idade += 1;
  },
};

console.log(people);

/* transforma json em string; métodos (funções) não são registrados, apenas dados */
const json2 = JSON.stringify(people);
console.log(json2);
