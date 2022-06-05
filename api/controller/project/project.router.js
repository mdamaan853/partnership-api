const express = require('express')
const router = express.Router()
const multer = require('multer')

const {createProjects,getAllprojects,getProjectsById,updateProjects,deleteProjects} = require('./project.controller')


const storage = multer.diskStorage({
    destination: './upload/project',
    filename: (req, file, cb) => {
        return cb(null, file.fieldname + Date.now() + file.originalname)
    }
})

const upload = multer({
    storage: storage
})

router.post('/upload', upload.fields([
    {name:"projectDoc",maxCount:12},
    {name:"Images",maxCount:12},
    {name:"license",maxCount:1},
    {name:"pitchDeck",maxCount:1}
]),createProjects);

router.get('/',getAllprojects);

router.get('/:id',getProjectsById);

router.get('/user/:id',getProjectsById);

router.patch('/:id',upload.fields([
    {name:"projectDoc",maxCount:12},
    {name:"Images",maxCount:12},
    {name:"license",maxCount:1},
    {name:"pitchDeck",maxCount:1}
]),updateProjects);

router.delete('/:id',deleteProjects);

module.exports = router; 