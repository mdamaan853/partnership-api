const express = require('express');
const bodyParser=require('body-parser')
const app = express()
const multer=require("multer")
const http = require('http').Server(app);
const cors = require('cors');

const socketIO = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:3000"
    }
});

const userRouter = require('./api/controller/user/user.router')
const projectRouter = require('./api/controller/project/project.router')
const messageRouter = require('./api/controller/message/message.router')

const PORT=process.env.PORT || 4000
var ip = require("ip");
console.dir ( ip.address() );
const upload=multer().none()

let users = [];

socketIO.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);
    socket.on('message', (data) => {
        socketIO.emit('messageResponse', data);
        console.log(data);
      });

      socket.on('newUser', (data) => {
        //Adds the new user to the list of users
        users.push(data);
        // console.log(users);
        //Sends the list of users to the client
        socketIO.emit('newUserResponse', users);
      });

    socket.on('disconnect', () => {
        users = users.filter((user) => user.socketID !== socket.id);
        // console.log(users);
        //Sends the list of users to the client
        socketIO.emit('newUserResponse', users);
        socket.disconnect();
      console.log('🔥: A user disconnected');
    });
});

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

// var server = app.listen(PORT, () => {
//     console.log(`HTTPS Server running on port ${PORT}`);
// });


http.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });