var my_magician = ["jony", "robert", "albert", "hunt"];
var copy_magician = my_magician.slice();
function make_great(array) {
  for (i = 0; i < array.length; i++) console.log("great magician " + array[i]);
}
function show_magician(array) {
  for (i = 0; i < array.length; i++) {
    console.log("magician name " + array[i]);
  }
}
console.log("copy array ");
make_great(copy_magician);
console.log("original array ");
show_magician(my_magician);
