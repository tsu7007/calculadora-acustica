// Internationalization System
const i18n = {
    currentLanguage: 'fr',
    
    translations: {
        fr: {
            app: {
                title: "Calculateur d'Assemblages Bois - Eurocode 5",
                subtitle: "Calculs professionnels selon EN 1995-1-1",
                description: "Calculateur professionnel pour les assemblages de structures bois selon l'Eurocode 5 (EN 1995-1-1)"
            },
            tabs: {
                screws: "Tirefonds",
                nails: "Pointes", 
                bolts: "Boulons",
                summary: "Résumé"
            },
            common: {
                wood_class: "Classe de bois",
                diameter: "Diamètre (mm)",
                length: "Longueur (mm)",
                angle: "Angle d'inclinaison (°)",
                force: "Force appliquée (kN)",
                service_class: "Classe de service",
                load_duration: "Durée de charge"
            },
            service_class: {
                class1: "Classe 1 (Humidité ≤ 20%)",
                class2: "Classe 2 (Humidité ≤ 20%)", 
                class3: "Classe 3 (Humidité > 20%)"
            },
            load_duration: {
                permanent: "Permanente",
                long_term: "Long terme",
                medium_term: "Moyen terme",
                short_term: "Court terme",
                instantaneous: "Instantanée"
            },
            screws: {
                title: "Calcul Tirefonds/Vis"
            },
            nails: {
                title: "Calcul Pointes",
                penetration: "Pénétration (mm)",
                penetration_check: "Vérification pénétration"
            },
            bolts: {
                title: "Calcul Boulons",
                steel_grade: "Classe d'acier",
                thickness: "Épaisseur bois (mm)",
                bearing_resistance: "Résistance à la pression"
            },
            results: {
                title: "Résultats",
                bearing_strength: "Résistance en pression diamétrale",
                withdrawal_capacity: "Capacité d'arrachement", 
                rope_effect: "Effet de corde",
                total_resistance: "Résistance totale",
                shear_resistance: "Résistance au cisaillement",
                utilization: "Taux d'utilisation"
            },
            status: {
                pending: "En attente...",
                compliant: "CONFORME",
                non_compliant: "NON CONFORME"
            },
            summary: {
                title: "Résumé des Calculs",
                capacity: "Capacité",
                utilization: "Utilisation", 
                status: "Statut"
            },
            buttons: {
                save: "Sauvegarder",
                load: "Charger",
                export: "Exporter"
            },
            footer: {
                disclaimer: "Les calculs sont basés sur l'Eurocode 5 (EN 1995-1-1). Toujours vérifier avec un ingénieur qualifié."
            }
        },
        en: {
            app: {
                title: "Wood Connection Calculator - Eurocode 5",
                subtitle: "Professional calculations according to EN 1995-1-1",
                description: "Professional calculator for wood structural connections according to Eurocode 5 (EN 1995-1-1)"
            },
            tabs: {
                screws: "Screws",
                nails: "Nails",
                bolts: "Bolts", 
                summary: "Summary"
            },
            common: {
                wood_class: "Wood class",
                diameter: "Diameter (mm)",
                length: "Length (mm)",
                angle: "Inclination angle (°)",
                force: "Applied force (kN)",
                service_class: "Service class",
                load_duration: "Load duration"
            },
            service_class: {
                class1: "Class 1 (Moisture ≤ 20%)",
                class2: "Class 2 (Moisture ≤ 20%)",
                class3: "Class 3 (Moisture > 20%)"
            },
            load_duration: {
                permanent: "Permanent",
                long_term: "Long term",
                medium_term: "Medium term", 
                short_term: "Short term",
                instantaneous: "Instantaneous"
            },
            screws: {
                title: "Screw Calculation"
            },
            nails: {
                title: "Nail Calculation",
                penetration: "Penetration (mm)",
                penetration_check: "Penetration check"
            },
            bolts: {
                title: "Bolt Calculation",
                steel_grade: "Steel grade",
                thickness: "Wood thickness (mm)",
                bearing_resistance: "Bearing resistance"
            },
            results: {
                title: "Results",
                bearing_strength: "Bearing strength",
                withdrawal_capacity: "Withdrawal capacity",
                rope_effect: "Rope effect", 
                total_resistance: "Total resistance",
                shear_resistance: "Shear resistance",
                utilization: "Utilization ratio"
            },
            status: {
                pending: "Pending...",
                compliant: "COMPLIANT",
                non_compliant: "NON COMPLIANT"
            },
            summary: {
                title: "Calculation Summary",
                capacity: "Capacity",
                utilization: "Utilization",
                status: "Status"
            },
            buttons: {
                save: "Save",
                load: "Load", 
                export: "Export"
            },
            footer: {
                disclaimer: "Calculations are based on Eurocode 5 (EN 1995-1-1). Always verify with a qualified engineer."
            }
        },
        es: {
            app: {
                title: "Calculadora de Conexiones de Madera - Eurocódigo 5",
                subtitle: "Cálculos profesionales según EN 1995-1-1",
                description: "Calculadora profesional para conexiones de estructuras de madera según el Eurocódigo 5 (EN 1995-1-1)"
            },
            tabs: {
                screws: "Tirafondos",
                nails: "Clavos",
                bolts: "Pernos",
                summary: "Resumen"
            },
            common: {
                wood_class: "Clase de madera",
                diameter: "Diámetro (mm)",
                length: "Longitud (mm)", 
                angle: "Ángulo de inclinación (°)",
                force: "Fuerza aplicada (kN)",
                service_class: "Clase de servicio",
                load_duration: "Duración de carga"
            },
            service_class: {
                class1: "Clase 1 (Humedad ≤ 20%)",
                class2: "Clase 2 (Humedad ≤ 20%)",
                class3: "Clase 3 (Humedad > 20%)"
            },
            load_duration: {
                permanent: "Permanente",
                long_term: "Largo plazo",
                medium_term: "Medio plazo",
                short_term: "Corto plazo", 
                instantaneous: "Instantánea"
            },
            screws: {
                title: "Cálculo Tirafondos"
            },
            nails: {
                title: "Cálculo Clavos",
                penetration: "Penetración (mm)",
                penetration_check: "Verificación penetración"
            },
            bolts: {
                title: "Cálculo Pernos",
                steel_grade: "Grado de acero",
                thickness: "Espesor madera (mm)",
                bearing_resistance: "Resistencia al aplastamiento"
            },
            results: {
                title: "Resultados",
                bearing_strength: "Resistencia al aplastamiento",
                withdrawal_capacity: "Capacidad de extracción",
                rope_effect: "Efecto cuerda",
                total_resistance: "Resistencia total",
                shear_resistance: "Resistencia al corte",
                utilization: "Relación de utilización"
            },
            status: {
                pending: "Pendiente...",
                compliant: "CONFORME", 
                non_compliant: "NO CONFORME"
            },
            summary: {
                title: "Resumen de Cálculos",
                capacity: "Capacidad",
                utilization: "Utilización",
                status: "Estado"
            },
            buttons: {
                save: "Guardar",
                load: "Cargar",
                export: "Exportar"
            },
            footer: {
                disclaimer: "Los cálculos se basan en el Eurocódigo 5 (EN 1995-1-1). Siempre verificar con un ingeniero calificado."
            }
        }
    },

    // Get translation for a key
    t(key) {
        const keys = key.split('.');
        let translation = this.translations[this.currentLanguage];
        
        for (const k of keys) {
            if (translation && translation[k]) {
                translation = translation[k];
            } else {
                // Fallback to French if translation not found
                translation = this.translations.fr;
                for (const fallbackK of keys) {
                    if (translation && translation[fallbackK]) {
                        translation = translation[fallbackK];
                    } else {
                        return key; // Return key if no translation found
                    }
                }
                break;
            }
        }
        
        return translation || key;
    },

    // Set language and update DOM
    setLanguage(lang) {
        if (this.translations[lang]) {
            this.currentLanguage = lang;
            this.updateDOM();
            this.updateLanguageSelector();
            this.saveLanguagePreference();
        }
    },

    // Update all DOM elements with data-i18n attributes
    updateDOM() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.t(key);
            
            if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                element.placeholder = translation;
            } else if (element.hasAttribute('content')) {
                element.setAttribute('content', translation);
            } else {
                element.textContent = translation;
            }
        });

        // Update document title and meta description
        document.title = this.t('app.title');
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', this.t('app.description'));
        }
    },

    // Update language selector button
    updateLanguageSelector() {
        const flagMap = { fr: '🇫🇷', en: '🇬🇧', es: '🇪🇸' };
        const nameMap = { fr: 'Français', en: 'English', es: 'Español' };
        
        const currentBtn = document.getElementById('currentLanguage');
        if (currentBtn) {
            const flagSpan = currentBtn.querySelector('.flag-icon');
            const nameSpan = currentBtn.querySelector('span:nth-child(2)');
            
            if (flagSpan) flagSpan.textContent = flagMap[this.currentLanguage];
            if (nameSpan) nameSpan.textContent = nameMap[this.currentLanguage];
        }

        // Update document language
        document.documentElement.lang = this.currentLanguage;
    },

    // Save language preference
    saveLanguagePreference() {
        try {
            localStorage.setItem('wood-calculator-language', this.currentLanguage);
        } catch (e) {
            // Silently handle localStorage errors
        }
    },

    // Load language preference
    loadLanguagePreference() {
        try {
            const saved = localStorage.getItem('wood-calculator-language');
            if (saved && this.translations[saved]) {
                this.currentLanguage = saved;
            }
        } catch (e) {
            // Silently handle localStorage errors
        }
    },

    // Format numbers according to locale
    formatNumber(number, decimals = 1) {
        if (typeof number !== 'number' || isNaN(number)) return '--';
        
        const localeMap = {
            fr: 'fr-FR',
            en: 'en-GB', 
            es: 'es-ES'
        };
        
        return number.toLocaleString(localeMap[this.currentLanguage] || 'fr-FR', {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals
        });
    }
};

