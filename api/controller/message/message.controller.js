const {createMessage,getAllMessage,getMessageByFromUserId,getMessageByToUserId,updateMessage,deleteMessage} = require('./message.service')
module.exports = ({
    createMessages: (req, res) => {
        console.log(req.body)
        createMessage(req, (err, data) => {
                if (err) {
                    res.json({
                        success: 0,
                        msg:err
                    })
                } else {
                res.json({
                    success:1,
                    msg:"Message added",
                    result:data
                })
                }
            })
    },
   
    getAllMessages: (req, res) => {
        getAllMessage(req, (err, data) => {
            if (err) {
                res.json({
                    success: 0,
                    msg: err
                })
            } else {
                res.json({
                    success: 1,
                    msg:"loaded",
                    result: data
                })
            }
        })
    },
    getMessagesByFromUserId: (req, res) => {
        getMessageByFromUserId(req, (err, data) => {
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
                    msg:"found",
                    result: data
                })
            }
        })
    },
    getMessagesByToUserId: (req, res) => {
        getMessageByToUserId(req, (err, data) => {
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
                    msg:"found",
                    result: data
                })
            }
        })
    },
    updateMessages: (req, res) => {
        updateMessage(req, (err, data) => {
            if (err) {
                res.json({
                    success: 0,
                    msg: err,
                })
            } else {
                res.json({
                    success: 1,
                    msg:"updated successfully",
                    result: data
                })
            }
        })
    },
    deleteMessages: (req, res) => {
        deleteMessage(req, (err, data) => {
            if (err) {
                res.json({
                    success: 0,
                    msg:err
                })
            } else {
                res.json({
                    success: 1,
                    msg:"deleted successfully",
                    result: data
                })
            }
        })
    },
})