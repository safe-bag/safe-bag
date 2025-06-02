const form = document.querySelector('form');

form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const users = [name, email, password];

    localStorage.setItem('name', JSON.stringify(users[0]));
    localStorage.setItem('email', JSON.stringify(users[1]));
    localStorage.setItem('password', JSON.stringify(users[2]))
})
