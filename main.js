
// Sends a confirmation email to user
function newElement() {
let inputValue = document.getElementById("email-input").value;
if (!isNaN(inputValue) || inputValue === "") {
  alert("Please input a number!");
} else {
  emailjs.send("Subscription_Service","Email_Subscription",{
    email: inputValue
    });
  }
}
