//constants for form items
const costumer = document.querySelector("#Costumer");
const email = document.querySelector("#Email");
const phone = document.querySelector("#Phone");
const address = document.querySelector("#Address");

//constants for buttons and display
const pressButton = document.querySelector(".orderNow");
const display = document.querySelector("#display");

//function to check button activation
function createSmoothie() {
  
    const fruit = document.querySelectorAll(`input[name="fruit"]:checked`); //select checkbox
    let fruitString = "";
    for (var checkbox of fruit) {
      // for each loop to iterate through chechbox to when checkeed saved in a string the value concatenated
      if (checkbox.checked)
        fruitString = fruitString.concat(checkbox.value + ", ");
    }

    const protein = document.querySelectorAll(`input[name="protein"]:checked`);
    let proteinString = "";
    for (var checkbox of protein) {
      if (checkbox.checked) proteinString = proteinString.concat(checkbox.value + ", ");
    }

    const superfood = document.querySelectorAll(
        `input[name="superfood"]:checked`
      );
    let superfoodString = "";
    for (var checkbox of superfood) {
        if (checkbox.checked)
            superfoodString = superfoodString.concat(checkbox.value + ", ");
    }

    const selectedSize = document.querySelector(
        `input[name="cupsize"]:checked`
    );

    const milk = document.querySelector(`input[name="milk"]:checked`);



}