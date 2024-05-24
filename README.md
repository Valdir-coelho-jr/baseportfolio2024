### Base-Portfolio-2024

Um portfolio que pode ser usado como base na criação de portfolios pessoais

## Funcionalidades Principais

* **Seções Expandíveis:** As seções de Habilidades, Idiomas, Portfólio e Experiência profissional expandem e retraem ao clicar, proporcionando uma navegação fluida e organizada.
* **Ícones Interativos:** Os ícones nas seções expandíveis mudam de acordo com o estado da seção (aberta ou fechada), indicando visualmente a interação do usuário.
* **Design Responsivo:** O layout se ajusta automaticamente a diferentes tamanhos de tela, garantindo uma ótima experiência em desktops, tablets e celulares.

## Tarefas Realizadas

* **Estrutura HTML:** Criei a estrutura básica do site utilizando HTML, definindo as diferentes seções e elementos.
* **Estilização CSS:** Utilizei CSS para estilizar todos os elementos do site, incluindo cores, fontes, espaçamentos e responsividade. 
* **Funcionalidades JavaScript:** Implementei as seguintes funcionalidades com JavaScript:
    * **Animações de Expansão:** As seções expandem e retraem suavemente utilizando transições CSS controladas por JavaScript.
    * **Alternância de Ícones:**  A classe Font Awesome do ícone é alternada para cima/baixo quando a seção é aberta/fechada.
* **Conteúdo do Portfólio:** Incluí informações sobre minhas habilidades, idiomas, projetos e experiência profissional.

## Detalhes da Implementação

### JavaScript (abilities.js)

**1. Função `toggleIcon`:**

* Responsável por alternar a classe do ícone (seta para cima ou para baixo) dentro do botão da seção.
* Encontra o botão (`trigger`) mais próximo ao ícone clicado e seleciona o elemento `<i>` (ícone) dentro dele.
* Alterna as classes `fa-chevron-up` e `fa-chevron-down` no ícone.

**2. Event Listener no Carregamento da Página:**

* Adiciona um event listener que escuta o evento `click` em todos os botões de seção (`trigger`).
* Quando um botão é clicado, a função `toggleIcon` é chamada.

**3. Funcionalidade de Abrir/Fechar Seções:**

* Seleciona todos os botões de seção (`abilities .trigger`).
* Para cada botão, adiciona um event listener que:
    * Obtém o elemento pai do botão (a seção em si).
    * Verifica se a seção já está aberta, verificando a presença da classe "open".
    * Adiciona ou remove a classe "open" da seção, controlando sua visibilidade e animação.

## Considerações

A imagem de fundo utilizada no projeto foi criada utilizando o Gerador de Imagens IA da Microsoft.
