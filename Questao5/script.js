async function buscarFrase() {
  const resposta = await fetch("https://api.quotable.io/random");
  const dados = await resposta.json();
  return { texto: dados.content, autor: dados.author };
}

async function carregarFrases() {
  const lista = document.getElementById("frases");
  lista.innerHTML = "<li>Carregando frases...</li>";

  try {
    const promessas = Array.from({ length: 5 }, () => buscarFrase());
    const frases = await Promise.all(promessas);

    lista.innerHTML = "";
    frases.forEach(frase => {
      const li = document.createElement("li");
      li.innerHTML = `<q>${frase.texto}</q><br><strong>— ${frase.autor}</strong>`;
      lista.appendChild(li);
    });
  } catch (erro) {
    lista.innerHTML = "<li>Erro ao carregar frases.</li>";
  }
}

document.getElementById("carregar").addEventListener("click", carregarFrases);
