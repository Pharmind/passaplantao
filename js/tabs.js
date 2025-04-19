// Tab system functionality
export function setupTabs() {
    // Wait for DOM elements to be loaded
    setTimeout(() => {
        const tabButtons = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');
        
        if (!tabButtons.length || !tabContents.length) {
            console.warn('Tab elements not found. Trying again...');
            setTimeout(setupTabs, 300); // Try again with a longer delay
            return;
        }
        
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const target = button.getAttribute('data-tab');
                const targetElement = document.getElementById(target);
                
                if (!targetElement) {
                    console.error(`Target tab ${target} not found`);
                    return;
                }
                
                // Deactivate all tabs
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                // Activate selected tab
                button.classList.add('active');
                targetElement.classList.add('active');
            });
        });
        
        console.log('Tab system initialized successfully');
    }, 300); // Increased delay
}