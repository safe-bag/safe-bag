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
    const btnRemoveList = document.querySelector('#btn-removeList');


    if(listValue) {
        listValue.forEach(element => {
            result.innerHTML += `<li> ✔️ ${element} </li>`
        })
    } else {
        h2List.innerHTML = "Monte seu mochila"
        result.innerHTML += `<button class="btn-remove" onClick="navigationList()"> Montar </button>`;
        btnRemoveList.style.display = 'none';
    }
}

const removeList = async () => {
    const h2List = document.querySelector('.your-list');
    const listValue = JSON.parse(localStorage.getItem("itemList"));
    listValue.innerHTML += "";
    localStorage.removeItem(`itemList`);
    window.location.reload()
    h2List.innerHTML = "Monte seu mochila"
    result.innerHTML += `<button class="btn-remove" onClick="navigationList()"> Montar </button>`;
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