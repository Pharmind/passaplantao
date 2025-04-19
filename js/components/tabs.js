// Tab components and related functionality
import { TAB_BUTTONS } from './tabs/tab-buttons.js';
import { TAB_SATELITES } from './tabs/tab-satelites.js';
import { TAB_CAF } from './tabs/tab-caf.js';
import { setupReportModeToggle } from './tabs/report-mode.js';

/**
 * Loads all tab components
 */
export function loadTabComponents() {
    // Load tab buttons
    const tabButtonsElement = document.getElementById('tab-buttons');
    if (tabButtonsElement) {
        tabButtonsElement.innerHTML = TAB_BUTTONS;
    } else {
        console.error("Tab buttons container not found");
        return; // Exit early if critical element is missing
    }
    
    // Load tab content
    const satelitesTabElement = document.getElementById('tab-satelites');
    if (satelitesTabElement) {
        satelitesTabElement.innerHTML = TAB_SATELITES;
        
        // Load satelites form fields with dynamic import that accommodates the new structure
        setTimeout(() => {
            const satelitesFormFields = document.getElementById('satelites-form-fields');
            if (satelitesFormFields) {
                import('./forms-satelites.js')
                    .then(module => {
                        satelitesFormFields.innerHTML = module.SATELITES_FORM_FIELDS;
                        console.log("Satelites form fields loaded successfully");
                        
                        // Set up report mode toggle
                        setupReportModeToggle();
                    })
                    .catch(error => {
                        console.error("Error loading forms-satelites module:", error);
                        // Fallback in case of module loading error
                        satelitesFormFields.innerHTML = '<div class="error-message">Erro ao carregar os campos do formulário. Recarregue a página.</div>';
                    });
            } else {
                console.error("Satelites form fields container not found");
            }
        }, 300); // Increased delay for better reliability
    } else {
        console.error("Satelites tab container not found");
    }
    
    // Load CAF tab content
    const cafTabElement = document.getElementById('tab-caf');
    if (cafTabElement) {
        cafTabElement.innerHTML = TAB_CAF;
        
        // Set up report mode toggle for CAF tab
        setTimeout(() => {
            setupReportModeToggle();
        }, 300);
    } else {
        console.error("CAF tab container not found");
    }
    
    console.log("Tab components loaded successfully");
}