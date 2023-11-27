var selectedDate;

function updateContent() {
    // Get the date input value
    var dateInput = document.getElementById('dateInput').value;

    // Set default content and class
    var content1 = "Dance Class";
    var content2 = "Dance Class";
    var content3 = "Dance Class";
    var class1 = 'DanceClass1';
    var class2 = 'DanceClass2';
    var class3 = 'DanceClass3';

    // Parse the selected date
    selectedDate = new Date(dateInput);

    // Define different scenarios based on the selected date
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

    // Update the content and class of the paragraphs
    document.getElementById('boxContent1').innerHTML = content1;
    document.getElementById('boxContent1').className = class1;

    document.getElementById('boxContent2').innerHTML = content2;
    document.getElementById('boxContent2').className = class2;

    document.getElementById('boxContent3').innerHTML = content3;
    document.getElementById('boxContent3').className = class3;
}

function submitForm(){
    
}
