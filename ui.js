// UI interactions and animations
import { saveFormData } from './storage.js';

export function setupPrintButton() {
    const printButton = document.getElementById('btnImprimir');
    if (printButton) {
        printButton.addEventListener('click', function() {
            window.print();
        });
    }
}

// Show save animation
export function showSaveAnimation() {
    const button = document.getElementById('btnSalvar');
    if (!button) return;
    
    const originalText = button.innerHTML;
    
    button.innerHTML = '<i class="fas fa-check"></i> Salvo!';
    button.style.backgroundColor = '#28a745';
    
    setTimeout(() => {
        button.innerHTML = originalText;
        button.style.backgroundColor = '';
    }, 1500);
    
    // Also show mobile feedback
    showMobileSaveFeedback();
}

// Show clear animation
export function showClearAnimation() {
    const container = document.querySelector('.container');
    if (!container) return;
    
    container.style.animation = 'fadeIn 0.5s ease';
    setTimeout(() => { container.style.animation = ''; }, 500);
}

// Show mobile feedback for save action
export function showMobileSaveFeedback() {
    const fabButton = document.getElementById('quickSaveBtn');
    if (!fabButton) return;
    
    const originalHtml = fabButton.innerHTML;
    
    fabButton.innerHTML = '<i class="fas fa-check"></i>';
    fabButton.style.backgroundColor = '#28a745';
    
    setTimeout(() => {
        fabButton.innerHTML = originalHtml;
        fabButton.style.backgroundColor = '';
    }, 1500);
}

// Enhanced keyboard shortcuts for all devices
export function setupKeyboardShortcuts() {
    setTimeout(() => {
        document.querySelectorAll('textarea').forEach(textarea => {
            textarea.addEventListener('keydown', function(e) {
                // Ctrl+Enter or Command+Enter (for Mac) to save
                if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                    e.preventDefault();
                    saveFormData();
                    showSaveAnimation();
                    showMobileSaveFeedback(); // Also show mobile feedback
                    updateTimestamp();
                }
            });
        });
        
        // Add global keyboard shortcuts
        document.addEventListener('keydown', function(e) {
            // Ctrl+S to save
            if (e.ctrlKey && e.key === 's') {
                e.preventDefault();
                const saveBtn = document.getElementById('btnSalvar');
                if (saveBtn) saveBtn.click();
            }
            
            // Ctrl+P to print
            if (e.ctrlKey && e.key === 'p') {
                const printBtn = document.getElementById('btnImprimir');
                if (printBtn) printBtn.click();
            }
        });
        
        // Add double-tap behavior to scroll to top
        const quickSaveBtn = document.getElementById('quickSaveBtn');
        if (quickSaveBtn) {
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
        }
    }, 500); // Add delay to ensure elements are loaded
}

// Function to update timestamp display
export function updateTimestamp() {
    const timestamp = document.getElementById('timestamp');
    if (!timestamp) return;
    
    const now = new Date();
    const formattedDate = now.toLocaleDateString('pt-BR', { 
        day: '2-digit', 
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    
    timestamp.textContent = `Último salvamento: ${formattedDate}`;
    
    // Show mobile feedback when timestamp is updated
    showMobileSaveFeedback();
}