const jwt = require("jsonwebtoken");
const { JWT_ACCESS_TOKEN_NAME, JWT_KEY, JWT_VALIDITY } = require("@config");
const User = require("@models/User");
const getAPIHandler = require("@utils/getAPIHandler");

let handler = getAPIHandler();

handler.post(async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res._reject(400, "Requête invalide");
    }

    let user = await User.getUserByName(username);

    if (user) {
      let passwordMatch = await user.passwordMatch(password);

      if (passwordMatch) {
        const payload = {
          id: user._id,
          username: user.username,
          isAdmin: user.isAdmin,
        };

        const accessToken = await jwt.sign(payload, JWT_KEY, {
          expiresIn: JWT_VALIDITY,
        });

        res._cookie(JWT_ACCESS_TOKEN_NAME, accessToken, { httpOnly: true });

        return res.status(201).json(payload);
      }
    }
    return res._reject(
      401,
      "Aucun compte associé à ce nom d'utilisateur et ce mot de passe"
    );
  } catch (err) {
    return next(err);
  }
});

export default handler;
