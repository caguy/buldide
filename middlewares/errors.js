module.exports = function errorsHandler(err, req, res, next) {
  if (res._headerSent) {
    // Headers are already sent : let express deal with it
    return next(err);
  }

  if (err.name === "ValidationError") {
    // Error is due to invalid data format
    let details = {};

    for (let error in err.errors) {
      details[error] = err.errors[error].message;
    }

    return res._reject(422, "Données invalides", details);
  }

  if (err.codeName === "DuplicateKey") {
    // Error due to duplicate value in table
    let details = {};

    for (let value in err.keyValue) {
      details[value] = "Valeur déjà existante";
    }

    return res._reject(409, "Valeur déjà existante", details);
  }

  // If error is unexpected
  console.error(`Erreur à l'exécution de ${req.method} ${req.url} :`);
  console.error(err.stack);
  return res.status(500).json({ error: "Internal error" });
};
