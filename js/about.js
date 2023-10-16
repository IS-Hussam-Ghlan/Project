
function showContactForm() {
  var contactForm = document.getElementById("contactForm");
  contactForm.style.display = "block";
}

function submitForm(event) {
  event.preventDefault();

  var submissionMessage = document.getElementById("submissionMessage");
  submissionMessage.style.display = "block";

  var contactForm = document.getElementById("contactForm");
  contactForm.style.display = "none";
}