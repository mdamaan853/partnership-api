const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
require('dotenv').config();
// const promise=mongoose.connect(`mongodb://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASS}@${process.env.MONGO_DB_IP}:${process.env.MONGO_DB_PORT}/${process.env.MONGO_DB_NAME}`,{useNewUrlParser:true,useUnifiedTopology:true})
const promise=mongoose.connect(`mongodb+srv://partnership-admin:Password+123@cluster0.l0jqg.mongodb.net/?retryWrites=true&w=majority`,{useNewUrlParser:true,useUnifiedTopology:true})
promise.then(function(db) {
    console.log("Connected to database!!!");
}, function(err){
    console.log("Error in connecting database " + err);
});

module.exports=mongoose