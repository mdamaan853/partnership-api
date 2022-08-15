const express = require('express')
const router = express.Router()
const multer = require('multer')

const {createMessages,getAllMessages,getMessagesByFromUserId,getMessagesByToUserId,updateMessages,deleteMessages} = require('./message.controller')

const storage = multer.diskStorage({
    destination: './upload/message',
    filename: (req, file, cb) => {
        return cb(null, file.fieldname + Date.now() + file.originalname)
    }
})

const upload = multer({ 
    storage: storage
}).none()

router.post('/create', upload,createMessages);

router.get('/',getAllMessages);
router.get('from/:id',getMessagesByFromUserId);
router.get('to/:id',getMessagesByToUserId);

router.patch('/:id',upload,updateMessages);

router.delete('/:id',deleteMessages);

module.exports = router; 