//Assign HTML ids to variables in javascript

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const nameInput = document.querySelector('input[placeholder="Enter the name here..."]');
    const emailInput = document.querySelector('input[placeholder="Enter the email here..."]');
    const suggestionBox = document.getElementById("suggestionBox");
    const yesOption = document.getElementById("dot-3");
    const noOption = document.getElementById("dot-4");
    const updateMethods = document.getElementById("updateMethod");

    // Check if all necessary elements exist
    if (!form || !nameInput || !emailInput || !suggestionBox || !yesOption || !noOption || !updateMethods) {
        console.error("One or more form elements not found.");
        return;
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function toggleTextBox() {
        if (noOption.checked) {
            suggestionBox.removeAttribute("disabled");
            suggestionBox.setAttribute("required", "true");
        } else {
            suggestionBox.setAttribute("disabled", "true");
            suggestionBox.removeAttribute("required");
            suggestionBox.value = "";
        }
    }

    yesOption.addEventListener("change", toggleTextBox);   //calling the toggleTextBox function 
    noOption.addEventListener("change", toggleTextBox);

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Stop default form submission

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();  //assigned to new variables after trimming spaces

        // Validate basic fields
        if (!name || !email) {
            alert("Please fill out all required fields.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (noOption.checked && suggestionBox.value.trim() === "") {
            alert("Please provide suggestions for improvements.");
            return;
        }

        if (!updateMethods.value) {
            alert("Please select a preferred update method.");
            return;
        }

        // All validation passed
        alert("Thank you for your feedback!");

        // Reset the form and disable suggestion box again
        form.reset();
        toggleTextBox();
    });
});
