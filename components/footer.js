class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer style="background-color: #1F2D3D;" class="pt-14 pb-8">
        <div class="container mx-auto px-4 md:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

            <!-- Logo & Tagline -->
            <div>
              <div class="flex items-center gap-3 mb-4">
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                  <path d="M4 16C4 16 9 8 16 8C23 8 28 16 28 16C28 16 23 24 16 24C9 24 4 16 4 16Z"
                        stroke="rgba(255,255,255,0.45)" stroke-width="1.5" fill="none" stroke-linejoin="round"/>
                  <circle cx="16" cy="16" r="4" fill="rgba(255,255,255,0.45)"/>
                  <circle cx="16" cy="16" r="2" fill="#1F2D3D"/>
                </svg>
                <span class="footer-brand">Dr. Kevin Shah</span>
              </div>
              <p class="footer-tagline">Caring for your vision,<br>one patient at a time.</p>
              <div class="flex gap-3 mt-5">
                <a href="#" class="footer-social" aria-label="Facebook">
                  <i data-lucide="facebook" class="w-4 h-4"></i>
                </a>
                <a href="#" class="footer-social" aria-label="Instagram">
                  <i data-lucide="instagram" class="w-4 h-4"></i>
                </a>
                <a href="#" class="footer-social" aria-label="LinkedIn">
                  <i data-lucide="linkedin" class="w-4 h-4"></i>
                </a>
              </div>
            </div>

            <!-- Quick Links -->
            <div>
              <h4 class="footer-heading">Quick Links</h4>
              <ul class="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Dr. Shah</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#testimonials">Patient Testimonials</a></li>
                <li><a href="#appointment">Book Appointment</a></li>
              </ul>
            </div>

            <!-- Contact -->
            <div>
              <h4 class="footer-heading">Contact Us</h4>
              <ul class="footer-contact">
                <li>
                  <i data-lucide="map-pin" class="footer-icon"></i>
                  <span>OPD 201, Superspeciality Hospital,  Mumbai 400060</span>
                </li>
                <li>
                  <i data-lucide="phone" class="footer-icon"></i>
                  <span>+91 83690 13101</span>
                </li>
                <li>
                  <i data-lucide="mail" class="footer-icon"></i>
                  <span>contact@drShaheyeclinic.com</span>
                </li>
                <li>
                  <i data-lucide="clock" class="footer-icon"></i>
                  <span>Mon–Sat 10am–6pm · Sun 10am–2pm</span>
                </li>
              </ul>
            </div>

            <!-- Review CTA -->
            <div>
              <h4 class="footer-heading">Share Your Experience</h4>
              <p class="footer-tagline mb-5">
                Help other patients in Mumbai find trusted eye care by leaving a review.
              </p>
              <a href="#" class="footer-review-btn">
                <svg width="15" height="15" viewBox="0 0 20 20" class="review-star">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                Leave us a Google Review
              </a>
            </div>

          </div>

          <!-- Bottom bar -->
          <div style="border-top: 1px solid rgba(255,255,255,0.08); padding-top: 1.75rem; text-align: center;">
            <p class="footer-copy">© <span id="footerYear"></span> Dr. Kevin Shah | Ophthalmologist. All rights reserved.</p>
            <p class="footer-copy" style="margin-top: 0.3rem; opacity: 0.5;">This website is for informational purposes only. Consult a medical professional for personal health advice.</p>
          </div>
        </div>
      </footer>

      <style>
        .footer-brand {
          font-family: 'Fraunces', Georgia, serif;
          font-size: 1.15rem;
          font-weight: 700;
          color: #ffffff;
        }

        .footer-tagline {
          font-family: 'Atkinson Hyperlegible', Arial, sans-serif;
          font-size: 0.875rem;
          color: rgba(255,255,255,0.55);
          line-height: 1.6;
        }

        .footer-heading {
          font-family: 'Fraunces', Georgia, serif;
          font-size: 1rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1rem;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
        }

        .footer-links a {
          font-family: 'Atkinson Hyperlegible', Arial, sans-serif;
          font-size: 0.875rem;
          color: rgba(255,255,255,0.55);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-links a:hover { color: #E4F4F5; }

        .footer-contact {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
        }

        .footer-contact li {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-family: 'Atkinson Hyperlegible', Arial, sans-serif;
          font-size: 0.85rem;
          color: rgba(255,255,255,0.55);
          line-height: 1.5;
        }

        .footer-icon {
          color: #1A8F99;
          width: 15px;
          height: 15px;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .footer-social {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: 6px;
          background: rgba(255,255,255,0.07);
          color: rgba(255,255,255,0.55);
          text-decoration: none;
          transition: background 0.2s, color 0.2s;
        }

        .footer-social:hover {
          background: rgba(26, 143, 153, 0.3);
          color: #ffffff;
        }

        .footer-review-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Atkinson Hyperlegible', Arial, sans-serif;
          font-size: 0.875rem;
          font-weight: 700;
          color: #E8705A;
          background: rgba(232, 112, 90, 0.10);
          border: 1.5px solid rgba(232, 112, 90, 0.35);
          padding: 0.65rem 1.1rem;
          border-radius: 6px;
          text-decoration: none;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
        }

        .footer-review-btn .review-star { fill: #E8705A; transition: fill 0.2s; }

        .footer-review-btn:hover {
          background: #E8705A;
          border-color: #E8705A;
          color: #ffffff;
        }

        .footer-review-btn:hover .review-star { fill: #ffffff; }

        .footer-copy {
          font-family: 'Atkinson Hyperlegible', Arial, sans-serif;
          font-size: 0.8rem;
          color: rgba(255,255,255,0.4);
          margin: 0;
        }
      </style>
    `;

    const yearEl = this.querySelector('#footerYear');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    if (typeof lucide !== 'undefined') lucide.createIcons();
  }
}

customElements.define('custom-footer', CustomFooter);