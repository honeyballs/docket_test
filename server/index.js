// Setup basic express server
var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3001;
var hostname = process.env.HOSTNAME || "No hostname specified"

server.listen(port, () => {
  console.log('Server listening at port %d', port);
});


io.set('transports', ['websocket', 'polling']);

io.on( 'connection', socket => {

    console.log("connected");
    io.emit( "hostname" , {hostname: hostname});

    socket.on('gethostname', data=>{
      console.log("socket request received "+data.msg)
      socket.emit( "hostname" , {hostname: hostname});
    })
});
