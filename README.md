# Modernisasi Personal Portfolio & Service Portal dengan Bootstrap 5

**Mata Kuliah:** Pemrograman dan Pengujian Aplikasi Web (PPW) 2026 — Minggu 3
**Judul Tugas:** Modernisasi & Refactoring Personal Portfolio & Service Portal Berbasis CSS Framework Kontemporer (Bootstrap 5) dan Advanced Custom CSS
**Pengembang:** Jaya Bestina Simbolon
**NIM:** 12S24023
**Program Studi:** Sarjana Sistem Informasi — Semester 5
**Institusi:** Institut Teknologi Del

**Repositori GitHub:** `ppw-2026-week2-12S24023`

---

## 1. Deskripsi Proyek

Proyek ini merupakan pengembangan lanjutan dari personal portfolio dan service portal yang telah dibuat pada tugas Minggu 2. Pada Minggu 3, website dimodernisasi dengan mengintegrasikan **Bootstrap 5.3** sebagai CSS framework serta **Custom CSS** untuk menyesuaikan tampilan dengan identitas dan kebutuhan desain portfolio.

Refactoring dilakukan agar website memiliki struktur yang lebih terorganisir, responsive pada berbagai ukuran perangkat, serta memiliki komponen interaktif seperti responsive navbar, portfolio card, Bootstrap Modal, form dengan validasi, dan Bootstrap Icons.

Website menampilkan informasi profil, proyek yang pernah dikerjakan, keterampilan, serta formulir layanan yang dapat digunakan pengguna untuk menyampaikan kebutuhan atau pertanyaan.

---

## 2. Tujuan Modernisasi

Modernisasi pada tugas Minggu 3 dilakukan dengan beberapa tujuan berikut:

* Mengintegrasikan Bootstrap 5.3 ke dalam website portfolio.
* Menggunakan komponen Bootstrap untuk mempercepat dan merapikan pengembangan antarmuka.
* Membuat navbar yang responsive dan dapat digunakan pada perangkat mobile.
* Mengubah tampilan portofolio menjadi grid yang responsive.
* Menambahkan Bootstrap Modal untuk menampilkan detail proyek.
* Memodernisasi formulir layanan menggunakan komponen Bootstrap.
* Menambahkan validasi visual pada formulir.
* Menggunakan Bootstrap Icons untuk mendukung tampilan antarmuka.
* Mempertahankan identitas visual melalui Custom CSS.
* Menambahkan micro-interaction seperti hover dan transition.
* Menjaga tampilan tetap responsive dan memperhatikan aksesibilitas.

---

## 3. Teknologi yang Digunakan

| Teknologi              | Penggunaan                                                              |
| ---------------------- | ----------------------------------------------------------------------- |
| HTML5                  | Struktur halaman dan elemen semantik                                    |
| Bootstrap 5.3.3        | Framework CSS dan komponen antarmuka                                    |
| Bootstrap Icons 1.11.3 | Ikon pada navbar, tombol, form, dan bagian lainnya                      |
| Custom CSS             | Pengaturan warna, layout, card, form, responsive, dan micro-interaction |
| JavaScript             | Validasi formulir dan interaksi Bootstrap                               |
| Git & GitHub           | Version control dan pengelolaan repository                              |
| GitHub Pages           | Publikasi website                                                       |

Bootstrap 5.3.3 dan Bootstrap Icons digunakan melalui CDN pada bagian `<head>` sehingga website dapat menggunakan komponen framework tanpa instalasi package tambahan.

---

## 4. Implementasi dan Pemenuhan Requirement

### A. Foundations, Framework & Semantic HTML

Website menggunakan struktur HTML5 dengan elemen semantik seperti `<header>`, `<nav>`, `<main>`, `<section>`, dan `<footer>`. Pada bagian `<head>` terdapat pengaturan viewport untuk mendukung responsive design, Bootstrap 5.3.3 melalui CDN, Bootstrap Icons, serta file `custom-style.css` yang dimuat setelah Bootstrap sehingga dapat digunakan sebagai custom override.

### B. Responsive Navbar & Hero

Navbar menggunakan komponen Bootstrap dengan class `navbar`, `navbar-expand-lg`, dan `sticky-top`. Pada ukuran layar yang lebih kecil, navigasi berubah menjadi menu hamburger menggunakan fitur collapse Bootstrap. Bagian Hero digunakan sebagai tampilan utama portfolio dan berisi identitas, deskripsi singkat, serta tombol CTA yang mengarahkan pengguna ke bagian website lainnya.

### C. Portfolio Grid & Modal

Bagian portofolio menggunakan Bootstrap Grid dengan struktur responsive:

