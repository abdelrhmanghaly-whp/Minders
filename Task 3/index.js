const PeopleNumber = document.querySelector(".whole #bottom-left-grid #number-people .input");
const bill = document.querySelector(".whole #left-grid #bill .input");
const CustomTip = document.querySelector(".custom")
const ResultTotal = document.querySelector(".total-result");
const ResultTip = document.querySelector("#result-tip");
function Eval() {
    let individual, total, Percentage, FixedIndividual = 0, FixedTotal = 0;

    const PickedButtons = document.getElementsByClassName("active");
    if (PickedButtons.length == 0) {
        Percentage = 0;
    } else if (CustomTip.classList.contains("active")) {
        Percentage = CustomTip.value;
    } else {
        Percentage = PickedButtons[0].value;
    }
    individual = (bill.value * Percentage * (1 / 100)) / PeopleNumber.value;
    total = (bill.value / PeopleNumber.value) + individual;
    FixedIndividual = individual.toFixed(2);
    FixedTotal = total.toFixed(2);

    ResultTip.innerText = FixedIndividual;
    ResultTotal.innerText = FixedTotal;
}


const ResetButton = document.querySelector("#right-grid #button-reset");
PeopleNumber.oninput = function () {
    /* direct result evaluation (event type) */
    const ErrorDisplay = document.querySelector(".Cant-be-zero");
    ResetFunctionality();
    if (PeopleNumber.value <= 0 || PeopleNumber.value === " ") {
        ErrorDisplay.innerText = "Can't be zero"
        ErrorDisplay.style.color = "Orange";
        PeopleNumber.style.borderColor = "Orange";
        ResultTip.innerText = "0.00"
        ResultTotal.innerText = "0.00"
    } else {
        Eval();
    }
}


const Buttons = document.querySelectorAll(".button");

function TipEval() {
    Buttons.forEach((button) => {
        button.classList.remove("active");
    });
    this.classList.add("active");
    CustomTip.classList.remove("active");
    Eval();
}


function CustomEval() {
    /* bt4tl onclick bas msh 3arf el 3eb fen
    lw msh fahm 2sdy, fa msln 7ot 144 fel bill, b3den 4 msln fel n of people, hytl3lk el result el mfrod oninput 3la tool
    tab el custom? dos 3leha mrten 3shan tt3ml :skull: */
    Buttons.forEach((button) => {
        button.classList.remove("active");
    });
    this.classList.add("active");
    if ((bill.value !== " " || bill.value < 0)) {
        Eval();
    }
}

function ResetFunctionality() {
    if (CustomTip.value === " " && bill.value === " " && PeopleNumber.value === " ") {
        ResetButton.disabled = true;
        ResetButton.classList.remove("has-reset-activated");
    } else {
        ResetButton.disabled = false;
        ResetButton.classList.add("has-reset-activated");

    }
}
/* 

function ResetFunctionality() {
    bool checker = false;

    if (CustomTip.value === " " && PeopleNumber.value === " ") {
        clear();
        checker=true;
        return;
    } else {
        ResetButton.disabled = false;
        ResetButton.classList.add("has-reset-activated");
        clear();
    }
    if(checker){
        ResetButton.classList.remove("has-reset-activated");
        ResetButton.disabled = true;
    }
    else{
        ResetButton.disabled = false;
        clear();
    }
}



*/

function clear() {
    const inputs = document.querySelectorAll(".input");
    Buttons.forEach((button) => {
        button.classList.remove("active");
    });

    inputs.forEach((input) => {
        input.value = " ";
    });

    ResultTip.innerText = "0.00";
    ResultTotal.innerText = "0.00";
    ResetButton.disabled = true;
    ResetButton.classList.remove("has-reset-activated");
}

CustomTip.addEventListener("click", CustomEval);
Buttons.forEach((button) => {
    button.addEventListener("click", TipEval);
})
ResetButton.addEventListener("click", clear);








