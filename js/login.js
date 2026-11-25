// login.js – login de demonstração: qualquer usuário e senha entram
const form = document.getElementById('form-login');
const usuario = document.getElementById('usuario');
const senha = document.getElementById('senha');
const msg = document.getElementById('msg-geral');
const btnVer = document.getElementById('btn-ver-senha');
const lembrar = document.getElementById('lembrar');

// Preenche o usuário se "Lembrar de mim" foi marcado antes
try {
  const lembrado = localStorage.getItem('usuarioLembrado');
  if (lembrado) {
    usuario.value = lembrado;
    lembrar.checked = true;
  }
} catch (e) {}

// Mostrar/ocultar senha
btnVer.addEventListener('click', () => {
  const mostrar = senha.type === 'password';
  senha.type = mostrar ? 'text' : 'password';
  btnVer.textContent = mostrar ? 'Ocultar' : 'Mostrar';
  btnVer.setAttribute('aria-label', mostrar ? 'Ocultar senha' : 'Mostrar senha');
  btnVer.setAttribute('aria-pressed', String(mostrar));
});

// Só exige que o campo não esteja vazio
function validar(campo, texto) {
  const vazio = !campo.value.trim();
  document.getElementById('erro-' + campo.id).textContent = vazio ? texto : '';
  campo.setAttribute('aria-invalid', String(vazio));
  return !vazio;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const okUsuario = validar(usuario, 'Digite qualquer usuário.');
  const okSenha = validar(senha, 'Digite qualquer senha.');
  if (!okUsuario) return usuario.focus();
  if (!okSenha) return senha.focus();

  const nome = usuario.value.trim();
  try {
    if (lembrar.checked) localStorage.setItem('usuarioLembrado', nome);
    else localStorage.removeItem('usuarioLembrado');
    sessionStorage.setItem('usuario', nome); // as páginas usam isso para saber que o aluno entrou
  } catch (e) {}

  msg.textContent = 'Bem-vindo, ' + nome + '! Entrando...';
  setTimeout(() => { window.location.href = 'index.html'; }, 800);
});