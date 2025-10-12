// Minimal theme toggle functionality
function toggleMinimalTheme() {
    const myDesign = document.getElementById('myDesign');
    const themeToggle = document.getElementById('minimalThemeToggle');
    
    if (myDesign.classList.contains('dark-mode')) {
        // Switch to light mode
        myDesign.classList.remove('dark-mode');
        themeToggle.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"/>
            </svg>
        `;
    } else {
        // Switch to dark mode
        myDesign.classList.add('dark-mode');
        themeToggle.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
            </svg>
        `;
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('.minimal-nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});