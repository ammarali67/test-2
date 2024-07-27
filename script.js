document.getElementById('serviceForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);
    const userInfo = {
        name: formData.get('name'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        serviceType: formData.get('serviceType'),
        submittedFrom: window.location.href,
        userAgent: navigator.userAgent
    };

    // Create a query string from the user info
    const queryString = new URLSearchParams(userInfo).toString();

    // Redirect to the thank you page with the query string
    window.location.href = `thank-you.html?${queryString}`;
});
