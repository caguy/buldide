const getDatabase = require("utils/getDatabase");

module.exports = async (name, schema) => {
  const db = await getDatabase();
  let model;
  try {
    model = db.model(name);
  } catch (err) {
    model = db.model(name, schema);
  }
  return model;
};
