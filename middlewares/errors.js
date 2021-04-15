module.exports = function errorsHandler(err, req, res, next) {
  if (res._headerSent) {
    return next(err);
  }
  console.error(`Erreur à l'exécution de ${req.method} ${req.url} :`);
  console.error(err.stack);
  return res.status(500).json({ error: "Internal error" });
};
