const getAPIHandler = require("utils/getAPIHandler");
const { UserSchema } = require("@models");
const getModel = require("utils/getModel");
const authenticate = require("middlewares/authenticate");

let handler = getAPIHandler();

handler.post(authenticate, async (req, res, next) => {
  const { email, ...attributes } = req.body;

  if (!email) {
    return res._reject(400, "Utilisateur non identifié");
  }

  if (!(req._session.user.email === email)) {
    return res._reject(403);
  }

  const User = await getModel("users", UserSchema);
  let user = await User.findByEmail(email);
  await user.update(attributes);
  return res.json(user);
});

module.exports = handler;
