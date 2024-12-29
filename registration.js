document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    // Password validation regex
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    if (!passwordRegex.test(password.value)) {
        password.classList.add("is-invalid");
    } else {
        password.classList.remove("is-invalid");
    }

    if (password.value !== confirmPassword.value) {
        confirmPassword.classList.add("is-invalid");
    } else {
        confirmPassword.classList.remove("is-invalid");
    }

    if (passwordRegex.test(password.value) && password.value === confirmPassword.value) {
        alert("Registration successful!");
        window.location.href="index.html";
    }
});