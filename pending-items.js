// Pending Items section

export const PENDING_ITEMS = `
<div class="form-group">
    <div class="field-header">
        <label for="pendencias"><i class="fas fa-tasks"></i> Pendências:</label>
        <button class="clear-field-btn" data-clear="pendencias"><i class="fas fa-eraser"></i> Limpar</button>
    </div>
    <div class="common-inputs">
        <h3>Checklist de tarefas:</h3>
        <div class="checkbox-group" data-checkbox-section="pendencias">
            <div class="checkbox-item"><i class="far fa-square"></i> Sem pendências</div>
            <div class="checkbox-item"><i class="far fa-square"></i> Buscar empréstimo</div>
            <div class="checkbox-item"><i class="far fa-square"></i> Entregar kits diurno</div>
            <div class="checkbox-item"><i class="far fa-square"></i> Entregar kits noturno</div>
            <div class="checkbox-item"><i class="far fa-square"></i> Guardar reposição</div>
            <div class="checkbox-item"><i class="far fa-square"></i> Conferir validades</div>
            <div class="checkbox-item"><i class="far fa-square"></i> Preencher relatórios</div>
            <div class="checkbox-item"><i class="far fa-square"></i> Atualizar sistema</div>
        </div>
        <div class="quick-actions">
            <button class="quick-btn" data-target="pendencias"><i class="fas fa-check-double"></i> Sem pendências</button>
            <button class="quick-btn" data-target="pendencias"><i class="fas fa-exchange-alt"></i> Buscar empréstimo</button>
            <button class="quick-btn" data-target="pendencias"><i class="fas fa-sun"></i> Entregar kits diurno</button>
            <button class="quick-btn" data-target="pendencias"><i class="fas fa-moon"></i> Entregar kits noturno</button>
            <button class="quick-btn" data-target="pendencias"><i class="fas fa-dolly"></i> Guardar reposição</button>
            <button class="quick-btn" data-target="pendencias"><i class="fas fa-clipboard-check"></i> Auditoria de estoque</button>
        </div>
    </div>
    <textarea id="pendencias" name="pendencias" rows="2" placeholder="Buscar empréstimo e dar entrada."></textarea>
    <div class="smart-suggestions" id="suggestions-pendencias"></div>
</div>
`;