// Header component and related functionality

const HEADER_COMPONENT = `
    <header>
        <h1><i class="fas fa-pills"></i> Passagem de Plantão Farmacêutico</h1>
    </header>
    <div class="keyboard-hint">
        <span><i class="fas fa-keyboard"></i> Dica: Ctrl+Enter para salvar rapidamente</span>
    </div>
    <div class="mobile-fab" id="quickSaveBtn">
        <i class="fas fa-save"></i>
    </div>
`;

/**
 * Loads the header component into the page
 */
export function loadHeaderComponent() {
    const targetElement = document.getElementById('app-header');
    if (!targetElement) {
        console.error("Target element 'app-header' not found");
        return;
    }
    
    targetElement.innerHTML = HEADER_COMPONENT;
}