const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
    var token = req.headers.token;
    console.log(token)
    try {
        var decode = jwt.verify(token,process.env.JWT_SECRET_KEY)
        console.log(decode)
        console.log('you are logged in'),
            next();
    } catch {
        res.json({
            success: 0,
            msg: "invalid token Auth failed"
        })
    }
}