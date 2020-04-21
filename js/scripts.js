var arrayCharacters = [];
var arrayLetters = [];
var arrayBox = [];







var encrypter = function(text){
  text = text.toLowerCase();
  arrayCharacters = text.split('');
  console.log(arrayCharacters);

  arrayCharacters.forEach(function(character) {
    if (character >= "a" && character <= "z") {
      arrayLetters.push(character);
    };
  });
  console.log(arrayLetters);

  var root = Math.ceil(Math.sqrt(arrayLetters.length));
  console.log(root);

  for (var index = 1; index <= root; index += 1){
    arrayBox.push([]);
  };
  console.log(arrayBox);

  var counter = 0;
  for(var y = 0; y < root; y += 1){
    for(var x = 0; x < arrayBox.length; x += 1){
      if(counter < arrayLetters.length){
        arrayBox[x][y] = arrayLetters[counter];
        counter += 1;
      };
    };
  };
  console.log(arrayBox);
};

$(document).ready(function(){
  $("form#toEncrypt").submit(function(event){
    event.preventDefault();
    var plainText = $("#plainText").val();
  });
});