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
    return res._reject(400, "Données invalides", details);
  }

  if (err.name === "StrictModeError") {
    // Error is due to unexpected data provided
    return res._reject(400);
  }

  // If error is unexpected
  console.error(`Erreur à l'exécution de ${req.method} ${req.url} :`);
  console.error(err.stack);
  return res.status(500).json({ error: "Internal error" });
};
