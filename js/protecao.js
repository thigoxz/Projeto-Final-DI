// protecao.js – sem login, manda para login.html antes de mostrar a página
// (carregado no <head> do index, modalidades e painel; o contato fica aberto
//  porque o login tem o link "Agende uma aula experimental")
(function () {
    var nome = null;
    try { nome = sessionStorage.getItem('usuario'); } catch (e) {}
    if (!nome) window.location.replace('login.html');
  })();