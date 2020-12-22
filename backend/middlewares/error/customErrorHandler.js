const CustomError = require("../../helpers/error/CustomError");

const customErrorHandler = (err, req, res, next) => {
  let customError = err;

  if (err.name == "SyntaxError") {
    customError = new CustomError("SyntaxError", 400);
  }
  if (err.name == "ValidationError") {
    customError = new CustomError(err.message, 400);
  }
  if (err.name == "TypeError") {
    customError = new CustomError(err.message, 400);
  }
  //dublıcatekey err.
  // if (err.code == 11000) {
  //   customError = new CustomError("Duplicate Key Found: Check Your Input", 400);
  // }

  if (err.name == "CastError") {
    customError = new CustomError("Please provide a valid id", 400);
  }

  //mongodb casterror

  res.status(customError.status || 500).json({
    errors: [{ message: customError.message }],
  });
};

module.exports = customErrorHandler;
