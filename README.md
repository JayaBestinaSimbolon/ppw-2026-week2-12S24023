# Portofolio Profesional & Layanan Interaktif Accessible

**Mata Kuliah:** Pemrograman Pengembangan Web (PPW) 2026 &mdash; Minggu 2  
**Pengembang:** Jaya Bestina Simbolon  
**NIM:** 12S24023  
**Program Studi:** Sarjana Sistem Informasi (Semester 5)  
**Institusi:** Institut Teknologi Del (IT Del), Laguboti, Toba, Sumatera Utara  
**Repositori GitHub:** [ppw-2026-week2-12S24023](https://github.com/JayaBestinaSimbolon/ppw-2026-week2-12S24023)  
**URL GitHub Pages Live:** [https://jayabestinasimbolon.github.io/ppw-2026-week2-12S24023/](https://jayabestinasimbolon.github.io/ppw-2026-week2-12S24023/)

---

## 1. Ringkasan Proyek & Spesifikasi Teknis

Halaman web portofolio profil profesional tunggal (*Single Page Showcase Webpage*) ini dibangun menggunakan standar **HTML5 Semantik murni** dan **Modern CSS responsif**, dengan kepatuhan penuh terhadap standar aksesibilitas web internasional **WCAG 2.2 Level AA**.

### Checklist Pemenuhan Rubrik Penilaian:

1. **Struktur Semantik HTML5 (Bobot 20%):**
   - Menggunakan tag `<header>` yang memuat identitas brand/logo semantik (`.tautan-logo`) dan menu navigasi (`<nav>`).
   - Tag `<main id="main-content">` sebagai pembungkus area konten utama dengan tautan aksesibilitas *Skip to Main Content* (`.skip-link`).
   - Terdapat **5 buah `<section>`** semantik lengkap:
     - `01 — Tentang Saya` (`<section id="tentang">`)
     - `02 — Portofolio Karya` (`<section id="portofolio">`)
     - `03 — Keahlian Terstruktur & Metodologi` (`<section id="keahlian">`)
     - `04 — Sertifikasi Terverifikasi` (`<section id="sertifikat">`)
     - `05 — Pemesanan Layanan & Kontak` (`<section id="layanan">`)
   - Elemen `<article>` diterapkan pada kartu proyek showcase, kartu ringkasan biografi, kartu keahlian, dan kartu sertifikasi.
   - Tag `<footer>` semantik memuat identitas, kontak langsung, tautan repositori GitHub, serta pernyataan kepatuhan aksesibilitas.
   - Struktur bebas dari pembungkus `<div>` tanpa makna dengan mengoptimalkan elemen `<figure>`, `<figcaption>`, `<aside>`, `<time>`, dan semantic landmarks.

2. **Penyajian Data Tabular & Lists (Bobot 15%):**
   - **Tabel Data Semantik Lengkap:** Memuat `<table>`, `<caption>`, `<thead>`, `<tbody>`, `<tfoot>`, `<tr>`, `<th>`, dan `<td>`. Dilengkapi atribut `scope="col"` pada tajuk kolom dan `scope="row"` pada penomoran baris. Disertai pembungkus responsif horizontal scroll (`role="region"` & `tabindex="0"`).
   - **HTML Lists:** Menggunakan minimal dua jenis daftar terstruktur:
     - Ordered List (`<ol>`): Daftar 4 Bidang yang Diminati (Analisis Bisnis, Software Developer, UI/UX, IT Support) dan 5 Tahapan Alur Kerja SDLC.
     - Unordered List (`<ul>`): Navigasi utama, Riwayat Organisasi (Divisi Pendidikan HIMSI IT Del), Ekosistem Tools (SQL, GitHub, HTML5, CSS3, Figma), tag teknologi proyek, dan kompetensi sertifikasi.

3. **Komponen Formulir Interaktif & Accessible (Bobot 20%):**
   - Dikelompokkan rapi ke dalam **2 blok `<fieldset>` dan `<legend>`** (1. Identitas & Data Diri Pemohon, 2. Detail Kebutuhan Konsultasi & Solusi Digital).
   - Memuat **8 tipe kontrol input lengkap**:
     1. `text` (Nama Lengkap)
     2. `email` (Alamat Email Resmi)
     3. `tel` (Nomor Telepon/WhatsApp)
     4. `number` (Estimasi Alokasi Waktu dalam Minggu)
     5. `radio` (Prioritas Pengerjaan)
     6. `checkbox` (Cakupan Modul Layanan & Persetujuan Wajib)
     7. `select` (Pilihan Kategori Layanan Utama)
     8. `textarea` (Pesan & Deskripsi Kebutuhan)
   - **100% Kepatuhan Label Eksplisit:** Seluruh kontrol input memiliki pasangan `<label for="id">` eksplisit dengan atribut `id` unik (tidak ada tabrakan ID).
   - **Validasi Native:** Dilengkapi atribut `required`, `pattern`, `min`, `max`, dan `autocomplete`.

4. **Estetika & Tata Letak CSS Modern (Bobot 25%):**
   - CSS eksternal terpusat pada file `style.css`.
   - **Universal Box Sizing Reset:**
     ```css
     *, *::before, *::after {
         box-sizing: border-box;
         margin: 0;
         padding: 0;
     }
     ```
   - **Aturan Palet Warna Terencana (60 - 30 - 10):**
     - **60% Dominan:** Soft Slate Canvas (`#f8fafc`) dan permukaan kartu putih jernih (`#ffffff`).
     - **30% Sekunder:** Deep Executive Navy (`#0f172a`) dan Slate Gray (`#334155`, `#e2e8f0`) untuk struktur, header, footer, garis border, dan teks utama.
     - **10% Aksen:** Royal Tech Blue (`#2563eb`), hover state (`#1d4ed8`), lencana status sukses/terverifikasi (`#10b981`), dan status progres (`#f59e0b`).
   - **WCAG 2.2 Level AA:** Rasio kontras teks minimal 4.5:1, indikator fokus `:focus-visible` berkontras tinggi (ring 3px dengan offset), dan tata letak tidak rusak saat di-zoom.
   - **Layout Modern:** Penerapan CSS Grid responsif dan Flexbox.
   - **Media Queries Responsif:** Disesuaikan secara mulus pada resolusi desktop, tablet (`@media (max-width: 768px)`), dan smartphone (`@media (max-width: 480px)`).

5. **Pengelolaan Git & GitHub Pages Deployment (Bobot 20%):**
   - Repositori GitHub terkelola rapi dengan commit terstruktur.
   - Siap dipublikasikan secara instan melalui layanan GitHub Pages.

---

## 2. Struktur Berkas & Direktori

```text
ppw-2026-week2-12S24023/
│
├── index.html              # Dokumen utama HTML5 semantik & accessible
├── style.css               # Berkas CSS eksternal modern (Universal reset, 60-30-10, Grid/Flex)
├── README.md               # Dokumentasi proyek dan panduan pengelolaan
│
└── images/                 # Direktori penyimpanan seluruh aset visual portofolio
    ├── foto-profil.jpg     # Foto profil resmi Jaya Bestina Simbolon
    ├── Sibayak Rent.png    # Tangkapan layar dashboard website proyek Sibayak Rent
    ├── Nusantara Connect.jpeg # Tangkapan layar website proyek Nusantara Connect
    ├── Perisai Anak.png    # Mockup antarmuka aplikasi mobile proyek Perisai Anak
    └── del-olympic-preview.svg # Vektor preview dashboard sistem informasi Del Olympic
```

---

## 3. Panduan Pengelolaan Foto Profil & Gambar Dashboard Proyek

Semua foto proyek dan foto profil telah dimasukkan secara rapi ke dalam kotak wadah khusus (`.kotak-foto-proyek` dan `.foto-profil-wadah`) menggunakan properti CSS `object-fit: cover` dan `object-position: top center`. Hal ini menjamin gambar **tidak akan gepeng/terdistorsi**, tidak keluar dari batas kartu, serta bagian navigasi/dashboard selalu terlihat jelas.

### A. Cara Memasukkan / Mengganti Foto Profil:
1. Siapkan foto Anda dalam format `.jpg` atau `.png`.
2. Beri nama berkas: `foto-profil.jpg`.
3. Letakkan berkas tersebut ke dalam folder `images/`.
4. Jika Anda ingin menggunakan nama berkas lain (misalnya `foto-resmi.png`), buka berkas `index.html` dan perbarui baris gambar profil:
   ```html
   <img src="images/foto-resmi.png" alt="Foto resmi Jaya Bestina Simbolon" class="gambar-profil-utama">
   ```

### B. Cara Memasukkan / Mengganti Tangkapan Layar Proyek:
1. Ambil tangkapan layar (*screenshot*) dashboard proyek Anda.
2. Simpan gambar ke dalam folder `images/` dengan format `.png` atau `.jpg`.
3. Pastikan nama berkas sesuai dengan yang ditautkan di `index.html`:
   - **Sibayak Rent:** `images/Sibayak Rent.png`
   - **Nusantara Connect:** `images/Nusantara Connect.jpeg`
   - **Perisai Anak:** `images/Perisai Anak.png`
   - **Del Olympic:** `images/del-olympic-preview.svg` (Jika nanti dashboard Del Olympic sudah selesai dikembangkan, cukup simpan tangkapan layar baru dengan nama `Del Olympic.png` dan perbarui `src="images/Del Olympic.png"` di `index.html`).

---

## 4. Panduan Publikasi ke GitHub & GitHub Pages

Ikuti langkah-langkah berikut di terminal untuk memperbarui repositori dan mengaktifkan GitHub Pages:

### Langkah 1: Tambahkan Perubahan ke Git
```bash
git add .
git commit -m "feat: implementasi portofolio profesional accessible, integrasi gambar proyek, dan pemenuhan spesifikasi WCAG 2.2 AA"
git push origin main
```

### Langkah 2: Mengaktifkan GitHub Pages
1. Buka repositori Anda di browser: `https://github.com/JayaBestinaSimbolon/ppw-2026-week2-12S24023`
2. Klik menu **Settings** (ikon roda gigi di bagian atas repositori).
3. Pada bilah navigasi kiri, klik menu **Pages** (di bawah kategori *Code and automation*).
4. Pada bagian **Build and deployment**:
   - Sumber (*Source*): Pilih **Deploy from a branch**.
   - Cabang (*Branch*): Pilih **main** dan folder **/(root)**.
5. Klik tombol **Save**.
6. Tunggu sekitar 1–2 menit hingga muncul tautan hijau:
   *`Your site is live at https://jayabestinasimbolon.github.io/ppw-2026-week2-12S24023/`*.
