const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let biodataStore = [
  {
    id: 1,
    nama: "Muhammad Akbar Firnanda",
    umur: 22,
    alamat: "Wonogiri",
    pekerjaan: "Software Developer"
  }
];

let currentId = 1;

const sendResponse = (res, statusCode, status, message, data = null) => {
  return res.status(statusCode).json({
    status,
    message,
    data
  });
};

app.get('/api/biodata', (req, res) => {
  return sendResponse(res, 200, 'success', 'Berhasil mengambil seluruh data biodata', biodataStore);
});

app.get('/api/biodata/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const item = biodataStore.find(b => b.id === id);

  if (!item) {
    return sendResponse(res, 404, 'fail', `Data biodata dengan ID ${id} tidak ditemukan`);
  }

  return sendResponse(res, 200, 'success', 'Berhasil mengambil detail biodata', item);
});

app.post('/api/biodata', (req, res) => {
  const { nama, umur, alamat, pekerjaan } = req.body;

  if (!nama || umur === undefined || !alamat || !pekerjaan) {
    return sendResponse(res, 400, 'fail', 'Semua field (nama, umur, alamat, pekerjaan) wajib diisi');
  }

  currentId += 1;
  const newBiodata = {
    id: currentId,
    nama,
    umur: Number(umur),
    alamat,
    pekerjaan
  };

  biodataStore.push(newBiodata);
  return sendResponse(res, 201, 'success', 'Berhasil menambahkan biodata baru', newBiodata);
});

app.put('/api/biodata/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const index = biodataStore.findIndex(b => b.id === id);

  if (index === -1) {
    return sendResponse(res, 404, 'fail', `Data biodata dengan ID ${id} tidak ditemukan`);
  }

  const { nama, umur, alamat, pekerjaan } = req.body;

  if (nama !== undefined) biodataStore[index].nama = nama;
  if (umur !== undefined) biodataStore[index].umur = Number(umur);
  if (alamat !== undefined) biodataStore[index].alamat = alamat;
  if (pekerjaan !== undefined) biodataStore[index].pekerjaan = pekerjaan;

  return sendResponse(res, 200, 'success', 'Berhasil memperbarui data biodata', biodataStore[index]);
});

app.delete('/api/biodata/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const index = biodataStore.findIndex(b => b.id === id);

  if (index === -1) {
    return sendResponse(res, 404, 'fail', `Data biodata dengan ID ${id} tidak ditemukan`);
  }

  const deletedItem = biodataStore.splice(index, 1)[0];
  return sendResponse(res, 200, 'success', 'Berhasil menghapus data biodata', deletedItem);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});