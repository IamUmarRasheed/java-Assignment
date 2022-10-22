let alien_colors = ["green","yellow","red"];
console.log(alien_colors.length)
for (var i = 0; i < alien_colors.length; i++)
  if (alien_colors[i] == "green") {
    console.log("the player just earned 5 points for shooting alian");
  } else if (alien_colors[i] =="yellow") {
    console.log("the player just earned 10 points for shooting alian");
  } else {
    console.log("the player just earned 15 points for shooting alian" )
  }