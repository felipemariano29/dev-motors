# Dev Motors

## Descrição

**Dev Motors** é uma aplicação web dinâmica e interativa desenvolvida com o framework Next.js. O principal objetivo deste projeto é fornecer uma plataforma para exibição de informações de páginas e menus, integrando dados de uma API externa fornecida pelo CosmicJS.

## Índice

- [Instalação](#instalação)
- [Uso](#uso)
- [Scripts](#scripts)
- [Dependências](#dependências)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [API](#api)
- [Componentes](#componentes)
- [Estilos](#estilos)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Instalação

Para instalar e rodar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:
   ```bash
   git clone https://github.com/felipemariano29/dev-motors.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd dev-motors
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

## Uso

Para iniciar o servidor de desenvolvimento, utilize o comando:

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`.

Para gerar a build de produção, utilize:

```bash
npm run build
```

Para iniciar o servidor em modo de produção:

```bash
npm start
```

## Scripts

- `dev`: Inicia o servidor de desenvolvimento.
- `build`: Gera a build de produção.
- `start`: Inicia o servidor em modo de produção.
- `lint`: Verifica o código em busca de problemas de linting.

## Dependências

### Dependências de Produção

- `lucide-react`: ^0.378.0
- `next`: 14.2.3
- `react`: ^18
- `react-dom`: ^18
- `sass`: ^1.77.2

### Dependências de Desenvolvimento

- `@types/node`: ^20
- `@types/react`: ^18
- `@types/react-dom`: ^18
- `typescript`: ^5

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

```
├── .next
├── node_modules
├── public
│   ├── logo.jpg
│   ├── next.svg
│   └── vercel.svg
├── src
│   ├── app
│   │   ├── post
│   │   │   ├── [slug]
│   │   │   │   ├── error.module.scss
│   │   │   │   ├── error.tsx
│   │   │   │   ├── page.tsx
│   │   │   │   └── style.module.scss
│   │   ├── favicon.ico
│   │   ├── globals.scss
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components
│   │   ├── container
│   │   ├── header
│   │   ├── hero
│   │   └── home
│   └── utils
│       ├── actions
│       │   ├── get-data.ts
│       ├── home.type.ts
│       ├── post.type.ts
│       └── submenu.type.ts
├── .env.local
├── .gitignore
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
```

## API

O projeto utiliza a API do CosmicJS para buscar dados dinâmicos. As funções de fetch estão localizadas em `src/utils/actions/get-data.ts`:

- `getHomeData`: Busca os dados da página inicial.
- `getSubmenuData`: Busca os dados do submenu.
- `getPageDataBySlug`: Busca os dados de uma página específica pelo slug.

## Componentes

### Home

- `Submenu`: Exibe um submenu com itens dinâmicos.
- `Hero`: Exibe o banner principal com um botão de call to action.
- `About`: Exibe informações sobre a empresa ou projeto.
- `Footer`: Exibe o rodapé com informações adicionais.

### Page

- `Hero`: Exibe o banner principal da página específica.
- `Container`: Contém o conteúdo principal da página.
- `styles`: Estilos específicos para a página.

## Estilos

Os estilos são escritos em SCSS e estão localizados na pasta `src/app`. O arquivo `globals.scss` contém os estilos globais, e cada componente possui seu próprio arquivo de estilo modular (`style.module.scss`).

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
