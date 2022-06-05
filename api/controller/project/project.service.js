const projectModel = require('../../model/project.model')
module.exports = ({
    createProject: (req, res) => {
     new projectModel({ 
        projectName:req.body.projectName,
        projectDesc:req.body.projectDesc,
        projectDoc:req.body.projectDoc,
        location:req.body.location,
        Images:req.body.Images,
        license:req.body.license,
        pitchDeck:req.body.pitchDeck,
        userId:req.body.userId,
        date:new Date(),
        }).save((err, data) => {
        if (err){
            return res(err)
            }
        return res(null,data)
    })
},
getAllproject: (req, res) => {
    projectModel.find().populate("userId").sort({_id:-1}).exec((err, data) => {
        if (err){
            return res(err);
        }
        return res(null,data)
    })
},
getProjectById: (req, res) => {
    projectModel.find({_id:req.params.id}).populate("userId").exec((err, data) => {
        if (err){
            return res(err);
        }
        return res(null,data)
    })
},
getUserIntrestedInProject: (req, res) => {
    projectModel.find({intrestedUser:req.params.id}).populate("userId").exec((err, data) => {
        if (err){
            return res(err);
        }
        return res(null,data)
    })
},
getProjectByUserId: (req, res) => {
    projectModel.find({userId:req.params.id}).populate("userId").populate("intrestedUser").exec((err, data) => {
        if (err){
            return res(err);
        }
        return res(null,data)
    })
},
updateProject: (req, res) => {
    projectModel.updateOne({_id:req.params.id},{$set:req.body}).exec((err, data) => {
        if (err){
            return res(err);
        }
        return res(null,data)
    })
},
deleteProject: (req, res) => {
    projectModel.deleteOne({_id:req.params.id}).exec((err, data) => {
        if (err){
            return res(err);
        }
        return res(null,data)
    })
}
})