// Material Properties Database
const materialProperties = {
    woodProperties: {
        C14: { fm_k: 14, ft_0_k: 8, fc_0_k: 16, fv_k: 1.7, rho_k: 290, rho_mean: 350 },
        C16: { fm_k: 16, ft_0_k: 10, fc_0_k: 17, fv_k: 1.8, rho_k: 310, rho_mean: 370 },
        C18: { fm_k: 18, ft_0_k: 11, fc_0_k: 18, fv_k: 2.0, rho_k: 320, rho_mean: 380 },
        C22: { fm_k: 22, ft_0_k: 13, fc_0_k: 20, fv_k: 2.4, rho_k: 340, rho_mean: 410 },
        C24: { fm_k: 24, ft_0_k: 14, fc_0_k: 21, fv_k: 2.5, rho_k: 350, rho_mean: 420 },
        C27: { fm_k: 27, ft_0_k: 16, fc_0_k: 22, fv_k: 2.8, rho_k: 360, rho_mean: 430 },
        GL20: { fm_k: 20, ft_0_k: 16, fc_0_k: 20, fv_k: 3.5, rho_k: 340, rho_mean: 370 },
        GL22: { fm_k: 22, ft_0_k: 17.6, fc_0_k: 22, fv_k: 3.5, rho_k: 370, rho_mean: 410 },
        GL24: { fm_k: 24, ft_0_k: 19.2, fc_0_k: 24, fv_k: 3.5, rho_k: 385, rho_mean: 420 },
        GL24h: { fm_k: 24, ft_0_k: 19.2, fc_0_k: 24, fv_k: 3.5, rho_k: 380, rho_mean: 420 }
    },

    boltProperties: {
        '4.6': { fyb: 240, fub: 400, alpha_v: 0.6 },
        '4.8': { fyb: 320, fub: 400, alpha_v: 0.5 },
        '5.6': { fyb: 300, fub: 500, alpha_v: 0.6 },
        '5.8': { fyb: 400, fub: 500, alpha_v: 0.5 },
        '6.8': { fyb: 480, fub: 600, alpha_v: 0.6 },
        '8.8': { fyb: 640, fub: 800, alpha_v: 0.6 },
        '10.9': { fyb: 900, fub: 1000, alpha_v: 0.5 }
    },

    kmodValues: {
        '1': { permanent: 0.6, long_term: 0.7, medium_term: 0.8, short_term: 0.9, instantaneous: 1.1 },
        '2': { permanent: 0.6, long_term: 0.7, medium_term: 0.8, short_term: 0.9, instantaneous: 1.1 },
        '3': { permanent: 0.5, long_term: 0.55, medium_term: 0.65, short_term: 0.7, instantaneous: 0.9 }
    }
};

