class ApiService {
  static async fetchData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP Error ${response.status}: ${response.statusText}`);
      }
      return await response.json();
    } catch (err) {
      console.warn(`[Local Fallback] Gagal memuat ${url} via fetch (mungkin karena dibuka tanpa Live Server). Menggunakan data lokal.`);
      
      // Fallback data
      if (url.includes('projects.json')) {
        return [
          { "id": "del-olympic", "title": "DelOlympic", "category": "Sistem Informasi", "thumbnail": "images/del-olympic-preview.svg", "description": "Sistem informasi untuk membantu pengelolaan informasi dan kegiatan olimpiade mahasiswa.", "detail": "DelOlympic merupakan konsep sistem informasi yang dirancang untuk membantu pengelolaan informasi dan kegiatan olimpiade mahasiswa.", "metrics": "Pengelolaan data 100+ peserta", "tags": ["Information System", "Management"], "link": "#" },
          { "id": "nusantara-connect", "title": "Nusantara Connect", "category": "Web Development", "thumbnail": "images/Nusantara Connect.jpeg", "description": "Konsep layanan digital yang membantu pengguna menemukan informasi dan pilihan perjalanan.", "detail": "Nusantara Connect merupakan konsep layanan digital yang berfokus pada penyediaan informasi dan pilihan perjalanan untuk membantu pengguna merencanakan perjalanan.", "metrics": "Pencarian rute < 2 detik", "tags": ["Web App", "Travel"], "link": "#" },
          { "id": "perisai-anak", "title": "Perisai Anak", "category": "UI/UX Design", "thumbnail": "images/Perisai Anak.png", "description": "Perancangan antarmuka dan pengalaman pengguna untuk mendukung solusi digital bagi pengguna.", "detail": "Perancangan antarmuka (UI) dan pengalaman pengguna (UX) untuk aplikasi Perisai Anak yang bertujuan mendukung solusi perlindungan anak secara digital.", "metrics": "Skor Usability 85/100", "tags": ["UI/UX", "Mobile Design"], "link": "#" },
          { "id": "sibayak-rent", "title": "Sibayak Rent", "category": "Analisis Sistem", "thumbnail": "images/Sibayak Rent.png", "description": "Sistem informasi penyewaan perlengkapan pendakian dengan pengelolaan pemesanan, pembayaran, dan pengembalian.", "detail": "Sibayak Rent adalah sistem informasi komprehensif untuk penyewaan perlengkapan pendakian, mulai dari manajemen inventaris, pemesanan, hingga pelacakan pengembalian.", "metrics": "Efisiensi sewa naik 40%", "tags": ["System Analysis", "Rental"], "link": "#" }
        ];
      }
      if (url.includes('profile.json')) {
        return {
          "name": "Jaya Bestina Simbolon", "role": "Mahasiswa Sistem Informasi", "university": "Institut Teknologi Del", "description": "Saya adalah mahasiswa Sistem Informasi semester 5 di Institut Teknologi Del yang memiliki minat pada Business Analysis, Web Development, dan UI/UX. Saya tertarik memahami kebutuhan pengguna, menganalisis permasalahan, merancang solusi sistem, serta mengembangkan antarmuka digital yang fungsional, sederhana, dan mudah digunakan. Melalui berbagai proyek dan kegiatan perkuliahan, saya terus mengembangkan kemampuan dalam analisis sistem, pengembangan web, perancangan antarmuka, pengelolaan informasi, hingga pengujian aplikasi. Saya juga senang mempelajari hal baru, bekerja dalam tim, berdiskusi untuk menemukan solusi, dan menerima masukan untuk terus meningkatkan kemampuan. Ke depannya, saya ingin mendapatkan pengalaman yang lebih luas melalui proyek maupun lingkungan profesional agar dapat menerapkan kemampuan yang saya miliki dalam menyelesaikan permasalahan nyata sekaligus terus berkembang di bidang teknologi informasi.", "image": "images/foto-profil.jpg", "email": "jayabestinasimbolllon.27@gmail.com", "whatsapp": "081396305139", "linkedin": "https://www.linkedin.com/in/jaya-bestina-simbolon", "experience": [ { "organization": "Himpunan Sistem Informasi", "role": "Anggota Divisi Pendidikan", "description": "Aktif berpartisipasi dalam program dan kegiatan pendidikan di dalam himpunan untuk mendukung pengembangan akademik mahasiswa Sistem Informasi." } ], "education": { "campus": "Institut Teknologi Del", "status": "Mahasiswa Aktif Semester 5" }, "skills": { "soft": ["Kerja Tim", "Komunikasi", "Problem Solving", "Berpikir Analitis", "Kreatif"], "hard": ["Business Analysis", "Web Development", "UI/UX Design", "Database Management"], "tools": [ { "name": "VS Code", "image": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/visualstudiocode.svg" }, { "name": "Microsoft Word", "image": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftword.svg" }, { "name": "Figma", "image": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/figma.svg" }, { "name": "MySQL", "image": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mysql.svg" }, { "name": "Git", "image": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/git.svg" }, { "name": "Bootstrap", "image": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/bootstrap.svg" } ] }
        };
      }
      if (url.includes('services.json')) {
        return [
          { "id": "business-analysis", "name": "Business Analysis", "description": "Analisis kebutuhan sistem, pemodelan proses bisnis, dan perancangan solusi." },
          { "id": "web-development", "name": "Web Development", "description": "Pengembangan aplikasi web responsif dan interaktif." },
          { "id": "uiux", "name": "UI/UX Design", "description": "Perancangan antarmuka dan pengalaman pengguna yang intuitif." },
          { "id": "database", "name": "Database", "description": "Perancangan dan pengelolaan basis data relasional/NoSQL." },
          { "id": "lainnya", "name": "Lainnya", "description": "Layanan kustom lainnya sesuai kebutuhan." }
        ];
      }
      throw err;
    }
  }

  static async getProjects() {
    return this.fetchData('./data/projects.json');
  }

  static async getProfile() {
    return this.fetchData('./data/profile.json');
  }

  static async getServices() {
    return this.fetchData('./data/services.json');
  }

  static async submitServiceOrder(payload) {
    // Memalsukan request POST karena github pages tidak mendukung POST asinkron backend
    // Biasanya ini akan menjadi:
    // const response = await fetch('/api/orders', { method: 'POST', body: JSON.stringify(payload) })
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!payload.nama || !payload.email || !payload.kategori) {
          reject(new Error("Data tidak lengkap"));
        } else {
          resolve({ status: 200, message: "Sukses", data: payload });
        }
      }, 1000);
    });
  }
}
