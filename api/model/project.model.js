const { Schema } = require('mongoose');
const mongoose = require('./maindb')
const projectSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: [true, 'Name is required']
    },
    projectDesc: {
        type: String,
        // min:20,
        // description: "it should be more than 20 word"
    },
    projectPrice:{
        type:Number,
        // required:[true,"Price should not be empty"]
    },
    projectDoc: {
        type: Array,
        required: [true, 'Name is required']
    },
    intrestedUser:{
        type:Array,
        ref:"user"
    },
    location:{
        type:String
    },
    Images:{
        type:Array,
        required: [true, 'Name is required']
    },
    license: {
        type: Array,
        required: [true, 'Name is required']
    },
    pitchDeck: {
        type: Array,
        required: [true, 'Name is required']
    },
    isActive: {
        type: Boolean,
        default:true
    },
    userId: {
        type:String,
        ref:"user"
    },
    date: {
        type: Date
    }
})
const projectmodel = mongoose.model('project', projectSchema);
module.exports = projectmodel;
