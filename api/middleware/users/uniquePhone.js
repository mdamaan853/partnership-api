const userModel = require('../../model/user.model')
module.exports = ({
    checkMobile: (req, res, next) => {
        userModel.find({phone:req.body.phone}).exec((err, data) => {
            console.log(data)
            if (err) {
                console.log(err)
                res.json({
                    success: 0,
                    err: err
                })
            }
            if (data?.length > 0) {
                return res.json({
                    success: 0,
                    msg: "Mobile number already registred"
                })
            }
            next();
        })
    }
})