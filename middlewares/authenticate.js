const { getSession } = require("next-auth/client");

module.exports = async (req, res, next) => {
  const session = await getSession({ req });

  if (!session) {
    return res._reject(401);
  }

  req._session = session;
  return next();
};
