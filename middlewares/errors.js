module.exports = function errorsHandler(err, req, res, next) {
  // If headers are already sent, let express handle it
  if (res._headerSent) {
    return next(err);
  }

  // If error is due to databse validation
  if (err.name === "ValidationError") {
    let details = {};

    for (let error in err.errors) {
      details[error] = err.errors[error].message;
    }
    return res._reject(400, "Données invalides", details);
  }

  // If error is unexpected
  console.error(`Erreur à l'exécution de ${req.method} ${req.url} :`);
  console.error(err.stack);
  return res.status(500).json({ error: "Internal error" });
};
