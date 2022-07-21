const form = document.querySelector('.login-form')



form.addEventListener('submit', sendTheForm)

function sendTheForm(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    if (email, password === "") {
        alert
    }
    

    console.log(event)
}