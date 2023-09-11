//reads users input
//Const defines a variable or pointer as unchangeable

const button = document.querySelector("#generate");
button.addEventListener("click", function() {
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
    const number_null = document.querySelectorAll("input[type=number]")
      number_null.forEach(function(input) {
        input.addEventListener("change", function(x) {
          if (x.target.value == "") {
            x.target.value = 0
          }
        })
      })

    //makes sure that a number is chosen
    if (numeric < 8 || numeric > 128){
      alert("Password length must range from 8-128")
    }
    else{
      //first requirement checker
      if (values[0] === "lowercase"){
          var first_value = user_input.concat(lowercase);
      }
      else if(values[0] === "uppercase"){
          var first_value = user_input.concat(uppercase);
      }
      else if(values[0]==="special character"){
          var first_value = user_input.concat(special_character);
      }
      else if(values[0]==="numbers"){
        var first_value = user_input.concat(number);
      }
      else{
        alert("Please check at least one box! ")
      }

      //second requirment checker
      if(values[1]==="uppercase"){
        var second_value = first_value.concat(uppercase);
      }
      else if(values[1]==="lowercase"){
        var second_value = first_value.concat(lowercase);
      }
      else if(values[1]==="special character"){
       var second_value = first_value.concat(special_character)
      }
     else if(values[1]==="numbers"){
       var second_value = first_value.concat(number);
      }

      //third requirment
      if(values[2]==="special character"){
        var third_value = second_value.concat(special_character)
      }
      else if(values[2]==="lowercase"){
        var third_value = second_value.concat(lowercase);
      }
      else if (values[2]==="uppercase"){
        var third_value = second_value.concat(uppercase);
      }
      else if(values[2]==="numbers"){
        var third_value = second_value.concat(number);
      }

      //fourth requirment option
      if(values[3]==="numbers"){
        var fourth_value = third_value.concat(number);
      }
      else if(values[3]==="special character"){
        var fourth_value = third_value.concat(special_character)
      }
      else if (values[3]==="uppercase"){
        var fourth_value = third_value.concat(uppercase);
      }
      else if(values[3]==="lowercase"){
        var fourth_value = third_value.concat(lowercase);
      }

      //sets empty password to have array appended
     var final_password = [];

     //turns array to string to be pushed into html 
     function array_to_string(){
      final_password = final_password.toString();
      final_password=final_password.replace(/\,/g,"");
      document.getElementById("password").placeholder = final_password;
     }

      //takes users requirments into password array
      if (values.length === 1){
        for(var i = 0; i< numeric; i++) {
          var random_password = (first_value[(Math.floor(Math.random() * first_value.length))]);
          final_password.push(random_password);
        }
        array_to_string()
      }
      else if (values.length === 2){
        for(var i = 0; i< numeric; i++) {
          var random_password = (second_value[(Math.floor(Math.random() * second_value.length))]);
          final_password.push(random_password);
        }
        array_to_string()
      }
      else if (values.length === 3){
        for(var i = 0; i< numeric; i++) {
          var random_password = (third_value[(Math.floor(Math.random() * third_value.length))]);
          final_password.push(random_password);
        }
        array_to_string()
      }
      else{
         for(var i = 0; i< numeric; i++) {
          var random_password = (fourth_value[(Math.floor(Math.random() * fourth_value.length))]);
          final_password.push(random_password);
        }
        array_to_string()
      }
    }
}); 


