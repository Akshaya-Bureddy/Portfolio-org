// Initialize EmailJS
(function() {
    emailjs.init("x_1PrqDdfrZG5D3Nw"); // Replace with your EmailJS user ID
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Send email
    emailjs.send('service_0ns0bec', 'template_5l2uexj', {
        from_name: name,
        from_email: email,
        message: message
    })
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully!');
            document.getElementById('contact-form').reset(); // Reset the form
        }, function(error) {
            console.log('FAILED...', error);
            alert('Message failed to send. Please try again.');
        });
});

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}