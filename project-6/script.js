var namerror = document.getElementById('name-error');
var phoneerror = document.getElementById('phone-error');
var emailerror = document.getElementById('email-error');
var addresserror = document.getElementById('address-error');
var noteerror = document.getElementById('note-error');
var submiterror = document.getElementById('submit-error');

function validateName() {
    var name = document.getElementById('contact-name').value;

    if (name.length === 0) {
        namerror.innerHTML = 'Name is required';
        return false;
    }

    if (!name.match(/^[A-Za-z]+ [A-Za-z]+$/)) {
        namerror.innerHTML = 'Write full name';
        return false;
    }

    namerror.innerHTML = '<i class="fa-solid fa-square-check"></i>';
    return true;
}

function validatePhone() {
    var phone = document.getElementById('phone-number').value;

    if (phone.length === 0) {
        phoneerror.innerHTML = 'Phone number is required';
        return false;
    }

    if (!phone.match(/^\d{10}$/)) {
        phoneerror.innerHTML = 'Phone number should be 10 digits';
        return false;
    }

    phoneerror.innerHTML = '<i class="fa-solid fa-square-check"></i>';
    return true;
}

function validateEmail() {
    var email = document.getElementById("email-id").value;

    if (email.length === 0) {
        emailerror.innerHTML = "Email is required.";
        return false;
    }

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]{2,4}$/)) {
        emailerror.innerHTML = "Invalid email format";
        return false;
    }

    emailerror.innerHTML = '<i class="fa-solid fa-square-check"></i>';
    return true;
}

function validateAddress() {
    var address = document.getElementById('shipping-address').value;

    if (address.length === 0) {
        addresserror.innerHTML = 'Shipping address is required';
        return false;
    }

    addresserror.innerHTML = '<i class="fa-solid fa-square-check"></i>';
    return true;
}

function validateNotes() {
    var notes = document.getElementById('notes').value;

    if (notes.length > 0 && notes.length < 10) {
        noteerror.innerHTML = 'Notes should be at least 10 characters long if provided';
        return false;
    }

    noteerror.innerHTML = '<i class="fa-solid fa-square-check"></i>';
    return true;
}

function validateForm(event) {
    event.preventDefault(); // Prevent the default form submission

    var nameValid = validateName();
    var phoneValid = validatePhone();
    var emailValid = validateEmail();
    var addressValid = validateAddress();
    var notesValid = validateNotes();

    if (nameValid && phoneValid && emailValid && addressValid && notesValid) {
        // Redirect to success page
        window.location.href = 'success.html';
        return false; // Prevent default form submission
    } else {
        submiterror.style.display = 'block';
        submiterror.innerHTML = 'Please fix the errors above before submitting.';
        setTimeout(function() {
            submiterror.style.display = 'none';
        }, 3000);
        return false; // Form is invalid
    }
}

// Attach the validateForm function to the form's submit event
document.getElementById('checkout-form').addEventListener('submit', validateForm);
