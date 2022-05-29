const express = require('express');
const bodyParser=require('body-parser')
const app = express()
const cors = require('cors')
const multer=require("multer")

const userRouter = require('./api/controller/user/user.router')
const projectRouter = require('./api/controller/project/project.router')

const PORT=process.env.PORT || 3000


const upload=multer().none()
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors());

app.use(express.static('upload'));

app.use("/user",userRouter);
app.use("/project",projectRouter)

app.get('/ping',(req,res)=>{
res.send('server is on')
});

app.listen(3000, () => {
    console.log(`HTTPS Server running on port ${3000}`);
});