* `row`
* `row-cols-1`
* `row-cols-md-2`
* `row-cols-lg-3`
* `g-4`

Terdapat empat proyek yang ditampilkan, yaitu:

1. **DelOlympic** — Sistem Informasi
2. **Nusantara Connect** — Web Development
3. **Perisai Anak** — UI/UX Design
4. **Sibayak Rent** — Analisis Sistem

Setiap proyek menggunakan Bootstrap Card yang berisi gambar, kategori proyek, judul, deskripsi, dan tombol. Untuk menampilkan informasi yang lebih lengkap, DelOlympic dan Nusantara Connect menggunakan Bootstrap Modal dengan isi yang berbeda.

### D. Modernisasi Formulir Layanan

Formulir layanan menggunakan komponen Bootstrap seperti `form-control`, `form-select`, `form-floating`, `form-check`, dan button. Input nama, email, dan pesan menggunakan konsep floating label. Form juga menyediakan pilihan kategori layanan seperti Business Analysis, Web Development, UI/UX Design, Database, dan Lainnya.

Setiap input penting diberikan atribut `required` dan memiliki `invalid-feedback` untuk memberikan informasi ketika data yang dimasukkan belum sesuai. Formulir juga menggunakan checkbox persetujuan sebelum pengguna dapat mengirimkan permintaan.

### E. Custom CSS & Theming

Selain Bootstrap, website menggunakan `custom-style.css` sebagai custom override. Custom CSS digunakan untuk mengatur identitas visual website, ukuran dan jarak elemen, tampilan Hero, Card, Form, Modal, Footer, serta responsive layout.

CSS juga menggunakan CSS variables untuk membantu mengatur warna dan properti tampilan secara lebih terstruktur. Dengan pendekatan ini, website tidak hanya menggunakan tampilan standar Bootstrap tetapi memiliki desain yang disesuaikan dengan portfolio pribadi.

### F. Responsive Design

Responsive design diterapkan menggunakan Bootstrap Grid dan media query pada Custom CSS. Penyesuaian dilakukan untuk beberapa ukuran layar sehingga elemen seperti Hero, tombol, card, form, dan gambar tetap dapat digunakan dengan nyaman pada desktop, tablet, maupun smartphone.

### G. Micro-interaction & Accessibility

Custom CSS menambahkan transition dan hover effect pada beberapa elemen seperti portfolio card, button, skill box, dan link. Selain itu terdapat penggunaan `:focus-visible` untuk membantu memberikan indikator fokus ketika elemen navigasi atau form digunakan melalui keyboard.

Website juga menyediakan aturan `prefers-reduced-motion` sehingga animasi dan transition dapat dikurangi bagi pengguna yang mengaktifkan preferensi pengurangan gerakan pada perangkat mereka.

---

## 5. Sebelum vs Sesudah Integrasi Framework

| Aspek         | Sebelum — Minggu 2              | Sesudah — Minggu 3                                  |
| ------------- | ------------------------------- | --------------------------------------------------- |
| Framework     | Belum menggunakan framework CSS | Menggunakan Bootstrap 5.3.3                         |
| Layout        | Mengandalkan Custom CSS         | Bootstrap Grid + Custom CSS                         |
| Navbar        | Custom styling                  | Bootstrap Navbar + Collapse + Sticky Top            |
| Portfolio     | Layout menggunakan CSS          | Bootstrap Card + Responsive Grid                    |
| Detail proyek | Tampilan halaman utama          | Bootstrap Modal                                     |
| Form          | Custom CSS                      | Bootstrap Form + Form Floating                      |
| Validasi      | Validasi HTML/CSS               | Bootstrap validation feedback + JavaScript          |
| Ikon          | Custom/terbatas                 | Bootstrap Icons                                     |
| Responsive    | Media Query CSS                 | Bootstrap Responsive + Media Query                  |
| Interaksi     | Hover dan transition            | Bootstrap component + Custom micro-interaction      |
| Customisasi   | Custom CSS                      | Bootstrap sebagai dasar + Custom CSS Override       |
| Maintenance   | Banyak styling dibuat manual    | Komponen Bootstrap membantu menyederhanakan styling |

---

## 6. Struktur Berkas

```text
ppw-2026-week2-12S24023/
│
├── index.html
├── custom-style.css
├── README.md
│
└── images/
    ├── foto-profil.jpg
    ├── Sibayak Rent.png
    ├── Nusantara Connect.jpeg
    ├── Perisai Anak.png
    └── del-olympic-preview.svg
```

### Penjelasan Berkas

