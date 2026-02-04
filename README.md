# 🌏 Terjemahan Nduga - Indonesian to Nduga (Papua) Translator

Aplikasi web penerjemah **Bahasa Indonesia** ke **Bahasa Nduga (Papua)** dan sebaliknya.

## ✨ Fitur

- 🔄 **Terjemahan Dua Arah** - Indonesia ↔ Nduga
- ⚡ **Real-time Translation** - Terjemahan otomatis saat mengetik
- 🎨 **Modern UI** - Design premium dengan Tailwind CSS
- 📱 **Responsive** - Tampilan optimal di semua perangkat
- 📋 **Copy to Clipboard** - Salin hasil terjemahan dengan satu klik
- ⌨️ **Keyboard Shortcuts** - Shortcut untuk produktivitas
- 💾 **Local Storage** - Simpan statistik terjemahan
- 📚 **150+ Kata** - Kamus lengkap dengan berbagai kategori

## 🚀 Cara Menggunakan

### Metode 1: Langsung Buka di Browser

1. Buka file `index.html` di browser (double-click)
2. Mulai menerjemahkan!

### Metode 2: Menggunakan Live Server (Recommended)

1. Install extension **Live Server** di VS Code
2. Klik kanan pada `index.html` → **Open with Live Server**
3. Aplikasi akan terbuka di `http://localhost:5500`

### Metode 3: Menggunakan Python HTTP Server

```bash
# Masuk ke folder project
cd c:\coding\web\terjemahan-nduga

# Jalankan server (Python 3)
python -m http.server 8000

# Buka browser: http://localhost:8000
```

## ⌨️ Keyboard Shortcuts

- `Ctrl/Cmd + Enter` - Terjemahkan
- `Ctrl/Cmd + K` - Hapus input
- `Ctrl/Cmd + C` - Salin hasil (saat output difokuskan)

## 📁 Struktur Project

```
terjemahan-nduga/
├── index.html          # Halaman utama aplikasi
├── script.js           # Logika terjemahan & interaktivitas
├── kamus.json          # Database kamus Indonesia-Nduga
└── README.md           # Dokumentasi (file ini)
```

## 📚 Kategori Kata dalam Kamus

- ✅ Sapaan & Kata Dasar (halo, terima kasih, dll)
- ✅ Keluarga (ayah, ibu, anak, dll)
- ✅ Angka (1-10)
- ✅ Alam (gunung, sungai, air, dll)
- ✅ Hewan (babi, burung, ikan, dll)
- ✅ Makanan (makan, minum, nasi, dll)
- ✅ Kata Kerja (pergi, datang, tidur, dll)
- ✅ Kata Sifat (besar, kecil, cantik, dll)
- ✅ Waktu (hari, malam, pagi, dll)
- ✅ Tempat (rumah, kampung, hutan, dll)
- ✅ Kata Tanya (apa, siapa, dimana, dll)
- ✅ Warna (merah, putih, hitam, dll)
- ✅ Tubuh (kepala, mata, tangan, dll)
- ✅ Emosi (senang, sedih, marah, dll)

## 🔧 Menambah Kata Baru

Edit file `kamus.json` dan tambahkan pasangan kata:

```json
{
    "kata_indonesia": "kata_nduga",
    "contoh": "wa"
}
```

**Format:**

- Key: kata dalam Bahasa Indonesia (lowercase)
- Value: terjemahan dalam Bahasa Nduga

## 🎨 Teknologi yang Digunakan

- **HTML5** - Struktur halaman
- **Tailwind CSS** - Styling modern (via CDN)
- **JavaScript (Vanilla)** - Logika aplikasi
- **JSON** - Database kamus
- **Google Fonts (Inter)** - Typography

## 🌟 Fitur Unggulan

### 1. Glassmorphism Design

UI modern dengan efek kaca transparan yang elegan

### 2. Gradient Animation

Background animasi gradien yang dinamis

### 3. Smooth Transitions

Semua interaksi dengan animasi halus

### 4. Responsive Layout

Tampilan optimal dari mobile hingga desktop

### 5. Real-time Translation

Terjemahan langsung saat mengetik

## 📝 Catatan Penting

> **Disclaimer:** Kamus ini masih dalam tahap pengembangan. Beberapa kata mungkin belum tersedia atau memerlukan verifikasi lebih lanjut dari penutur asli Bahasa Nduga.

## 🤝 Kontribusi

Untuk menambah atau memperbaiki kamus:

1. Edit file `kamus.json`
2. Tambahkan kata baru atau perbaiki yang sudah ada
3. Pastikan format JSON tetap valid

## 📄 Lisensi

Open Source - Bebas digunakan untuk tujuan edukasi dan pelestarian budaya

## 💡 Tips Penggunaan

1. **Kata yang tidak ditemukan** akan ditampilkan dalam tanda kurung `[kata]`
2. **Gunakan huruf kecil** untuk hasil terjemahan yang lebih baik
3. **Swap button** untuk menukar arah terjemahan
4. **Statistik** akan tersimpan di browser Anda

## 🎯 Roadmap

- [ ] Tambah lebih banyak kata (target: 500+ kata)
- [ ] Fitur text-to-speech
- [ ] Mode offline (PWA)
- [ ] Frasa umum & contoh kalimat
- [ ] Verifikasi dengan penutur asli

## 📞 Kontak

Dibuat dengan ❤️ untuk melestarikan Bahasa Nduga (Papua)

---

**© 2026 Terjemahan Nduga - Open Source Project**
