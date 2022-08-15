const mongoose = require('./maindb')
const projectSchema = new mongoose.Schema({
    message: {
        type: String,
        required: [true, 'Name is required']
    },
    fromUser: {
        type: String,
        required: [true, 'From User is required']
    },
    toUser:{
        type:String,
        required: [true, 'To user is required']
    },
    date: {
        type: Date
    }
})
const projectmodel = mongoose.model('message', projectSchema);
module.exports = projectmodel;
