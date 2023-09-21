const form = document.getElementById('form');

form.addEventListener("submit", function(event){
    event.preventDefault();

    const investimento = parseFloat(document.getElementById('investimento').value.replace(',', '.'));
    const bet1 = parseFloat(document.getElementById('bet1').value.replace(',', '.'));
    const bet2 = parseFloat(document.getElementById('bet2').value.replace(',', '.'));

    var possivelLucro = (investimento * bet1).toFixed(2);
    var investimento2 = (possivelLucro / bet2).toFixed(2);
    var ganhos1 = (investimento*(bet1 - 1) - investimento2).toFixed(2);
    var oddSaida = (ganhos1 / investimento) + 1


    const resultInvestimento1 = document.getElementById('resultInvestimento1');
    const resultInvestimento2 = document.getElementById('resultInvestimento2');
    const lucroTotal = document.getElementById('lucroTotal');


    resultInvestimento1.textContent = investimento.toFixed(2);
    resultInvestimento2.textContent = investimento2;
    lucroTotal.textContent = ganhos1;


    // Alterar a cor do texto com base nos valores
    lucroTotal.style.color = ganhos1 >= 0 ? 'green' : 'red';


    document.getElementById('infos').classList.remove('hidden');
});
