
        total = 0;

        function setHair(checkboxElem) {
            var price = 2.95;
            if (checkboxElem.checked) {
                total += price;
            } else if (!checkboxElem.checked) {
                total -= price;
            }
            document.getElementById("total").innerHTML = total.toFixed(2);
        }
        function setPen(checkboxElem) {
            var price = 3.99;
            if (checkboxElem.checked) {
                total += price;
            } else if (!checkboxElem.checked) {
                total -= price;
            }
            document.getElementById("total").innerHTML = total.toFixed(2);
        }
        function setTissues(checkboxElem) {
            var price = 1.56;
            if (checkboxElem.checked) {
                total += price;
            } else if (!checkboxElem.checked) {
                total -= price;
            }
            document.getElementById("total").innerHTML = total.toFixed(2);
        }
        function setSoda(checkboxElem) {
            var price = 5.85;
            if (checkboxElem.checked) {
                total += price;
            } else if (!checkboxElem.checked) {
                total -= price;
            }
            document.getElementById("total").innerHTML = total.toFixed(2);
        }
        
        

        function calculate() {
            var checked1 = document.getElementById("item_0").checked;
            var checked2 = document.getElementById("item_1").checked;
            var checked3 = document.getElementById("item_2").checked;
            var checked4 = document.getElementById("item_3").checked;
            var items = [checked1, checked2, checked3, checked4]
            var i;
            total = 0;
            for (i = 0; i < items.length; i++) {
                if (i == true) {
                    document.getElementById('total').innerHTML = i;
                    total += i;
                }
            }
            
            document.getElementById('total').innerHTML = total.toFixed(2);
        }


        // Add event listener to the clear button 
        document.getElementById("clear").addEventListener("click", clear);
        // If clicked set focus to first input box
        function clear() {
            document.getElementById("first_name").focus();
        }

        // Add event listener to the validate button
        document.getElementById("validate").addEventListener("click", validateFirstName);
        
        // Fuction for validating apr
        function validateFirstName() {
            let first = document.getElementById('first_name').value;
            let firstError = document.querySelector("#first_name + span.error");

            // if first_name is empty we return a message and set focus
            if (first == '') {
                firstError.textContent = "Missing Value, please enter the your first name";
                first.className = 'error active';
                document.getElementById("first_name").focus();
                return false;
                //reset innerHTML and reset class name
            } else {
                firstError.innerHTML = '';
                firstError.className = 'error';
                validateLastName();
            }
        }

        function validateLastName() {
            let last_name = document.getElementById('last_name').value;
            let lastError = document.querySelector('#last_name + span.error');

            // if last_name is empty we return a message and set focus
            if (last_name == '') {
                lastError.textContent = "Missing value, please enter the loan term.";
                lastError.className = 'error active';
                document.getElementById("last_name").focus();
                return false;
                //reset innerHTML and reset class name
            } else {
                lastError.innerHTML = '';
                lastError.className = 'error';
                validateAddress();
            }
        }

        function validateAddress() {
            let address = document.getElementById('address').value;
            let addressError = document.querySelector('#address + span.error');

            // if address field is empty we return a message and set focus
            if (address == '') {
                addressError.textContent = "Missing value, please enter address";
                addressError.className = 'error active';
                document.getElementById("address").focus();
                return false;
                //reset innerHTML and reset class name
            } else {
                addressError.innerHTML = '';
                addressError.className = 'error';
                validatePhone();
            }
        }
        function validatePhone() {
            let phone = document.getElementById('phone').value;
            let phoneError = document.querySelector('#phone + span.error');
            let phoneNumber = /\d\d\d-\d\d\d-\d\d\d\d/;

            // if phone number is empty we return a message and set focus
            if (phone == '') {
                phoneError.textContent = "Missing value, please enter phone number.";
                phoneError.className = 'error active';
                document.getElementById("phone").focus();
                return false;
                // if phone number is out of range or incorrect format return message and set focus
            } else if (phoneNumber.test(phone) == false) {
                phoneError.textContent = "Number entered incorrectly";
                phoneError.className = 'error active';
                document.getElementById("phone").focus();
                return false;
                //reset innerHTML and reset class name
            } else {
                phoneError.innerHTML = '';
                phoneError.className = 'error';
                validateCredit();
            }
        }
        function validateCredit() {
            let credit_card = document.getElementById('credit_card').value;
            let cardError = document.querySelector('#credit_card + span.error');
            let regCard = /\d\d\d\d\s\d\d\d\d\s\d\d\d\d\s\d\d\d\d/;

            // if card number is empty we return a message and set focus
            if (credit_card == '') {
                cardError.textContent = "Missing value, please enter credit card number.";
                cardError.className = 'error active';
                document.getElementById("credit_card").focus();
                return false;
                // if card number is out out of range aor not in the correct format retrm message and set focus
            } else if (regCard.test(credit_card) == false) {
                cardError.textContent = "Number not a credit card, please try again.";
                cardError.className = 'error active';
                document.getElementById("credit_card").focus();
                return false;
            //reset innerHTML and reset class name
            } else {
                cardError.innerHTML = '';
                cardError.className = 'error';
                validateExp();
            }
        }
        function validateExp() {
            let exp_date = document.getElementById('exp_date').value;
            let expError = document.querySelector('#exp_date + span.error');
            let regEXP = /^([0-1][1-9]\/[2-2][0-0][2-9][0-9])$/;

            // if experation is empty we return a message and set focus
            if (exp_date == '') {
                expError.textContent = "Missing value, please enter experation date.";
                expError.className = 'error active';
                document.getElementById("exp_date").focus();
                return false;
                // if the experation is not in the correct format or out of the range return message and set focus
            } else if (regEXP.test(exp_date) == false) {
                expError.textContent = "Date is not correct or is out of bounds, please enter the correct date. ";
                expError.className = 'error active';
                document.getElementById("exp_date").focus();
                return false;
                //reset innerHTML and reset class name
            } else {
                expError.innerHTML = '';
                expError.className = 'error';
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