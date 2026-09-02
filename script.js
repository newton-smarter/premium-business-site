document.addEventListener("DOMContentLoaded", () => {
  const menuToggleBtn = document.getElementById("menu-toggle-btn");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-links a");

  if (menuToggleBtn && navMenu) {
    menuToggleBtn.addEventListener("click", () => {
      const isOpen = menuToggleBtn.classList.toggle("active");
      navMenu.classList.toggle("active");
      menuToggleBtn.setAttribute("aria-expanded", isOpen);
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        menuToggleBtn.classList.remove("active");
        navMenu.classList.remove("active");
        menuToggleBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("change", (e) => {
      if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
      }
    });
  }

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const submitButton = this.querySelector('button[type="submit"]');
      submitButton.textContent = "Sending...";
      submitButton.disabled = true;

      const nameInput = document.getElementById("name").value;

      setTimeout(() => {
        contactForm.innerHTML = `
                    <div style="text-align: center; padding: 2.5rem 0; animation: fadeInUp 0.5s ease forwards;">
                        <div style="font-size: 3.5rem; margin-bottom: 1rem;">✅</div>
                        <h3 style="color: var(--text-main); font-size: 1.5rem; margin-bottom: 0.5rem;">Thank you, ${nameInput}!</h3>
                        <p style="color: var(--text-muted);">Your digital brief was dispatched securely. Our operators will follow up shortly.</p>
                    </div>
                `;
      }, 1500);
    });
  }
});
