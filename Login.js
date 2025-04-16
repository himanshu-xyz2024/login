document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from submitting

    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Hardcoded credentials
    const validEmail = "students2370@gmail.com";
    const validPassword = "Hk@231";

    // Validation checks
    if (email === "") {
        alert("Please enter your email.");
        emailInput.focus();
        return;
    }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        emailInput.focus();
        return;
    }

    if (password === "") {
        alert("Please enter your password.");
        passwordInput.focus();
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        passwordInput.focus();
        return;
    }

    // Check hardcoded credentials
    if (email === validEmail && password === validPassword) {
        alert("Login successful!");
    } else {
        alert("Credentials mismatch. Please try again.");
    }
});
