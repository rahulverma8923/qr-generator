document.getElementById('generateButton').addEventListener('click', function() {
    const url = document.getElementById('urlInput').value;
    const qrcodeContainer = document.getElementById('qrcode');

    // Clear previous QR code
    qrcodeContainer.innerHTML = '';

    if (url) {
        // Generate QR code
        $(qrcodeContainer).qrcode(url);
    } else {
        alert("Please enter a valid URL.");
    }
});