// Calculation Engine
class EurocodeCalculator {
    constructor() {
        this.gamma_M = 1.3; // Material safety factor
    }

    // Get kmod value based on service class and load duration
    getKmod(serviceClass, loadDuration) {
        return materialProperties.kmodValues[serviceClass.toString()][loadDuration] || 0.8;
    }

    // Calculate bearing strength according to EC5 §8.5.1.1
    calculateBearingStrength(woodClass, diameter, angle = 90) {
        const wood = materialProperties.woodProperties[woodClass];
        if (!wood) return 0;

        const rho_k = wood.rho_k;
        const d = diameter;
        
        // Basic bearing strength perpendicular to grain
        const fh_0_k = 0.082 * rho_k * Math.pow(d, -0.3);
        
        // Angle factor
        const alpha = angle * Math.PI / 180;
        const fh_alpha_k = fh_0_k / (Math.pow(Math.sin(alpha), 2) + Math.pow(Math.cos(alpha), 2));
        
        return Math.min(fh_alpha_k, fh_0_k);
    }

    // Calculate withdrawal capacity for screws
    calculateWithdrawalCapacity(woodClass, diameter, length, angle = 90) {
        const wood = materialProperties.woodProperties[woodClass];
        if (!wood) return 0;

        const rho_k = wood.rho_k;
        const d = diameter;
        const lef = length * 0.8; // Effective length
        
        // Withdrawal capacity per unit length
        const fax_k = 0.52 * Math.pow(d, -0.5) * Math.pow(rho_k, 0.8);
        
        // Total withdrawal capacity
        const Fax_Rk = fax_k * Math.PI * d * lef;
        
        return Fax_Rk / 1000; // Convert to kN
    }

