async function ambilDataESP() {
  const response = await fetch('/api/esp');
  const data = await response.json();
  console.log('📡 Data dari API:', data);

  // contoh menampilkan ke HTML
  document.getElementById('dataESP').innerText = JSON.stringify(data);
}

setInterval(ambilDataESP, 2000); // Ambil data tiap 2 detik
