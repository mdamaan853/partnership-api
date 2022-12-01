const express = require('express');
const http=require('http')
const bodyParser=require('body-parser')
const app = express()
const cors = require('cors')
const multer=require("multer")

const server = require("http").createServer(app);
// const socketIO = require('socket.io')(http, {
//     cors: {
//         origin: "<http://localhost:3000>"
//     }
// });

// socketIO.on('connection', (socket) => {
//     console.log(`⚡: ${socket.id} user just connected!`);
//     socket.on('disconnect', () => {
//       socket.disconnect() 
//       console.log('🔥: A user disconnected');
//     });
// });
const userRouter = require('./api/controller/user/user.router')
const projectRouter = require('./api/controller/project/project.router')
const messageRouter = require('./api/controller/message/message.router')

const PORT=process.env.PORT || 3000
var ip = require("ip");
console.dir ( ip.address() );

const upload=multer().none()
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors());

app.use(express.static('upload'));

app.use("/user",userRouter);
app.use("/project",projectRouter)
app.use("/message",messageRouter)

app.get('/ping',(req,res)=>{
res.send('server is on')
});

server.listen(PORT, () => {
    console.log(`HTTPS Server running on port ${PORT}`);
});

