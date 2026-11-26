// ===== 1. Modo claro/escuro (as duas páginas) =====
const btnTema = document.getElementById('btn-tema');

if (localStorage.getItem('tema') === 'escuro') {
  document.body.classList.add('escuro');
  btnTema.textContent = 'Modo claro';
}

btnTema.addEventListener('click', function () {
  document.body.classList.toggle('escuro');
  if (document.body.classList.contains('escuro')) {
    localStorage.setItem('tema', 'escuro');
    btnTema.textContent = 'Modo claro';
  } else {
    localStorage.setItem('tema', 'claro');
    btnTema.textContent = 'Modo escuro';
  }
});

// ===== 2. Tamanho da fonte (as duas páginas) =====
let tamanho = 16;

document.getElementById('btn-mais').addEventListener('click', function () {
  if (tamanho < 24) tamanho = tamanho + 2;
  document.documentElement.style.fontSize = tamanho + 'px';
});

document.getElementById('btn-menos').addEventListener('click', function () {
  if (tamanho > 12) tamanho = tamanho - 2;
  document.documentElement.style.fontSize = tamanho + 'px';
});

// ===== 3. Login (só na página de login) =====
const formLogin = document.getElementById('form-login');

if (formLogin) {
  formLogin.addEventListener('submit', function (evento) {
    evento.preventDefault(); // não recarrega a página

    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    if (usuario === '' || senha === '') {
      document.getElementById('erro-login').textContent = 'Preencha o usuário e a senha.';
    } else {
      localStorage.setItem('usuario', usuario);
      window.location.href = 'index.html';
    }
  });
}

// ===== 4. Página principal (só no index) =====
const ola = document.getElementById('ola');

if (ola) {
  // Se ninguém fez login, volta para o login
  const usuario = localStorage.getItem('usuario');
  if (!usuario) {
    window.location.href = 'login.html';
  }
  ola.textContent = 'Olá, ' + usuario + '!';

  // Botão Sair
  document.getElementById('btn-sair').addEventListener('click', function () {
    localStorage.removeItem('usuario');
    window.location.href = 'login.html';
  });

  // Carrossel: troca de foto sozinho a cada 4 segundos
  const fotos = document.querySelectorAll('.carrossel img');
  const legenda = document.getElementById('legenda');
  let atual = 0;

  function mostrarFoto() {
    fotos.forEach(function (foto) {
      foto.classList.remove('ativa');
    });
    fotos[atual].classList.add('ativa');
    legenda.textContent = fotos[atual].alt;
  }

  function proximaFoto() {
    atual = atual + 1;
    if (atual === fotos.length) atual = 0; // volta para a primeira
    mostrarFoto();
  }

  setInterval(proximaFoto, 4000); // troca a foto a cada 4 segundos

  document.getElementById('btn-proximo').addEventListener('click', proximaFoto);

  document.getElementById('btn-anterior').addEventListener('click', function () {
    atual = atual - 1;
    if (atual < 0) atual = fotos.length - 1; // vai para a última
    mostrarFoto();
  });

  // Pesquisa de modalidades
  document.getElementById('pesquisa').addEventListener('input', function () {
    const texto = this.value.toLowerCase();
    const cartoes = document.querySelectorAll('.cartao');

    cartoes.forEach(function (cartao) {
      if (cartao.textContent.toLowerCase().includes(texto)) {
        cartao.style.display = 'block';
      } else {
        cartao.style.display = 'none';
      }
    });
  });

  // Formulário de contato
  document.getElementById('form-contato').addEventListener('submit', function (evento) {
    evento.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
    const aviso = document.getElementById('aviso-contato');

    if (nome === '' || email === '' || mensagem === '') {
      aviso.textContent = 'Preencha todos os campos.';
    } else {
      aviso.textContent = 'Obrigado, ' + nome + '! Sua mensagem foi enviada.';
      this.reset();
    }
  });
}