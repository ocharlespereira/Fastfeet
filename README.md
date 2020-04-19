<p align="center">Este codigo representa a minha solução do desafio do Bootcamp GoStack 10.0</p>

<p id="insomniaButton" align="center">
  <a href="https://insomnia.rest/run/?label=FastFeet&uri=https%3A%2F%2Fraw.githubusercontent.com%2FEliasGcf%2Ffastfeet%2Fmaster%2FInsomnia.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

<strong>Links dos desafios:</strong>

- [Etapa 1](https://github.com/EliasGcf/fastfeet/blob/master/server/ETAPA_01.md)
- [Etapa 2](https://github.com/EliasGcf/fastfeet/blob/master/server/ETAPA_02.md)
- [Etapa 3](https://github.com/EliasGcf/fastfeet/blob/master/web/ETAPA_03.md)
- [Etapa 4](https://github.com/EliasGcf/fastfeet/blob/master/mobile/ETAPA_04.md)

## :rocket: Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [PostgreSQL](https://www.postgresql.org/)
- [MongoDB](https://www.mongodb.com/)
- [Express](https://github.com/expressjs/express)
- [Redis](https://redis.io/)
- [Bee-Queue](https://github.com/bee-queue/bee-queue)

# Back-end

- [bcryptjs](https://github.com/dcodeIO/bcrypt.js)
- [bee-queue](https://github.com/bee-queue/bee-queue)
- [date-fns](https://date-fns.org/)
- [Express](https://expressjs.com/pt-br/)
- [JWT](https://github.com/auth0/node-jsonwebtoken)
- [Multer](https://github.com/expressjs/multer)
- [Nodemailer](https://nodemailer.com/about/)
- [Sequelize](https://sequelize.org/)
- [youch](https://github.com/poppinss/youch)
- [yup](https://github.com/jquense/yup)


# Front-End

-  [ReactJS](https://reactjs.org/)
-  [Redux](https://redux.js.org/)
-  [Redux-Saga](https://redux-saga.js.org/)
-  [React Router v5](https://github.com/ReactTraining/react-router)
-  [Axios](https://github.com/axios/axios)
-  [History](https://www.npmjs.com/package/history)
-  [Immer](https://github.com/immerjs/immer)
-  [Polished](https://polished.js.org/)
-  [React-Toastify](https://fkhadra.github.io/react-toastify/)
-  [styled-components](https://www.styled-components.com/)
-  [React-Icons](https://react-icons.netlify.com/)
-  [Reactotron](https://infinite.red/reactotron)
-  [Rocketseat Unform](https://github.com/Rocketseat/unform)
-  [date-fns](https://date-fns.org/)
-  [prop-types](https://github.com/facebook/prop-types)
-  [react-select](https://react-select.com/home)
-  [yup](https://github.com/jquense/yup)

# Mobile (Android Only)

-  [ReactNative](https://reactnative.dev/)
-  [Redux](https://redux.js.org/)
-  [Redux-Saga](https://redux-saga.js.org/)
-  [React Navigation](https://reactnavigation.org/)
-  [Axios](https://github.com/axios/axios)
-  [Immer](https://github.com/immerjs/immer)
-  [Polished](https://polished.js.org/)
-  [styled-components](https://www.styled-components.com/)
-  [React-Native-Vector-Icons](https://github.com/oblador/react-native-vector-icons)
-  [Reactotron](https://infinite.red/reactotron)
-  [date-fns](https://date-fns.org/)
-  [prop-types](https://github.com/facebook/prop-types)
-  [yup](https://github.com/jquense/yup)
-  [AsyncStorage](https://github.com/react-native-community/async-storage)

# Others

-  [VS Code][vc] with [EditorConfig][vceditconfig], [ESLint][vceslint] and [Prettier][prettier]

## :computer: Instalação, execução e desenvolvimento

Importe o arquivo `Insomnia.json` no Insomnia ou clique no botão [Run in Insomnia](#insomniaButton)

### Pré-requisitos

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

**Faça um clone desse repositório**

### Backend

- A partir da raiz do projeto, entre na pasta rodando `cd backend`;
- Rode `yarn` para instalar as dependências(node_modules);
- Rode `cp .env.example .env` e preencha o arquivo `.env` com SUAS variáveis ambiente;
- Rode `docker-compose up -d` para montar o ambiente;
- Rode `yarn sequelize db:migrate` para executar as migrations;
- Para executar somente a migration de `admin-user` rode o comando `yarn sequelize db:seed:all`
- Rode `yarn queue` para iniciar o servidor de envio de emails;
- Rode `yarn dev` para iniciar o servidor backend;

### Web

_ps: Antes de executar, lembre-se de iniciar o backend deste projeto_

- A partir da raiz do projeto, entre na pasta do frontend rodando `cd frontend`;
- Rode `yarn` para instalar as dependências(node_modules);
- Rode `yarn start` para iniciar o client web;

### Mobile

Obs.: Esse projeto mobile foi testado apenas no **Android**.

_ps: Antes de executar, lembre-se de iniciar o backend deste projeto_

- A partir da raiz do projeto, entre na pasta do mobile mobile rodando `cd mobile`;
- Rode `yarn` para instalar as dependências(node_modules);

- Edite o arquivo `mobile/src/services/api.js`, alterando `baseURL` para o IP correspondente a máquina que estiver executando o `backend`;
- Abra o emulador do Android ou conecte seu dispositivo via USB, em seguida, rode `yarn android`;

## 🤔 Como contribuir

- **Faça um fork deste repositório**

```bash
# Fork via GitHub official command line
# Caso não tenha o GitHub CLI, realize o fork pelo site.

$ gh repo fork EliasGcf/fastfeet
```

```bash
# Clone o seu fork
$ git clone url-do-seu-fork && cd fastfeet

# Crie uma branch com sua feature
$ git checkout -b minha-feature

# Faça o commit das suas alterações
$ git commit -m 'feat: Minha nova feature'

# Faça o push para a sua branch
$ git push origin minha-feature
```

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

---

Project by [Charles Pereira](https://www.linkedin.com/in/charles-pereira-97471a57/)
