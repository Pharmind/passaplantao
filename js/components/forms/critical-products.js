// Critical Products section

export const CRITICAL_PRODUCTS = `
<div class="form-group">
    <div class="field-header">
        <label for="produtoCritico"><i class="fas fa-exclamation-triangle"></i> Produto Crítico:</label>
        <button class="clear-field-btn" data-clear="produtoCritico"><i class="fas fa-eraser"></i> Limpar</button>
    </div>
    <div class="common-inputs">
        <h3>Checklist de tarefas:</h3>
        <div class="checkbox-group" data-checkbox-section="produtoCritico">
            <div class="checkbox-item"><i class="far fa-square"></i> Estoque crítico identificado</div>
            <div class="checkbox-item"><i class="far fa-square"></i> Solicitação de compra</div>
            <div class="checkbox-item"><i class="far fa-square"></i> Empréstimo solicitado</div>
            <div class="checkbox-item"><i class="far fa-square"></i> Empréstimo realizado</div>
            <div class="checkbox-item"><i class="far fa-square"></i> Gestores informados</div>
            <div class="checkbox-item"><i class="far fa-square"></i> Sem produtos críticos</div>
        </div>
        <div class="quick-actions">
            <button class="quick-btn" data-target="produtoCritico"><i class="fas fa-check-double"></i> Sem produtos críticos</button>
            <button class="quick-btn" data-target="produtoCritico"><i class="fas fa-battery-quarter"></i> Estoque baixo</button>
            <button class="quick-btn" data-target="produtoCritico"><i class="fas fa-exchange-alt"></i> Solicitação de empréstimo</button>
            <button class="quick-btn" data-target="produtoCritico"><i class="fas fa-hourglass-half"></i> Aguardando reposição</button>
            <button class="quick-btn" data-target="produtoCritico"><i class="fas fa-truck"></i> Entrega prevista</button>
        </div>
    </div>
    <textarea id="produtoCritico" name="produtoCritico" rows="2" placeholder="Estoque de nora baixo, realizei solicitação de empréstimo."></textarea>
    <div class="smart-suggestions" id="suggestions-produtoCritico"></div>
</div>
`;

