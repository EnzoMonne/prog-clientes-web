async function converterVariasMoedas(valor, moedaOrigem, moedasDestino) {
    const appId = '0e210b89199649f8b163258e2ea56d5a';
    const url = `https://openexchangerates.org/api/latest.json?app_id=${appId}&base=${moedaOrigem}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (!data.rates) {
            throw new Error('Erro ao buscar taxas de câmbio.');
        }

        const taxas = data.rates;
        const valoresConvertidos = moedasDestino.map(moeda => {
            if (!taxas[moeda]) {
                return {
                    moeda: moeda,
                    valor: 'Moeda não encontrada na API'
                };
            }
            return {
                moeda: moeda,
                valor: (valor * taxas[moeda]).toFixed(2)
            };
        });

        return valoresConvertidos;
    } catch (error) {
        console.error('Erro ao converter:', error);
        return [];
    }
}

document.getElementById('converter').addEventListener('click', async () => {
    const valor = parseFloat(document.getElementById('valor').value);
    const moedaOrigem = document.getElementById('moedaOrigem').value.toUpperCase();
    const moedasDestino = document.getElementById('moedasDestino').value.split(',').map(m => m.trim().toUpperCase());

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '<p>Calculando...</p>';

    const resultados = await converterVariasMoedas(valor, moedaOrigem, moedasDestino);

    if (resultados.length === 0) {
        resultadoDiv.innerHTML = '<p class="text-red-500">Erro ao buscar os valores. Verifique os dados e tente novamente.</p>';
        return;
    }

    resultadoDiv.innerHTML = '<h2 class="text-xl font-bold mb-2">Resultados:</h2>';
    resultados.map(r => {
        const p = document.createElement('p');
        p.textContent = `${valor} ${moedaOrigem} = ${r.valor} ${r.moeda}`;
        resultadoDiv.appendChild(p);
    });
});
