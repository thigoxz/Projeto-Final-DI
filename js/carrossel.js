// carrossel.js – carrossel simples com botões Anterior/Próxima e pontos
const slides = document.querySelectorAll('.slide');
const pontos = document.querySelector('.pontos');
const status = document.getElementById('carrossel-status');
let atual = 0;

// Cria um ponto (botão) para cada imagem
slides.forEach((_, i) => {
  const ponto = document.createElement('button');
  ponto.type = 'button';
  ponto.setAttribute('aria-label', 'Ir para a imagem ' + (i + 1));
  ponto.addEventListener('click', () => mostrar(i));
  pontos.appendChild(ponto);
});

function mostrar(i) {
  atual = (i + slides.length) % slides.length; // volta ao início depois da última
  slides.forEach((s, n) => s.classList.toggle('ativo', n === atual));
  pontos.querySelectorAll('button').forEach((p, n) => p.setAttribute('aria-current', String(n === atual)));
  status.textContent = 'Imagem ' + (atual + 1) + ' de ' + slides.length; // lido pelo leitor de tela
}

document.getElementById('btn-anterior').addEventListener('click', () => mostrar(atual - 1));
document.getElementById('btn-proximo').addEventListener('click', () => mostrar(atual + 1));
mostrar(0);