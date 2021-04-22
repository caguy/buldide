const mongoose = require("mongoose");

module.exports = async function () {
  if (!process.env.MONGO_DB_URI)
    throw new Error(
      "Impossible de se connecter à la base de données : l'URL n'est pas configurée"
    );

  if (mongoose.connections[0].readyState) {
    // Use current db connection
    return mongoose;
  }

  try {
    // Use new db connection
    return await mongoose.connect(process.env.MONGO_DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  } catch (err) {
    console.error(`Failed to connect to database`);
    throw err;
  }
};
