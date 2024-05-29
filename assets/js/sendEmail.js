function sendMail(event){
    event.preventDefault();
    var params = {
        name: document.getElementById('cname').value,
        email: document.getElementById('cemail').value,
        message: document.getElementById('cmessage').value
    }
    const serviceID = 'service_myv34k8';
    const templateID = 'template_fs8wpal';

    emailjs.send(serviceID, templateID, params)
    .then(res => {
        document.getElementById('cname').value = '';
        document.getElementById('cemail').value = '';
        document.getElementById('cmessage').value = '';
        alert('Sent!');
    }).catch(err => {
        alert(JSON.stringify(err));
    });
}