    // Calculate rope effect for angled screws
    calculateRopeEffect(withdrawalCapacity, shearCapacity, angle) {
        if (angle >= 90) return 0;
        
        const alpha = angle * Math.PI / 180;
        const rope = Math.min(
            0.25 * withdrawalCapacity * 1000, // Convert back to N for calculation
            0.5 * shearCapacity * 1000
        ) * Math.sin(alpha);
        
        return rope / 1000; // Convert to kN
    }

    // Calculate screw resistance
    calculateScrewResistance(params) {
        const { woodClass, diameter, length, angle, serviceClass, loadDuration } = params;
        
        const kmod = this.getKmod(serviceClass, loadDuration);
        const bearingStrength = this.calculateBearingStrength(woodClass, diameter, angle);
        const withdrawalCapacity = this.calculateWithdrawalCapacity(woodClass, diameter, length, angle);
        
        // Shear resistance (simplified for single fastener)
        const wood = materialProperties.woodProperties[woodClass];
        const fh_k = bearingStrength;
        const t = Math.min(length * 0.6, 60); // Effective thickness
        const shearResistance = (fh_k * t * diameter * kmod) / (this.gamma_M * 1000); // kN
        
        const ropeEffect = this.calculateRopeEffect(withdrawalCapacity, shearResistance, angle);
        const totalResistance = shearResistance + ropeEffect;
        
        return {
            bearingStrength: bearingStrength,
            withdrawalCapacity: withdrawalCapacity,
            ropeEffect: ropeEffect,
            shearResistance: shearResistance,
            totalResistance: totalResistance
        };
    }

    // Calculate nail resistance
    calculateNailResistance(params) {
        const { woodClass, diameter, length, penetration, serviceClass, loadDuration } = params;
        
        const kmod = this.getKmod(serviceClass, loadDuration);
        const bearingStrength = this.calculateBearingStrength(woodClass, diameter);
        
        // Check minimum penetration (8d or 60mm)
        const minPenetration = Math.max(8 * diameter, 60);
        const penetrationOK = penetration >= minPenetration;
        
        // Shear resistance for nails
        const fh_k = bearingStrength;
        const effectiveLength = Math.min(penetration, length);
        const shearResistance = (fh_k * effectiveLength * diameter * kmod) / (this.gamma_M * 1000); // kN
        
        return {
            bearingStrength: bearingStrength,
            shearResistance: shearResistance,
            penetrationOK: penetrationOK,
            minPenetration: minPenetration
        };
    }

