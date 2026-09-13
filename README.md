# Portfólio pessoal

Portfólio estático de Vinicius Augusto dos Santos, feito com HTML, CSS e JavaScript puro.

## O que mudou

- Design editorial inspirado no protótipo, com tipografia gigante, linhas técnicas, azul elétrico e estética de software moderno.
- Tema claro e escuro com preferência salva no navegador.
- Alternância entre português e inglês, com botão visível também no mobile.
- Hero com fluxo técnico animado, cursor customizado, ticker de tecnologias, reveal on scroll e parallax.
- Novas seções de impacto, experiência, mapa de stack e filosofia de trabalho.
- Projetos renderizados a partir de dados em `content.js`.
- Galerias de projetos carregadas sob demanda para reduzir peso inicial.
- Capas otimizadas em `assets/images/optimized`.
- Layout responsivo para desktop e mobile, mantendo conteúdo completo em PT e EN.

## Como editar projetos

Abra `content.js` e procure o array `projects`.

Para adicionar um projeto:

1. Copie um objeto existente dentro de `projects`.
2. Troque o `id` por um identificador único.
3. Ajuste `category` para `web`, `systems` ou `game`.
4. Informe uma `cover` leve, de preferência dentro de `assets/images/optimized`.
5. Coloque as imagens completas em `images`.
6. Preencha textos em português e inglês nos campos `title`, `subtitle` e `description`.
7. Adicione links em `links`, usando `type: "external"` para site ou `type: "download"` para arquivo.

Exemplo resumido:

```js
{
    id: "meu-projeto",
    category: "web",
    cover: "./assets/images/optimized/meu-projeto-cover.jpg",
    title: {
        pt: "Meu Projeto",
        en: "My Project"
    },
    subtitle: {
        pt: "Descrição curta do projeto.",
        en: "Short project description."
    },
    description: {
        pt: "Descrição completa em português.",
        en: "Full description in English."
    },
    year: "2026",
    tags: {
        pt: ["Web", "Dashboard"],
        en: ["Web", "Dashboard"]
    },
    images: [
        "./assets/images/meuProjeto1.jpg",
        "./assets/images/meuProjeto2.jpg"
    ],
    links: [
        {
            type: "external",
            url: "https://exemplo.com"
        }
    ]
}
```

## Como abrir

Como é um site estático, basta abrir `index.html` no navegador.
