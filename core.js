// Core functionality and application initialization
import { setupTabs } from './tabs.js';
import { setupCheckboxes, setupQuickActions, setupTemplates, setupClearFieldButtons } from './forms.js';
import { loadFormData, setupSaveButton, setupClearButton } from './storage.js';
import { setupPrintButton, updateTimestamp, setupKeyboardShortcuts } from './ui.js';
import { setupSmartSuggestions } from './suggestions.js';

export function initializeApp() {
    // Set default date values to today
    const today = new Date().toISOString().split('T')[0];
    
    // Ensure components are fully loaded before initialization
    setTimeout(() => {
        const dataInput = document.getElementById('data');
        const dataCAFInput = document.getElementById('dataCAF');
        
        if (dataInput) dataInput.value = today;
        if (dataCAFInput) dataCAFInput.value = today;
        
        // Initialize all modules with appropriate delays
        setupTabs();
        
        // Set up form controls with slight delays to ensure DOM elements exist
        setTimeout(() => {
            setupCheckboxes();
            setupQuickActions();
            setupTemplates();
            setupClearFieldButtons();
            setupSmartSuggestions();
            
            // Setup action buttons
            setupSaveButton();
            setupPrintButton();
            setupClearButton();
            
            // Add keypress shortcuts
            setupKeyboardShortcuts();
            
            // Load saved data with a longer delay to ensure DOM is completely ready
            setTimeout(() => {
                loadFormData();
            }, 500);
        }, 300);
    }, 500); // Increased delay to ensure DOM is ready
}