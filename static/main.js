const socket = io();

document.querySelector('#send-message').addEventListener('submit', e => {
  e.preventDefault();
  const inpMsg = document.getElementById('m');
  socket.emit('chat message', inpMsg.value);
  inpMsg.value = '';
});

socket.on('chat message', function(msg) {
  const message = document.createElement('li');
  message.textContent = msg;
  document.getElementById('chat').appendChild(message);
});
