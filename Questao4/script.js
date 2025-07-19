let biblioteca = [
  { titulo: "Dom Casmurro", autor: "Machado de Assis", disponivel: true, emprestimos: 5 },
  { titulo: "A Hora da Estrela", autor: "Clarice Lispector", disponivel: false, emprestimos: 2 },
  { titulo: "O Alienista", autor: "Machado de Assis", disponivel: true, emprestimos: 7 }
];

function renderizarBiblioteca() {
  const div = document.getElementById("biblioteca");
  div.innerHTML = "<h2>Todos os Livros:</h2>";

  biblioteca.forEach((livro, i) => {
    div.innerHTML += `
      <div class="livro">
        <p><strong>${livro.titulo}</strong> — ${livro.autor}</p>
        <p>Disponível: ${livro.disponivel ? "Sim" : "Não"} | Empréstimos: ${livro.emprestimos}</p>
      </div>
    `;
  });

  const disponiveis = biblioteca.filter(l => l.disponivel);
  document.getElementById("disponiveis").innerHTML = disponiveis
    .map(l => `<li>${l.titulo} (${l.autor})</li>`)
    .join("");

  const emprestados = biblioteca
    .filter(l => l.emprestimos > 0)
    .map(l => `<li>${l.titulo}</li>`)
    .join("");
  document.getElementById("emprestados").innerHTML = emprestados;

  const total = biblioteca.reduce((soma, l) => soma + l.emprestimos, 0);
  document.getElementById("total").textContent = total;
}

document.getElementById("formLivro").addEventListener("submit", function (e) {
  e.preventDefault();
  const titulo = document.getElementById("titulo").value.trim();
  const autor = document.getElementById("autor").value.trim();

  if (titulo && autor) {
    biblioteca.push({ titulo, autor, disponivel: true, emprestimos: 0 });
    renderizarBiblioteca();
    this.reset();
  }
});

renderizarBiblioteca();
