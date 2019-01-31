const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const port = 9000

io.on('connection', function(socket){
  socket.on('timeFromAdmin',(time)=>{
    console.log(time)
    io.sockets.emit('time',time)
  })

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});


http.listen(port, function () {
  console.log('listen port :' + port)
});