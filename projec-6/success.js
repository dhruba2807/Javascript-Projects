document.addEventListener('DOMContentLoaded', function() {
    // Retrieve user information from localStorage
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    if (userInfo) {
        // Create HTML content to display user information
        const userInfoContainer = document.getElementById('user-info');
        userInfoContainer.innerHTML = `
            <p><strong>Full Name:</strong> ${userInfo.fullName}</p>
            <p><strong>Phone Number:</strong> ${userInfo.phoneNumber}</p>
            <p><strong>Email:</strong> ${userInfo.email}</p>
            <p><strong>Shipping Address:</strong> ${userInfo.address}</p>
            <p><strong>Notes:</strong> ${userInfo.notes}</p>
        `;

        // Clear user information from localStorage
        localStorage.removeItem('userInfo');
    } else {
        // Redirect to form page if no user info is found
        window.location.href = 'index.html';
    }
});
