# Raw Academy – Projeto Final de Desenvolvimento de Interfaces

Site de demonstração de uma academia/studio, feito com HTML, CSS e JavaScript puros (sem frameworks).

**Aluno:** Thiago Seabra Aquino da Silva – RA 22600589

**Site publicado:** https://thigoxz.github.io/Projeto-Final-DI/

## Como abrir
1. Abra a pasta no VS Code.
2. Clique com o botão direito em `index.html` e escolha **Open with Live Server**.
3. O site abre no login. Entre com qualquer usuário e senha.

## Páginas
| Página | O que tem |
|---|---|
| `login.html` | Login de demonstração (qualquer usuário e senha), mostrar senha, "Lembrar de mim" |
| `index.html` | Destaque, carrossel de imagens, cartões explicativos ("Como funciona") e planos |
| `modalidades.html` | Campo de pesquisa e abas de categoria que filtram os cartões |
| `contato.html` | Formulário de contato com validação (aberto mesmo sem login) |
| `painel.html` | Área do aluno: saudação, abas (treinos, aulas, plano) e botão Sair |

Todas as páginas têm a barra de acessibilidade (modo claro/escuro e tamanho da fonte), e as páginas do site têm rodapé.

## Estrutura
```
css/style.css    variáveis de cor, base e login
css/site.css     estilos das páginas do site
js/main.js       tema e fonte (todas as páginas)
js/login.js      login
js/protecao.js   manda para o login quem ainda não entrou
js/carrossel.js  carrossel
js/busca.js      pesquisa e abas das modalidades
js/contato.js    validação do formulário
js/painel.js     área do aluno
img/             imagens do carrossel
```

## Versões
1. **Login:** página de login com modo claro/escuro e ajuste de fonte.
2. **Estilos e imagens:** estilos das páginas do site e imagens do carrossel.
3. **Página inicial:** destaque, carrossel, cartões e planos.
4. **Modalidades:** pesquisa e abas de categoria.
5. **Contato:** formulário com validação.
6. **Área do aluno:** abas de treinos, aulas e plano; login obrigatório.
7. **Documentação:** este README.

## Acessibilidade (WCAG)
- Contraste mínimo de 4,5:1 nos textos, nos dois temas
- Navegação por teclado, foco visível e link "Pular para o conteúdo"
- Erros e mudanças anunciados com `aria-live`
- Carrossel controlado pelo usuário (não troca sozinho)
- Tema e tamanho de fonte salvos no `localStorage`
