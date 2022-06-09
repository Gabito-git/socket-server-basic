/**
 * Se trata de la inicializacion del server. Para esto, se instaló el 
 * paquete socket.io
 * 
 * socket.emit solo emite al cliente que haya provocado la emisión,
 * es decir, el cliente que haya disparado el evento que causó el emit
 * 
 * io.emit emite a todos los conectados en el namespace
 */

const Server = require("./models/server");
require('dotenv').config();

const server = new Server();

server.execute();


// io.on('connection', (socket) => {
//   // socket.emit('mensaje-bienvenida', {
//   //   msg: 'Bienvenido al server',
//   //   date: new Date()
//   // })

//   socket.on('mensaje-to-server', (data) => {
//     console.log(data);

//     io.emit('mensaje-from-server', data);
//   })
// });


