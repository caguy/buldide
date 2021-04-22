const getAPIHandler = require("utils/getAPIHandler");
const { UserSchema } = require("@models");
const getModel = require("utils/getModel");
const authenticate = require("middlewares/authenticate");

let handler = getAPIHandler();

handler.post(authenticate, async (req, res, next) => {
  const { email, username } = req.body;

  if (!email) {
    return res._reject(400, "Email obligatoire");
  }

  if (!(req._session.user.email === email)) {
    return res._reject(403);
  }

  const User = await getModel("users", UserSchema);
  let user = await User.findByEmail(email);
  user = await user.setUsername(username);
  return res.json(user);
});

module.exports = handler;
