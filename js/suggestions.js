// Smart suggestions system
export function setupSmartSuggestions() {
    const textareas = document.querySelectorAll('textarea');
    
    textareas.forEach(textarea => {
        textarea.addEventListener('input', function() {
            checkAndSuggest(this);
        });
        
        textarea.addEventListener('focus', function() {
            checkAndSuggest(this);
        });
    });
}

// Function to check content and provide suggestions
export function checkAndSuggest(textarea) {
    const id = textarea.id;
    const value = textarea.value.toLowerCase();
    const suggestionsElement = document.getElementById(`suggestions-${id}`);
    
    if (!suggestionsElement) return;
    
    // Clear previous suggestions
    suggestionsElement.textContent = '';
    
    if (!value) return;
    
    // Smart suggestion logic based on content
    if (id.includes('PA') || id.includes('CCCO') || id.includes('UTI') || id.includes('Central')) {
        if (!value.includes('kit') && !value.includes('kits')) {
            suggestionsElement.textContent = 'Sugestão: Mencionar status dos kits';
        } else if (!value.includes('temperatura') && !value.includes('temp')) {
            suggestionsElement.textContent = 'Sugestão: Informar sobre controle de temperatura';
        } else if (!value.includes('controlado') && !value.includes('psicotrópico')) {
            suggestionsElement.textContent = 'Sugestão: Verificar status dos medicamentos controlados';
        }
    } else if (id === 'produtoCritico' || id === 'excProdutosCriticos' || id === 'excCAFProdutosCriticos') {
        if (value.includes('baixo') || value.includes('crítico') || value.includes('falta')) {
            if (!value.includes('providência') && !value.includes('solicitação') && !value.includes('solic')) {
                suggestionsElement.textContent = 'Sugestão: Informar as providências tomadas';
            }
        }
    } else if (id.includes('pendencias') || id.includes('excSatelitesPendencias') || id.includes('excCAFPendenciasAtuais')) {
        if (value.length > 0 && !value.includes('prazo') && !value.includes('até')) {
            suggestionsElement.textContent = 'Sugestão: Definir prazo para resolução das pendências';
        }
    } else if (id.includes('PendenciasAnteriores')) {
        if (value.length > 0 && !value.includes('resolvid')) {
            suggestionsElement.textContent = 'Sugestão: Informar status de resolução das pendências anteriores';
        }
    } else if (id === 'controleTemperatura') {
        if (value.includes('alterada') || value.includes('fora')) {
            if (!value.includes('providência') && !value.includes('ação')) {
                suggestionsElement.textContent = 'Sugestão: Informar ações tomadas para normalização';
            }
        }
    } else if (id === 'notaFiscal') {
        if (value.includes('sim') && !value.includes('processada') && !value.includes('pendente')) {
            suggestionsElement.textContent = 'Sugestão: Informar se a NF foi processada ou está pendente';
        }
    } else if (id === 'medMatCriticos') {
        if (value.includes('crítico') || value.includes('baixo') || value.includes('falta')) {
            if (!value.includes('solicitado') && !value.includes('providência')) {
                suggestionsElement.textContent = 'Sugestão: Informar providências tomadas para reposição';
            }
        }
    }
}