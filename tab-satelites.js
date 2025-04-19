// Satelites tab content template
export const TAB_SATELITES = `
    <section class="form-section">
        <h2>Passagem de Plantão Satélites e Central</h2>
        
        <div class="form-group date-shift-group">
            <div class="date-container">
                <label for="data"><i class="far fa-calendar-alt"></i> Data:</label>
                <input type="date" id="data" name="data">
            </div>
            
            <div class="radio-group">
                <label class="radio-container">
                    <input type="radio" name="turno" value="diurno" checked>
                    <span class="radio-label"><i class="fas fa-sun"></i> Diurno</span>
                </label>
                <label class="radio-container">
                    <input type="radio" name="turno" value="noturno">
                    <span class="radio-label"><i class="fas fa-moon"></i> Noturno</span>
                </label>
            </div>
        </div>
        
        <div class="form-mode-toggle">
            <label>Modo de Relatório:</label>
            <div class="toggle-buttons">
                <label class="toggle-btn active" for="modeComplete">
                    <input type="radio" id="modeComplete" name="reportMode" value="complete" checked>
                    <span><i class="fas fa-list-ul"></i> Completo</span>
                </label>
                <label class="toggle-btn" for="modeException">
                    <input type="radio" id="modeException" name="reportMode" value="exception">
                    <span><i class="fas fa-exclamation-circle"></i> Por Exceção</span>
                </label>
            </div>
            <div class="mode-description">
                <p id="modeDescription">Modo completo: registre todas as atividades do plantão.</p>
            </div>
        </div>
        
        <div class="templates-section">
            <label><i class="fas fa-file-medical"></i> Carregar modelo:</label>
            <select class="template-selector" data-target="allSections">
                <option value="">Selecione um modelo...</option>
                <option value="Kits montados, medicamentos controlados repostos, controle de temperatura realizado.">Padrão Completo</option>
            </select>
        </div>
        
        <!-- Regular form fields -->
        <div id="satelites-form-fields" class="form-mode-section active"></div>
        
        <!-- Exception mode form fields -->
        <div id="satelites-exception-fields" class="form-mode-section">
            <div class="form-group">
                <div class="field-header">
                    <label for="excPendenciasAnteriores"><i class="fas fa-history"></i> Pendências do Plantão Anterior:</label>
                    <button class="clear-field-btn" data-clear="excPendenciasAnteriores"><i class="fas fa-eraser"></i> Limpar</button>
                </div>
                <div class="common-inputs">
                    <div class="checkbox-group" data-checkbox-section="excPendenciasAnteriores">
                        <div class="checkbox-item"><i class="far fa-square"></i> Sem pendências anteriores</div>
                        <div class="checkbox-item"><i class="far fa-square"></i> Pendências resolvidas</div>
                    </div>
                    <div class="quick-actions">
                        <button class="quick-btn" data-target="excPendenciasAnteriores"><i class="fas fa-check-circle"></i> Sem pendências anteriores</button>
                        <button class="quick-btn" data-target="excPendenciasAnteriores"><i class="fas fa-check-double"></i> Todas pendências resolvidas</button>
                    </div>
                </div>
                <textarea id="excPendenciasAnteriores" rows="3" placeholder="Liste as pendências do plantão anterior e se foram resolvidas..."></textarea>
                <div class="smart-suggestions" id="suggestions-excPendenciasAnteriores"></div>
            </div>
            
            <div class="form-group">
                <div class="field-header">
                    <label for="excSatelitesPendencias"><i class="fas fa-exclamation-triangle"></i> Pendências nas Satélites:</label>
                    <button class="clear-field-btn" data-clear="excSatelitesPendencias"><i class="fas fa-eraser"></i> Limpar</button>
                </div>
                <div class="common-inputs">
                    <div class="checkbox-group" data-checkbox-section="excSatelitesPendencias">
                        <div class="checkbox-item"><i class="far fa-square"></i> PA: Kits diurno pendentes</div>
                        <div class="checkbox-item"><i class="far fa-square"></i> PA: Kits noturno pendentes</div>
                        <div class="checkbox-item"><i class="far fa-square"></i> CC/CO: Kits diurno pendentes</div>
                        <div class="checkbox-item"><i class="far fa-square"></i> CC/CO: Kits noturno pendentes</div>
                        <div class="checkbox-item"><i class="far fa-square"></i> UTI Ped: Kits diurno pendentes</div>
                        <div class="checkbox-item"><i class="far fa-square"></i> UTI Ped: Kits noturno pendentes</div>
                        <div class="checkbox-item"><i class="far fa-square"></i> UTI Ad: Kits diurno pendentes</div>
                        <div class="checkbox-item"><i class="far fa-square"></i> UTI Ad: Kits noturno pendentes</div>
                        <div class="checkbox-item"><i class="far fa-square"></i> Central: Reposição pendente</div>
                    </div>
                    <div class="quick-actions">
                        <button class="quick-btn" data-target="excSatelitesPendencias"><i class="fas fa-check-double"></i> Sem pendências nas satélites</button>
                    </div>
                </div>
                <textarea id="excSatelitesPendencias" rows="3" placeholder="Liste apenas as pendências nas farmácias satélites..."></textarea>
                <div class="smart-suggestions" id="suggestions-excSatelitesPendencias"></div>
            </div>
            
            <div class="form-group">
                <div class="field-header">
                    <label for="excProdutosCriticos"><i class="fas fa-exclamation-circle"></i> Produtos Críticos:</label>
                    <button class="clear-field-btn" data-clear="excProdutosCriticos"><i class="fas fa-eraser"></i> Limpar</button>
                </div>
                <div class="common-inputs">
                    <div class="checkbox-group" data-checkbox-section="excProdutosCriticos">
                        <div class="checkbox-item"><i class="far fa-square"></i> Sem produtos críticos</div>
                        <div class="checkbox-item"><i class="far fa-square"></i> Empréstimo solicitado</div>
                        <div class="checkbox-item"><i class="far fa-square"></i> Compra solicitada</div>
                    </div>
                </div>
                <textarea id="excProdutosCriticos" rows="3" placeholder="Liste apenas produtos em estado crítico de estoque..."></textarea>
                <div class="smart-suggestions" id="suggestions-excProdutosCriticos"></div>
            </div>
            
            <div class="form-group">
                <div class="field-header">
                    <label for="excObservacoes"><i class="fas fa-comment-dots"></i> Observações Importantes:</label>
                    <button class="clear-field-btn" data-clear="excObservacoes"><i class="fas fa-eraser"></i> Limpar</button>
                </div>
                <textarea id="excObservacoes" rows="3" placeholder="Observações importantes ou intercorrências durante o plantão..."></textarea>
                <div class="smart-suggestions" id="suggestions-excObservacoes"></div>
            </div>
        </div>
    </section>
`;

