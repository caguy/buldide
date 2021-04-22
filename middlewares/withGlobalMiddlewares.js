const dbConnect = require("./dbConnect");
const headers = require("./headers");
const logs = require("./logs");
const reject = require("./reject");

module.exports = function withGlobalMiddlewares(handler) {
  handler.use(logs(process.env.NODE_ENV));
  handler.use(dbConnect());
  handler.use(headers());
  handler.use(reject());
  return handler;
};
