# Vinicius Augusto — portfólio

Site estático em HTML, CSS e JavaScript, sem build ou dependências de execução.

## Design e navegação

- Apresentação pessoal com nome e foto real; paletas roxas para os temas claro e escuro.
- Tema inicial acompanha o sistema; a escolha manual fica salva no navegador.
- Português e inglês com preferência persistida, incluindo as descrições, os menus e o currículo correspondente.
- Layout responsivo, navegação por teclado, link para pular ao conteúdo e respeito a movimento reduzido.
- Parallax discreto, entrada de conteúdo ao rolar e microinterações. A rolagem continua nativa.
- Quatro projetos em destaque; filtros e expansão dão acesso aos 11 projetos com galeria de imagens.
- Projetos recentes apresentados em texto: Gerenciador de Convênios, Vyntra e Menu TV integrado ao ERP. Sem capturas inventadas.
- Contato por e-mail e WhatsApp. O formulário prepara a mensagem; o visitante a revisa e envia no WhatsApp.

## Arquivos principais

- `index.html`: estrutura e conteúdo inicial.
- `style.css`: layout, temas, componentes e breakpoints.
- `design-copy.js`: textos da interface em português e inglês.
- `content.js`: dados profissionais, projetos, experiências, contatos e traduções do conteúdo.
- `script.js`: idioma, tema, filtros, galeria, contatos e navegação.
- `custom-select.js`: seletor de projeto com teclado, validação, traduções e posicionamento adaptável.
- `motion.js`: parallax, animações de entrada, progresso de rolagem e interações discretas.
- `assets/fonts/`: Manrope e IBM Plex Mono locais, com licenças OFL. Nenhuma requisição ao Google Fonts durante a navegação.
- `assets/images/optimized/profile-new.png`: foto atual.
- `assets/files/CV_Vinicius.pdf`: currículo em português.
- `assets/files/CV_Vinicius_EN.pdf`: currículo em inglês.

## Editar conteúdo

Os dados profissionais foram atualizados com o texto de LinkedIn fornecido em setembro de 2026. As datas explícitas de cada experiência prevalecem sobre as durações relativas do LinkedIn.

Para adicionar um projeto, inclua um objeto em `PORTFOLIO_CONTENT.projects`, com um `id` único e os campos `category`, `cover`, `title`, `subtitle`, `description`, `year`, `tags`, `images` e `links`. Use as categorias `sites`, `systems` ou `game`. Textos traduzidos usam `{ pt: '...', en: '...' }`. `tags` pode ser um array ou um objeto com arrays PT/EN.

As capas são carregadas sob demanda. As imagens completas da galeria só são solicitadas ao abrir o projeto. Links públicos usam `type: 'external'`; arquivos para download usam `type: 'download'`. Projetos sem URL pública podem manter `links: []`.

Os destaques iniciais são Encontrando Fretes, SmartRent, Santa Casa e NINEstacks. A ordem é controlada por `projectOrder` em `script.js`. `recentHighlights` reúne os projetos recentes que ainda não têm capturas nesta pasta.

## Executar

Abra `index.html` no navegador ou sirva a pasta com um servidor HTTP estático. Não é necessário instalar pacotes. Para publicar, envie os arquivos da pasta para um host estático, preservando os caminhos relativos de `assets/`.