**`index.html`**
Merupakan dokumen utama yang berisi struktur halaman portfolio, navbar, Hero, Tentang Saya, Portofolio, Keahlian, Formulir Layanan, Modal, Footer, serta JavaScript untuk validasi formulir.

**`custom-style.css`**
Berisi Custom CSS yang digunakan untuk menyesuaikan tampilan Bootstrap, termasuk warna, ukuran, spacing, card, button, form, modal, responsive layout, hover effect, focus state, dan micro-interaction.

**`README.md`**
Berisi dokumentasi proyek, teknologi yang digunakan, implementasi requirement, perbandingan sebelum dan sesudah integrasi Bootstrap, serta struktur repository.

**`images/`**
Digunakan untuk menyimpan foto profil dan gambar atau preview proyek yang ditampilkan pada website.

---

## 7. Portfolio yang Ditampilkan

### DelOlympic

DelOlympic merupakan konsep sistem informasi untuk membantu pengelolaan informasi dan kegiatan olimpiade mahasiswa.

### Nusantara Connect

Nusantara Connect merupakan konsep layanan digital yang berfokus pada penyediaan informasi dan pilihan perjalanan untuk membantu pengguna merencanakan perjalanan.

### Perisai Anak

Perisai Anak merupakan proyek yang berfokus pada perancangan antarmuka dan pengalaman pengguna untuk mendukung solusi digital bagi pengguna.

### Sibayak Rent

Sibayak Rent merupakan sistem informasi penyewaan perlengkapan pendakian dengan pengelolaan proses pemesanan, pembayaran, dan pengembalian.

---

## 8. Formulir Layanan

Formulir layanan disediakan sebagai media komunikasi antara pengguna dan pemilik portfolio. Pengguna dapat memasukkan nama, alamat email, memilih kategori layanan, menuliskan pesan, kemudian memberikan persetujuan sebelum mengirimkan formulir.

Kategori layanan yang tersedia adalah:

* Business Analysis
* Web Development
* UI/UX Design
* Database
* Lainnya

Form menggunakan validasi Bootstrap dan JavaScript. Ketika input belum sesuai, sistem menampilkan pesan validasi pada field terkait. Jika seluruh input valid, sistem menampilkan pesan bahwa formulir berhasil divalidasi dan siap dikirim.

---

## 9. Responsive Design

Website dirancang agar dapat digunakan pada berbagai ukuran layar. Bootstrap membantu mengatur responsive grid dan komponen, sedangkan Custom CSS menyediakan penyesuaian tambahan melalui media query.

Penyesuaian dilakukan pada:

* Ukuran Hero
* Ukuran foto profil
* Posisi tombol CTA
* Layout portfolio card
* Ukuran form
* Padding section
* Ukuran gambar proyek
* Tampilan tombol pada smartphone

Dengan kombinasi Bootstrap dan Custom CSS, tampilan website dapat menyesuaikan perangkat tanpa harus membuat layout yang berbeda untuk setiap ukuran layar.

---

## 10. Git & Repository

Pengembangan proyek dikelola menggunakan Git dan GitHub. Repository digunakan untuk menyimpan source code dan mendokumentasikan proses pengembangan website.

Struktur branch digunakan untuk memisahkan pengerjaan fitur berdasarkan kebutuhan tugas. Pengerjaan Minggu 3 dilakukan pada branch:

```text
week3-bootstrap
```

Setelah perubahan selesai dan telah diperiksa, perubahan dapat dikomit dan dikirim ke repository menggunakan Git.

Contoh perintah:

```bash
git add .
git commit -m "feat: modernisasi portfolio dengan Bootstrap 5"
git push origin week3-bootstrap
```

---

## 11. Publikasi

Website dapat dipublikasikan menggunakan GitHub Pages dari repository GitHub.

**Repository:**
https://github.com/JayaBestinaSimbolon/ppw-2026-week2-12S24023

Setelah branch dan source yang digunakan untuk deployment dikonfigurasi pada GitHub Pages, website dapat diakses melalui alamat GitHub Pages repository.

---

## 12. Kesimpulan

Pada Minggu 3, personal portfolio dikembangkan dari versi sebelumnya dengan melakukan refactoring dan integrasi Bootstrap 5.3.3. Penggunaan Bootstrap membantu menyediakan komponen responsive seperti navbar, grid, card, modal, dan form, sedangkan Custom CSS digunakan untuk mempertahankan identitas visual dan memberikan penyesuaian tambahan. Hasilnya adalah website portfolio yang lebih responsive, memiliki komponen interaktif, tampilan yang lebih terstruktur, serta tetap dapat dikembangkan lebih lanjut sesuai kebutuhan.
