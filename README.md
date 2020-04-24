<h1 align="center">
  <img alt="FastFeet" height="215" title="FastFeet" src=".github/logo.svg" />
</h1>

<p align="center">Projeto Fastfeet - Bootcamp GoStack 10.0</p>

## :rocket: Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Vscode (EditorConfig, vceditconfig, ESLint, vceslint e Prettier)](https://code.visualstudio.com/)
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
- [Redis](https://redis.js.org/)
- [Sentry](https://sentry.io/welcome/)


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


## :computer: Instalação, execução e desenvolvimento

Importe o arquivo `fastfeet.json` no Insomnia.

### Pré-requisitos

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

**Faça um clone desse repositório**

### Backend

- A partir da raiz do projeto, entre na pasta rodando `cd backend`;
- Rode `yarn` para instalar as dependências(node_modules);
- Rode `cp .env.example .env` e preencha o arquivo `.env` com SUAS variáveis ambiente;
- Rode `docker-compose up -d` para montar o ambiente;
- Rode `docker start fastfeet fastfeetredis` para montar o ambiente;
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

Project by [Charles Pereira](https://www.linkedin.com/in/charles-pereira-97471a57/)
