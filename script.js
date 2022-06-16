// Assignment code here
var enter;
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var character;
var lowercase;
var uppercase;

character = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
letter = ['a', 'b','c','d','e','f','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
space = [];

var choices;

var toUpper = function(x) {
  return x.toUpperCase();
};

letter2 = letter.map(toUpper);

var get = document.querySelector("#generate")

get.addEventListener("click", function () {
  p = generatePassword();
  document.getElementById("password").placeholder = p;
});

function generatePassword() {
  enter = parseInt(prompt("Choose between 8 and 128 characters for your password."));

  if (!enter) {
    alert('This needs a value');
  }
  else if (enter < 8 || enter > 128) {

    enter = parseInt(prompt('Must choose between 8 and 128 characters.'));
    
  }
  else {
    number = confirm('Will this contain numbers?');
    character = confirm('Will this contain special characters?');
    uppercase = confirm('Will this contain uppercase letters?');
    lowercase = confirm('Will this contain lowercase numbers?');
  };

  if (!character && !number && !uppercase && !lowercase) {
    choices = alert('Must choose a criteria');
  }
  else if (character && number && uppercase && lowercase) {
    choices = character.concat(number, letter, letter2);

  }

  else if (character && number && uppercase) {
    choices = character.concat(number, letter2);
  }

  else if (character && number && lowercase) {
    choices = character.concat(number, letter);
  }

  else if (character && lowercase && uppercase) {
    choices = character.concat(letter, letter2);
  }

  else if (number && lowercase && uppercase) {
    choices = number.concat(letter, letter2);
  }

  else if (character && number) {
    choices = character.concat(number);
  }

  else if (character && lowercase) {
    choices = character.concat(letter);
  }

  else if (character && uppercase) {
    choices = character.concat(letter2);
  }

  else if (number && lowercase) {
    choices = letter.concat(number);
  }

  else if (lowercase && uppercase) {
    choices = letter.concat(letter2);
  }

  else if (number && uppercase) {
    choices = number.concat(letter2);
  }

  else if (character) {
    choices = character;
  }

  else if (number) {
    choices = number;
  }

  else if (lowercase) {
    choices = letter;
  }

  else if (uppercase) {
    choices = space.concat(letter2)
  };

  var password = [];

  for (var i = 0; i < enter; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickchoices);

  }

  var p = password.join('');
  UserInput(p);
  return p;

}

function UserInput(p) {
  document.getElementById('password').textcontent = p;

}
