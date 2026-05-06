// ========================================
// MOBILE NAVIGATION TOGGLE
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when a link is clicked
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Update active nav link
    updateActiveNavLink();
});

function updateActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// ========================================
// CAROUSEL FUNCTIONALITY
// ========================================
let currentSlide = 0;
let autoplayInterval;

function initCarousel(trackId, prevBtnId, nextBtnId, dotsContainerId) {
    const track = document.getElementById(trackId);
    const prevBtn = document.getElementById(prevBtnId);
    const nextBtn = document.getElementById(nextBtnId);
    const dotsContainer = document.getElementById(dotsContainerId);

    if (!track) return;

    const slides = track.querySelectorAll('.carousel-slide, .gallery-carousel-slide');
    const totalSlides = slides.length;
    currentSlide = 0;

    // Create dots
    if (dotsContainer) {
        dotsContainer.innerHTML = '';
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('div');
            dot.className = 'dot' + (i === 0 ? ' active' : '');
            dot.addEventListener('click', () => goToSlide(i, track, dotsContainer, slides.length));
            dotsContainer.appendChild(dot);
        }
    }

    // Navigation buttons
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateCarousel(track, dotsContainer, totalSlides);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateCarousel(track, dotsContainer, totalSlides);
        });
    }

    // Autoplay
    startAutoplay(track, dotsContainer, totalSlides);
    
    if (track) {
        track.addEventListener('mouseenter', stopAutoplay);
        track.addEventListener('mouseleave', () => startAutoplay(track, dotsContainer, totalSlides));
    }
}

function updateCarousel(track, dotsContainer, totalSlides) {
    if (track) {
        // Add 3D effect with perspective
        const offset = currentSlide * 100;
        track.style.transform = `translateX(-${offset}%) rotateZ(0deg)`;
        
        // Add rotation effect based on position
        const slides = track.querySelectorAll('.carousel-slide, .gallery-carousel-slide');
        slides.forEach((slide, index) => {
            const distance = Math.abs(index - currentSlide);
            const rotation = (currentSlide > index ? 1 : -1) * Math.min(distance * 3, 15);
            const translateZ = Math.max(100 - distance * 50, 0);
            slide.style.transform = `perspective(1000px) rotateY(${rotation}deg) translateZ(${translateZ}px) scale(${1 - distance * 0.05})`;
        });
    }
    
    // Update dots
    if (dotsContainer) {
        const dots = dotsContainer.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }
}

function goToSlide(index, track, dotsContainer, totalSlides) {
    currentSlide = index % totalSlides;
    updateCarousel(track, dotsContainer, totalSlides);
    stopAutoplay();
}

function startAutoplay(track, dotsContainer, totalSlides) {
    stopAutoplay();
    autoplayInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel(track, dotsContainer, totalSlides);
        // Add pulse effect to active dot
        const dots = dotsContainer?.querySelectorAll('.dot');
        if (dots) {
            dots.forEach(dot => dot.style.animation = 'none');
            dots[currentSlide].style.animation = 'pulse 0.5s ease-out';
        }
    }, 4000);
}

function stopAutoplay() {
    clearInterval(autoplayInterval);
}

// Initialize carousels
document.addEventListener('DOMContentLoaded', function() {
    initCarousel('carouselTrack', 'prevBtn', 'nextBtn', 'carouselDots');
    initCarousel('galleryCarouselTrack', 'galleryPrevBtn', 'galleryNextBtn', 'galleryCarouselDots');
});

// ========================================
// GALLERY LIGHTBOX
// ========================================
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

let currentImageIndex = 0;
let galleryImages = [];

if (document.querySelector('.gallery-grid')) {
    document.addEventListener('DOMContentLoaded', function() {
        const galleryItems = document.querySelectorAll('.gallery-item');
        galleryImages = Array.from(galleryItems).map(item => 
            item.querySelector('.gallery-image').src
        );

        galleryItems.forEach((item, index) => {
            item.addEventListener('click', function() {
                currentImageIndex = index;
                showLightbox();
            });
        });
    });
}

