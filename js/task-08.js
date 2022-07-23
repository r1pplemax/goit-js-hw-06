const form = document.querySelector('form')
console.log(form)

form.addEventListener('submit', sendTheForm)

function sendTheForm(event) {
    event.preventDefault();
    const user = {
        email: "",
        password: "",
    }
    const email = event.target.email.value;
    const password = event.target.password.value;
    if (email, password === "") {
        alert('Все поля должны быть заполнены.')
    } else {
        user.email = email;
        user.password = password;
    }
    console.log(user)
    form.reset()
}
