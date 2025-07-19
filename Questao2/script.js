const apiKey = "f7893775";

async function buscarFilmes() {
  const titulo = document.getElementById("tituloInput").value.trim();
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = "";

  if (!titulo) {
    resultadoDiv.innerHTML = "<p>Digite um título para buscar.</p>";
    return;
  }

  const resposta = await fetch(`https://www.omdbapi.com/?s=${titulo}&apikey=${apiKey}`);
  const dados = await resposta.json();

  if (dados.Response === "True") {
    const filmesDetalhados = await Promise.all(
      dados.Search.map(async (filme) => {
        const detalhes = await fetch(`https://www.omdbapi.com/?i=${filme.imdbID}&apikey=${apiKey}`);
        const dadosDetalhados = await detalhes.json();
        return {
          titulo: dadosDetalhados.Title,
          ano: parseInt(dadosDetalhados.Year),
          diretor: dadosDetalhados.Director
        };
      })
    );

    const filmesFiltrados = filmesDetalhados.filter(f => f.ano > 2000);

    if (filmesFiltrados.length === 0) {
      resultadoDiv.innerHTML = "<p>Nenhum filme encontrado após o ano 2000.</p>";
    } else {
      filmesFiltrados.forEach(filme => {
        resultadoDiv.innerHTML += `
          <div class="filme">
            <strong>Título:</strong> ${filme.titulo}<br>
            <strong>Ano:</strong> ${filme.ano}<br>
            <strong>Diretor:</strong> ${filme.diretor}
          </div>
        `;
      });
    }
  } else {
    resultadoDiv.innerHTML = `<p>Erro: ${dados.Error}</p>`;
  }
}
