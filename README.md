# RESTful API Biodata Store

Proyek ini merupakan implementasi RESTful API sederhana untuk mengelola data biodata berbasis **In-Memory Data Store** (Array JavaScript). Dibuat menggunakan Node.js dan Express.js untuk memenuhi Tugas 1 Mata Kuliah Pemrograman Web Service.

## Fitur & Endpoint

API ini menyediakan 5 endpoint utama untuk operasi CRUD:

| Method | Endpoint           | Deskripsi                                 | Status Code                       |
| ------ | ------------------ | ----------------------------------------- | --------------------------------- |
| GET    | `/api/biodata`     | Menampilkan seluruh daftar biodata        | `200 OK`                          |
| GET    | `/api/biodata/:id` | Menampilkan detail biodata berdasarkan ID | `200 OK` / `404 Not Found`        |
| POST   | `/api/biodata`     | Menambahkan data biodata baru             | `201 Created` / `400 Bad Request` |
| PUT    | `/api/biodata/:id` | Memperbarui data biodata berdasarkan ID   | `200 OK` / `404 Not Found`        |
| DELETE | `/api/biodata/:id` | Menghapus data biodata berdasarkan ID     | `200 OK` / `404 Not Found`        |

## Skema Data Biodata

```json
{
  "id": 1,
  "nama": "Muhammad Akbar Firnanda",
  "umur": 22,
  "alamat": "Wonogiri",
  "pekerjaan": "Karyawan Swasta Dan Pelajar"
}
```
## Hasil Pengujian Endpoint (Postman)

### 1. GET All Biodata (`200 OK`)
![GET All Biodata](./gambar1%20(2).png)

### 2. POST Tambah Biodata (`201 Created`)
![POST Tambah Biodata](./gambar1%20(4).png)

### 3. GET Detail Biodata (`200 OK`)
![GET Detail Biodata](./gambar1%20(5).png)

### 4. PUT Update Biodata (`200 OK`)
![PUT Update Biodata](./gambar1%20(7).png)

### 5. DELETE Hapus Biodata (`200 OK`)
![DELETE Hapus Biodata](./gambar1%20(8).png)
