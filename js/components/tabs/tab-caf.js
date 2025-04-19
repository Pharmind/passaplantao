// CAF tab content template
export const TAB_CAF = `
    <section class="form-section">
        <h2>Passagem de Plantão CAF</h2>
        
        <div class="form-group date-shift-group">
            <div class="field-header">
                <label for="dataCAF"><i class="far fa-calendar-alt"></i> Data:</label>
            </div>
            <input type="date" id="dataCAF" name="dataCAF">
        </div>
        
        <div class="form-mode-toggle">
            <label>Modo de Relatório:</label>
            <div class="toggle-buttons">
                <label class="toggle-btn active" for="modeCompleteCAF">
                    <input type="radio" id="modeCompleteCAF" name="reportModeCAF" value="complete" checked>
                    <span><i class="fas fa-list-ul"></i> Completo</span>
                </label>
                <label class="toggle-btn" for="modeExceptionCAF">
                    <input type="radio" id="modeExceptionCAF" name="reportModeCAF" value="exception">
                    <span><i class="fas fa-exclamation-circle"></i> Por Exceção</span>
                </label>
            </div>
            <div class="mode-description">
                <p id="modeDescriptionCAF">Modo completo: registre todas as atividades do CAF.</p>
            </div>
        </div>
        
        <!-- Regular form fields -->
        <div id="caf-form-fields" class="form-mode-section active">
            <div class="form-group">
                <div class="field-header">
                    <label for="notaFiscal"><i class="fas fa-file-invoice"></i> Recebido alguma NF:</label>
                    <button class="clear-field-btn" data-clear="notaFiscal"><i class="fas fa-eraser"></i> Limpar</button>
                </div>
                <div class="common-inputs">
                    <h3>Checklist de tarefas:</h3>
                    <div class="checkbox-group" data-checkbox-section="notaFiscal">
                        <div class="checkbox-item"><i class="far fa-square"></i> NF recebida</div>
                        <div class="checkbox-item"><i class="far fa-square"></i> NF processada</div>
                        <div class="checkbox-item"><i class="far fa-square"></i> Pendente processamento</div>
                        <div class="checkbox-item"><i class="far fa-square"></i> Nenhuma NF recebida</div>
                    </div>
                    <div class="quick-actions">
                        <button class="quick-btn" data-target="notaFiscal"><i class="fas fa-check-circle"></i> Sim, processada</button>
                        <button class="quick-btn" data-target="notaFiscal"><i class="fas fa-clock"></i> Sim, pendente processamento</button>
                        <button class="quick-btn" data-target="notaFiscal"><i class="fas fa-times-circle"></i> Não recebido</button>
                    </div>
                </div>
                <textarea id="notaFiscal" name="notaFiscal" rows="2" placeholder="Informe se recebeu notas fiscais e seu status"></textarea>
                <div class="smart-suggestions" id="suggestions-notaFiscal"></div>
            </div>
            
            <div class="form-group">
                <div class="field-header">
                    <label for="medMatCriticos"><i class="fas fa-capsules"></i> Med/Mat críticos:</label>
                    <button class="clear-field-btn" data-clear="medMatCriticos"><i class="fas fa-eraser"></i> Limpar</button>
                </div>
                <div class="common-inputs">
                    <h3>Checklist de tarefas:</h3>
                    <div class="checkbox-group" data-checkbox-section="medMatCriticos">
                        <div class="checkbox-item"><i class="far fa-square"></i> Estoque normalizado</div>
                        <div class="checkbox-item"><i class="far fa-square"></i> Solicitado reposição</div>
                        <div class="checkbox-item"><i class="far fa-square"></i> Empréstimo realizado</div>
                        <div class="checkbox-item"><i class="far fa-square"></i> Crítico identificado</div>
                    </div>
                    <div class="quick-actions">
                        <button class="quick-btn" data-target="medMatCriticos"><i class="fas fa-check-circle"></i> Estoque normalizado</button>
                        <button class="quick-btn" data-target="medMatCriticos"><i class="fas fa-exclamation-triangle"></i> Crítico:</button>
                    </div>
                </div>
                <textarea id="medMatCriticos" name="medMatCriticos" rows="2" placeholder="Informe medicamentos ou materiais em situação crítica"></textarea>
                <div class="smart-suggestions" id="suggestions-medMatCriticos"></div>
            </div>
            
            <div class="form-group">
                <div class="field-header">
                    <label for="controleTemperatura"><i class="fas fa-thermometer-half"></i> Controle de temperatura:</label>
                    <button class="clear-field-btn" data-clear="controleTemperatura"><i class="fas fa-eraser"></i> Limpar</button>
                </div>
                <div class="common-inputs">
                    <h3>Checklist de tarefas:</h3>
                    <div class="checkbox-group" data-checkbox-section="controleTemperatura">
                        <div class="checkbox-item"><i class="far fa-square"></i> Temperatura normal</div>
                        <div class="checkbox-item"><i class="far fa-square"></i> Temperatura alterada</div>
                        <div class="checkbox-item"><i class="far fa-square"></i> Registro realizado</div>
                        <div class="checkbox-item"><i class="far fa-square"></i> Ação corretiva tomada</div>
                        <div class="checkbox-item"><i class="far fa-square"></i> Mapa preenchido</div>
                    </div>
                </div>
                <textarea id="controleTemperatura" name="controleTemperatura" rows="2" placeholder="Informe sobre a temperatura e os registros realizados"></textarea>
                <div class="smart-suggestions" id="suggestions-controleTemperatura"></div>
            </div>
            
            <div class="form-group">
                <div class="field-header">
                    <label for="pendenciasCAF"><i class="fas fa-tasks"></i> Pendências:</label>
                    <button class="clear-field-btn" data-clear="pendenciasCAF"><i class="fas fa-eraser"></i> Limpar</button>
                </div>
                <div class="common-inputs">
                    <h3>Checklist de tarefas:</h3>
                    <div class="checkbox-group" data-checkbox-section="pendenciasCAF">
                        <div class="checkbox-item"><i class="far fa-square"></i> Sem pendências</div>
                        <div class="checkbox-item"><i class="far fa-square"></i> Processar NF</div>
                        <div class="checkbox-item"><i class="far fa-square"></i> Verificar estoque</div>
                        <div class="checkbox-item"><i class="far fa-square"></i> Realizar inventário</div>
                        <div class="checkbox-item"><i class="far fa-square"></i> Atualizar sistema</div>
                    </div>
                    <div class="quick-actions">
                        <button class="quick-btn" data-target="pendenciasCAF"><i class="fas fa-check-double"></i> Sem pendências</button>
                        <button class="quick-btn" data-target="pendenciasCAF"><i class="fas fa-file-import"></i> Processar NF</button>
                        <button class="quick-btn" data-target="pendenciasCAF"><i class="fas fa-clipboard-check"></i> Verificar estoque</button>
                    </div>
                </div>
                <textarea id="pendenciasCAF" name="pendenciasCAF" rows="2" placeholder="Liste pendências para o próximo plantão"></textarea>
                <div class="smart-suggestions" id="suggestions-pendenciasCAF"></div>
            </div>
            
            <!-- Observações Gerais -->
            <div class="form-group">
                <div class="field-header">
                    <label for="observacoesGeraisCAF"><i class="fas fa-comment-dots"></i> Observações Gerais:</label>
                    <button class="clear-field-btn" data-clear="observacoesGeraisCAF"><i class="fas fa-eraser"></i> Limpar</button>
                </div>
                <textarea id="observacoesGeraisCAF" name="observacoesGeraisCAF" rows="3" placeholder="Informações adicionais ou observações importantes sobre o CAF..."></textarea>
                <div class="smart-suggestions" id="suggestions-observacoesGeraisCAF"></div>
            </div>
        </div>
        
        <!-- Exception mode form fields -->
        <div id="caf-exception-fields" class="form-mode-section">
            <div class="form-group">
                <div class="field-header">
                    <label for="excCAFPendenciasAnteriores"><i class="fas fa-history"></i> Pendências do Plantão Anterior:</label>
                    <button class="clear-field-btn" data-clear="excCAFPendenciasAnteriores"><i class="fas fa-eraser"></i> Limpar</button>
                </div>
                <div class="common-inputs">
                    <div class="checkbox-group" data-checkbox-section="excCAFPendenciasAnteriores">
                        <div class="checkbox-item"><i class="far fa-square"></i> Sem pendências anteriores</div>
                        <div class="checkbox-item"><i class="far fa-square"></i> Pendências resolvidas</div>
                    </div>
                </div>
                <textarea id="excCAFPendenciasAnteriores" rows="3" placeholder="Liste as pendências do plantão anterior e se foram resolvidas..."></textarea>
                <div class="smart-suggestions" id="suggestions-excCAFPendenciasAnteriores"></div>
            </div>
            
            <div class="form-group">
                <div class="field-header">
                    <label for="excCAFPendenciasAtuais"><i class="fas fa-exclamation-triangle"></i> Pendências Atuais:</label>
                    <button class="clear-field-btn" data-clear="excCAFPendenciasAtuais"><i class="fas fa-eraser"></i> Limpar</button>
                </div>
                <div class="common-inputs">
                    <div class="checkbox-group" data-checkbox-section="excCAFPendenciasAtuais">
                        <div class="checkbox-item"><i class="far fa-square"></i> Processar NF</div>
                        <div class="checkbox-item"><i class="far fa-square"></i> Atualizar sistema</div>
                        <div class="checkbox-item"><i class="far fa-square"></i> Verificar estoque</div>
                        <div class="checkbox-item"><i class="far fa-square"></i> Sem pendências atuais</div>
                    </div>
                </div>
                <textarea id="excCAFPendenciasAtuais" rows="3" placeholder="Liste apenas as pendências atuais do CAF..."></textarea>
                <div class="smart-suggestions" id="suggestions-excCAFPendenciasAtuais"></div>
            </div>
            
            <div class="form-group">
                <div class="field-header">
                    <label for="excCAFProdutosCriticos"><i class="fas fa-exclamation-circle"></i> Produtos Críticos:</label>
                    <button class="clear-field-btn" data-clear="excCAFProdutosCriticos"><i class="fas fa-eraser"></i> Limpar</button>
                </div>
                <div class="common-inputs">
                    <div class="checkbox-group" data-checkbox-section="excCAFProdutosCriticos">
                        <div class="checkbox-item"><i class="far fa-square"></i> Sem produtos críticos</div>
                        <div class="checkbox-item"><i class="far fa-square"></i> Estoque crítico</div>
                    </div>
                </div>
                <textarea id="excCAFProdutosCriticos" rows="3" placeholder="Liste apenas produtos em estado crítico de estoque..."></textarea>
                <div class="smart-suggestions" id="suggestions-excCAFProdutosCriticos"></div>
            </div>
            
            <div class="form-group">
                <div class="field-header">
                    <label for="excCAFObservacoes"><i class="fas fa-comment-dots"></i> Observações Importantes:</label>
                    <button class="clear-field-btn" data-clear="excCAFObservacoes"><i class="fas fa-eraser"></i> Limpar</button>
                </div>
                <textarea id="excCAFObservacoes" rows="3" placeholder="Observações importantes ou intercorrências durante o plantão..."></textarea>
                <div class="smart-suggestions" id="suggestions-excCAFObservacoes"></div>
            </div>
        </div>
    </section>
`;