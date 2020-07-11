const fortune = require('./fortune');

exports.home = (req, res) => res.render("home");

exports.about = (req, res) => {
  res.render("about", { fortune: fortune.getFortune() });
};

exports.notFound = (req, res) => {
  res.status(404);
  res.render("404");
};
// O Express reconhece o manipulador de erro pelos seus
// quatro argumentos, log, temos de desativar a regra
// de variáveis não usadas do ESLint

/* eslint-disable-next-line no-unused-vars */
exports.serverError = (err, req, res, next) => {
  console.error(err.message);
  res.status(505);
  res.render("505");
};