"use strict";

var socket;

$(document).ready(function () {
    socket = io("http://192.168.99.101:3001", { reconnect: true, transports: ['websocket', 'polling'] });
    socket.on("hostname", response => {
        console.log({response});
        $("#hostname").html(response.hostname);
    });
    registerEvents();
})

function testRequest(){
  socket.emit('gethostname',{msg: 'hallo welt'});
}

function registerEvents(){
    $('#button').on('click', function(){
        testRequest();
    })
}
