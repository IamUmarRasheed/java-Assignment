var my_magician = ["jony", "robert", "albert", "hunt"];
// we dont pass direct value in paramet6er
function show_magicians(arr) {
  for (var i = 0; i < arr.length; i++) console.log(arr[i]);
}

function make_great(modifylist) {
  for (i = 0; i < modifylist.length; i++)
    console.log("the Great magician" + " " + modifylist[i]);
}
make_great(my_magician);
show_magicians(my_magician);
