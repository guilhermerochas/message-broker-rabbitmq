const Express = require("express");
const routes = require("./routes");
const rabbitmq = require("./rabbitmq/producer");

const app = Express();

app.use(routes);

rabbitmq();

module.exports = app;
