// Sharing functionality for WhatsApp and clipboard

/**
 * Formats the Satellite Pharmacies form data for text sharing
 * @returns {string} Formatted text with form content
 */
export function formatSatelitesFormData() {
    // Get all the form data for Satellites
    const data = document.getElementById('data').value;
    const dataFormatted = formatDateBR(data);
    const turno = document.querySelector('input[name="turno"]:checked').value;
    
    // Check if exception mode is active
    const isExceptionMode = document.getElementById('modeException').checked;
    
    // Format the message with proper structure and emojis
    let message = `*📋 PASSAGEM DE PLANTÃO FARMACÊUTICO*\n\n`;
    message += `*📅 Data:* ${dataFormatted} - ${turno === 'diurno' ? 'Diurno ☀️' : 'Noturno 🌙'}\n\n`;
    
    if (isExceptionMode) {
        // Exception mode - only show pendencies and critical situations
        message += `*⚠️ RELATÓRIO POR EXCEÇÃO*\n\n`;
        
        const excPendenciasAnteriores = document.getElementById('excPendenciasAnteriores').value;
        if (excPendenciasAnteriores) {
            message += `*🔄 Pendências do Plantão Anterior:*\n${excPendenciasAnteriores}\n\n`;
        }
        
        const excSatelitesPendencias = document.getElementById('excSatelitesPendencias').value;
        if (excSatelitesPendencias) {
            message += `*⚠️ Pendências nas Satélites:*\n${excSatelitesPendencias}\n\n`;
        }
        
        const excProdutosCriticos = document.getElementById('excProdutosCriticos').value;
        if (excProdutosCriticos) {
            message += `*❗ Produtos Críticos:*\n${excProdutosCriticos}\n\n`;
        }
        
        const excObservacoes = document.getElementById('excObservacoes').value;
        if (excObservacoes) {
            message += `*📝 Observações Importantes:*\n${excObservacoes}\n\n`;
        }
    } else {
        // Complete mode - show all sections
        message += `*🏥 SATÉLITES E CENTRAL*\n\n`;
        
        // Get all textarea values with proper formatting
        const farPA = document.getElementById('farPA').value;
        if (farPA) {
            message += `*🚑 Farmácia PA:*\n${farPA}\n\n`;
        }
        
        const farCCCO = document.getElementById('farCCCO').value;
        if (farCCCO) {
            message += `*💉 Farmácia CC/CO:*\n${farCCCO}\n\n`;
        }
        
        const farUTIPed = document.getElementById('farUTIPed').value;
        if (farUTIPed) {
            message += `*👶 Farmácia UTI Ped:*\n${farUTIPed}\n\n`;
        }
        
        const farUTIAd = document.getElementById('farUTIAd').value;
        if (farUTIAd) {
            message += `*👨‍⚕️ Farmácia UTI Ad:*\n${farUTIAd}\n\n`;
        }
        
        const farCentral = document.getElementById('farCentral').value;
        if (farCentral) {
            message += `*🏥 Farmácia Central:*\n${farCentral}\n\n`;
        }
        
        const produtoCritico = document.getElementById('produtoCritico').value;
        if (produtoCritico) {
            message += `*⚠️ Produto Crítico:*\n${produtoCritico}\n\n`;
        }
        
        const pendencias = document.getElementById('pendencias').value;
        if (pendencias) {
            message += `*📝 Pendências:*\n${pendencias}\n\n`;
        }
        
        const observacoesGeraisSat = document.getElementById('observacoesGeraisSat').value;
        if (observacoesGeraisSat) {
            message += `*📋 Observações Gerais:*\n${observacoesGeraisSat}\n\n`;
        }
    }
    
    return message;
}

/**
 * Formats the CAF form data for text sharing
 * @returns {string} Formatted text with form content
 */
