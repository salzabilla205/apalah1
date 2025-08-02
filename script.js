// script.js
async function ambilDataTerbaru() {
  try {
    const response = await fetch('/api/terbaru');
    const data = await response.json();
    document.getElementById('data').innerText = JSON.stringify(data);
  } catch (err) {
    document.getElementById('data').innerText = 'Gagal mengambil data';
  }
}

// Ambil data setiap 3 detik
setInterval(ambilDataTerbaru, 3000);

// Pertama kali langsung ambil
ambilDataTerbaru();
