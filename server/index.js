/** Module dependencies. */
const express = require('express');
const path = require('path');
const { Server } = require('http');
const socketIO = require('socket.io');

const port = process.env.PORT || 3000;

// configure the express app and server
const app = express();
const server = Server(app);
const io = socketIO(server);

app.set('port', port);
app.use(express.static(path.resolve(__dirname, '../public/')));

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('a user disconnected');
  });
});

/** Start her up, boys */
server.listen(app.get('port'), () => {
  console.log(`Express server listening on port ${app.get('port')}`);
});
