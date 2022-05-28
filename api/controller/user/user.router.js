const express = require('express')
const router = express.Router()
const multer = require('multer')

const { createUsers,getAllUsers,getUsersById,loginUsers, updateUsers, deleteUsers} = require('./user.controller')
const {checkMobile} =require('../../middleware/users/uniquePhone')
const upload = multer()

router.post('/register', upload.none(),checkMobile,createUsers);
    
router.post('/login',upload.none(),loginUsers);

router.get('/',getAllUsers);

router.get('/:id',getUsersById);

router.patch('/:id',upload.none(),updateUsers);

router.delete('/:id',deleteUsers);


module.exports = router; 