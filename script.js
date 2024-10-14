

// getting error in something I am unable to understand

// I have talked to ""VINAY"" as he said it is fine just upload it as he has also talked to technical team too


const correctEmail = document.getElementById("login-email").value;
const correctPassword = document.getElementById("login-password").value;


function validateLogin() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    const errorElement = document.getElementById("login-error");

    if (!validateEmail(email) && !validatePhone(email)) {
        showError(errorElement, "Please enter a valid email or mobile number.");
        return false;
    }

    if (password.length < 8) {
        showError(errorElement, "Password must be at least 8 characters long.");
        return false;
    }

    if (email !== correctEmail || password !== correctPassword) {
        showError(errorElement, "Login failed: Incorrect email or password.");
        return false;
    }

    clearError(errorElement);
    alert("Login successful!");
    return true;
}


function validateSignUp() {
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const errorElement = document.getElementById("signup-error");

    if (!validateEmail(email) && !validatePhone(email)) {
        showError(errorElement, "Please enter a valid email or mobile number.");
        return false;
    }

    if (password.length < 8) {
        showError(errorElement, "Password must be at least 8 characters long.");
        return false;
    }

    clearError(errorElement);
    alert("Sign Up successful!");
    return true;
}


function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}


function validatePhone(phone) {
    const re = /^[0-9]{10}$/;
    return re.test(phone);
}

function showError(element, message) {
    element.style.display = "block";
    element.innerText = message;
}

function clearError(element) {
    element.style.display = "none";
}
