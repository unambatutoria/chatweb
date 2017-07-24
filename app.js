const http = require('http');
const express  = require('express');
const app  = express();
//cargamos socket.io en los requerimientos
const io  = require('socket.io');
//sobrecargamos la variable server para pasar todo de app
const server = http.createServer(app);

//configuramos para tener que app le de el puerto el servidor
app.set('port',3000);

//usamos express para cargar la interfaz
app.use(express.static(__dirname + "/public"));

//indicamos que el servidor se ah inciado en el puerto 3000
server.listen(app.get('port'), function(){
  console.log('el servidor se ah iniciado');
})

var sockets = io.listen(server);

sockets.on('connection',function(socket){
  console.log('nuevocliente conectado');
  socket.on('cliente-message',function(data){
    sockets.emit('message-server',data);
  });
})
