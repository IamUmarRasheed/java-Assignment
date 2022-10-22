function make_model(manufacturer, Model, ...adpara) {
  return { manufacturername: manufacturer, Modelname: Model, adpara };
}
let fearureofcar1 = { color: "red", ARAI_Mileage: 11.29 };
let fearureofcar2 = { color: "Black", ARAI_Mileage: 13.88 };
let fearureofcar3 = { color: "White", ARAI_Mileage: 14.37 };
console.log("Toyota", "Camry", fearureofcar1);
console.log("Audi", "A7 Sportback", fearureofcar2);
console.log("BMW", "Z4 Roadster", fearureofcar3);
