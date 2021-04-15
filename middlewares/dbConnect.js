const mongoose = require("mongoose");

module.exports = function (dbUri) {
  return async (req, res, next) => {
    if (!dbUri)
      throw new Error(
        "Impossible de se connecter à la base de données : l'URL n'est pas configurée"
      );

    if (mongoose.connections[0].readyState) {
      // Use current db connection
      return next();
    }

    try {
      // Use new db connection
      await mongoose.connect(dbUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      });
      return next();
    } catch (err) {
      console.error(`Failed to connect to database`);
      throw err;
    }
  };
};
