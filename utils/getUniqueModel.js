const mongoose = require("mongoose");

module.exports = (name, schema) => {
  let model;
  try {
    model = mongoose.model(name);
  } catch (err) {
    model = mongoose.model(name, schema);
  }
  return model;
};
