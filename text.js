document.getElementById('generateButton').addEventListener('click', function() {
    const text = document.getElementById('textInput').value;
    const qrcodeContainer = document.getElementById('qrcode');

    if (text) {
        qrcodeContainer.innerHTML = '';
        const qrDiv = document.createElement('div');
        $(qrDiv).qrcode(text);
        qrcodeContainer.appendChild(qrDiv);
        
        // Clear input field
        document.getElementById('textInput').value = '';
    } else {
        alert("Please enter some text.");
    }
});