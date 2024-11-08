document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        successMessage.style.display = "block";
        contactForm.reset();
    });
});

