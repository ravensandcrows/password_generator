// Assignment Code
var generateBtn = document.querySelector("#generate");


//reads users input
const btn = document.querySelector('#generate');
btn.addEventListener('click', function() {
    var checkboxes = document.querySelectorAll('input[name="requirement"]:checked');
    var numeric = document.getElementById("c5").value;
    var values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });

    //store user input
    var user_input = [];

    //sets up for password combos
    var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var number = ["0","1","2","3","4","5","6","7","8","9"];
    var special_character = ["!","@","#","$","%","^","&","*","?"];

    //prevents user from putting null answer in for numbers
    const numInputs = document.querySelectorAll('input[type=number]')
      numInputs.forEach(function(input) {
        input.addEventListener('change', function(e) {
          if (e.target.value == '') {
            e.target.value = 0
          }
        })
      })

    //makes sure that a number is chosen
    if (numeric < 8 || numeric > 128){
      alert("Number must range from 8-128")
    }
    else{
      //first requirement checker
      if (values[0] === 'lowercase'){
          var firstvalue = user_input.concat(lowercase);
      }
      else if(values[0] === 'uppercase'){
          var firstvalue = user_input.concat(uppercase);
      }
      else if(values[0]==='special character'){
          var firstvalue = user_input.concat(special_character);
      }
      else if(values[0]==='numbers'){
        var firstvalue = user_input.concat(number);
      }
      else{
        alert("Please check at least one box! ")
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
     else if(values[1]==='numbers'){
       var secondvalue = firstvalue.concat(number);
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
      else if(values[2]==='numbers'){
        var thirdvalue = secondvalue.concat(number);
      }

      //fourth requirment option
      if(values[3]==='numbers'){
        var fourthvalue = thirdvalue.concat(number);
      }
      else if(values[3]==='special character'){
        var fourthvalue = thirdvalue.concat(special_character)
      }
      else if (values[3]==='uppercase'){
        var fourthvalue = thirdvalue.concat(uppercase);
      }
      else if(values[3]==='lowercase'){
        var fourthvalue = thirdvalue.concat(lowercase);
      }

     var final_password = [];

     //turns array to string to be pushed into html 
     function array_to_string(){
      final_password = final_password.toString();
      final_password=final_password.replace(/\,/g,'');
      document.getElementById("password").placeholder = final_password;
     }

      //takes users requirments into password array
      if (values.length === 1){
        for(var i = 0; i< numeric; i++) {
          var random_password = (firstvalue[(Math.floor(Math.random() * firstvalue.length))]);
          final_password.push(random_password);
        }
        array_to_string()
      }
      else if (values.length === 2){
        for(var i = 0; i< numeric; i++) {
          var random_password = (secondvalue[(Math.floor(Math.random() * secondvalue.length))]);
          final_password.push(random_password);
        }
        array_to_string()
      }
      else if (values.length === 3){
        for(var i = 0; i< numeric; i++) {
          var random_password = (thirdvalue[(Math.floor(Math.random() * thirdvalue.length))]);
          final_password.push(random_password);
        }
        array_to_string()
      }
      else{
         for(var i = 0; i< numeric; i++) {
          var random_password = (thirdvalue[(Math.floor(Math.random() * thirdvalue.length))]);
          final_password.push(random_password);
        }
        array_to_string()
      }
    }
}); 


