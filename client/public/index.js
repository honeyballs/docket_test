"use strict";

var socket;

$(document).ready(function () {
    socket = io("http://localhost:3001");
    testRequest();
    registerEvents();
})

function testRequest(){
    socket.on("hostname", response => {
        console.log({response});
        $("#hostname").html(response.hostname);
    });
}

function registerEvents(){
    $('#button').on('click', function(){
        testRequest();
    })
}

