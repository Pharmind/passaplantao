// General Observations section

export const GENERAL_OBSERVATIONS = `
<div class="form-group">
    <div class="field-header">
        <label for="observacoesGeraisSat"><i class="fas fa-comment-dots"></i> Observações Gerais:</label>
        <button class="clear-field-btn" data-clear="observacoesGeraisSat"><i class="fas fa-eraser"></i> Limpar</button>
    </div>
    <div class="common-inputs">
        <div class="quick-actions">
            <button class="quick-btn" data-target="observacoesGeraisSat"><i class="fas fa-cogs"></i> Manutenção equipamento</button>
            <button class="quick-btn" data-target="observacoesGeraisSat"><i class="fas fa-user-clock"></i> Alteração no plantão</button>
        </div>
    </div>
    <textarea id="observacoesGeraisSat" name="observacoesGeraisSat" rows="3" placeholder="Informações adicionais ou observações importantes sobre o plantão..."></textarea>
    <div class="smart-suggestions" id="suggestions-observacoesGeraisSat"></div>
</div>
`;

