const userModel = require('../../model/user.model')
module.exports = ({
    createUser: (req, res) => {
     new userModel({ 
        phone:req.body.phone,
        password:req.body.password,
        isVerified:req.body.isVerified,
        deviceId:req.body.deviceId,
        date:new Date(),
        }).save((err, data) => {
        if (err){
            return res(err)
            }
        return res(null,data)
    })
},
loginUser: (req, res) => {
    userModel.find({phone:req.body.phone}).exec((err, data) => {
        if (err) {
            return res(err);
        }
        return res(null, data[0])
    })
},
getAllUser: (req, res) => {
    userModel.find().exec((err, data) => {
        if (err){
            return res(err);
        }
        return res(null,data)
    })
},
getUserById: (req, res) => {
    userModel.find({_id:req.params.id}).exec((err, data) => {
        if (err){
            return res(err);
        }
        return res(null,data)
    })
},
updateUser: (req, res) => {
    userModel.updateOne({_id:req.params.id},{$set:req.body}).exec((err, data) => {
        if (err){
            return res(err);
        }
        return res(null,data)
    })
},
deleteUser: (req, res) => {
    userModel.deleteOne({_id:req.params.id}).exec((err, data) => {
        if (err){
            return res(err);
        }
        return res(null,data)
    })
}
})