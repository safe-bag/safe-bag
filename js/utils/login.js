const form = document.querySelector('form');

form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    const users = [name, email];

    localStorage.setItem('name', JSON.stringify(users[0]));
    localStorage.setItem('email', JSON.stringify(users[1]));
})
