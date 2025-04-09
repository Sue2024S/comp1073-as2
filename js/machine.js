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

    //function to create smoothie object
    function Smoothie(
        costumer,
        email,
        phone,
        address,
        cupSize,
        fruit,
        milk,
        protein,
        superfood
      ) {
        this.costumer = costumer;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.cupSize = cupSize;
        this.fruit = fruit;
        this.milk = milk;
        this.protein = protein;
        this.superfood = superfood;
  
        //function to display in p tag information
        this.order = function () {
          display.textContent = `Smoothie for ${this.costumer} with email ${
            this.email
          }
        with phone ${this.phone} with address at ${
            this.address
          }. The cup size is ${this.cupSize}
        The fruits is/are ${this.fruits}. The milk type is ${
            this.milk
          }. The protein powder(s) is/are ${
            this.protein ? this.protein : "Not Selected"
          }. The super foods is/are ${
            this.superfood ? this.superfood : "Not Selected"
          }`;
        };
      }

}

//events listener
pressButton.addEventListener("click", createSmoothie);