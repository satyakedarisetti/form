 // Get error elements
var nameerror = document.getElementById("Nameerror");
var numbererror = document.getElementById("numerror");
var emailerror = document.getElementById("Emailerror");
var msgerror = document.getElementById("Msgerror");
var submiterror = document.getElementById("subiterror");

// Name validation
function validatename() {
    var name = document.getElementById("contactname").value.trim();

    if (name.length === 0) {
        nameerror.innerHTML = "Name is required";
        return false;
    }
    if (!name.match(/^[A-Za-z]+(?: [A-Za-z]+)*$/)) {
        nameerror.innerHTML = "Enter a valid full name";
        return false;
    }
    nameerror.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #63E6BE;"></i>';
    return true;
}

// Phone number validation
function validatenum() {
    var number = document.getElementById("contactnum").value.trim();

    if (number.length === 0) {
        numbererror.innerHTML = "Phone number is required";
        return false;
    }
    if (number.length !== 10) {
        numbererror.innerHTML = "Phone number must be 10 digits";
        return false;
    }
    if (!number.match(/^\d{10}$/)) {
        numbererror.innerHTML = "Enter a valid phone number";
        return false;
    }
    numbererror.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #63E6BE;"></i>';
    return true;
}

// Email validation
function validemail() {
    var email = document.getElementById("contactemail").value.trim();

    if (email.length === 0) {
        emailerror.innerHTML = "Email is required";
        return false;
    }
    if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/)) {
        emailerror.innerHTML = "Enter a valid email";
        return false;
    }
    emailerror.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #63E6BE;"></i>';
    return true;
}

// Message validation
function validmsg() {
    var msg = document.getElementById("contactmsg").value.trim();
    var required = 30;
    var left = required - msg.length;

    if (left > 0) {
        msgerror.innerHTML = left + " more characters required";
        return false;
    }
    msgerror.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #63E6BE;"></i>';
    return true;
}

// Form validation before submission
function validateform() {
    if (!validatename() || !validatenum() || !validemail() || !validmsg()) {
        submiterror.style.display = "block";
        submiterror.innerHTML = "Please check the details again";
        setTimeout(function () {
            submiterror.style.display = "none";
        }, 3000);
        return false;
    }
    
    alert("Form submitted successfully! ✅");
    return true;
}
