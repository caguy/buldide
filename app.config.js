module.exports = {
  SITE_NAME: "Buldidé",
  JWT_ACCESS_TOKEN_NAME: "AccessToken",
  JWT_KEY: process.env.JWT_KEY || "s3cr3t",
  JWT_VALIDITY: "24h",
  MONGO_DB_URI: process.env.MONGO_DB_URI,
};