export function formatCAFFormData() {
    // Check if exception mode is active
    const isExceptionMode = document.getElementById('modeExceptionCAF').checked;
    
    // CAF section formatting
    let message = `*📋 PASSAGEM DE PLANTÃO FARMACÊUTICO*\n\n`;
    
    message += `*🏬 PASSAGEM DE PLANTÃO CAF*\n\n`;
    
    const dataCAF = document.getElementById('dataCAF').value;
    const dataCAFFormatted = formatDateBR(dataCAF);
    message += `*📅 Data:* ${dataCAFFormatted}\n\n`;
    
    if (isExceptionMode) {
        // Exception mode - only show pendencies and critical situations
        message += `*⚠️ RELATÓRIO POR EXCEÇÃO*\n\n`;
        
        const excCAFPendenciasAnteriores = document.getElementById('excCAFPendenciasAnteriores').value;
        if (excCAFPendenciasAnteriores) {
            message += `*🔄 Pendências Anteriores:*\n${excCAFPendenciasAnteriores}\n\n`;
        }
        
        const excCAFPendenciasAtuais = document.getElementById('excCAFPendenciasAtuais').value;
        if (excCAFPendenciasAtuais) {
            message += `*⚠️ Pendências Atuais:*\n${excCAFPendenciasAtuais}\n\n`;
        }
        
        const excCAFProdutosCriticos = document.getElementById('excCAFProdutosCriticos').value;
        if (excCAFProdutosCriticos) {
            message += `*❗ Produtos Críticos:*\n${excCAFProdutosCriticos}\n\n`;
        }
        
        const excCAFObservacoes = document.getElementById('excCAFObservacoes').value;
        if (excCAFObservacoes) {
            message += `*📝 Observações Importantes:*\n${excCAFObservacoes}\n\n`;
        }
    } else {
        // Complete mode - show all sections
        const notaFiscal = document.getElementById('notaFiscal').value;
        if (notaFiscal) {
            message += `*📄 Recebido alguma NF:*\n${notaFiscal}\n\n`;
        }
        
        const medMatCriticos = document.getElementById('medMatCriticos').value;
        if (medMatCriticos) {
            message += `*💊 Med/Mat críticos:*\n${medMatCriticos}\n\n`;
        }
        
        const controleTemperatura = document.getElementById('controleTemperatura').value;
        if (controleTemperatura) {
            message += `*🌡️ Controle de temperatura:*\n${controleTemperatura}\n\n`;
        }
        
        const pendenciasCAF = document.getElementById('pendenciasCAF').value;
        if (pendenciasCAF) {
            message += `*📝 Pendências CAF:*\n${pendenciasCAF}\n\n`;
        }
        
        const observacoesGeraisCAF = document.getElementById('observacoesGeraisCAF').value;
        if (observacoesGeraisCAF) {
            message += `*📋 Observações Gerais:*\n${observacoesGeraisCAF}\n\n`;
        }
    }
    
    return message;
}

/**
 * Format a date string from YYYY-MM-DD to DD/MM/YYYY
 */
function formatDateBR(dateString) {
    if (!dateString) return '';
    
    try {
        const parts = dateString.split('-');
        if (parts.length === 3) {
            return `${parts[2]}/${parts[1]}/${parts[0]}`;
        }
        return dateString;
    } catch (e) {
        return dateString;
    }
}

/**
 * Copy formatted data to clipboard based on active tab
 */
export function copyToClipboard() {
    // Determine which tab is active and get the appropriate text
    const activeTab = document.querySelector('.tab-content.active').id;
    const text = activeTab === 'tab-satelites' ? formatSatelitesFormData() : formatCAFFormData();
    
    // Use clipboard API
    navigator.clipboard.writeText(text)
        .then(() => {
            showCopyFeedback();
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
            alert('Não foi possível copiar para a área de transferência');
        });
}

/**
 * Show visual feedback when text is copied
 */
function showCopyFeedback() {
    const button = document.getElementById('btnCopiar');
    const originalText = button.innerHTML;
    
    button.innerHTML = '<i class="fas fa-check"></i> Copiado!';
    button.style.backgroundColor = '#28a745';
    
    setTimeout(() => {
        button.innerHTML = originalText;
        button.style.backgroundColor = '';
    }, 1500);
}

/**
 * Share form data via WhatsApp based on active tab
 */
export function shareViaWhatsApp() {
    // Determine which tab is active and get the appropriate text
    const activeTab = document.querySelector('.tab-content.active').id;
    const text = activeTab === 'tab-satelites' ? formatSatelitesFormData() : formatCAFFormData();
    
    const encodedText = encodeURIComponent(text);
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/?text=${encodedText}`;
    
    // Open in new tab
    window.open(whatsappUrl, '_blank');
}

/**
 * Setup sharing buttons
 */
export function setupSharingButtons() {
    const copyButton = document.getElementById('btnCopiar');
    if (copyButton) {
        copyButton.addEventListener('click', copyToClipboard);
    }
    
    const whatsappButton = document.getElementById('btnWhatsapp');
    if (whatsappButton) {
        whatsappButton.addEventListener('click', shareViaWhatsApp);
    }
}