class CustomHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav id="mainNav" class="fixed top-0 w-full z-50 py-4 transition-all duration-300"
           style="background-color: rgba(14, 107, 115, 0.97); backdrop-filter: blur(12px);">
        <div class="container mx-auto px-4 md:px-8">
          <div class="flex justify-between items-center">

            <!-- Logo -->
            <div class="flex items-center gap-3">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="15" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
                <path d="M4 16C4 16 9 8 16 8C23 8 28 16 28 16C28 16 23 24 16 24C9 24 4 16 4 16Z"
                      stroke="white" stroke-width="1.5" fill="none" stroke-linejoin="round"/>
                <circle cx="16" cy="16" r="4" fill="white" opacity="0.9"/>
                <circle cx="16" cy="16" r="2" fill="rgba(14,107,115,1)"/>
              </svg>
              <div>
                <div class="text-white font-bold text-lg md:text-xl leading-tight"
                     style="font-family: 'Fraunces', Georgia, serif;">
                  Dr. Kevin Shah
                </div>
                <div class="text-xs opacity-60 text-white"
                     style="font-family: 'Atkinson Hyperlegible', Arial, sans-serif; letter-spacing: 0.1em; text-transform: uppercase;">
                  Ophthalmologist · Mumbai
                </div>
              </div>
            </div>

            <!-- Desktop Navigation -->
            <div class="hidden md:flex items-center gap-8">
              <a href="#home"         class="nav-link">Home</a>
              <a href="#about"        class="nav-link">About</a>
              <a href="#services"     class="nav-link">Services</a>
              <a href="#testimonials" class="nav-link">Testimonials</a>
              <a href="#appointment"  class="nav-link">Contact</a>
              <a href="#appointment"  class="nav-cta">Book Appointment</a>
            </div>

            <!-- Mobile Menu Button -->
            <button id="mobileMenuBtn" class="md:hidden text-white p-1">
              <i data-lucide="menu" class="w-6 h-6"></i>
            </button>

          </div>

          <!-- Mobile Navigation -->
          <div id="mobileMenu" class="hidden md:hidden mt-4 pb-4 border-t border-white/10 pt-4">
            <div class="flex flex-col gap-1">
              <a href="#home"         class="mobile-nav-link">Home</a>
              <a href="#about"        class="mobile-nav-link">About</a>
              <a href="#services"     class="mobile-nav-link">Services</a>
              <a href="#testimonials" class="mobile-nav-link">Testimonials</a>
              <a href="#appointment"  class="mobile-nav-link">Contact</a>
              <a href="#appointment"  class="nav-cta mt-3 text-center block">Book Appointment</a>
            </div>
          </div>
        </div>
      </nav>

      <style>
        .nav-link {
          font-family: 'Atkinson Hyperlegible', Arial, sans-serif;
          font-size: 0.9rem;
          color: rgba(255,255,255,0.78);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .nav-link:hover { color: #ffffff; }

        .mobile-nav-link {
          font-family: 'Atkinson Hyperlegible', Arial, sans-serif;
          font-size: 0.95rem;
          color: rgba(255,255,255,0.78);
          text-decoration: none;
          padding: 0.5rem 0;
          display: block;
          transition: color 0.2s;
        }
        .mobile-nav-link:hover { color: #ffffff; }

        .nav-cta {
          font-family: 'Atkinson Hyperlegible', Arial, sans-serif;
          font-size: 0.875rem;
          font-weight: 700;
          background-color: #E8705A;
          color: #ffffff !important;
          padding: 0.5rem 1.25rem;
          border-radius: 6px;
          text-decoration: none;
          transition: background 0.2s ease, transform 0.2s ease;
          display: inline-block;
        }
        .nav-cta:hover {
          background-color: #D45A42;
          transform: translateY(-1px);
        }
      </style>
    `;

    this._initBehavior();
  }

  _initBehavior() {
    const mobileMenuBtn = this.querySelector('#mobileMenuBtn');
    const mobileMenu   = this.querySelector('#mobileMenu');
    const nav          = this.querySelector('#mainNav');

    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      const icon = mobileMenuBtn.querySelector('i');
      const isOpen = !mobileMenu.classList.contains('hidden');
      icon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
      if (typeof lucide !== 'undefined') lucide.createIcons();
    });

    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        nav.style.paddingTop    = '0.5rem';
        nav.style.paddingBottom = '0.5rem';
        nav.style.boxShadow     = '0 4px 24px rgba(14, 107, 115, 0.25)';
      } else {
        nav.style.paddingTop    = '1rem';
        nav.style.paddingBottom = '1rem';
        nav.style.boxShadow     = 'none';
      }
    });

    this.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          mobileMenu.classList.add('hidden');
          const icon = mobileMenuBtn.querySelector('i');
          icon.setAttribute('data-lucide', 'menu');
          if (typeof lucide !== 'undefined') lucide.createIcons();
          window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
        }
      });
    });
  }
}

customElements.define('custom-header', CustomHeader);