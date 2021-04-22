const mongoose = require("mongoose");
const getDatabase = require("utils/getDatabase");

module.exports = function () {
  return async (req, res, next) => {
    await getDatabase();
    next();
  };
};
