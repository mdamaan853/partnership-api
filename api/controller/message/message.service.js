const messageModel = require('../../model/message.model')
module.exports = ({
    createMessage: (req, res) => {
     new messageModel({ 
        message:req.body.message,
        fromUser:req.body.fromUser,
        toUser:req.body.toUser,
        date:new Date(),
        }).save((err, data) => {
        if (err){
            return res(err)
            }
        return res(null,data)
    })
},
getAllMessage: (req, res) => {
    messageModel.find().exec((err, data) => {
        if (err){
            return res(err);
        }
        return res(null,data)
    })
},
getMessageByFromUserId: (req, res) => {
    messageModel.find({fromUser:req.params.id}).exec((err, data) => {
        if (err){
            return res(err);
        }
        return res(null,data)
    })
},
getMessageByToUserId: (req, res) => {
    messageModel.find({toUser:req.params.id}).exec((err, data) => {
        if (err){
            return res(err);
        }
        return res(null,data)
    })
},
updateMessage: (req, res) => {
    messageModel.updateOne({_id:req.params.id},{$set:req.body}).exec((err, data) => {
        if (err){
            return res(err);
        }
        return res(null,data)
    })
},
deleteMessage: (req, res) => {
    messageModel.deleteOne({_id:req.params.id}).exec((err, data) => {
        if (err){
            return res(err);
        }
        return res(null,data)
    })
}
})