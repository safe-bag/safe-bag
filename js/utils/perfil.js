const showProfile = () => {
    const name = document.querySelector('.name');
    const email = document.querySelector('.email');

    const nameValue = JSON.parse(localStorage.getItem('name')) || "Seu nome";
    name.classList.add('h2-name');
    name.innerHTML += nameValue;

    const emailValue = JSON.parse(localStorage.getItem('email')) || "seuemail@gmail.com";
    email.innerHTML += emailValue;
}

const showList = () => {

    const result = document.getElementById('result');
    const h2List = document.querySelector('.your-list');
    const listValue = JSON.parse(localStorage.getItem("itemList"));

    if(listValue) {
        listValue.forEach(element => {
            result.innerHTML += `<li> ✔️ ${element} </li>`
        })
        result.innerHTML += `<button class="btn" style="margin: 1rem 0"> Remover Lista </button>`;
    } else {
        h2List.innerHTML = "Monte seu mochila"
        result.innerHTML += `<button class="btn"> Montar </button>`;
    }
}

const navigationList = () => {
    window.location.href = "./lista-mochila.html";
}

const logout = () => {
    window.location.href = "./login.html";
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('itemList');
}

showList()
showProfile();