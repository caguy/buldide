const errors = require("@middlewares/errors");
const noMatch = require("@middlewares/noMatch");
const withGlobalMiddlewares = require("@middlewares/withGlobalMiddlewares");
const nc = require("next-connect");

module.exports = function getHandler() {
  return withGlobalMiddlewares(
    nc({ onError: errors, onNoMatch: noMatch, attachParams: true })
  );
};
