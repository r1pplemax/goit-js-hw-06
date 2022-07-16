const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener("input", (event) => {
    if (nameInput.value !== "") {
        nameOutput.innerHTML = nameInput.value.trim();
    } else {
    nameOutput.innerHTML = 'Anonymous'
    }
})