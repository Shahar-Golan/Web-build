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
        mouseControls: false,
        touchControls: false,
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

// PDF Modal Functions
function openPdfModal() {
    const modal = document.getElementById('pdfModal');
    const pdfViewer = document.getElementById('pdfViewer');
    
    // Set the PDF source
    pdfViewer.src = './assets/Shahar Golan - CV.pdf';
    
    // Show the modal
    modal.style.display = 'block';
    
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
}

// Research Paper PDF Modal Function
function openPaperModal() {
    const modal = document.getElementById('pdfModal');
    const pdfViewer = document.getElementById('pdfViewer');
    const modalTitle = document.querySelector('.pdf-modal-title');
    
    // Update the modal title for the research paper
    modalTitle.textContent = 'IsraHCI 2025 Conference Paper';
    
    // Set the research paper PDF source
    pdfViewer.src = './assets/IsraHCI2025_paper_77.pdf';
    
    // Show the modal
    modal.style.display = 'block';
    
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
}

function closePdfModal() {
    const modal = document.getElementById('pdfModal');
    const pdfViewer = document.getElementById('pdfViewer');
    const modalTitle = document.querySelector('.pdf-modal-title');
    
    // Hide the modal
    modal.style.display = 'none';
    
    // Clear the PDF source to stop loading
    pdfViewer.src = '';
    
    // Reset modal title to default
    modalTitle.textContent = 'Shahar Golan - CV';
    
    // Restore body scrolling
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('pdfModal');
    if (event.target == modal) {
        closePdfModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const modal = document.getElementById('pdfModal');
        if (modal.style.display === 'block') {
            closePdfModal();
        }
    }
});