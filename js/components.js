// This file now serves as an entry point to the component system
// It imports from specialized component files and orchestrates component loading

import { loadHeaderComponent } from './components/header.js';
import { loadTabComponents } from './components/tabs.js';
import { loadFormComponents } from './components/forms.js';
import { loadActionComponents } from './components/actions.js';
import { setupMobileFeatures } from './components/mobile.js';

/**
 * Loads all components in the application
 */
export async function loadComponents() {
    return new Promise((resolve) => {
        try {
            // First, load the header component
            loadHeaderComponent();
            console.log("Header loaded");
            
            // Add longer delay between component loads
            setTimeout(() => {
                // Then load tab components (this contains most of the form structure)
                loadTabComponents();
                console.log("Tabs loaded");
                
                // Small delay to ensure tabs are loaded before continuing
                setTimeout(() => {
                    // Load remaining components
                    loadFormComponents();
                    console.log("Forms loaded");
                    
                    loadActionComponents();
                    console.log("Actions loaded");
                    
                    // Setup mobile-specific components
                    setupMobileFeatures();
                    console.log("Mobile features loaded");
                    
                    // Give more time for DOM updates to complete
                    setTimeout(resolve, 500);
                }, 400);
            }, 300);
        } catch (error) {
            console.error("Error loading components:", error);
            resolve(); // Resolve anyway to prevent blocking
        }
    });
}