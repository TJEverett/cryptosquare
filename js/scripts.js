var arrayCharacters = [];
var arrayLetters = [];
var arrayBox = [];







var encrypter = function(text){
  text = text.toLowerCase();
  arrayCharacters = text.split('');
  console.log(arrayCharacters);
}

$(document).ready(function(){
  $("form#toEncrypt").submit(function(event){
    event.preventDefault();
    var plainText = $("#plainText").val();
  });
});