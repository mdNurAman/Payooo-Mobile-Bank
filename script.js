document.getElementById('btn').addEventListener('click', function (e) {
    e.preventDefault();
    
    const defaultPhone = 12345;
    const defaultPin = 1234;

    let phone = document.getElementById('phn').value;
    phone = parseInt(phone);

    let pin = document.getElementById('pin').value;
    pin = parseInt(pin);
    
    
    if (defaultPhone === phone && defaultPin === pin) {
        window.location.href = "./homepage.html";
    } else {
        alert('Invalid Credentials');
    }
    
});
