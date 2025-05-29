
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
        result.style.padding = '20px';
        result.innerHTML = `⚠️ Atenção! ${citySelected} é uma região com histórico de desastres naturais. <p style="color: #333;">Por isso, é fundamental que você tenha sempre sua mochila de emergência pronta e fique atento aos alertas da sua cidade.</p>`;
        result.style.color = 'red';
    } else {
        result.style.padding = '20px';
        result.innerHTML = `✅ ${citySelected} não possui histórico relevante de desastres naturais. <p style="color: #333;">Apesar disso, desastres podem acontecer em qualquer lugar. É sempre recomendado estar preparado e manter sua mochila de emergência atualizada.</p>`;
        result.style.color = 'green';
    }
}

btn.addEventListener('click', () => {
    const city = document.getElementById('city').value.trim();
    verifyCity(city)
      
})



    
  
