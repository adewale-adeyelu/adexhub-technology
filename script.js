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
    const modalLinks = document.querySelectorAll('.modal-link');
    
    // Open modal
    modalToggle.addEventListener('click', function() {
        modalOverlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    });
    
    // Close modal function
    const closeModalFunc = function() {
        modalOverlay.classList.add('hidden');
        document.body.style.overflow = '';
    };
    
    // Close modal when clicking X
    closeModal.addEventListener('click', closeModalFunc);
    
    // Close when clicking outside
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            closeModalFunc();
        }
    });
    
    // Close with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModalFunc();
        }
    });
    
    // Handle navigation link clicks
    modalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Close the modal first
            closeModalFunc();
        });
    });
});

// accordion
function toggleAccordion(id) {
    const panel = document.getElementById(`panel-${id}`);
    const icon = document.getElementById(`icon-${id}`);

    const isOpen = !panel.classList.contains("hidden");
    if (isOpen) {
        panel.classList.add("hidden");
        icon.classList.replace("bi-chevron-up", "bi-chevron-down");
    } else {
        panel.classList.remove("hidden");
        icon.classList.replace("bi-chevron-down", "bi-chevron-up");
    }
}

// password
document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.getElementById('eyeIcon');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.classList.remove('bi-eye-slash');
        eyeIcon.classList.add('bi-eye');
    } else {
        passwordInput.type = 'password';
        eyeIcon.classList.remove('bi-eye');
        eyeIcon.classList.add('bi-eye-slash');
    }
});
