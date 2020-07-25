const routes = require("express").Router();

routes.post("/send", (req, res) => {
  const producer = req.producer;
  producer();
  res.send({ ok: "true" });
});

module.exports = routes;
