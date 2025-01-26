// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Select the form and feedback div
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    // Add event listener for form submission
    form.addEventListener("submit", (event) => {
        event.preventDefault();  // Prevent default form submission

        //retrieve and trim input values
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        //validate variables
        let isValid = true;
        let messages = [];

        //username validation
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        //email validation
        if (!email.includes("@")  || !email.includes(".")) {
            isValid = false;
            messages.push("Please enter a valid email address.");
        }

        //password validation
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        //display feedback
        feedbackDiv.style.display = "block";
        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545";
        }
    });
});


