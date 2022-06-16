var enter;
var character;
var lowercase;
var uppercase;
var numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

characterArr = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
letter = ['a', 'b','c','d','e','f','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

const toUpper = function(x) {
  return x.toUpperCase();
};

letter2 = letter.map(toUpper);

const get = document.querySelector("#generate")

get.addEventListener("click", function () {
  p = generatePassword();
  document.getElementById("password").value = p;
});

function generatePassword() {
  var characters = []
  enter = parseInt(prompt("Choose between 8 and 128 characters for your password."));

  if (!enter) {
    alert('Needs value');
  }
  else if (enter < 8 || enter > 128) {

    enter = parseInt(prompt('Must choose between 8 and 128 characters.'));
    
  }
  else {
    number = confirm('Will your password have numbers?');
    character = confirm('Will your password have special characters?');
    uppercase = confirm('Will your password have uppercase letters?');
    lowercase = confirm('Will your password have lowercase numbers?');
  };

  if (!character && !number && !uppercase && !lowercase) {
  alert('Must choose a criteria');
  }
   if(number){
     characters = characters.concat(numberArr)
   }
   if(character){
    characters = characters.concat(characterArr)
  }
  if(uppercase){
    characters = characters.concat(letter2)
  }
  if(lowercase){
    characters = characters.concat(letter)
  }

  console.log(characters)

  const password = [];

  for (var i = 0; i < enter; i++) {
    var pickCriteria = characters[Math.floor(Math.random() * characters.length)];
    password.push(pickCriteria);

  }

  var p = password.join('');
  return p;

}
