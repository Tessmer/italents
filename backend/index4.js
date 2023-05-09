function Car(model, year, brand, fuels) {
  (this.model = model),
    (this.year = year),
    (this.brand = brand),
    (this.fuels = fuels);
}

let cars = [];
cars[0] = new Car("fusca", "1976", "volkswagen", "gasolina");
cars[1] = new Car("uno", "2010", "fiat", "flex");

console.log(cars);
