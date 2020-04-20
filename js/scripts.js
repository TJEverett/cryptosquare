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
}

$(document).ready(function(){
  $("form#toEncrypt").submit(function(event){
    event.preventDefault();
    var plainText = $("#plainText").val();
  });
});