document.addEventListener("DOMContentLoaded", () => {
  // 1. Automated Time-Zone Greeting Script
  const initGreeting = () => {
    const greetingElement = document.getElementById("time-greeting");
    if (!greetingElement) return;

    const currentHour = new Date().getHours();
    let greetingString = "Good Evening";

    if (currentHour >= 5 && currentHour < 12) {
      greetingString = "Good Morning";
    } else if (currentHour >= 12 && currentHour < 18) {
      greetingString = "Good Afternoon";
    }

    greetingElement.textContent = `${greetingString}, Strategy Partner`;
  };

  // 2. Dynamic Live Availability Urgency Dot
  const initAvailability = () => {
    const textElement = document.getElementById("availability-text");
    if (!textElement) return;

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const currentDate = new Date();
    const activeMonth = months[currentDate.getMonth()];
    const activeYear = currentDate.getFullYear();

    textElement.textContent = `Fully Available for 1 New Client in ${activeMonth} ${activeYear}`;
  };

  // 3. Adaptive Mobile Navigation Drawer & Hamburger-to-X Icon Transformer
  const initMobileMenu = () => {
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const mobileDrawer = document.getElementById("mobile-drawer");

    if (!hamburgerBtn || !mobileDrawer) return;

    const toggleMenu = () => {
      const isExpanded = hamburgerBtn.getAttribute("aria-expanded") === "true";
      hamburgerBtn.setAttribute("aria-expanded", !isExpanded);
      mobileDrawer.classList.toggle("open");
    };

    hamburgerBtn.addEventListener("click", toggleMenu);

    // Close drawer when mobile navigation link is clicked
    const mobileLinks = document.querySelectorAll(".mobile-link");
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        hamburgerBtn.setAttribute("aria-expanded", "false");
        mobileDrawer.classList.remove("open");
      });
    });
  };

  // 4. Dual-State Theme Engine ( bright mode to deep obsidian dark mode )
  const initThemeEngine = () => {
    const themeToggle = document.getElementById("theme-toggle");
    if (!themeToggle) return;

    // Match system preferences or fallback to light
    const savedTheme =
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");

    document.documentElement.setAttribute("data-theme", savedTheme);

    themeToggle.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const targetTheme = currentTheme === "dark" ? "light" : "dark";

      document.documentElement.setAttribute("data-theme", targetTheme);
      localStorage.setItem("theme", targetTheme);
    });
  };

  // 5. Micro-Interaction Clipboard Copy Manager
  const initClipboardManager = () => {
    const copyBtn = document.getElementById("copy-email-btn");
    const copyBadge = document.getElementById("copy-badge");

    if (!copyBtn || !copyBadge) return;

    const businessEmail = "architecture@coreengine.io";

    copyBtn.addEventListener("click", () => {
      navigator.clipboard
        .writeText(businessEmail)
        .then(() => {
          copyBadge.classList.add("visible");
          setTimeout(() => {
            copyBadge.classList.remove("visible");
          }, 2000);
        })
        .catch((err) => {
          console.error("Could not copy system metric string: ", err);
        });
    });
  };

  // 6. Live Niche Case Study Switcher
  const initTabSwitcher = () => {
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");

    tabButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const targetTab = btn.getAttribute("data-tab");

        tabButtons.forEach((b) => b.classList.remove("active"));
        tabContents.forEach((c) => c.classList.remove("active"));

        btn.classList.add("active");
        const activeContent = document.getElementById(targetTab);
        if (activeContent) activeContent.classList.add("active");
      });
    });
  };

  // 7. System Blocker Capability Analyzer Checklist
  const initAnalyzerChecklist = () => {
    const checkboxes = document.querySelectorAll(".friction-checkbox");
    const feedbackBlock = document.getElementById("analyzer-feedback");

    if (!checkboxes.length || !feedbackBlock) return;

    const recommendations = {
      manual:
        "Starter Setup Architecture recommended to clear bottleneck manual data errors safely.",
      leads:
        "Business Optimization Array recommended to anchor automated web hooks and recovery triggers.",
      legacy:
        "Core Viewport Safeguard packages required to eliminate broken horizontal screen jiggle frameworks completely.",
    };

    const updateFeedback = () => {
      const checkedValues = Array.from(checkboxes)
        .filter((cb) => cb.checked)
        .map((cb) => cb.value);

      if (checkedValues.length === 0) {
        feedbackBlock.textContent =
          "Select active friction points above to print customized engineering package solutions map.";
        return;
      }

      let htmlSolutions =
        "<ul style='padding-left: 1.25rem; margin-top: 0.5rem;'>";
      checkedValues.forEach((val) => {
        if (recommendations[val]) {
          htmlSolutions += `<li style='margin-bottom: 0.25rem;'>${recommendations[val]}</li>`;
        }
      });
      htmlSolutions += "</ul>";

      feedbackBlock.innerHTML = `<strong>Architectural Recommendations Map:</strong> ${htmlSolutions}`;
    };

    checkboxes.forEach((cb) => cb.addEventListener("change", updateFeedback));
  };

  // 8. Interactive Automation ROI Savings Calculator
  const initROICalculator = () => {
    const slider = document.getElementById("hours-slider");
    const sliderValDisplay = document.getElementById("hours-val");
    const savingsDisplay = document.getElementById("roi-savings");

    if (!slider || !sliderValDisplay || !savingsDisplay) return;

    const hourlyRateOptimization = 150; // KSh scaling multiplier constant
    const operationalWeeks = 52;

    const calculateROI = () => {
      const hours = parseInt(slider.value, 10);
      sliderValDisplay.textContent = `${hours} Hours`;

      // Absolute annual cash savings calculation formula
      const absoluteAnnualSavings =
        hours * hourlyRateOptimization * operationalWeeks;
      savingsDisplay.textContent = `KSh ${absoluteAnnualSavings.toLocaleString()}`;
    };

    slider.addEventListener("input", calculateROI);
    calculateROI(); // Trigger baseline initialization calculation
  };

  // 9. Smooth Animated FAQ Accordion Panel
  const initFAQAccordion = () => {
    const triggers = document.querySelectorAll(".faq-trigger");

    triggers.forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const item = trigger.parentElement;
        const panel = trigger.nextElementSibling;
        const isActive = item.classList.contains("active");

        // Collapse sibling accordion items
        document.querySelectorAll(".faq-item").forEach((i) => {
          i.classList.remove("active");
          i.querySelector(".faq-panel").style.maxHeight = null;
        });

        if (!isActive) {
          item.classList.add("active");
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    });
  };

  // 10. Dynamic Success Form Overlay Matrix
  const initContactForm = () => {
    const form = document.getElementById("enterprise-form");
    const overlay = document.getElementById("form-success-overlay");
    const nameInput = document.getElementById("client-name");
    const emailInput = document.getElementById("client-email");
    const submitBtn = document.getElementById("form-submit-btn");

    if (!form || !overlay) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Temporarily disable operational input fields during verification sequence
      nameInput.disabled = true;
      emailInput.disabled = true;
      submitBtn.disabled = true;
      submitBtn.textContent = "Processing payload...";

      setTimeout(() => {
        overlay.classList.add("active");
      }, 1200);
    });
  };

  // 11. Verified Project Destination Link Modals
  const initModals = () => {
    const openButtons = document.querySelectorAll(".open-modal-btn");
    const closeButtons = document.querySelectorAll(".close-modal-btn");
    const overlays = document.querySelectorAll(".modal-overlay");

    openButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const modalId = btn.getAttribute("data-modal");
        const targetModal = document.getElementById(modalId);
        if (targetModal) targetModal.classList.add("open");
      });
    });

    const closeModal = (modalElement) => {
      modalElement.classList.remove("open");
    };

    closeButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        closeModal(btn.closest(".modal"));
      });
    });

    overlays.forEach((overlay) => {
      overlay.addEventListener("click", () => {
        closeModal(overlay.closest(".modal"));
      });
    });
  };

  // 12. Intersection Observer Scroll Reveal System
  const initScrollReveal = () => {
    const itemsToReveal = document.querySelectorAll(".text-reveal");

    if (!("IntersectionObserver" in window)) {
      // Fallback gracefully for legacy footprints
      itemsToReveal.forEach((item) => item.classList.add("revealed"));
      return;
    }

    const observerOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: "0px 0px -40px 0px",
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target); // Optimize processing node overhead
        }
      });
    }, observerOptions);

    itemsToReveal.forEach((item) => observer.observe(item));
  };

  // Initialize all modular logic nodes systematically
  initGreeting();
  initAvailability();
  initMobileMenu();
  initThemeEngine();
  initClipboardManager();
  initTabSwitcher();
  initAnalyzerChecklist();
  initROICalculator();
  initFAQAccordion();
  initContactForm();
  initModals();
  initScrollReveal();
});
