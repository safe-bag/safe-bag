const form = document.getElementById('formBackpack');
const itemList = document.getElementById('itemsList');
const result = document.getElementById('result');

const baseItens = [
    'Água potável (4L por pessoa por dia)',
    'Alimentos não perecíveis',
    'Lanterna e pilhas',
    'Kit de primeiros socorros',
    'Carregador portátil',
    'Cópia de documentos',
    'Roupas extras',
    'Máscaras e álcool gel',
    'Fita isolante e canivete multifuncional',
  ];

form.addEventListener('submit', function(event) {
    event.preventDefault();
    itemList.innerHTML = ''; 
    result.style.display = 'block';

    const items = [...baseItens];

    const pets = document.getElementById('pets').value;
    const children = document.getElementById('children').value;
    const alone = document.getElementById('alone').value;
    const medical = document.getElementById('medical').value;

    if (pets === 'yes') {
        items.push('Ração e água para pets', 'Coleira, guia e recipiente portátil');
    }

    if (children === 'yes') {
        items.push('Brinquedos e livros', 'Fraldas e lenços umedecidos', 'Alimentos infantis');
    }

    if (alone === 'yes') {
        items.push('Carregador de celular', 'Lanterna extra', 'Mapa da região');
    }

    if (medical === 'yes') {
        items.push('Medicamentos pessoais', 'Receitas médicas', 'Lista de contatos de emergência');
    }
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `✔️ ${item}`;
        localStorage.setItem('itemList', JSON.stringify(items));
        itemList.appendChild(li);
        
    });

});