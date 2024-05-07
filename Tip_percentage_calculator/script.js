const btnCal = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalSpan = document.getElementById("total");

function CalTot(){
    const billAmt = billInput.value;
    const tipVal = tipInput.value;
    const totVal = billAmt * (1 + tipVal/100);
    totalSpan.innerText = totVal.toFixed(2);
}

btnCal.addEventListener("click",CalTot);