document.getElementById("form-submit").addEventListener("click", function(event) {
    // Prevent the form from being submitted if there are validation errors
    event.preventDefault();

    // Get the input values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    // Validate the name field (it should not be empty)
    if (name === "") {
        alert("Please enter your name.");
        return false; // Stop submission if invalid
    }

    // Validate the email using a regular expression (it should match a valid email pattern)
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false; // Stop submission if invalid
    }

    // Validate the subject (it should not be empty)
    if (subject === "") {
        alert("Please enter the subject.");
        return false; // Stop submission if invalid
    }

    // Validate the message field (it should not be empty)
    if (message === "") {
        alert("Please enter your message.");
        return false; // Stop submission if invalid
    }

    // If all fields are valid, show a success message
    alert("Form submitted successfully!");

    // Submit the form programmatically (if using traditional form submission)
    document.getElementById("yourFormId").submit();
});