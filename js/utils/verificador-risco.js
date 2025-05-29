
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

const cityDisaster = [
    'Petrópolis',
    'Blumenau',
    'Itajaí',
    'Belo Horizonte',
    'Salvador',
    'São Paulo',
    'Recife',
    'Juazeiro',
    'Petrolina',
    'Campina Grande',
    'Teresina',
    'Curitiba',
    'Porto Alegre',
    'Chapecó',
    'Joinville',
    'Sinop',
    'Porto Velho',
    'Ribeirão Preto'
  ];

const verifyCity = (citySelected) => {

    if(citySelected == '') {
        alert('⚠️ A cidade precisa ser informada!')
        return;
    }

    const risk = cityDisaster.some(cidade => cidade.toLowerCase() === citySelected.toLowerCase());

    if(risk) {
        result.innerHTML = `⚠️ Atenção! ${citySelected} é uma região com histórico de desastres naturais.`;
        result.style.color = 'red';
    } else {
        result.innerHTML = `✅ ${citySelected} não possui histórico relevante de desastres naturais.`;
        result.style.color = 'green';
    }
}

btn.addEventListener('click', () => {
    const city = document.getElementById('city').value.trim();
    verifyCity(city)
      
})



    
  
