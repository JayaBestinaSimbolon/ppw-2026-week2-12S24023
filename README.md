# Portofolio Profesional & Layanan Interaktif (Bootstrap 5)

**Mata Kuliah:** Pemrograman Pengembangan Web (PPW) 2026 &mdash; Minggu 3  
**Judul Tugas:** Modernisasi & Refactoring Personal Portfolio & Service Portal Berbasis CSS Framework Kontemporer (Bootstrap 5) dan Advanced Custom CSS  
**Pengembang:** Jaya Bestina Simbolon  
**NIM:** 12S24023  
**Program Studi:** Sarjana Sistem Informasi (Semester 5)  
**Institusi:** Institut Teknologi Del (IT Del), Laguboti, Toba, Sumatera Utara  
**Repositori GitHub:** [ppw-2026-week2-12S24023](https://github.com/JayaBestinaSimbolon/ppw-2026-week2-12S24023)  
**URL GitHub Pages Live:** [https://jayabestinasimbolon.github.io/ppw-2026-week2-12S24023/](https://jayabestinasimbolon.github.io/ppw-2026-week2-12S24023/)

---

## 1. Ringkasan Proyek

Pada Minggu 2, halaman portofolio ini dibangun menggunakan HTML5 semantik dan CSS murni. Pada praktikum Minggu 3 ini, proyek tersebut direfaktor dan dikembangkan menggunakan ekosistem **Bootstrap 5.3+** yang dipadukan dengan **Custom CSS Overrides**.

### Pemenuhan Spesifikasi Teknis (Requirements Checklist)

1. **Fondasi Framework & Semantik (15%)**
   - Integrasi Bootstrap 5.3 CDN (CSS & JS bundle) + Bootstrap Icons.
   - Struktur semantik HTML5 tetap utuh (`header`, `nav`, `main`, `section`, `footer`).
   - Meta viewport responsif valid.
   - `custom-style.css` dimuat setelah Bootstrap.

2. **Responsive Navbar & Hero (20%)**
   - Navbar `sticky-top` dengan brand identity.
   - Tombol hamburger toggle berfungsi membuka/menutup menu di layar ponsel tanpa error console.
   - Hero Section proporsional dengan *call-to-action* (CTA).

3. **Grid Portofolio & Modal Dialog (20%)**
   - Minimal 4 buah Kartu Proyek (`.card`) dalam grid responsif (`row-cols-1 row-cols-md-2 row-cols-lg-3 g-4`).
   - Kartu memuat banner, badge teknologi, deskripsi, dan tombol.
   - Terhubung ke Bootstrap Modal (`.modal`) detail proyek (minimal 2 modal dengan konten berbeda).

4. **Modernisasi Formulir Layanan (15%)**
   - Formulir kontak di-upgrade menggunakan komponen Bootstrap: Floating Labels (`.form-floating`) untuk input teks/email/pesan.
   - Input Groups berikon.
   - Select category & Checkbox syarat & ketentuan.
   - Umpan balik validasi visual (`.valid-feedback` / `.invalid-feedback`).

5. **Custom Overrides & Theming (15%)**
   - Mendefinisikan minimal 6 variabel CSS pada `:root`.
   - Warna identitas personal unik (bukan template polos standar).
   - Transisi mikro-interaksi *hover* pada kartu dan tombol.
   - Bebas dari penggunaan `!important` serampangan.

6. **Git Management & Deployment (15%)**
   - Branching/repositori terstruktur.
   - Berkas `README.md` memuat tabel komparasi "Sebelum vs Sesudah Integrasi Framework" + screenshot.
   - Terpublikasi aktif di GitHub Pages tanpa eror 404.

---

## 2. Tabel Komparasi: Sebelum vs Sesudah Integrasi Framework

| Komponen | Sebelum (CSS Murni - Minggu 2) | Sesudah (Bootstrap 5 - Minggu 3) |
| --- | --- | --- |
| **Grid & Layout** | Flexbox/Grid kustom yang membutuhkan banyak baris kode. | Menggunakan utility classes Bootstrap (`row`, `col`, `g-4`, `row-cols-md-2`) sehingga kode lebih bersih dan responsif otomatis. |
| **Navbar** | Navigasi manual dengan media query kompleks untuk versi *mobile*. | Menggunakan komponen Navbar Bootstrap dengan `.navbar-toggler` bawaan yang praktis dan `.sticky-top`. |
| **Komponen Interaktif** | Tidak ada modal; interaksi kompleks harus dibangun dengan JavaScript manual. | Menggunakan Bootstrap Modal bawaan tanpa menulis JS dari nol untuk menampilkan detail proyek. |
| **Formulir** | Styling form input satu-persatu dan label standar. | Menggunakan Floating Labels (`.form-floating`), Input Groups dengan ikon, dan visual feedback yang estetik. |
| **Tema & Desain** | Semua warna dan styling ditulis manual di setiap class. | Menggunakan Bootstrap CSS dipadukan CSS Variables (`:root`) untuk kustomisasi tema yang konsisten. |

### Screenshot Komparasi

| Bagian | Sebelum Integrasi (Minggu 2) | Sesudah Integrasi (Minggu 3) |
| --- | --- | --- |
| **Tampilan Umum (Hero & Nav)** | ![Sebelum Hero](images/sebelum-hero.png) | ![Sesudah Hero](images/sesudah-hero.png) |
| **Grid Portofolio** | ![Sebelum Portofolio](images/sebelum-portofolio.png) | ![Sesudah Portofolio](images/sesudah-portofolio.png) |
| **Formulir Layanan** | ![Sebelum Formulir](images/sebelum-form.png) | ![Sesudah Formulir](images/sesudah-form.png) |

*(Catatan: Mohon pastikan untuk mengambil screenshot dan menempatkannya ke dalam folder `images/` dengan nama file yang sesuai dengan path di atas, atau sesuaikan nama filenya).*

---

## 3. Struktur Berkas & Direktori

```text
ppw-2026-week2-12S24023/
├── index.html              # Dokumen utama terintegrasi Bootstrap 5.3
├── custom-style.css        # Custom CSS Overrides (Variabel :root, Theming)
├── README.md               # Dokumentasi proyek (Tugas Minggu 3)
├── style.css               # (Opsional) File lama (jika masih digunakan sebagian)
└── images/                 # Direktori penyimpanan seluruh aset visual portofolio
    ├── foto-profil.jpg
    ├── Sibayak Rent.png
    ├── Nusantara Connect.jpeg
    ├── Perisai Anak.png
    └── del-olympic-preview.svg
```

---

## 4. Panduan Publikasi ke GitHub & GitHub Pages

Ikuti langkah-langkah berikut di terminal untuk memperbarui repositori dan mengaktifkan GitHub Pages:

### Langkah 1: Tambahkan Perubahan ke Git
```bash
git add .
git commit -m "feat: modernisasi dan refactoring portofolio dengan Bootstrap 5.3"
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
6. Tunggu beberapa menit hingga situs Anda live di URL GitHub Pages.
