const jsonEntry =
  '{"name": "Samanta", "age": 25, "teacher": true, "classes": [10, 12, 34, 42], "address": {"street": "alameda teste", "number": 123, "district": "centro", "CEP": "123.123-12"}}';

const obj = JSON.parse(jsonEntry);
console.log(obj);

obj.classes.map(function (value, position) {
  console.log(`posição: ${position}, valor: ${value}`);
});

obj.name += " Tessmer";
obj.salary = 2000;
console.log(obj);

/* manda de volta as informações */
const jsonString = JSON.stringify(obj);
console.log(jsonString);
