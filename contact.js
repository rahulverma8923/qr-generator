document.getElementById('generateButton').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value;
    const email = document.getElementById('emailInput').value;
    const phone = document.getElementById('phoneInput').value;

    // Format the contact info
    const contactInfo = `BEGIN:VCARD\nVERSION:3.0\nFN:${name}\nEMAIL:${email}\nTEL:${phone}\nEND:VCARD`;
    const qrcodeContainer = document.getElementById('qrcode');

    if (name && email && phone) {
        qrcodeContainer.innerHTML = '';
        const qrDiv = document.createElement('div');
        $(qrDiv).qrcode(contactInfo);
        qrcodeContainer.appendChild(qrDiv);
        
        // Clear input fields
        document.getElementById('nameInput').value = '';
        document.getElementById('emailInput').value = '';
        document.getElementById('phoneInput').value = '';
    } else {
        alert("Please fill in all fields.");
    }
});