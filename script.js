document.getElementById('scrollBtn').addEventListener('click', function() {
// Smooth scroll behavior for the Explore button (safe when element exists)
var scrollBtn = document.getElementById('scrollBtn');
if (scrollBtn) {
    scrollBtn.addEventListener('click', function() {
        var about = document.getElementById('about');
        if (about) about.scrollIntoView({ behavior: 'smooth' });
    });
}

// No-op for hero button (anchor link handles navigation)
// Add any additional interactivity here
