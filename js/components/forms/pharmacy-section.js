// Common pharmacy section template builder
// This utility creates standardized pharmacy section HTML

export function createPharmacySection(id, title, icon, placeholder) {
    return `
    <div class="form-group">
        <div class="field-header">
            <label for="${id}"><i class="fas ${icon}"></i> ${title}:</label>
            <button class="clear-field-btn" data-clear="${id}"><i class="fas fa-eraser"></i> Limpar</button>
        </div>
        <div class="common-inputs">
            <h3>Checklist de tarefas:</h3>
            <div class="checkbox-group" data-checkbox-section="${id}">
                <div class="checkbox-item"><i class="far fa-square"></i> Kits montados</div>
                <div class="checkbox-item"><i class="far fa-square"></i> Kits conferidos</div>
                <div class="checkbox-item"><i class="far fa-square"></i> Controlados repostos</div>
                <div class="checkbox-item"><i class="far fa-square"></i> Controlados conferidos</div>
                <div class="checkbox-item"><i class="far fa-square"></i> Temperatura registrada</div>
                <div class="checkbox-item"><i class="far fa-square"></i> Prescrições atendidas</div>
                <div class="checkbox-item"><i class="far fa-square"></i> Validades verificadas</div>
                <div class="checkbox-item"><i class="far fa-square"></i> Estoque arrumado</div>
                <div class="checkbox-item"><i class="far fa-square"></i> Desperdício registrado</div>
                <div class="checkbox-item"><i class="far fa-square"></i> Kits diurno entregues</div>
                <div class="checkbox-item"><i class="far fa-square"></i> Kits noturno entregues</div>
            </div>
            
            <div class="quick-actions">
                <button class="quick-btn" data-target="${id}"><i class="fas fa-sun"></i> Kits diurno pendentes</button>
                <button class="quick-btn" data-target="${id}"><i class="fas fa-moon"></i> Kits noturno pendentes</button>
                <button class="quick-btn" data-target="${id}"><i class="fas fa-check-circle"></i> Pendências resolvidas</button>
                <button class="quick-btn" data-target="${id}"><i class="fas fa-exclamation-circle"></i> Necessita intervenção</button>
                <button class="quick-btn" data-target="${id}"><i class="fas fa-exchange-alt"></i> Empréstimo pendente</button>
                <button class="quick-btn" data-target="${id}"><i class="fas fa-temperature-low"></i> Temperatura alterada</button>
            </div>
        </div>
        <textarea id="${id}" name="${id}" rows="3" placeholder="${placeholder}"></textarea>
        <div class="smart-suggestions" id="suggestions-${id}"></div>
    </div>
    `;
}

