const jwt = require('jsonwebtoken')
const { hashSync, compareSync } = require('bcrypt')
const { createUser, getAllUser, getUserById, loginUser, updateUser, deleteUser } = require('./user.service')
module.exports = ({
    createUsers: (req, res) => {
        // if (req.body.isVerified) req.body.isVerified = JSON.parse(req.body.isVerified);
        if (req.body.phone) req.body.phone = JSON.parse(req.body.phone);
        if (req.body.password == req.body.cpassword){
            req.body.password = hashSync(req.body.password, 10)
            console.log(req.body)
            createUser(req, (err, data) => {
                if (err) {
                    res.json({
                        success: 0,
                        msg:err
                    })
                } else {
                    var token = jwt.sign({
                        email: data.email,
                        mobile: data.mobile
                    }, process.env.JWT_SECRET_KEY, {
                        expiresIn: process.env.JWT_EXPIRE_IN
                    })
                    res.json({
                        success: 1,
                        msg: "successfully regestred",
                        token: token,
                        result: data,
                        userId: data._id,
                    })
                }
            })
        } else {
            res.json({
                success: 0,
                msg: "Password did't match"
            })
        }
    },

    loginUsers: (req, res) => {
        if (req.body.phone) req.body.phone = JSON.parse(req.body.phone);
        loginUser(req, (err, data) => {
            if (err) {
                res.json({
                    success: 0,
                    msg: err
                })
            }
            if (!data) {
                res.json({
                    success: 0,
                    msg: "you have not regestred yet"
                })
            } else {
                var result = compareSync(req.body.password, data.password)
                if (result) {
                    var token = jwt.sign({
                        email: data.email,
                        mobile: data.mobile
                    }, process.env.JWT_SECRET_KEY, {
                        expiresIn: process.env.JWT_EXPIRE_IN
                    })
                    res.json({
                        success: 1,
                        msg: "you are loggedin",
                        token: token,
                        userId: data._id,
                        result: data
                    })
                } else {
                    res.json({
                        success: 0,
                        msg: 'invalid credentials'
                    })
                }
            }
        })
    },
    getAllUsers: (req, res) => {
        getAllUser(req, (err, data) => {
            if (err) {
                res.json({
                    success: 0,
                    msg: err
                })
            } else {
                res.json({
                    success: 1,
                    result: data
                })
            }
        })
    },
    getUsersById: (req, res) => {
        getUserById(req, (err, data) => {
            if (err) {
                res.json({
                    success: 0,
                    msg: err
                })
            }
            if (!data) {
                res.json({
                    success: 0,
                    msg: "no records found"
                })
            } else {
                res.json({
                    success: 1,
                    result: data
                })
            }
        })
    },
    updateUsers: (req, res) => {
        console.log(req.body)
        updateUser(req, (err, data) => {
            if (err) {
                res.json({
                    success: 0,
                    msg:err
                })
            } else {
                res.json({
                    success: 1,
                    result: data
                })
            }
        })
    },
    deleteUsers: (req, res) => {
        deleteUser(req, (err, data) => {
            if (err) {
                res.json({
                    success: 0,
                    msg: "error while fetching " + err
                })
            } else {
                res.json({
                    success: 1,
                    result: data
                })
            }
        })
    },
})