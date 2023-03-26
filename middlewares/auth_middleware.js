const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split("Bearer ")[1];
    jwt.verify(token, "nextline", (err, user) => {
       if (err) return res.sendStatus(404);
       req.userid = user.user;
       next();
    });
 }

module.exports = verifyToken
