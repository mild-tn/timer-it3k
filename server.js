const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const port = 9000

io.on('connection', function(socket){
  socket.on('timeFromAdmin',(time)=>{
    console.log(time)
    io.sockets.emit('time',time)
  })

  socket.on('startTime',(start)=>{
    console.log(start)
    io.sockets.emit('start',start)
  })

  socket.on('stopTime',(start)=>{
    console.log(start)
    io.sockets.emit('stop',start)
  })

  socket.on('resumeTime',(resume)=>{
    console.log(resume)
    io.sockets.emit('resume',resume)
  })

  socket.on('resetTime',(reset)=>{
    console.log(reset)
    io.sockets.emit('reset',reset)
  })

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});


http.listen(port, function () {
  console.log('listen port :' + port)
});