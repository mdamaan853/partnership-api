const express = require('express')
const router = express.Router()
const multer = require('multer')

const { createUsers,getAllUsers,getUsersById,loginUsers, updateUsers, deleteUsers} = require('./user.controller')
const {checkMobile} =require('../../middleware/users/uniquePhone')


const storage = multer.diskStorage({
    destination: './upload/user',
    filename: (req, file, cb) => {
        return cb(null, file.fieldname + Date.now() + file.originalname)
    }
})

const upload = multer({ 
    storage: storage
})

router.post('/register', upload.none(),checkMobile,createUsers);
    
router.post('/login',upload.none(),loginUsers);

router.get('/',getAllUsers);

router.get('/:id',getUsersById);

router.patch('/:id',upload.single('profileImg'),updateUsers);

router.delete('/:id',deleteUsers);


module.exports = router; 