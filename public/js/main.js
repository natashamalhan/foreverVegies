var veggieInput = document.getElementById("veggie");
var veggieInputValue = veggieInput.value;
var veggieSubmitButton = document.getElementById("veggie-submit");

veggieSubmitButton.addEventListener("click", function(event) {

    event.preventDefault();
    console.log(veggieInputValue);
    console.log(veggieInput.value);
    console.log(veggieSubmitButton.value);


})