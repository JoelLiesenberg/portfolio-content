function checkForm(form) {
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var message = document.getElementById('message');

    if (name.value === "") {
        alert('Please be sure to fill out all fields before submitting!');
        return false;
    }
    if (email.value === "") {
        alert('Please be sure to fill out all fields before submitting!');
        return false;
    }
    if (message.value === "") {
        alert('Please be sure to fill out all fields before submitting!')
        return false;
    }}