    // Calculate bolt resistance  
    calculateBoltResistance(params) {
        const { woodClass, diameter, steelGrade, thickness, serviceClass, loadDuration } = params;
        
        const kmod = this.getKmod(serviceClass, loadDuration);
        const bearingStrength = this.calculateBearingStrength(woodClass, diameter);
        const steel = materialProperties.boltProperties[steelGrade];
        
        if (!steel) return { bearingStrength: 0, shearResistance: 0, bearingCapacity: 0 };
        
        // Bearing capacity in wood
        const fh_k = bearingStrength;
        const bearingCapacity = (fh_k * thickness * diameter * kmod) / (this.gamma_M * 1000); // kN
        
        // Shear capacity of bolt
        const fv_k = steel.alpha_v * steel.fub;
        const shearCapacity = (fv_k * Math.PI * Math.pow(diameter, 2) / 4 * kmod) / (this.gamma_M * 1000); // kN
        
        // Governing resistance
        const shearResistance = Math.min(bearingCapacity, shearCapacity);
        
        return {
            bearingStrength: bearingStrength,
            shearResistance: shearResistance,
            bearingCapacity: bearingCapacity
        };
    }
}

// Application Controller
class WoodCalculatorApp {
    constructor() {
        this.calculator = new EurocodeCalculator();
        this.currentResults = {
            screws: null,
            nails: null,
            bolts: null
        };
        
        this.init();
    }

    init() {
        // Load language preference
        i18n.loadLanguagePreference();
        i18n.updateDOM();
        i18n.updateLanguageSelector();

        this.initEventListeners();
        this.initTabs();
        this.calculateAll();
    }

