const username = document.getElementById(`username`);
const password = document.getElementById(`password`);
const form = document.getElementById(`form`);
const errorMessage = document.getElementById(`error`)

form.addEventListener(`submit`, (sub) => {
    let eMessage = []
    if (username.value === ` ` || username.value == null) {
        eMessage.push(`Username is required`);
    }

    if (password.value.length <= 8) {
        eMessage.push(`Password must be longer than 8 character`);
    }

    if (eMessage.length > 0) {
        sub.preventDefault();
        errorMessage.innerText = eMessage.join(`, `);
    }  
})





