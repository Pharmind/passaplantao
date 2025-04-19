// Main entry point for the application
import { initializeApp } from './core.js';
import { loadComponents } from './components.js';
import { setupKeyboardShortcuts } from './ui.js';
import { setupSharingButtons } from './sharing.js';

document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Load all components first
        await loadComponents();
        console.log("Components loaded successfully");
        
        // Add a longer delay to ensure DOM is fully ready
        setTimeout(() => {
            // Initialize the application
            initializeApp();
            
            // Setup sharing functionality
            setupSharingButtons();
            
            console.log("Application initialized successfully");
        }, 800); // Increased delay for better reliability
    } catch (error) {
        console.error("Error during initialization:", error);
        alert("Houve um erro ao inicializar a aplicação. Por favor, recarregue a página.");
    }
});