

function validateForm(){
    event.preventDefault();
     checkEmpty();
     console.log("1")

}

function checkEmpty(){
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let emailInput = document.forms["my-form"].mail.value;
  var phoneNumberPattern = /^\d{10}$/;

  let firstname = document.forms["my-form"].firstname.value;
  let lastname = document.forms["my-form"].lastname.value;
  let phoneNumberInput = document.forms["my-form"].number.value;
  let countryInput = document.forms["my-form"].country.value;

  // condition  to validate firstname  input field
  if (firstname.trim() == "") {
    // The trim() method is used to remove leading and trailing whitespace from the input
    document.getElementById("firstname-alert").style.display = "block";
  } else document.getElementById("firstname-alert").style.display = "none";

  // condition  to validate last name  input field
  if (lastname == "" || lastname.trim() == "") {
    document.getElementById("lastname-alert").style.display = "block";
  } else document.getElementById("lastname-alert").style.display = "none";

  // condition  to validate email is valid or not .

  if (emailInput.trim() == "") {
    document.getElementById("email-alert1").style.display = "block";
    document.getElementById("email-alert2").style.display = "none";
  } else {
    document.getElementById("email-alert1").style.display = "none";
    if (!emailPattern.test(emailInput))
      document.getElementById("email-alert2").style.display = "block";
    else document.getElementById("email-alert2").style.display = "none";
  } 


  // condition  to validate number is valid or not .
  if (phoneNumberInput == "") {
    document.getElementById("number-alert1").style.display = "block";
    document.getElementById("number-alert2").style.display = "none";
  } else {
    document.getElementById("number-alert1").style.display = "none";
    if (!phoneNumberPattern.test(phoneNumberInput))
      document.getElementById("number-alert2").style.display = "block";
    else document.getElementById("number-alert2").style.display = "none";
  } 

  // gender-selector validation

//   if(document.querySelectorAll('input[name="gender"]:not(:checked)')) document.getElementById("gender-alert").style.display = "block";
//       else  document.getElementById("gender-alert").style.display = "none";

  var uncheckedRadioButtons = document.querySelectorAll('input[name="gender"]:not(:checked)');
      if (uncheckedRadioButtons.length > 2) {
          document.getElementById("gender-alert").style.display = "block";
      } else { document.getElementById("gender-alert").style.display = "none";
      }


  //country validation
  if (countryInput == "none") {
    document.getElementById("country-alert").style.display = "block";
  } else document.getElementById("country-alert").style.display = "none";
}
