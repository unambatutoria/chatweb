$(function(){
  //socket inciado
  var socket = io();
  //variables
  var message = $('#chat-message');
  var chat = $('#chat');

  message.focus();

  $('#message-box').submit(function(e){
    e.preventDefault();
    socket.emit('cliente-message',message.val());
    message.val("");
  });

  socket.on('message-server',function(data){
    chat.append(data + "<br/>");
  })
})
