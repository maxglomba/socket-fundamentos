const express = require('express');
//1 llamar al packete de socket y  http
const socketIO = require('socket.io');
const http = require('http');


const path = require('path');

const app = express();
// 2 - crear servidor con http enviandole nuestro servidor de express
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// 3 - IO = esta es la comunicacion del backend
module.exports.io = socketIO(server);
require('./sockets/socket');


//4 el servidor a la escucha sera server en vez de app
server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});