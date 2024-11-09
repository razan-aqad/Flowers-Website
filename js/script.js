document.addEventListener("DOMContentLoaded", function() {

    document.querySelector(".hero-sec .content").classList.add("show");
});


// Function to detect if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Add 'visible' class when each product enters the viewport
function checkVisibility() {
    const products = document.querySelectorAll(".product-grid");
    products.forEach(product => {
        if (isInViewport(product)) {
            product.classList.add("visible");
        }
    });
}

document.addEventListener("scroll", checkVisibility);
document.addEventListener("DOMContentLoaded", checkVisibility);

// review
document.addEventListener("DOMContentLoaded", function() {
    const reviews = document.querySelectorAll(".review-grid");
    reviews.forEach((review) => {
        review.classList.add("visible");
    });
});
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
});

document.querySelectorAll(".review-grid").forEach((review) => {
    observer.observe(review);
});

// animation

document.addEventListener("DOMContentLoaded", function() {
    const headers = document.querySelectorAll('.fade-in-typing');

    const handleScroll = () => {
        headers.forEach(header => {
            const rect = header.getBoundingClientRect();
            if (rect.top <= window.innerHeight - 50) { // تعديل هنا حسب المسافة المطلوبة
                header.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
});