    initEventListeners() {
        // Language switcher
        this.initLanguageSwitcher();
        
        // Tab switching
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.switchTab(e.target.dataset.tab);
            });
        });

        // Form inputs - real-time calculation
        this.initFormListeners();

        // Project management
        document.getElementById('saveProject')?.addEventListener('click', () => this.saveProject());
        document.getElementById('loadProject')?.addEventListener('click', () => this.loadProject());
        document.getElementById('exportReport')?.addEventListener('click', () => this.exportReport());
    }

    initLanguageSwitcher() {
        const languageBtn = document.getElementById('currentLanguage');
        const languageMenu = document.getElementById('languageMenu');
        const dropdown = languageBtn?.parentElement;

        // Toggle dropdown
        languageBtn?.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown?.classList.toggle('open');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            dropdown?.classList.remove('open');
        });

        // Language selection
        document.querySelectorAll('.language-option').forEach(option => {
            option.addEventListener('click', (e) => {
                const lang = e.currentTarget.dataset.lang;
                i18n.setLanguage(lang);
                dropdown?.classList.remove('open');
                
                // Trigger recalculation to update results in new language
                this.calculateAll();
            });
        });
    }

    initFormListeners() {
        // Screws inputs
        const screwInputs = ['screwWoodClass', 'screwDiameter', 'screwLength', 'screwAngle', 'screwForce', 'screwServiceClass', 'screwLoadDuration'];
        screwInputs.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.addEventListener('input', () => this.calculateScrews());
                element.addEventListener('change', () => this.calculateScrews());
            }
        });

        // Nails inputs
        const nailInputs = ['nailWoodClass', 'nailDiameter', 'nailLength', 'nailPenetration', 'nailForce', 'nailServiceClass', 'nailLoadDuration'];
        nailInputs.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.addEventListener('input', () => this.calculateNails());
                element.addEventListener('change', () => this.calculateNails());
            }
        });

        // Bolts inputs
        const boltInputs = ['boltWoodClass', 'boltDiameter', 'boltSteelGrade', 'boltThickness', 'boltForce', 'boltServiceClass', 'boltLoadDuration'];
        boltInputs.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.addEventListener('input', () => this.calculateBolts());
                element.addEventListener('change', () => this.calculateBolts());
            }
        });
    }

    initTabs() {
        // Show first tab by default
        this.switchTab('screws');
    }

    switchTab(tabName) {
        // Update tab buttons
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-tab="${tabName}"]`)?.classList.add('active');

        // Update tab content
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(`${tabName}-tab`)?.classList.add('active');

        // Update summary if switching to summary tab
        if (tabName === 'summary') {
            this.updateSummary();
        }
    }

    calculateScrews() {
        const params = {
            woodClass: document.getElementById('screwWoodClass')?.value || 'C24',
            diameter: parseFloat(document.getElementById('screwDiameter')?.value) || 8,
            length: parseFloat(document.getElementById('screwLength')?.value) || 120,
            angle: parseFloat(document.getElementById('screwAngle')?.value) || 90,
            force: parseFloat(document.getElementById('screwForce')?.value) || 2.5,
            serviceClass: parseInt(document.getElementById('screwServiceClass')?.value) || 1,
            loadDuration: document.getElementById('screwLoadDuration')?.value || 'medium_term'
        };

        const results = this.calculator.calculateScrewResistance(params);
        this.currentResults.screws = { ...results, appliedForce: params.force };

        this.displayScrewResults(results, params.force);
    }

    calculateNails() {
        const params = {
            woodClass: document.getElementById('nailWoodClass')?.value || 'C24',
            diameter: parseFloat(document.getElementById('nailDiameter')?.value) || 3.1,
            length: parseFloat(document.getElementById('nailLength')?.value) || 70,
            penetration: parseFloat(document.getElementById('nailPenetration')?.value) || 45,
            force: parseFloat(document.getElementById('nailForce')?.value) || 0.8,
            serviceClass: parseInt(document.getElementById('nailServiceClass')?.value) || 1,
            loadDuration: document.getElementById('nailLoadDuration')?.value || 'medium_term'
        };

        const results = this.calculator.calculateNailResistance(params);
        this.currentResults.nails = { ...results, appliedForce: params.force };

        this.displayNailResults(results, params.force);
    }

    calculateBolts() {
        const params = {
            woodClass: document.getElementById('boltWoodClass')?.value || 'C24',
            diameter: parseFloat(document.getElementById('boltDiameter')?.value) || 12,
            steelGrade: document.getElementById('boltSteelGrade')?.value || '5.8',
            thickness: parseFloat(document.getElementById('boltThickness')?.value) || 50,
            force: parseFloat(document.getElementById('boltForce')?.value) || 15,
            serviceClass: parseInt(document.getElementById('boltServiceClass')?.value) || 1,
            loadDuration: document.getElementById('boltLoadDuration')?.value || 'medium_term'
        };

        const results = this.calculator.calculateBoltResistance(params);
        this.currentResults.bolts = { ...results, appliedForce: params.force };

        this.displayBoltResults(results, params.force);
    }

    calculateAll() {
        this.calculateScrews();
        this.calculateNails();
        this.calculateBolts();
        this.updateSummary();
    }

    displayScrewResults(results, appliedForce) {
        document.getElementById('screwBearingResult').textContent = i18n.formatNumber(results.bearingStrength, 1);
        document.getElementById('screwWithdrawalResult').textContent = i18n.formatNumber(results.withdrawalCapacity, 1);
        document.getElementById('screwRopeResult').textContent = i18n.formatNumber(results.ropeEffect, 1);
        document.getElementById('screwTotalResult').textContent = i18n.formatNumber(results.totalResistance, 1);
        
        const utilization = (appliedForce / results.totalResistance) * 100;
        document.getElementById('screwUtilizationResult').textContent = i18n.formatNumber(utilization, 1);

        const isCompliant = utilization <= 100;
        const statusElement = document.getElementById('screwComplianceStatus');
        statusElement.textContent = i18n.t(isCompliant ? 'status.compliant' : 'status.non_compliant');
        statusElement.className = `status ${isCompliant ? 'status--success' : 'status--error'}`;
    }

    displayNailResults(results, appliedForce) {
        document.getElementById('nailBearingResult').textContent = i18n.formatNumber(results.bearingStrength, 1);
        document.getElementById('nailShearResult').textContent = i18n.formatNumber(results.shearResistance, 1);
        
        const penetrationText = results.penetrationOK ? i18n.t('status.compliant') : i18n.t('status.non_compliant');
        document.getElementById('nailPenetrationResult').textContent = penetrationText;
        
        const utilization = (appliedForce / results.shearResistance) * 100;
        document.getElementById('nailUtilizationResult').textContent = i18n.formatNumber(utilization, 1);

        const isCompliant = utilization <= 100 && results.penetrationOK;
        const statusElement = document.getElementById('nailComplianceStatus');
        statusElement.textContent = i18n.t(isCompliant ? 'status.compliant' : 'status.non_compliant');
        statusElement.className = `status ${isCompliant ? 'status--success' : 'status--error'}`;
    }

    displayBoltResults(results, appliedForce) {
        document.getElementById('boltBearingResult').textContent = i18n.formatNumber(results.bearingStrength, 1);
        document.getElementById('boltShearResult').textContent = i18n.formatNumber(results.shearResistance, 1);
        document.getElementById('boltBearingCapacityResult').textContent = i18n.formatNumber(results.bearingCapacity, 1);
        
        const utilization = (appliedForce / results.shearResistance) * 100;
        document.getElementById('boltUtilizationResult').textContent = i18n.formatNumber(utilization, 1);

        const isCompliant = utilization <= 100;
        const statusElement = document.getElementById('boltComplianceStatus');
        statusElement.textContent = i18n.t(isCompliant ? 'status.compliant' : 'status.non_compliant');
        statusElement.className = `status ${isCompliant ? 'status--success' : 'status--error'}`;
    }

    updateSummary() {
        const screws = this.currentResults.screws;
        const nails = this.currentResults.nails;
        const bolts = this.currentResults.bolts;

        if (screws) {
            document.getElementById('screwSummaryCapacity').textContent = i18n.formatNumber(screws.totalResistance, 1) + ' kN';
            const screwUtil = (screws.appliedForce / screws.totalResistance) * 100;
            document.getElementById('screwSummaryUtilization').textContent = i18n.formatNumber(screwUtil, 1) + '%';
            const screwStatus = document.getElementById('screwSummaryStatus');
            const screwCompliant = screwUtil <= 100;
            screwStatus.textContent = i18n.t(screwCompliant ? 'status.compliant' : 'status.non_compliant');
            screwStatus.className = `status ${screwCompliant ? 'status--success' : 'status--error'}`;
        }

        if (nails) {
            document.getElementById('nailSummaryCapacity').textContent = i18n.formatNumber(nails.shearResistance, 1) + ' kN';
            const nailUtil = (nails.appliedForce / nails.shearResistance) * 100;
            document.getElementById('nailSummaryUtilization').textContent = i18n.formatNumber(nailUtil, 1) + '%';
            const nailStatus = document.getElementById('nailSummaryStatus');
            const nailCompliant = nailUtil <= 100 && nails.penetrationOK;
            nailStatus.textContent = i18n.t(nailCompliant ? 'status.compliant' : 'status.non_compliant');
            nailStatus.className = `status ${nailCompliant ? 'status--success' : 'status--error'}`;
        }

        if (bolts) {
            document.getElementById('boltSummaryCapacity').textContent = i18n.formatNumber(bolts.shearResistance, 1) + ' kN';
            const boltUtil = (bolts.appliedForce / bolts.shearResistance) * 100;
            document.getElementById('boltSummaryUtilization').textContent = i18n.formatNumber(boltUtil, 1) + '%';
            const boltStatus = document.getElementById('boltSummaryStatus');
            const boltCompliant = boltUtil <= 100;
            boltStatus.textContent = i18n.t(boltCompliant ? 'status.compliant' : 'status.non_compliant');
            boltStatus.className = `status ${boltCompliant ? 'status--success' : 'status--error'}`;
        }
    }

    saveProject() {
        const projectData = {
            timestamp: new Date().toISOString(),
            language: i18n.currentLanguage,
            screws: {
                woodClass: document.getElementById('screwWoodClass')?.value,
                diameter: document.getElementById('screwDiameter')?.value,
                length: document.getElementById('screwLength')?.value,
                angle: document.getElementById('screwAngle')?.value,
                force: document.getElementById('screwForce')?.value,
                serviceClass: document.getElementById('screwServiceClass')?.value,
                loadDuration: document.getElementById('screwLoadDuration')?.value
            },
            nails: {
                woodClass: document.getElementById('nailWoodClass')?.value,
                diameter: document.getElementById('nailDiameter')?.value,
                length: document.getElementById('nailLength')?.value,
                penetration: document.getElementById('nailPenetration')?.value,
                force: document.getElementById('nailForce')?.value,
                serviceClass: document.getElementById('nailServiceClass')?.value,
                loadDuration: document.getElementById('nailLoadDuration')?.value
            },
            bolts: {
                woodClass: document.getElementById('boltWoodClass')?.value,
                diameter: document.getElementById('boltDiameter')?.value,
                steelGrade: document.getElementById('boltSteelGrade')?.value,
                thickness: document.getElementById('boltThickness')?.value,
                force: document.getElementById('boltForce')?.value,
                serviceClass: document.getElementById('boltServiceClass')?.value,
                loadDuration: document.getElementById('boltLoadDuration')?.value
            }
        };

        const blob = new Blob([JSON.stringify(projectData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `wood-calculator-project-${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);
    }

    loadProject() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    try {
                        const projectData = JSON.parse(e.target.result);
                        this.loadProjectData(projectData);
                    } catch (error) {
                        alert('Error loading project file');
                    }
                };
                reader.readAsText(file);
            }
        };
        input.click();
    }

    loadProjectData(data) {
        // Load language
        if (data.language) {
            i18n.setLanguage(data.language);
        }

        // Load screws data
        if (data.screws) {
            Object.keys(data.screws).forEach(key => {
                const element = document.getElementById(`screw${key.charAt(0).toUpperCase() + key.slice(1)}`);
                if (element && data.screws[key] !== undefined) {
                    element.value = data.screws[key];
                }
            });
        }

        // Load nails data
        if (data.nails) {
            Object.keys(data.nails).forEach(key => {
                const element = document.getElementById(`nail${key.charAt(0).toUpperCase() + key.slice(1)}`);
                if (element && data.nails[key] !== undefined) {
                    element.value = data.nails[key];
                }
            });
        }

        // Load bolts data
        if (data.bolts) {
            Object.keys(data.bolts).forEach(key => {
                const element = document.getElementById(`bolt${key.charAt(0).toUpperCase() + key.slice(1)}`);
                if (element && data.bolts[key] !== undefined) {
                    element.value = data.bolts[key];
                }
            });
        }

        // Recalculate all
        this.calculateAll();
    }

    exportReport() {
        const reportData = {
            title: i18n.t('app.title'),
            timestamp: new Date().toLocaleString(),
            results: this.currentResults
        };

        let reportText = `${reportData.title}\n`;
        reportText += `${i18n.t('summary.title')}\n`;
        reportText += `${'='.repeat(50)}\n`;
        reportText += `${i18n.t('app.subtitle')}\n\n`;
        reportText += `${reportData.timestamp}\n\n`;

        // Add results for each connection type
        ['screws', 'nails', 'bolts'].forEach(type => {
            const results = this.currentResults[type];
            if (results) {
                reportText += `${i18n.t(`tabs.${type}`)}:\n`;
                reportText += `${'—'.repeat(20)}\n`;
                
                if (type === 'screws') {
                    reportText += `${i18n.t('results.total_resistance')}: ${i18n.formatNumber(results.totalResistance, 1)} kN\n`;
                    reportText += `${i18n.t('results.utilization')}: ${i18n.formatNumber((results.appliedForce / results.totalResistance) * 100, 1)}%\n`;
                } else if (type === 'nails') {
                    reportText += `${i18n.t('results.shear_resistance')}: ${i18n.formatNumber(results.shearResistance, 1)} kN\n`;
                    reportText += `${i18n.t('results.utilization')}: ${i18n.formatNumber((results.appliedForce / results.shearResistance) * 100, 1)}%\n`;
                } else if (type === 'bolts') {
                    reportText += `${i18n.t('results.shear_resistance')}: ${i18n.formatNumber(results.shearResistance, 1)} kN\n`;
                    reportText += `${i18n.t('results.utilization')}: ${i18n.formatNumber((results.appliedForce / results.shearResistance) * 100, 1)}%\n`;
                }
                reportText += '\n';
            }
        });

        reportText += `\n${i18n.t('footer.disclaimer')}`;

        const blob = new Blob([reportText], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `wood-calculator-report-${new Date().toISOString().split('T')[0]}.txt`;
        a.click();
        URL.revokeObjectURL(url);
    }
}

// Initialize application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.woodCalculatorApp = new WoodCalculatorApp();
});