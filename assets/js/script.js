const button = document.querySelector('#generate');

//begin action after button is pressed
button.addEventListener('click', () => {
    const checkboxes = document.querySelectorAll('input[name="requirement"]:checked');
    const passLength = document.getElementById("c5").value;
    const checked = [];

    // adds the value of every checked box into the checked array
    checkboxes.forEach((checkbox) => {
        checked.push(checkbox.value);
    });

    //store user input
    let userInput = [];

    //sets up for password combos
    const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const special_character = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];

    //makes sure that a number is chosen
    if (8 > passLength || passLength > 128) {
        alert("Password length must range from 8-128");
    }
    else {
        // add user's choices
        if (checked.length !== 0) {
            if (checked.includes('special character')) {
                userInput = userInput.concat(special_character);
            }
            if (checked.includes('lowercase')) {
                userInput = userInput.concat(lowercase);
            }
            if (checked.includes('uppercase')) {
                userInput = userInput.concat(uppercase);
            }
            if (checked.includes('numbers')) {
                userInput = userInput.concat(number);
            }
        }
        // remind user to select an option
        else {
            alert("Please check at least one box! ")
        }

    }


    //turns array to string to be pushed into html 
    function array_to_string(finalPassword) {
        finalPassword = finalPassword.toString();
        finalPassword = finalPassword.replace(/\,/g, '');
        document.getElementById("password").placeholder = finalPassword;
    }

    //takes users requirments into password array
    if (userInput.length !== 0) {
        const finalPassword = [];
        for (let i = 0; i < passLength; i++) {
            const randomChar = (userInput[(Math.floor(Math.random() * userInput.length))]);
            finalPassword.push(randomChar);
        }
        array_to_string(finalPassword);
    }
});