function redirect() {
    var enteredCode = document.getElementById('codeInput').value;

    // Check if the entered code is correct
    if (enteredCode.toLowerCase() === 'foreverthomas') {
        // Redirect to another site
        window.location.href = 'https://example.com'; // Replace with your desired URL
    } else {
        alert('Incorrect code. Please try again.');
    }
}
