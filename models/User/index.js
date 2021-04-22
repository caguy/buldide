const getModel = require("@utils/getModel");

let User = require("./User.schema");
User.statics = { ...User.statics, ...require("./User.services").statics };
User.methods = { ...User.methods, ...require("./User.services").methods };

module.exports = getModel("users", User);
