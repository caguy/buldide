const getUniqueModel = require("@utils/getUniqueModel");

let User = require("./User.schema");
User.statics = { ...User.statics, ...require("./User.services").statics };
User.methods = { ...User.methods, ...require("./User.services").methods };

module.exports = getUniqueModel("users", User);
