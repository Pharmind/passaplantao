// Local storage operations
import { updateTimestamp } from './ui.js';
import { showSaveAnimation, showClearAnimation } from './ui.js';
import { checkAndSuggest } from './suggestions.js';

export function setupSaveButton() {
    // Add retry mechanism for button setup
    const maxRetries = 5;
    let retries = 0;
    
    function trySetupButton() {
        const saveBtn = document.getElementById('btnSalvar');
        if (saveBtn) {
            saveBtn.addEventListener('click', function() {
                saveFormData();
                updateTimestamp();
                showSaveAnimation();
            });
            console.log("Save button setup complete");
        } else if (retries < maxRetries) {
            console.warn(`Save button not found, retrying... (${retries + 1}/${maxRetries})`);
            retries++;
            setTimeout(trySetupButton, 300);
        } else {
            console.error("Failed to set up save button after multiple attempts");
        }
    }
    
    // Start the setup process
    setTimeout(trySetupButton, 500);
}

export function setupClearButton() {
    // Add retry mechanism for button setup
    const maxRetries = 5;
    let retries = 0;
    
    function trySetupButton() {
        const clearBtn = document.getElementById('btnLimpar');
        if (clearBtn) {
            clearBtn.addEventListener('click', function() {
                if (confirm('Tem certeza que deseja limpar todos os campos?')) {
                    clearForm();
                }
            });
            console.log("Clear button setup complete");
        } else if (retries < maxRetries) {
            console.warn(`Clear button not found, retrying... (${retries + 1}/${maxRetries})`);
            retries++;
            setTimeout(trySetupButton, 300);
        } else {
            console.error("Failed to set up clear button after multiple attempts");
        }
    }
    
    // Start the setup process
    setTimeout(trySetupButton, 500);
}

// Save form data to localStorage
export function saveFormData() {
    try {
        // Get the current active report mode
        const satelitesMode = document.getElementById('modeException')?.checked ? 'exception' : 'complete';
        const cafMode = document.getElementById('modeExceptionCAF')?.checked ? 'exception' : 'complete';
        
        const formData = {
            // Common fields
            data: getElementValueById('data'),
            turno: getRadioValue('turno', 'diurno'),
            dataCAF: getElementValueById('dataCAF'),
            timestamp: new Date().toISOString(),
            
            // Report mode settings
            satelitesReportMode: satelitesMode,
            cafReportMode: cafMode,
            
            // Regular form fields
            farPA: getElementValueById('farPA'),
            farCCCO: getElementValueById('farCCCO'),
            farUTIPed: getElementValueById('farUTIPed'),
            farUTIAd: getElementValueById('farUTIAd'),
            farCentral: getElementValueById('farCentral'),
            produtoCritico: getElementValueById('produtoCritico'),
            pendencias: getElementValueById('pendencias'),
            observacoesGeraisSat: getElementValueById('observacoesGeraisSat'),
            notaFiscal: getElementValueById('notaFiscal'),
            medMatCriticos: getElementValueById('medMatCriticos'),
            controleTemperatura: getElementValueById('controleTemperatura'),
            pendenciasCAF: getElementValueById('pendenciasCAF'),
            observacoesGeraisCAF: getElementValueById('observacoesGeraisCAF'),
            
            // Exception mode fields
            excPendenciasAnteriores: getElementValueById('excPendenciasAnteriores'),
            excSatelitesPendencias: getElementValueById('excSatelitesPendencias'),
            excProdutosCriticos: getElementValueById('excProdutosCriticos'),
            excObservacoes: getElementValueById('excObservacoes'),
            excCAFPendenciasAnteriores: getElementValueById('excCAFPendenciasAnteriores'),
            excCAFPendenciasAtuais: getElementValueById('excCAFPendenciasAtuais'),
            excCAFProdutosCriticos: getElementValueById('excCAFProdutosCriticos'),
            excCAFObservacoes: getElementValueById('excCAFObservacoes')
        };
        
        // Save current data as latest
        localStorage.setItem('farmaciaPlantaoData', JSON.stringify(formData));
        
        // Also save to history (keep last 10 entries)
        let history = JSON.parse(localStorage.getItem('farmaciaPlantaoHistory') || '[]');
        history.unshift(formData);
        history = history.slice(0, 10); // Keep only 10 most recent entries
        localStorage.setItem('farmaciaPlantaoHistory', JSON.stringify(history));
        
        console.log("Form data saved successfully", formData);
    } catch (error) {
        console.error("Error saving form data:", error);
        alert("Erro ao salvar os dados. Por favor, tente novamente.");
    }
}

// Helper function to safely get element value
function getElementValueById(id) {
    const element = document.getElementById(id);
    return element ? element.value : '';
}

// Helper function to safely get radio value
function getRadioValue(name, defaultValue) {
    const selected = document.querySelector(`input[name="${name}"]:checked`);
    return selected ? selected.value : defaultValue;
}

