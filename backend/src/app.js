const express = require('express');

class app {
  constructor() {
    this.server = express();

    this.middlewares();
    this.route();
  }



  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;
