
function verifiedTaskModification(req, res, next) {
    const new_body = {}
    let haveAttributes = false
    let modifiedAttributes = ['description', 'status', 'tags', 'manager', 'comment']
    modifiedAttributes.forEach((key) => {
        if (key in req.body) {
            haveAttributes = true
            new_body[key] = req.body[key];
        }
    })
    if (!haveAttributes) {
        return res.status(404).send(`at least one of the following attributes must be provided ${modifiedAttributes}`)
    }
    req.body.changeData = new_body
    next()
}

module.exports = verifiedTaskModification
