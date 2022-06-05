const {createProject,getProjectById,getProjectByUserId,getAllproject,updateProject,deleteProject} = require('./project.service')
module.exports = ({
    createProjects: (req, res) => {
        console.log(req.files.projectDoc)
        if(req.files.projectDoc){
            req.body.projectDoc=req.files.projectDoc.map(element => {
                return element.path
            });
        }
        if(req.files.Images){
            req.body.Images=req.files.Images.map(element => {
                return element.path
            });
        }
        if(req.files.license){
            req.body.license=req.files.license.map(element => {
                return element.path
            });
        }
        if(req.files.pitchDeck){
            req.body.pitchDeck=req.files.pitchDeck.map(element => {
                return element.path
            });
        }
        console.log(req.body)
        createProject(req, (err, data) => {
                if (err) {
                    res.json({
                        success: 0,
                        msg:err
                    })
                } else {
                res.json({
                    success:1,
                    msg:"success to add project",
                    result:data
                })
                }
            })
    },
   
    getAllprojects: (req, res) => {
        getAllproject(req, (err, data) => {
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
    getProjectsById: (req, res) => {
        getProjectById(req, (err, data) => {
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
    getProjectByUsersId: (req, res) => {
        getProjectByUserId(req, (err, data) => {
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
    updateProjects: (req, res) => {
        if (req.body.intrestedUser) req.body.intrestedUser = JSON.parse(req.body.intrestedUser);
        if(req.files.projectDoc){
            req.body.projectDoc=req.files.projectDoc.map(element => {
                return element.path
            });
        }
        if(req.files.Images){
            req.body.Images=req.files.Images.map(element => {
                return element.path
            });
        }
        if(req.files.license){
            req.body.license=req.files.license.map(element => {
                return element.path
            });
        }
        if(req.files.pitchDeck){
            req.body.pitchDeck=req.files.pitchDeck.map(element => {
                return element.path
            });
        }
        updateProject(req, (err, data) => {
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
    deleteProjects: (req, res) => {
        deleteProject(req, (err, data) => {
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