const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static(__dirname)); // buat nyajiin file html/css/js dari folder ini

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('Pengguna terhubung');

  // contoh kirim data dari server ke client
  setInterval(() => {
    const data = {
      suhu: Math.random() * 100,
      arus: Math.random() * 20,
      tegangan: Math.random() * 30
    };
    socket.emit('dataESC', data);
  }, 1000);
});

http.listen(3000, () => {
  console.log('Server berjalan di http://localhost:3000');
});
