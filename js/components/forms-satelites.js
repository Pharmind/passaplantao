// Import each form section
import { PA_PHARMACY } from './forms/pa-pharmacy.js';
import { CCCO_PHARMACY } from './forms/ccco-pharmacy.js';
import { UTI_PED_PHARMACY } from './forms/uti-ped-pharmacy.js';
import { UTI_AD_PHARMACY } from './forms/uti-ad-pharmacy.js';
import { CENTRAL_PHARMACY } from './forms/central-pharmacy.js';
import { CRITICAL_PRODUCTS } from './forms/critical-products.js';
import { PENDING_ITEMS } from './forms/pending-items.js';
import { GENERAL_OBSERVATIONS } from './forms/general-observations.js';

// Export the combined form
export const SATELITES_FORM_FIELDS = `
    <!-- Farmácia PA -->
    ${PA_PHARMACY}
    
    <!-- Farmácia CC/CO -->
    ${CCCO_PHARMACY}
    
    <!-- Farmácia UTI Ped -->
    ${UTI_PED_PHARMACY}
    
    <!-- Farmácia UTI Ad -->
    ${UTI_AD_PHARMACY}
    
    <!-- Farmácia Central -->
    ${CENTRAL_PHARMACY}
    
    <!-- Produto Crítico -->
    ${CRITICAL_PRODUCTS}
    
    <!-- Pendências -->
    ${PENDING_ITEMS}
    
    <!-- Observações Gerais -->
    ${GENERAL_OBSERVATIONS}
`;