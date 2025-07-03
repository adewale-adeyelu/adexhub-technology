// page loader
document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");

    // Simulate loading time
    setTimeout(() => {
        loader.style.opacity = "0"; // Smooth transition
        setTimeout(() => {
            loader.style.display = "none";
            content.style.display = "block";
        }, 500); // Give time for opacity transition
    }, 3000); // Adjust loading time if needed
});

// modal
document.addEventListener('DOMContentLoaded', function() {
    const modalOverlay = document.getElementById('modalOverlay');
    const modalToggle = document.getElementById('modalToggle');
    const closeModal = document.getElementById('closeModal');
    
    // Open modal
    modalToggle.addEventListener('click', function() {
        modalOverlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    });
    
    // Close modal
    closeModal.addEventListener('click', function() {
        modalOverlay.classList.add('hidden');
        document.body.style.overflow = '';
    });
    
    // Close modal when clicking outside
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            modalOverlay.classList.add('hidden');
            document.body.style.overflow = '';
        }
    });
});

