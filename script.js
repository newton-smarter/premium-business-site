// Wait until the HTML document is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Find our theme switch checkbox by its unique ID
  const themeToggle = document.getElementById("theme-toggle");

  // Listen for when the user clicks or toggles the switch
  themeToggle.addEventListener("change", (event) => {
    if (event.target.checked) {
      // If checked, turn on Dark Mode
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      // If unchecked, revert back to Light Mode
      document.documentElement.setAttribute("data-theme", "light");
    }
  });
});
// Find our contact form by its unique HTML ID
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Prevent the browser from refreshing the page
            event.preventDefault();

            // Select the button and change its text to a loading state
            const submitButton = this.querySelector('button[type="submit"]');
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;

            // Grab the name field to create a personalized message
            const nameInput = document.getElementById('name').value;

            // Simulate an API network request delay (1.5 seconds)
            setTimeout(() => {
                // Clear the form elements and display a success confirmation message
                contactForm.innerHTML = `
                    <div style="text-align: center; padding: 2rem 0;">
                        <div style="font-size: 3rem; margin-bottom: 1rem;">✅</div>
                        <h3 style="color: var(--text-main); font-size: 1.5rem; margin-bottom: 0.5rem;">Thank you, ${nameInput}!</h3>
                        <p style="color: var(--text-muted);">Your message has been sent successfully. We will get back to you shortly.</p>
                    </div>
                `;
            }, 1500);
        });
    }