// Load form data from localStorage with improved error handling
export function loadFormData() {
    try {
        const savedData = localStorage.getItem('farmaciaPlantaoData');
        
        if (!savedData) {
            console.log("No saved data found.");
            return;
        }
        
        const formData = JSON.parse(savedData);
        console.log("Loading saved form data:", formData);
        
        // Set date values
        if (formData.data) setElementValueById('data', formData.data);
        if (formData.dataCAF) setElementValueById('dataCAF', formData.dataCAF);
        
        // Set radio button for shift
        if (formData.turno) setRadioValue('turno', formData.turno);
        
        // Load report mode preferences and activate appropriate mode
        if (formData.satelitesReportMode) {
            const modeId = formData.satelitesReportMode === 'exception' ? 'modeException' : 'modeComplete';
            const radio = document.getElementById(modeId);
            if (radio) {
                radio.checked = true;
                const event = new Event('change');
                radio.dispatchEvent(event);
            }
        }
        
        if (formData.cafReportMode) {
            const modeId = formData.cafReportMode === 'exception' ? 'modeExceptionCAF' : 'modeCompleteCAF';
            const radio = document.getElementById(modeId);
            if (radio) {
                radio.checked = true;
                const event = new Event('change');
                radio.dispatchEvent(event);
            }
        }
        
        // Set all text areas values
        const textareaIds = [
            // Regular form fields
            'farPA', 'farCCCO', 'farUTIPed', 'farUTIAd', 'farCentral', 
            'produtoCritico', 'pendencias', 'observacoesGeraisSat',
            'notaFiscal', 'medMatCriticos', 'controleTemperatura', 
            'pendenciasCAF', 'observacoesGeraisCAF',
            
            // Exception mode fields
            'excPendenciasAnteriores', 'excSatelitesPendencias', 'excProdutosCriticos', 'excObservacoes',
            'excCAFPendenciasAnteriores', 'excCAFPendenciasAtuais', 'excCAFProdutosCriticos', 'excCAFObservacoes'
        ];
        
        textareaIds.forEach(id => {
            if (formData[id] !== undefined) {
                // Try multiple times with increasing delay to handle possible race condition
                let attempts = 0;
                const maxAttempts = 3;
                
                function trySetValue() {
                    if (setElementValueById(id, formData[id])) {
                        // Success
                    } else if (attempts < maxAttempts) {
                        // Retry with increased delay
                        attempts++;
                        setTimeout(trySetValue, 300 * attempts);
                    } else {
                        console.warn(`Failed to set value for ${id} after ${maxAttempts} attempts`);
                    }
                }
                
                trySetValue();
            }
        });
        
        // Update timestamp if available
        if (formData.timestamp) {
            const date = new Date(formData.timestamp);
            const formattedDate = date.toLocaleDateString('pt-BR', { 
                day: '2-digit', 
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
            
            const timestampEl = document.getElementById('timestamp');
            if (timestampEl) {
                timestampEl.textContent = `Último salvamento: ${formattedDate}`;
            }
        }
        
        // Check for smart suggestions after a short delay
        setTimeout(() => {
            const textareas = document.querySelectorAll('textarea');
            textareas.forEach(textarea => {
                if (textarea && textarea.value) {
                    checkAndSuggest(textarea);
                }
            });
        }, 800);
        
        console.log("Form data loaded successfully");
    } catch (error) {
        console.error("Error loading form data:", error);
    }
}

// Helper function to safely set element value
// Returns boolean indicating success
function setElementValueById(id, value) {
    const element = document.getElementById(id);
    if (element && value !== undefined) {
        element.value = value || '';
        return true;
    } else if (!element) {
        console.warn(`Element with id '${id}' not found`);
        return false;
    }
    return false;
}

// Helper function to safely set radio value
function setRadioValue(name, value) {
    if (value) {
        const radioBtn = document.querySelector(`input[name="${name}"][value="${value}"]`);
        if (radioBtn) {
            radioBtn.checked = true;
        } else {
            console.warn(`Radio button with name '${name}' and value '${value}' not found`);
        }
    }
}

// Clear all form fields
export function clearForm() {
    try {
        const today = new Date().toISOString().split('T')[0];
        
        setElementValueById('data', today);
        setElementValueById('dataCAF', today);
        
        const diurnoRadio = document.querySelector('input[name="turno"][value="diurno"]');
        if (diurnoRadio) {
            diurnoRadio.checked = true;
        }
        
        const textareas = document.querySelectorAll('textarea');
        textareas.forEach(textarea => {
            if (textarea) textarea.value = '';
        });
        
        // Clear selected checkboxes
        document.querySelectorAll('.checkbox-item.selected').forEach(item => {
            if (item) {
                item.classList.remove('selected');
                // Reset the icon
                const icon = item.querySelector('i');
                if (icon) {
                    icon.className = 'far fa-square';
                }
            }
        });
        
        // Clear suggestions
        document.querySelectorAll('.smart-suggestions').forEach(element => {
            if (element) element.textContent = '';
        });
        
        // Visual feedback
        showClearAnimation();
        
        console.log("Form cleared successfully");
    } catch (error) {
        console.error("Error clearing form:", error);
        alert("Erro ao limpar o formulário. Por favor, tente novamente.");
    }
}