// .checked = property that determines checked state of checkbox or radio button
const mycheckbox = document.getElementById('#myCheckBox');
const visaBtn = document.getElementById('#visabtn');
const msterBtn = document.getElementById('#masterCardbtn');
const payplbtn = document.getElementById('#paypalbtn');
const mySubmit = document.getElementById('#mySubmit');
const subResult = document.getElementById('#subResult');
const paymentResult = document.getElementById('#paymentResult');

mySubmit.onclick = function (){
    // Subscription status
    if (mycheckbox.checked) {
        subResult.textContent = "You are subscribed!";
    } else {
        subResult.textContent = "You are not subscribed!";
    }

    // Payment method
    if (visaBtn.checked) {
        paymentResult.textContent = "You have selected Visa Card";
    } else if (msterBtn.checked) {
        paymentResult.textContent = "You have selected Master Card";
    } else if (payplbtn.checked) {
        paymentResult.textContent = "You have selected PayPal";
    } else {
        paymentResult.textContent = "Please select a payment method";
    }
};
