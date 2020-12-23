const jwt = require("jsonwebtoken");
const path = require("path");

const {
  isTokenIncluded,
  getAccessTokenFromHeaders,
} = require("../../helpers/auth/JwtTokenHelpers");

const CustomError = require("../../helpers/error/CustomError");

const authCheck = async (req, res, next) => {
  //token check
  const { JWT_SECRET_KEY } = process.env;
  if (!isTokenIncluded(req)) {
    //status: 401_unauth  403_ forbidden
    // Custom Error
    return next(
      new CustomError("You are not authorized to access this route", 401)
    );
  }
  const accessToken = await getAccessTokenFromHeaders(req);

  // console.log(accessToken);

  //1 method
  //TODO async await yapılabilir

  // const verified = jwt.verify(accessToken, JWT_SECRET_KEY);
  // if (!verified) {
  //   return next(
  //     new CustomError("Token verification failed, authorization denied.", 401)
  //   );
  // }

  // req.user = {
  //   id: verified.id,
  //   firstName: verified.firstName,
  // };
  // next();
  // 2. Method
  jwt.verify(accessToken, JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return next(
        new CustomError("Token verification failed, authorization denied.", 401)
      );
    }
    // console.log(decoded);
    req.user = {
      id: decoded.id,
      firstName: decoded.firstName,
      email: decoded.email,
    };
    next();
  });

  // Custom Error
};

module.exports = authCheck;
