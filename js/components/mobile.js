// Mobile-specific features and functionality

/**
 * Sets up mobile-specific components and interactions
 */
export function setupMobileFeatures() {
    // Setup quick save button for mobile
    setTimeout(() => {
        setupQuickSaveButton();
        setupMobileSelects();
    }, 300);
}

/**
 * Setup floating action button for mobile saves
 */
function setupQuickSaveButton() {
    const quickSaveBtn = document.getElementById('quickSaveBtn');
    if (!quickSaveBtn) {
        console.warn('Quick save button not found');
        return;
    }
    
    quickSaveBtn.addEventListener('click', function() {
        // Trigger save function
        const saveButton = document.getElementById('btnSalvar');
        if (saveButton) saveButton.click();
    });
    
    // Add double-tap behavior to scroll to top
    let lastTap = 0;
    quickSaveBtn.addEventListener('touchend', function(e) {
        const currentTime = new Date().getTime();
        const tapLength = currentTime - lastTap;
        if (tapLength < 300 && tapLength > 0) {
            // Double tap detected - scroll to top
            window.scrollTo({top: 0, behavior: 'smooth'});
            e.preventDefault();
        }
        lastTap = currentTime;
    });
    
    console.log('Mobile quick save button initialized');
}

/**
 * Setup mobile-friendly select elements
 */
function setupMobileSelects() {
    // Add touch-friendly class to select elements
    const selectElements = document.querySelectorAll('select');
    selectElements.forEach(select => {
        select.classList.add('mobile-select');
    });
}