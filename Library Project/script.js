document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // prevent form submission

    // Get values
    const fullname = document.getElementById("fullname").value.trim();
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const category = document.getElementById("category").value;
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const subscription = document.getElementById("subscription").value;

    // RegEx patterns
    const nameRegex = /^[A-Za-z ]{3,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const phoneRegex = /^[6-9]\d{9}$/;
    const usernameRegex = /^[A-Za-z0-9_]{5,15}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Full Name Validation
    if (!nameRegex.test(fullname)) {
        alert("Full Name must contain only letters and be at least 3 characters long.");
        return;
    }

    // DOB Validation (minimum age 12)
    const birthDate = new Date(dob);
    const age = new Date().getFullYear() - birthDate.getFullYear();
    if (!dob || age < 18) {
        alert("You must be at least 12 years old.");
        return;
    }

    // Gender Validation
    if (!gender) {
        alert("Please select a gender.");
        return;
    }

    // Category Validation
    if (category === "") {
        alert("Please select a membership category.");
        return;
    }

    // Email Validation
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Phone Validation (Indian format example)
    if (!phoneRegex.test(phone)) {
        alert("Enter a valid 10-digit mobile number starting with 6-9.");
        return;
    }

    // Address Validation
    if (address.length < 10) {
        alert("Address must be at least 10 characters long.");
        return;
    }

    // Username Validation
    if (!usernameRegex.test(username)) {
        alert("Username must be 5–15 characters and contain only letters, numbers, or underscores.");
        return;
    }

    // Password Validation
    if (!passwordRegex.test(password)) {
        alert("Password must be at least 8 characters, include one uppercase letter, one number, and one special character.");
        return;
    }

    // Subscription Validation
    if (subscription === "") {
        alert("Please select a subscription duration.");
        return;
    }

    // If all validations pass
    alert("🎉 Registration Successful!");
    this.submit();
});
