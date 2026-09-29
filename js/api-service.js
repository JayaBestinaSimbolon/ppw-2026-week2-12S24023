class ApiService {
  static async fetchData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP Error ${response.status}: ${response.statusText}`);
      }
      return await response.json();
    } catch (err) {
      console.error(`[API Network Error] for ${url}:`, err);
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

export default ApiService;
