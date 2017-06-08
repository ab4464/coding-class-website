var fullName, emailAddress;
fullName = "anonymous";

function setName() {
    fullName = document.querySelector('#InputName1').value;
}

function setEmail() {
    emailAddress = document.querySelector('#InputEmail1').value;
}

function thankUser() {
	alert("Thank you, " + fullName + " for completing this assignment. We'll send a copy of your responses to " + emailAddress + ".");
}