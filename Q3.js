var a= "umar"
console.log(a.toUpperCase())
console.log(a.toLowerCase())

function titleCase(str) {
  var sentence = str.toLowerCase().split(" ");
  console.log(sentence);
  for(var i = 0; i< sentence.length; i++){
  sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  }
  console.log(sentence);
  console.log(sentence.join(" "));
  return sentence;
  }
  titleCase("umar");