const express = require('express');
const app = express();
const http = require('http').createServer(app);
const path = require('path');
const io = require('socket.io')(http);

app.use(express.static(path.join(__dirname, '/static')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

io.on('connection', function(socket) {
  socket.on('chat message', function(msg) {
    io.emit('chat message', msg);
  });
});

http.listen(3030, function() {
  console.log('listening on *:3030');
});
