const Express = require("express");
const routes = require("./routes");
const producer = require("./rabbitmq/producer");

const app = Express();

app.use((req, res, next) => {
  req.producer = producer;
  next();
});

app.use(routes);

module.exports = app;
