const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  const authHeader = req.headers.token;
  if (authHeader) {
    jwt.verify(token, process.env.SECRET_KEY, (error, user) => {
      if (error) res.status(403).json("invalid token");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("not authenticated");
  }
}

module.exports = verifyToken;
