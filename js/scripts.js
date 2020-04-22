var encrypter = function(text){
  var arrayCharacters = [];
  var arrayLetters = [];
  var arrayBox = [];
  var arrayEncrypted = [];
  
  text = text.toLowerCase();
  arrayCharacters = text.split('');

  arrayCharacters.forEach(function(character) {
    if (character >= "a" && character <= "z") {
      arrayLetters.push(character);
    };
  });

  var root = Math.ceil(Math.sqrt(arrayLetters.length));
  for (var index = 1; index <= root; index += 1){
    arrayBox.push([]);
  };

  var counter = 0;
  for(var y = 0; y < root; y += 1){
    for(var x = 0; x < arrayBox.length; x += 1){
      if(counter < arrayLetters.length){
        arrayBox[x][y] = arrayLetters[counter];
        counter += 1;
      };
    };
  };

  for(var x = 0; x < arrayBox.length; x += 1){
    for(var y = 0; y < arrayBox[x].length; y += 1){
      arrayEncrypted.push(arrayBox[x][y]);
    };
  };

  for(var index = 5; index < arrayEncrypted.length; index += 6){
    arrayEncrypted.splice(index, 0, " ");
  };

  return arrayEncrypted.join("");
};

$(document).ready(function(){
  $("form#toEncrypt").submit(function(event){
    event.preventDefault();
    var plainText = $("#plainText").val();
    var encryptedText = encrypter(plainText);
    $("#encrypted").text(encryptedText);
    $("#response").show();
  });
});