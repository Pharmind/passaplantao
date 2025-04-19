// Form handling functionality
import { checkAndSuggest } from './suggestions.js';

export function setupCheckboxes() {
    // Add delay to ensure elements are loaded
    setTimeout(() => {
        const checkboxItems = document.querySelectorAll('.checkbox-item');
        
        if (checkboxItems.length === 0) {
            console.warn("No checkbox items found. Trying again...");
            setTimeout(setupCheckboxes, 300);
            return;
        }
        
        checkboxItems.forEach(item => {
            item.addEventListener('click', function() {
                this.classList.toggle('selected');
                
                // Change the icon when selected
                const icon = this.querySelector('i');
                if (icon) {
                    if (this.classList.contains('selected')) {
                        icon.className = 'fas fa-check-square';
                    } else {
                        icon.className = 'far fa-square';
                    }
                }
                
                // Add visual feedback when selecting a checkbox
                if (this.classList.contains('selected')) {
                    this.style.animation = 'pulse 0.3s ease';
                    setTimeout(() => { this.style.animation = ''; }, 300);
                }
                
                updateTextareaFromCheckboxes();
            });
        });
        
        console.log("Checkbox setup complete");
    }, 300);
}

export function updateTextareaFromCheckboxes() {
    const sections = document.querySelectorAll('[data-checkbox-section]');
    
    sections.forEach(section => {
        const targetId = section.getAttribute('data-checkbox-section');
        const targetTextarea = document.getElementById(targetId);
        if (!targetTextarea) return;
        
        const selectedItems = section.querySelectorAll('.checkbox-item.selected');
        
        let text = targetTextarea.value;
        
        // Create new content from selected checkboxes
        let newContent = '';
        selectedItems.forEach((item, index) => {
            // Remove the icon from the text content
            let itemText = item.textContent.trim();
            newContent += itemText;
            
            // Add proper punctuation
            if (index < selectedItems.length - 1) {
                newContent += ', ';
            } else {
                newContent += '. ';
            }
        });
        
        // If there's new content, add it to the textarea
        if (newContent) {
            if (text && !text.endsWith(' ') && !text.endsWith('.')) {
                if (!text.endsWith(',')) {
                    text += ', ';
                } else {
                    text += ' ';
                }
            }
            targetTextarea.value = text + newContent;
            
            // Trigger suggestions after updating
            checkAndSuggest(targetTextarea);
        }
    });
}

export function setupQuickActions() {
    // Add delay to ensure elements are loaded
    setTimeout(() => {
        const quickButtons = document.querySelectorAll('.quick-btn');
        
        if (quickButtons.length === 0) {
            console.warn("No quick buttons found. Trying again...");
            setTimeout(setupQuickActions, 300);
            return;
        }
        
        quickButtons.forEach(button => {
            button.addEventListener('click', function() {
                const targetId = this.getAttribute('data-target');
                if (!targetId) return;
                
                // Get text without the icon
                const iconElement = this.querySelector('i');
                let text = this.textContent.trim();
                if (iconElement) {
                    text = text.replace(iconElement.textContent.trim(), '').trim();
                }
                
                const textarea = document.getElementById(targetId);
                if (!textarea) {
                    console.warn(`Target textarea #${targetId} not found`);
                    return;
                }
                
                // Add visual feedback
                this.style.transform = 'scale(0.95)';
                setTimeout(() => { this.style.transform = ''; }, 150);
                
                addTextToTextarea(textarea, text);
            });
        });
        
        console.log("Quick actions setup complete");
    }, 300);
}

export function addTextToTextarea(textarea, text) {
    if (!textarea || !text) return;
    
    let currentText = textarea.value.trim();
    
    if (currentText) {
        if (!currentText.endsWith('.') && !currentText.endsWith(',') && !currentText.endsWith(';')) {
            currentText += '. ';
        } else if (currentText.endsWith(',') || currentText.endsWith(';')) {
            currentText += ' ';
        } else {
            currentText += ' ';
        }
    }
    
    textarea.value = currentText + text;
    textarea.focus();
    
    // Trigger smart suggestions
    checkAndSuggest(textarea);
}

export function setupTemplates() {
    // Add delay to ensure elements are loaded
    setTimeout(() => {
        const templateSelectors = document.querySelectorAll('.template-selector');
        
        if (templateSelectors.length === 0) {
            console.warn("No template selectors found. Trying again...");
            setTimeout(setupTemplates, 300);
            return;
        }
        
        templateSelectors.forEach(selector => {
            selector.addEventListener('change', function() {
                const value = this.value;
                if (!value) return;
                
                const targetId = this.getAttribute('data-target');
                if (!targetId) return;
                
                // Handle special case for "allSections"
                if (targetId === "allSections") {
                    // Apply template to all main textareas
                    const textareas = [
                        'farPA', 'farCCCO', 'farUTIPed', 'farUTIAd', 'farCentral'
                    ];
                    
                    textareas.forEach(id => {
                        const textarea = document.getElementById(id);
                        if (textarea) {
                            textarea.value = value;
                            checkAndSuggest(textarea);
                        } else {
                            console.warn(`Textarea #${id} not found when applying template`);
                        }
                    });
                } else {
                    // Normal case - apply to specific target
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                        targetElement.value = value;
                        checkAndSuggest(targetElement);
                    } else {
                        console.warn(`Target element #${targetId} not found when applying template`);
                    }
                }
                
                // Visual feedback
                selector.style.animation = 'pulse 0.3s ease';
                setTimeout(() => { selector.style.animation = ''; }, 300);
                
                // Reset selector
                this.value = '';
            });
        });
        
        console.log("Template selectors setup complete");
    }, 300);
}

export function setupClearFieldButtons() {
    // Add delay to ensure elements are loaded
    setTimeout(() => {
        const clearButtons = document.querySelectorAll('.clear-field-btn');
        
        if (clearButtons.length === 0) {
            console.warn("No clear field buttons found. Trying again...");
            setTimeout(setupClearFieldButtons, 300);
            return;
        }
        
        clearButtons.forEach(button => {
            button.addEventListener('click', function() {
                const fieldId = this.getAttribute('data-clear');
                if (!fieldId) return;
                
                const field = document.getElementById(fieldId);
                
                if (field) {
                    // Visual feedback
                    field.style.transition = 'all 0.3s';
                    field.style.backgroundColor = 'rgba(230, 55, 87, 0.05)';
                    setTimeout(() => { 
                        field.style.backgroundColor = '';
                        field.value = '';
                    }, 200);
                    
                    // Also clear any selected checkboxes for this field
                    const checkboxSection = document.querySelector(`[data-checkbox-section="${fieldId}"]`);
                    if (checkboxSection) {
                        const selectedItems = checkboxSection.querySelectorAll('.checkbox-item.selected');
                        selectedItems.forEach(item => {
                            item.classList.remove('selected');
                            // Reset the icon
                            const icon = item.querySelector('i');
                            if (icon) {
                                icon.className = 'far fa-square';
                            }
                        });
                    }
                    
                    // Clear suggestions
                    const suggestionsElement = document.getElementById(`suggestions-${fieldId}`);
                    if (suggestionsElement) {
                        suggestionsElement.textContent = '';
                    }
                } else {
                    console.warn(`Field #${fieldId} not found when clearing`);
                }
            });
        });
        
        console.log("Clear field buttons setup complete");
    }, 300);
}