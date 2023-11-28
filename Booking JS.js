
function chooseClass() {
    const urlParams = new URLSearchParams(window.location.search);
    const boxParam = urlParams.get('box');

    var content1;

    if (boxParam === 'box1') {
        content1 = "Your class is from 8pm-9pm. The class will cost 1 class credit ($15)";
    } else if (boxParam === 'box2') {
        content1 = "Your class is from 6pm-7pm. The class will cost 1 class credit ($15)";
    } else if (boxParam === 'box3') {
        content1 = "Your class is from 3pm-4pm. The class will cost 1 class credit ($15)";
    } else {
        content1 = "You have not chosen a class yet";
    }

    localStorage.setItem('boxContent1', content1);
    document.getElementById('boxContent1').innerHTML = content1;
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('proceedPurchase').addEventListener('click', function (event) {
        event.preventDefault();
        // Validate the form before proceeding with the purchase
        if (validateForm()) {
            var promoInput = document.getElementById("promoInput").value;

            if (promoInput.trim() === "KONZ1stTIME") {
                showMessage('Purchase Successful. Promo code redeemed. Class price: $0. Enjoy your free class! An Email receipt will be sent to you soon.', 'success');
            } else if (promoInput.trim() === "") {
                showMessage('Purchase Successful. $15 will be deducted from your account. An Email receipt will be sent to you soon.', 'success');
            } else { 
                showMessage('Invalid Promo Code. Please Try Again', 'error');
            }
        } else {
            // Form is not valid, display an error message or take appropriate action
            showMessage('Please fill in all required fields.', 'error');
        }

        function validateForm() {
            var form = document.getElementById('purchaseForm');
            // Check if all required inputs are filled in
            return Array.from(form.elements).every(element => {
                if (element.tagName === 'INPUT' && element.required) {
                    return element.value.trim() !== '';
                }
                return true;
            });
        }

        function showMessage(message, messageType) {
            var messageBoxes = document.getElementsByClassName('popupPurchase');
            var messageBox = messageBoxes[0];
            messageBox.textContent = message;
            messageBox.className = 'popupPurchase ' + messageType;
            messageBox.style.display = 'block';

            setTimeout(function () {
                messageBox.style.display = 'none';
            }, 500000); // Adjust the timeout as needed
        }
    });
});
