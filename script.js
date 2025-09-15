function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Initialize Vanta NET background when page loads
document.addEventListener('DOMContentLoaded', function() {
    VANTA.NET({
        el: "#vanta-background",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xcccccc,
        backgroundColor: 0xf5f5f5,
        points: 10.00,
        maxDistance: 22.00,
        spacing: 14.00
    });
});