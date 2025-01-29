document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', handleFormSubmit);
});

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    const { isValid, messages } = validateInputs(username, email, password);

    displayFeedback(isValid, messages);
}

// Function to validate inputs
function validateInputs(username, email, password) {
    let isValid = true;
    const messages = [];

    if (username.length < 3) {
        isValid = false;
        messages.push("Username must be at least 3 characters long.");
    }

    if (!email.includes('@') || !email.includes('.')) {
        isValid = false;
        messages.push("Please enter a valid email address.");
    }

    if (password.length < 8) {
        isValid = false;
        messages.push("Password must be at least 8 characters long.");
    }

    return { isValid, messages };
}

// Function to display feedback
function displayFeedback(isValid, messages) {
    const feedbackDiv = document.getElementById('form-feedback');
    feedbackDiv.style.display = "block";

    if (isValid) {
        feedbackDiv.textContent = "Registration successful!";
        feedbackDiv.style.color = "#28a745"; // Green
    } else {
        feedbackDiv.innerHTML = messages.join("<br>");
        feedbackDiv.style.color = "#dc3545"; // Red
    }
}
