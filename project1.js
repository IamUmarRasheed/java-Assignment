let weight = prompt("what is your weight in pound ");
let weight2 = weight / 2.2046;
let height = prompt("what is your height in inch ");
let height1 = height * 2.54*0.01;
console.log(weight + " pounds is equal to " + " " + weight2 + "kg");
console.log(height + " inch is equal to " + " " + height1 + "cm");
let BMI = weight2 / (height1*height1);
console.log(BMI);
