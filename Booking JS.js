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