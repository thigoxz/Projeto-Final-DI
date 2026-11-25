// painel.js – área do aluno: saudação, abas e botão Sair
let nome = null;
try { nome = sessionStorage.getItem('usuario'); } catch (e) {}

if (!nome) window.location.replace('login.html');
else document.getElementById('ola').textContent = 'Olá, ' + nome + '!';

const abas = Array.from(document.querySelectorAll('[role="tab"]'));

function abrir(aba) {
  abas.forEach((a) => {
    const ativa = a === aba;
    a.setAttribute('aria-selected', String(ativa));
    a.tabIndex = ativa ? 0 : -1;
    document.getElementById(a.getAttribute('aria-controls')).hidden = !ativa;
  });
}

abas.forEach((aba, i) => {
  aba.addEventListener('click', () => abrir(aba));
  aba.addEventListener('keydown', (e) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    const passo = e.key === 'ArrowRight' ? 1 : -1;
    const proxima = abas[(i + passo + abas.length) % abas.length];
    abrir(proxima);
    proxima.focus();
  });
});

document.getElementById('btn-sair').addEventListener('click', () => {
  try { sessionStorage.removeItem('usuario'); } catch (e) {}
  window.location.href = 'login.html';
});