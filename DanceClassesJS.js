
// set variable for the date
var selectedDate;

function updateContent() {
    // get the date input
    const dateInput = document.getElementById('dateInput').value;

    // set default content and class
    const content1 = "Dance Class";
    const content2 = "Dance Class";
    const content3 = "Dance Class";
    const class1 = 'DanceClass1';
    const class2 = 'DanceClass2';
    const class3 = 'DanceClass3';

    // parse the selected date
    selectedDate = new Date(dateInput);

    // define different scenarios based on the selected date
    if (selectedDate.getDate() === 1) {
        content1 = "Popping<br>Mr Wiggles<br>8pm-9pm";
        class1 = 'DanceClass1';
        content2 = "Hip Hop<br>Jabbawockeez<br>6pm-7pm";
        class2 = 'DanceClass2';
        content3 = "Locking<br>Hilty & Bosch<br>3pm-4pm";
        class3 = 'DanceClass3';
    } else if (selectedDate.getDate() === 15) {
        content1 = "Open Choreography<br>Anthony Lee<br>8pm-9pm";
        class1 = 'DanceClass4';
        content2 = "Open Choreography<br>Sean Lew<br>6pm-7pm";
        class2 = 'DanceClass5';
        content3 = "Popping<br>Greenteck<br>3pm-4pm";
        class3 = 'DanceClass6';
    } else if (selectedDate.getDate() ===30) {
        content1 = "Popping<br>Hozin<br>8pm-9pm";
        class1 = 'DanceClass7';
        content2 = "Popping<br>Salah<br>6pm-7pm";
        class2 = 'DanceClass8';
        content3 = "Open Choreography<br>Keone<br>3pm-4pm";
        class3 = 'DanceClass9';
    }

    // update the content and class
    document.getElementById('boxContent1').innerHTML = content1;
    document.getElementById('boxContent1').className = class1;

    document.getElementById('boxContent2').innerHTML = content2;
    document.getElementById('boxContent2').className = class2;

    document.getElementById('boxContent3').innerHTML = content3;
    document.getElementById('boxContent3').className = class3;
}

// set variable for messageType
var messageType;

// use eventlistener to detect submission or clicking of buttons
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('submitButton').addEventListener('click', function () {
        // get email and password input
        const emailInput = document.getElementById('emailInput').value;
        const passwordInput = document.getElementById('passInput').value;
            
        // validate email and password format using a regular expression
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        
        // define different scenarios based on correct and wrong inputs
        if (emailRegex.test(emailInput) && passwordRegex.test(passwordInput)) {
            showMessage("Registered Successfully! Here's a promo code for your first class ever! CODE: KONZ1stTIME", ' success');
            copyToClipboard();
        } else if (emailInput.trim()===""||passwordInput.trim()===""){
            showMessage('Please enter your information.', ' error');
        } else {
            showMessage('Invalid format. Please enter a valid email address or password.', ' error');
        }
    });

    // function to define the display of content of the message
    function showMessage(message, messageType) {
        const messageBoxes = document.getElementsByClassName('confirmation');
        const messageBox = messageBoxes[0];
        messageBox.textContent = message;
        messageBox.className = 'confirmation ' + messageType;
        messageBox.style.display = 'block';

        setTimeout(function () {
            messageBox.style.display = 'none';
        }, 50000); 
    }
});

// function to copy promo code to clipboard
function copyToClipboard() {
    const copyText = "KONZ1stTIME";

    const tempInput = document.createElement("input");

    tempInput.value = copyText;

    document.body.appendChild(tempInput);

    tempInput.select();
    tempInput.setSelectionRange(0, 99999);

    // command to copy to clipboard
    document.execCommand("copy");

    document.body.removeChild(tempInput);

    // pop up to alert users that the promo code has been copied to clipboard
    alert("Registered Successfully! Here's a First-Timer promo code for you! " + copyText + " Copied to clipboard");
}
