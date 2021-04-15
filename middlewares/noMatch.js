module.exports = function noMatchHandler(req, res, next) {
  return res.status(404).json({ error: "Not found" });
};
