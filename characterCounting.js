
var input = process.argv.slice(2).toString().toLowerCase();

function countLetters (input){

  var noSpaces = input.split(",").join("");
  var object = {};

  for (var i = 0 ; i < noSpaces.length; i++){

    if (object.hasOwnProperty(noSpaces[i])) {
      object[noSpaces[i]] += 1;
    }
    else {
      object[noSpaces[i]] = 1;
    }
  }

  return object;

}

console.log(countLetters(input));



