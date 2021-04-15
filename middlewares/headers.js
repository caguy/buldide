const helmet = require("helmet");

module.exports = function headersHandler() {
  return (req, res, next) => {
    return helmet()(req, res, next);
  };
};
