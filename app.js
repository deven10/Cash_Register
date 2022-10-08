const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".notes");
const availableNotes = [2000, 500, 100, 50, 20, 5, 1];

checkButton.addEventListener("click", function validate(){
    hideMessage();
     if(billAmount.value > 0){
        if(cashGiven.value >= billAmount.value){
            let amountToReturn = cashGiven.value - billAmount.value;
            calculate(amountToReturn);
        } else{
            showMessage("The cash provided is less than your bill");
        }
    } else {
        showMessage("Invalid Bill Amount");
    }
});

function calculate(amountToReturn){
    for(let i = 0; i < availableNotes.length; i++){
        const numberOfNotes = Math.trunc(amountToReturn / availableNotes[i]);
        amountToReturn %= availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function hideMessage(){
    message.style.display = "none";
}

function showMessage(msg){
    message.style.display = "block";
    message.innerHTML = msg;
}
