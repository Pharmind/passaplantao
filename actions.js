// Action buttons and related components

const FORM_ACTIONS = `
    <div class="form-actions">
        <button id="btnSalvar" type="button"><i class="fas fa-save"></i> Salvar</button>
        <button id="btnImprimir" type="button"><i class="fas fa-print"></i> Imprimir</button>
        <button id="btnCopiar" type="button"><i class="fas fa-copy"></i> Copiar</button>
        <button id="btnWhatsapp" type="button"><i class="fab fa-whatsapp"></i> Enviar WhatsApp</button>
        <button id="btnLimpar" type="button"><i class="fas fa-trash-alt"></i> Limpar</button>
    </div>
    <div class="sharing-info">
        <p><i class="fas fa-info-circle"></i> O compartilhamento via WhatsApp ou cópia enviará apenas o formulário ativo (Satélites e Central ou CAF).</p>
    </div>
`;

/**
 * Loads the action buttons component
 */
export function loadActionComponents() {
    const formActionsElement = document.getElementById('form-actions');
    if (formActionsElement) {
        formActionsElement.innerHTML = FORM_ACTIONS;
    }
}

