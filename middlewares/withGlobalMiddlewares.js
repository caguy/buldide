const cookies = require("./cookies");
const headers = require("./headers");
const logs = require("./logs");
const reject = require("./reject");

module.exports = function withGlobalMiddlewares(handler) {
  handler.use(logs(process.env.NODE_ENV));
  handler.use(cookies());
  handler.use(headers());
  handler.use(reject());
  return handler;
};
