
function verifiedLogin(req, res,next) {
    if (!req.session.userid) {
        return res.send('you are not logged').status(403)
    }
    next()
}

module.exports = verifiedLogin
