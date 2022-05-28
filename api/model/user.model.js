const mongoose = require('./maindb')
const userschema = new mongoose.Schema({
    name: {
        type: String,
        // required: [true, 'Name is required']
    },
    phone: {
        type: Number,
        min: 10,
        description: "Enter valid mobile number"
    },
    profileImg:{
        type:String
    },
    email: {
        type: String,
        pattern: "@mongodb\.com$",
        // required: true,
        description: "Must be a valid email",
    },
    bio:{
        type:String
    },
    prevBussExp:{
        type:String
    },
    DinNo:{
        type:String
    },
    password: {
        type: String,
        required: true,
        // regex = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$",
        description: "enter valid 8 digit password"
    },
    deviceId: {
        type: String
    },
    dob: {
        type: String,
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    state: {
        type: String,
    },
    city: {
        type: String
    },
    date: {
        type: Date
    }
})
const usermodel = mongoose.model('user', userschema);
module.exports = usermodel;
