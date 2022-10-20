const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".notes");
const availableNotes = [2000, 500, 100, 50, 20, 10, 5, 1];

checkButton.addEventListener("click", function validate(){

    let bill = parseInt(billAmount.value);
    let cash = parseInt(cashGiven.value);

    hideMessage();
    if(bill < 0 || cash < 0){
        showMessage("Negative inptus cannot be accepted 👿");
    } 
     else if(bill > 0){
        if(cash === bill){
            showMessage("The cash given is exactly same as the bill amount, no need to give any change ✌");
        }
         else if(cash >= bill){
            let amountToReturn = cash - bill;
            calculate(amountToReturn);
        } else{
            showMessage("The cash provided is less than your bill");
        }
    } 
    else {
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