function showLightbox() {
    if (galleryImages.length > 0) {
        lightboxImage.src = galleryImages[currentImageIndex];
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    showLightbox();
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    showLightbox();
}

if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
}

if (lightboxPrev) {
    lightboxPrev.addEventListener('click', prevImage);
}

if (lightboxNext) {
    lightboxNext.addEventListener('click', nextImage);
}

if (lightbox) {
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
}

// Keyboard navigation for lightbox
document.addEventListener('keydown', function(e) {
    if (lightbox && lightbox.classList.contains('active')) {
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'Escape') closeLightbox();
    }
});

// ========================================
// CONTACT FORM HANDLING
// ========================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formMessage = document.getElementById('formMessage');
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        // Validate form
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            showFormMessage('Please fill in all required fields.', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            showFormMessage('Please enter a valid email address.', 'error');
            return;
        }

        // Create mailto link for email submission
        const subject = `New Contact Form Submission: ${formData.subject}`;
        const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'Not provided'}\n\nMessage:\n${formData.message}`;
        
        // Note: This uses mailto for demonstration. In production, you'd send to a backend service.
        console.log('Form Data:', formData);
        
        // Show success message
        showFormMessage('Thank you! Your message has been received. Michelle will contact you soon.', 'success');
        
        // Reset form
        contactForm.reset();
        
        // Optional: Open email client
        // window.location.href = `mailto:contact@mbeautystudio.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
}

function showFormMessage(message, type) {
    const formMessage = document.getElementById('formMessage');
    if (formMessage) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }
}

// ========================================
// SCROLL ANIMATIONS
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    // Observe elements for fade-in animation
    const elementsToObserve = document.querySelectorAll('.fade-in, .fade-in-up');
    
    elementsToObserve.forEach(el => {
        observer.observe(el);
    });

    // Add stagger delay to multiple elements
    document.querySelectorAll('.fade-in-up').forEach((el, index) => {
        if (index % 3 === 0) el.classList.add('delay-1');
        else if (index % 3 === 1) el.classList.add('delay-2');
    });
});

// ========================================
// SMOOTH SCROLL BEHAVIOR
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ========================================
// NAVBAR BACKGROUND ON SCROLL
// ========================================
const navbar = document.querySelector('.navbar');
const hero = document.querySelector('.hero');
const heroOverlay = document.querySelector('.hero-overlay');
const heroContent = document.querySelector('.hero-content');

window.addEventListener('scroll', function() {
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
        }
    }

    // Hero becomes semi-transparent on scroll (homepage)
    if (hero) {
        const maxFadeScroll = hero.offsetHeight * 0.9;
        const progress = Math.min(window.scrollY / maxFadeScroll, 1);

        hero.style.opacity = `${1 - progress * 0.4}`;

        if (heroOverlay) {
            heroOverlay.style.opacity = `${0.9 - progress * 0.4}`;
        }

        if (heroContent) {
            heroContent.style.transform = `translateY(${progress * 28}px)`;
        }
    }
});

// ========================================
// LAZY LOADING IMAGES
// ========================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ========================================
// UTILITY FUNCTIONS
// ========================================

// Smooth scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Utility: Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// ========================================
// ACCESSIBILITY - SKIP TO CONTENT
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    // Add skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to main content';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 0;
        background: #000;
        color: white;
        padding: 8px;
        z-index: 100;
    `;
    skipLink.onkeydown = function(e) {
        if (e.key === 'Enter') {
            this.style.top = '0';
        }
    };
    skipLink.onblur = function() {
        this.style.top = '-40px';
    };
    document.body.insertBefore(skipLink, document.body.firstChild);
});

// ========================================
// ANALYTICS & TRACKING
// ========================================

// Track button clicks
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn')) {
        console.log('Button clicked:', e.target.textContent);
    }
});

// Track form submissions
if (contactForm) {
    contactForm.addEventListener('submit', function() {
        console.log('Contact form submitted');
    });
}

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// Throttle function
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Optimize resize events
window.addEventListener('resize', debounce(function() {
    console.log('Window resized');
}, 250));

// ========================================
// INITIALIZATION
// ========================================
console.log('M Beauty Studio - Website Initialized');
console.log('Modern, Responsive Design Ready for Deployment');
