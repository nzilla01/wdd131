document.addEventListener("DOMContentLoaded", function () {
    // --- NAVBAR TOGGLE ---
    let navBar = document.querySelector(".navbar");
    let bar = document.querySelector(".bars");

    if (bar) {
        bar.addEventListener('click', function () {
            navBar.classList.toggle('act');
            bar.classList.toggle("times");
        });
    }

    // --- FORM SUBMISSION ---
    const form = document.getElementById("registrationForm");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); 

            // Get form values
            const username = document.getElementById("username").value;
            const email = document.getElementById("emails").value;
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirm-password").value;
            const phone = document.getElementById("phone").value;
            const termsAccepted = document.getElementById("terms").checked;

            // Validate password match
            if (password !== confirmPassword) {
                alert("Passwords do not match!");
                return;
            }

            // Create user object
            const userData = {
                username,
                email,
                password,
                phone,
                termsAccepted
            };

            // Save to local storage (use the same key)
            localStorage.setItem("userData", JSON.stringify(userData));

            alert("Registration successful! Redirecting...");

            // Redirect to registered.html
            window.location.href = "./registered.html";
        });
    }

    // --- RETRIEVE DATA FOR registered.html ---
    const userData = JSON.parse(localStorage.getItem("userData"));

    if (userData) {
        let displayUsername = document.getElementById("displayUsername");
        let displayEmail = document.getElementById("displayEmail");

        displayUsername.textContent = userData.username;
        displayEmail.textContent = userData.email;
    }
    else{
        console.log( "registratuon")
    }

    // --- LAST MODIFIED DATE ---
    let lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last Modification: ${document.lastModified}`;
    }
});
