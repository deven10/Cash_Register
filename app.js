const billAmount = document.querySelector("#bill-amount");
const checkButton = document.querySelector("#check-button");
const cashGiven = document.querySelector("#cash-given");
const errorMessage = document.querySelector("#error-message");

checkButton.addEventListener("click", () => {
    errorMessage.style.display = "none";
    if(billAmount.value > 0){
        if(cashGiven.value >= billAmount.value){

        }else {
            showMessage("The cash provided is incorrect");
        }
    } else {
        showMessage("Invalid Bill Amount");
    }
});

function showMessage(message){
    errorMessage.style.display = "block";
    errorMessage.innerHTML = message;
}
