let dataTerakhir = {};

export default function handler(req, res) {
  if (req.method === 'POST') {
    console.log('📩 Data dari ESP:', req.body);
    dataTerakhir = req.body;
    res.status(200).json({ status: 'Data diterima' });
  } else if (req.method === 'GET') {
    res.status(200).json(dataTerakhir);
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
