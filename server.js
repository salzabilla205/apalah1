let dataTerakhir = {}; // Menyimpan data terakhir yang dikirim ESP

app.post('/api/terimaData', (req, res) => {
  console.log('📩 Data dari ESP:', req.body);
  dataTerakhir = req.body; // Simpan data untuk ditampilkan di web
  res.json({ status: 'Data diterima' });
});

app.get('/api/terbaru', (req, res) => {
  res.json(dataTerakhir); // Kirim data ke frontend
});
