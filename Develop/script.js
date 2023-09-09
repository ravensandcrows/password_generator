// Assignment Code
var generateBtn = document.querySelector("#generate");





// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);

//reads users input
const btn = document.querySelector('#generate');
btn.addEventListener('click', function() {
    var c1 = document.querySelectorAll('input[name="requirement"]:checked');
    var values = [];
    c1.forEach((checkbox) => {
        values.push(checkbox.value);
    });

    //store user input
    var user_input = [];

    //sets up for password combos
    var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var number = ["0","1","2","3","4","5","6","7","8","9"];
    var special_character = ["!","@","#","$","%","^","&","*","?"];

    //first requirement checker
    if (values[0] === 'lowercase'){
        var firstvalue = user_input.concat(lowercase);
        document.getElementById("password").placeholder = "New text!";
    }
    else if(values[0] === 'uppercase'){
        var firstvalue = user_input.concat(uppercase);
        document.getElementById("password").placeholder = "New text!";
    }
    else if(values[0]==='special character'){
        var firstvalue = user_input.concat(lowercase);
        document.getElementById("password").placeholder = "New text!";
    }

    //second requirment checker
    if(values[1]==='uppercase'){
      var secondvalue = firstvalue.concat(uppercase);
    }
    else if(values[1]==='lowercase'){
      var secondvalue = firstvalue.concat(lowercase);
    }
    else if(values[1]==='special character'){
      var secondvalue = firstvalue.concat(special_character)
    }

    //third requirment
    if(values[2]==='special character'){
      var thirdvalue = secondvalue.concat(special_character)
    }
    else if(values[2]==='lowercase'){
      var thirdvalue = secondvalue.concat(lowercase);
    }
    else if (values[2]==='uppercase'){
      var thirdvalue = secondvalue.concat(uppercase);
    }


    // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }

}); 


