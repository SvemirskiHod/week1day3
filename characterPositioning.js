
var input = process.argv.slice(2).toString().toLowerCase();

function displayIndices (input){

  var noSpaces = input.split(",").join("");
  var object = {};

  for (var i = 0 ; i < noSpaces.length; i++){

    if (object.hasOwnProperty(noSpaces[i])) {
      object[noSpaces[i]].push(i);
    }
    else {
      object[noSpaces[i]] = [i];
    }
  }

  return object;

}

console.log(displayIndices(input));



