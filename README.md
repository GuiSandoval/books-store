# Books Store

### Introdução
    Projeto Front-end para listagem de livros baseado na API do Google, as seguintes tecnologias foram usadads para o projeto:
        -React v18
        -react-query
        -styled-components
        -jest/Testing-library
        -vite

### Deploy da aplicação
Github Pages: [https://guisandoval.github.io/books-store/](https://guisandoval.github.io/books-store/)

### Rodando a Aplicação
    Usando yarn:
      yarn 
      yarn dev

    Usando npm:
      npm install
      npm run dev


### Arquitetura do Sistema

```
books-store
├── public (Icons,Images,SVG)
├── src
│   ├── @types (Tipagens para libs externas, ex: styled-components)
│   ├── common (Componentes reutilizaveis)
│   ├── components (Componentes da aplicação)
│   ├── contexts (Contextos da aplicação)
│   ├── hooks (Hooks da aplicação)
│   ├── interfaces (Interfaces da aplicação)
│   ├── Layouts (Layouts de páginas e componentes da aplicação)
│   ├── pages (Páginas da aplicação)
│   ├── services (Comunicação API da aplicação)
│   ├── styles (Estilos Globais da aplicação)
│   ├── utils (códigos utilitários)
├── .gitignore.json
├── index.html
├── jest.config.ts
├── package.json
├── README.md
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── yarn.lock
```