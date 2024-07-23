document.getElementById('submitBtn').addEventListener('click', function() {
    var username = document.getElementById('username').value;
    if (username) {
        var whatsappUrl = 'https://wa.me/YOUR_WHATSAPP_NUMBER?text=Hola, mi nombre de usuario es ' + username;
        window.location.href = 1168565496;
    } else {
        alert('Por favor, ingresa tu nombre de usuario');
    }
});
