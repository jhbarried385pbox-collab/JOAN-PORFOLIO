// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Form submission
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    alert("Thank you for your message! I'll get back to you soon.");

    form.reset();
});