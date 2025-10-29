// ============================================
// JS pour ENTREPRENEURIAT VERT - Site Vitrine
// ============================================

// 1️⃣ Texte du hero au chargement
window.addEventListener('load', function(){
    const heroText = document.querySelector('.hero-content');
    heroText.classList.add('show');
});

// 2️⃣ Hero slider automatique
let slides = document.querySelectorAll('.slide-img');
let currentSlide = 0;
setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}, 5000);

// 3️⃣ Lightbox pour produits
function openLightbox(img) {
    document.getElementById('lightbox-img').src = img.src;
    document.getElementById('lightbox').style.display = 'flex';
}
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// 4️⃣ Animations au scroll
function animateOnScroll() {
    document.querySelectorAll('.animate').forEach(section => {
        let rect = section.getBoundingClientRect();
        if(rect.top < window.innerHeight - 100) {
            section.classList.add('show');
        }
    });
}
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll); // aussi au chargement

// 5️⃣ Smooth scroll pour les liens du header
document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if(targetSection){
            window.scrollTo({
                top: targetSection.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});
