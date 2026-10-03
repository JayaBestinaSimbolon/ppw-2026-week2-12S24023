
class App {
  constructor() {
    this.state = {
      projects: [],
      services: [],
      profile: null,
      currentFilter: 'all'
    };
    
    this.portfolioContainer = document.getElementById('portfolio-container');
    this.filtersContainer = document.getElementById('portfolio-filters');
    this.form = document.getElementById('serviceForm');
    this.kategoriSelect = document.getElementById('kategori');
  }

  async init() {
    this.renderLoadingState();
    
    try {
      const [projects, services, profile] = await Promise.all([
        ApiService.getProjects(),
        ApiService.getServices(),
        ApiService.getProfile()
      ]);

      this.state.projects = projects;
      this.state.services = services;
      this.state.profile = profile;

      this.renderProjects();
      this.renderFilters();
      this.renderServicesDropdown();
      this.updateProfileInfo();
      this.setupEventListeners();
      
    } catch (error) {
      this.renderErrorState(error.message);
    }
  }

  escapeHTML(str) {
    if (!str) return '';
    return str.replace(/[&<>'"]/g, tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag));
  }

  renderLoadingState() {
    if (this.portfolioContainer) {
      this.portfolioContainer.innerHTML = `
        <div class="col-12 text-center py-5">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Memuat...</span>
          </div>
          <p class="mt-2 text-muted">Memuat data portofolio...</p>
        </div>
      `;
    }
  }

  renderErrorState(message) {
    if (this.portfolioContainer) {
      this.portfolioContainer.innerHTML = `
        <div class="col-12">
          <div class="alert alert-danger d-flex align-items-center" role="alert">
            <i class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"></i>
            <div>Gagal memuat data portofolio: ${this.escapeHTML(message)}. Pastikan Anda membukanya melalui Live Server (localhost), bukan file://.</div>
          </div>
        </div>
      `;
    }
    
    const aboutContainer = document.getElementById('about-content');
    if (aboutContainer) {
      aboutContainer.innerHTML = `
        <div class="alert alert-danger text-center">
          Gagal memuat informasi profil: ${this.escapeHTML(message)}.
        </div>
      `;
    }
  }

  renderEmptyState() {
    if (this.portfolioContainer) {
      this.portfolioContainer.innerHTML = `
        <div class="col-12 text-center py-5">
          <i class="bi bi-inbox fs-1 text-muted"></i>
          <p class="mt-2 text-muted">Belum ada proyek untuk kategori ini.</p>
        </div>
      `;
    }
  }

  renderProjects() {
    if (!this.portfolioContainer) return;
    
    const filteredProjects = this.state.currentFilter === 'all' 
      ? this.state.projects 
      : this.state.projects.filter(p => p.category === this.state.currentFilter);

    if (filteredProjects.length === 0) {
      this.renderEmptyState();
      return;
    }

    this.portfolioContainer.innerHTML = filteredProjects.map(proj => `
      <div class="col">
        <article class="card portfolio-card h-100 shadow-sm border-0">
            <div class="card-image-wrapper">
                <img src="${this.escapeHTML(proj.thumbnail)}" class="card-img-top" alt="${this.escapeHTML(proj.title)}">
            </div>
            <div class="card-body d-flex flex-column">
                <span class="technology-badge badge bg-primary bg-opacity-10 text-primary mb-2 align-self-start">${this.escapeHTML(proj.category)}</span>
                <h3 class="card-title h5 fw-bold">${this.escapeHTML(proj.title)}</h3>
                <p class="card-text text-muted">${this.escapeHTML(proj.description)}</p>
                <button
                    type="button"
                    class="btn btn-outline-primary mt-auto btn-detail"
                    data-id="${this.escapeHTML(proj.id)}">
                    Lihat Detail <i class="bi bi-arrow-right ms-2"></i>
                </button>
            </div>
        </article>
      </div>
    `).join('');

    // Attach modal events to new buttons
    this.portfolioContainer.querySelectorAll('.btn-detail').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.openProjectModal(e.target.closest('button').dataset.id);
      });
    });
  }

  renderFilters() {
    if (!this.filtersContainer) return;
    
    const categories = ['all', ...new Set(this.state.projects.map(p => p.category))];
    
    this.filtersContainer.innerHTML = categories.map(cat => {
      const isActive = this.state.currentFilter === cat ? 'active' : '';
      const label = cat === 'all' ? 'Semua' : cat;
      return `<button class="btn btn-outline-primary ${isActive} me-2 mb-2 filter-btn" data-filter="${this.escapeHTML(cat)}">${this.escapeHTML(label)}</button>`;
    }).join('');

    this.filtersContainer.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.filtersContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        this.state.currentFilter = e.target.dataset.filter;
        this.renderProjects();
      });
    });
  }

  renderServicesDropdown() {
    if (!this.kategoriSelect) return;
    
    let optionsHtml = '<option value="" selected disabled>Pilih kategori</option>';
    optionsHtml += this.state.services.map(svc => 
      `<option value="${this.escapeHTML(svc.id)}">${this.escapeHTML(svc.name)}</option>`
    ).join('');
    
    this.kategoriSelect.innerHTML = optionsHtml;
  }
  
  updateProfileInfo() {
    if (!this.state.profile) return;
    
    // Check if footer contact link exists and update
    const footerEmail = document.querySelector('footer a[href^="mailto:"]');
    if (footerEmail && this.state.profile.email) {
      footerEmail.href = `mailto:${this.state.profile.email}`;
    }

    // Render Contact Info in Hubungi Saya
    const contactInfoContainer = document.getElementById('contact-info-container');
    if (contactInfoContainer && this.state.profile.email && this.state.profile.whatsapp) {
      let waNumber = this.state.profile.whatsapp.replace(/\D/g, '');
      if (waNumber.startsWith('0')) waNumber = '62' + waNumber.substring(1);
      
      contactInfoContainer.innerHTML = `
        <div class="contact-item">
            <i class="bi bi-envelope text-primary me-2"></i>
            <a href="mailto:${this.escapeHTML(this.state.profile.email)}" class="text-decoration-none text-dark fw-medium">${this.escapeHTML(this.state.profile.email)}</a>
        </div>
        <div class="contact-item">
            <i class="bi bi-whatsapp text-primary me-2"></i>
            <a href="https://wa.me/${waNumber}" class="text-decoration-none text-dark fw-medium" target="_blank">${this.escapeHTML(this.state.profile.whatsapp)}</a>
        </div>
      `;
    }

    // Render About Content
    const aboutContainer = document.getElementById('about-content');
    if (aboutContainer) {
      let aboutHtml = `<p>${this.escapeHTML(this.state.profile.description)}</p>`;
      
      if (this.state.profile.experience && this.state.profile.experience.length > 0) {
        aboutHtml += `<h4 class="mt-4 mb-3 fw-bold">Pengalaman Organisasi</h4>`;
        aboutHtml += `<div class="experience-list">`;
        this.state.profile.experience.forEach(exp => {
          aboutHtml += `
            <div class="card border-0 shadow-sm mb-3">
              <div class="card-body">
                <h5 class="card-title text-primary fw-bold mb-1">${this.escapeHTML(exp.role)}</h5>
                <h6 class="card-subtitle text-muted mb-3"><i class="bi bi-building me-2"></i>${this.escapeHTML(exp.organization)}</h6>
                <p class="card-text text-secondary mb-0">${this.escapeHTML(exp.description)}</p>
              </div>
            </div>
          `;
        });
        aboutHtml += `</div>`;
      }

      if (this.state.profile.education) {
        aboutHtml += `<h4 class="mt-4 mb-3 fw-bold">Pendidikan</h4>`;
        aboutHtml += `
          <div class="card border-0 shadow-sm mb-3">
            <div class="card-body">
              <h5 class="card-title text-primary fw-bold mb-1"><i class="bi bi-mortarboard me-2"></i>${this.escapeHTML(this.state.profile.education.campus)}</h5>
              <h6 class="card-subtitle text-muted mb-0">${this.escapeHTML(this.state.profile.education.status)}</h6>
            </div>
          </div>
        `;
      }

      if (this.state.profile.skills) {
        aboutHtml += `<hr class="my-5">
          <div class="text-center mb-4">
            <span class="section-label">KEAHLIAN & TOOLS</span>
            <h3 class="fw-bold">Keterampilan Saya</h3>
          </div>
          <div class="row g-4 justify-content-center">`;
        
        // Soft Skills
        if (this.state.profile.skills.soft && this.state.profile.skills.soft.length > 0) {
          aboutHtml += `
            <div class="col-md-6">
              <div class="card border-0 shadow-sm h-100 p-3">
                <div class="card-body">
                  <h5 class="card-title text-primary fw-bold mb-4 text-center">Soft Skills</h5>
                  <div class="d-flex flex-wrap justify-content-center gap-2">
                    ${this.state.profile.skills.soft.map(skill => `<span class="badge bg-secondary fs-6 px-3 py-2">${this.escapeHTML(skill)}</span>`).join('')}
                  </div>
                </div>
              </div>
            </div>
          `;
        }

        // Hard Skills
        if (this.state.profile.skills.hard && this.state.profile.skills.hard.length > 0) {
          aboutHtml += `
            <div class="col-md-6">
              <div class="card border-0 shadow-sm h-100 p-3">
                <div class="card-body">
                  <h5 class="card-title text-primary fw-bold mb-4 text-center">Hard Skills</h5>
                  <div class="d-flex flex-wrap justify-content-center gap-2">
                    ${this.state.profile.skills.hard.map(skill => `<span class="badge bg-primary fs-6 px-3 py-2">${this.escapeHTML(skill)}</span>`).join('')}
                  </div>
                </div>
              </div>
            </div>
          `;
        }

        // Tools
        if (this.state.profile.skills.tools && this.state.profile.skills.tools.length > 0) {
          aboutHtml += `
            <div class="col-12 mt-5">
              <h5 class="text-primary fw-bold mb-4 text-center">Tools & Software</h5>
              <div class="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-3 justify-content-center">
                ${this.state.profile.skills.tools.map(tool => `
                  <div class="col">
                    <div class="card border-0 shadow-sm h-100 text-center p-3 hover-zoom">
                      <img src="${this.escapeHTML(tool.image)}" alt="${this.escapeHTML(tool.name)}" class="mx-auto mb-3" style="width: 50px; height: 50px; object-fit: contain; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1));">
                      <h6 class="card-title fw-bold mb-0">${this.escapeHTML(tool.name)}</h6>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          `;
        }

        aboutHtml += `</div>`;
      }
      
      aboutContainer.innerHTML = aboutHtml;
    }
  }

  openProjectModal(projectId) {
    const proj = this.state.projects.find(p => p.id === projectId);
    if (!proj) return;
    
    document.getElementById('projectModalTitle').textContent = proj.title;
    document.getElementById('projectModalBody').innerHTML = `
      <img src="${this.escapeHTML(proj.thumbnail)}" class="img-fluid rounded mb-3 w-100 shadow-sm" alt="${this.escapeHTML(proj.title)}">
      <div class="mb-3">
        ${proj.tags.map(tag => `<span class="badge bg-secondary me-1">${this.escapeHTML(tag)}</span>`).join('')}
      </div>
      <p class="text-secondary">${this.escapeHTML(proj.detail)}</p>
      <hr>
      <p class="mb-0 fw-bold"><i class="bi bi-graph-up text-primary me-2"></i> ${this.escapeHTML(proj.metrics)}</p>
    `;
    
    const modalEl = document.getElementById('universalProjectModal');
    // Use optional window.bootstrap in case it's not loaded
    if (window.bootstrap) {
      const modalInstance = bootstrap.Modal.getOrCreateInstance(modalEl);
      modalInstance.show();
    }
  }

  setupEventListeners() {
    if (this.form) {
      // Remove old sync logic if any attached previously inline
      this.form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        if (!this.form.checkValidity()) {
          e.stopPropagation();
          this.form.classList.add("was-validated");
          return;
        }

        const formData = new FormData(this.form);
        const payload = Object.fromEntries(formData.entries());
        
        const submitBtn = this.form.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;
        
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Mengirim...';
        
        try {
          await ApiService.submitServiceOrder(payload);
          this.saveOrderToLocalStorage(payload);
          this.showToastNotification('Sukses!', 'Permintaan layanan berhasil diproses.');
          
          this.form.reset();
          this.form.classList.remove('was-validated');
        } catch (error) {
          this.showToastNotification('Gagal', `Gagal mengirim: ${error.message}`, 'text-bg-danger');
        } finally {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
        }
      });
    }
  }

  saveOrderToLocalStorage(payload) {
    const orders = JSON.parse(localStorage.getItem('serviceOrders') || '[]');
    orders.push({
      ...payload,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem('serviceOrders', JSON.stringify(orders));
    this.updateOrderBadge();
  }

  updateOrderBadge() {
    // Optional: display a badge showing number of orders made
    let badge = document.getElementById('orderBadge');
    if (!badge) {
      const navItem = document.querySelector('.nav-link[href="#layanan"]');
      if (navItem) {
        navItem.innerHTML += ' <span id="orderBadge" class="badge rounded-pill bg-danger ms-1"></span>';
        badge = document.getElementById('orderBadge');
      }
    }
    
    if (badge) {
      const orders = JSON.parse(localStorage.getItem('serviceOrders') || '[]');
      if (orders.length > 0) {
        badge.textContent = orders.length;
        badge.style.display = 'inline-block';
      } else {
        badge.style.display = 'none';
      }
    }
  }

  showToastNotification(title, message, bgClass = 'text-bg-success') {
    const toastEl = document.getElementById('liveToast');
    if (toastEl && window.bootstrap) {
      // Update classes
      toastEl.className = `toast align-items-center border-0 ${bgClass}`;
      toastEl.querySelector('.toast-body').textContent = message;
      
      const toastInstance = bootstrap.Toast.getOrCreateInstance(toastEl);
      toastInstance.show();
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.init();
  app.updateOrderBadge();
});
