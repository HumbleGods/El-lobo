// Smooth Scroll Function
function scrollToSection(id) {
    const section = document.getElementById(id);
    if(section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Contact Form Submit (optional extra feature)
const form = document.getElementById('contact-form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thanks for contacting us! We will reach out soon.');
    form.reset();
});
