// Add event listener to the calculte button
document.getElementById("calculate").addEventListener("click", validateAPR);

// Fuction for validating apr
function validateAPR() {
    let apr = document.getElementById('apr').value;
    let aprError = document.querySelector("#apr + span.error");

    // if apr is empty we return a message and set focus
    if (apr == '') {
        aprError.textContent = "Missing Value, please enter the APR";
        aprError.className = 'error active';
        document.getElementById("apr").focus();
        return false;
        // if apr is out of the specified show error to user and set focus
    } else if (apr < 0 || apr > 25.00) {
        aprError.textContent = "Value is out of range, enter number between 0 and 25.00";
        aprError.className = 'error active';
        document.getElementById("apr").focus();
        return false;
        //reset innerHTML and reset class name
    } else {
        aprError.innerHTML = '';
        aprError.className = 'error';
        validateTerm();
    }
}

function validateTerm() {
    let term = document.getElementById('term').value;
    let termError = document.querySelector('#term + span.error');

    // if term is empty we return a message and set focus
    if (term == '') {
        termError.textContent = "Missing value, please enter the loan term.";
        termError.className = 'error active';
        document.getElementById("term").focus();
        return false;
        // if term is out of the specified show error to user and set focus
    } else if (term < 0 || term > 40) {
        termError.textContent = "Value out of range, Please enter a number between 0 and 40";
        termError.className = 'error active';
        document.getElementById("term").focus();
        return false;
        //reset innerHTML and reset class name
    } else {
        termError.innerHTML = '';
        termError.className = 'error';
        validateAmount();
    }
}

function validateAmount() {
    let amount = document.getElementById('amount').value;
    let amountError = document.querySelector('#amount + span.error');

    // if amount is empty we return a message and set focus
    if (amount == '') {
        amountError.textContent = "Missing value, please enter the loan amount.";
        amountError.className = 'error active';
        document.getElementById("amount").focus();
        return false;
        //reset innerHTML and reset class name
    } else {
        amountError.innerHTML = '';
        amountError.className = 'error';
        doPayment();
    }
}


// function for geting the monthly loan payment
// get every element from the form and set to a new variable
// set paymentsPerYear to 12 
function doPayment() {
    let principal = parseFloat(document.getElementById('amount').value);
    // allow a user to enter a % and then we convert it to a decimal here
    let annualRate = parseFloat(document.getElementById('apr').value) / 100.0;
    let years = parseFloat(document.getElementById('term').value);
    let paymentsPerYear = 12;
    // call calculation function and set payment output to final veriable
    let payment = computePayment(principal, annualRate, years, paymentsPerYear);
    document.getElementById('payment').innerHTML = payment.toFixed(2);
}

function computePayment(principal, annualRate, years, paymentsPerYear) {
    // set the annual rate to a monthly rate
    let rate = annualRate / paymentsPerYear;
    let p = (principal * rate) / (1 - (1 + rate) ** (-paymentsPerYear * years));
    return p;
}