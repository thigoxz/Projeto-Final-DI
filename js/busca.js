// busca.js – pesquisa por texto + abas de categoria nas modalidades
const campo = document.getElementById('busca');
const abas = document.querySelectorAll('.abas button');
const cards = document.querySelectorAll('.modalidade');
const contador = document.getElementById('contador');
let categoria = 'todas';

// Ignora maiúsculas e acentos ("muscula" encontra "Musculação")
function normalizar(texto) {
  return texto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function filtrar() {
  const termo = normalizar(campo.value.trim());
  let total = 0;
  cards.forEach((card) => {
    const okCategoria = categoria === 'todas' || card.dataset.categoria === categoria;
    const okTexto = normalizar(card.textContent).includes(termo);
    card.hidden = !(okCategoria && okTexto);
    if (!card.hidden) total++;
  });
  contador.textContent = total === 0 ? 'Nenhuma modalidade encontrada.'
    : total + (total === 1 ? ' modalidade encontrada.' : ' modalidades encontradas.');
}

abas.forEach((aba) => {
  aba.addEventListener('click', () => {
    categoria = aba.dataset.categoria;
    abas.forEach((a) => a.setAttribute('aria-pressed', String(a === aba)));
    filtrar();
  });
});

campo.addEventListener('input', filtrar);
document.getElementById('form-busca').addEventListener('submit', (e) => e.preventDefault());
filtrar();