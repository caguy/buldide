const defaultMessages = {
  400: "Bad request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not found",
};

module.exports = function rejectHandler(code, message, details) {
  return (req, res, next) => {
    res._reject = (code, message, details) => {
      if (!Object.keys(defaultMessages).includes(code + "")) {
        return next(
          new Error(
            `Tried to reject the request with a ${code} status, but it is not supported`
          )
        );
      }
      let responseObj = { message: message || defaultMessages[code] };
      if (details) responseObj.details = details;
      return res.status(code).json(responseObj);
    };
    next();
  };
};
