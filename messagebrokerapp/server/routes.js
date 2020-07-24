const routes = require("express").Router();

routes.get("/", (req, res) => {
  res.send({ ok: "true" });
});

module.exports = routes;
