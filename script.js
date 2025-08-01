const socket = io();

socket.on('data', function (data) {
  document.getElementById('data').textContent = data;
});