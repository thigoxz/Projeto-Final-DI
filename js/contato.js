// contato.js – valida o formulário de contato (demonstração: nada é enviado)
const form = document.getElementById('form-contato');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const modalidade = document.getElementById('modalidade');
const mensagem = document.getElementById('mensagem');
const msg = document.getElementById('msg-geral');

function validar(campo, texto, regra) {
  const valor = campo.value.trim();
  const ok = regra ? regra(valor) : valor !== '';
  document.getElementById('erro-' + campo.id).textContent = ok ? '' : texto;
  campo.setAttribute('aria-invalid', String(!ok));
  return ok;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  msg.textContent = '';

  const regras = [
    [nome, 'Digite seu nome.'],
    [email, 'Digite um e-mail válido, como nome@exemplo.com.', (v) => /^\S+@\S+\.\S+$/.test(v)],
    [modalidade, 'Escolha uma modalidade.'],
    [mensagem, 'Escreva sua mensagem.'],
  ];

  let primeiroErro = null;
  regras.forEach(([campo, texto, regra]) => {
    if (!validar(campo, texto, regra) && !primeiroErro) primeiroErro = campo;
  });
  if (primeiroErro) return primeiroErro.focus();

  msg.textContent = 'Obrigado, ' + nome.value.trim() + '! Recebemos sua mensagem e responderemos em breve.';
  form.reset();
});