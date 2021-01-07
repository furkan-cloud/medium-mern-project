const sendJwtToClient = (user, res) => {
  //generete jwt
  const token = user.generateJwtFromUser();

  const { NODE_ENV, JWT_COOKIE } = process.env;
  // hem cookie kayıt ediyor hemde response olarak dönüyor.
  //response
  return res
    .status(200)
    .cookie("access_token", token, {
      httpOnly: true,
      expires: new Date(Date.now() + parseInt(JWT_COOKIE) * 1000 * 30),
      secure: NODE_ENV === "development" ? false : true,
    })
    .json({
      success: true,
      access_token: token,
      user: {
        firstName: user.firstName,
        email: user.email,
        id: user._id,
      },
    });
};

const isTokenIncluded = (req) => {
  return req.header("x-auth-token");
};

const getAccessTokenFromHeaders = (req) => {
  const access_token = req.header("x-auth-token");
  return access_token;
};

module.exports = {
  sendJwtToClient,
  isTokenIncluded,
  getAccessTokenFromHeaders,
};
