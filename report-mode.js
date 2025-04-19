// Report mode toggle functionality

/**
 * Sets up toggle functionality between complete and exception-based report modes
 */
export function setupReportModeToggle() {
    // Set up report mode toggle for Satelites tab
    const modeCompleteRadio = document.getElementById('modeComplete');
    const modeExceptionRadio = document.getElementById('modeException');
    const modeDescription = document.getElementById('modeDescription');
    
    if (modeCompleteRadio && modeExceptionRadio) {
        modeCompleteRadio.addEventListener('change', function() {
            toggleReportMode('satelites', 'complete');
            document.querySelector('label[for="modeComplete"]').classList.add('active');
            document.querySelector('label[for="modeException"]').classList.remove('active');
            if (modeDescription) {
                modeDescription.textContent = 'Modo completo: registre todas as atividades do plantão.';
            }
        });
        
        modeExceptionRadio.addEventListener('change', function() {
            toggleReportMode('satelites', 'exception');
            document.querySelector('label[for="modeException"]').classList.add('active');
            document.querySelector('label[for="modeComplete"]').classList.remove('active');
            if (modeDescription) {
                modeDescription.textContent = 'Modo por exceção: registre apenas pendências e situações críticas.';
            }
        });
    }
    
    // Set up report mode toggle for CAF tab
    const modeCompleteCAFRadio = document.getElementById('modeCompleteCAF');
    const modeExceptionCAFRadio = document.getElementById('modeExceptionCAF');
    const modeDescriptionCAF = document.getElementById('modeDescriptionCAF');
    
    if (modeCompleteCAFRadio && modeExceptionCAFRadio) {
        modeCompleteCAFRadio.addEventListener('change', function() {
            toggleReportMode('caf', 'complete');
            document.querySelector('label[for="modeCompleteCAF"]').classList.add('active');
            document.querySelector('label[for="modeExceptionCAF"]').classList.remove('active');
            if (modeDescriptionCAF) {
                modeDescriptionCAF.textContent = 'Modo completo: registre todas as atividades do CAF.';
            }
        });
        
        modeExceptionCAFRadio.addEventListener('change', function() {
            toggleReportMode('caf', 'exception');
            document.querySelector('label[for="modeExceptionCAF"]').classList.add('active');
            document.querySelector('label[for="modeCompleteCAF"]').classList.remove('active');
            if (modeDescriptionCAF) {
                modeDescriptionCAF.textContent = 'Modo por exceção: registre apenas pendências e situações críticas.';
            }
        });
    }
}

/**
 * Toggles between complete and exception-based report modes
 * @param {string} tab - The tab to toggle ('satelites' or 'caf')
 * @param {string} mode - The mode to switch to ('complete' or 'exception')
 */
export function toggleReportMode(tab, mode) {
    // Get appropriate sections based on tab
    const completeSection = document.getElementById(`${tab}-form-fields`);
    const exceptionSection = document.getElementById(`${tab}-exception-fields`);
    
    if (!completeSection || !exceptionSection) {
        console.error(`Form sections not found for tab: ${tab}`);
        return;
    }
    
    // Toggle active class based on mode
    if (mode === 'complete') {
        completeSection.classList.add('active');
        exceptionSection.classList.remove('active');
    } else {
        completeSection.classList.remove('active');
        exceptionSection.classList.add('active');
    }
    
    // Save the current mode preference to localStorage
    localStorage.setItem(`${tab}ReportMode`, mode);
}