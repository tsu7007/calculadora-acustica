// Calculadora de Aislamiento Acústico - Simulación Google Sheets
// ================================================================

// Datos de configuración
const CONFIG = {
    frecuenciasEstandar: [63, 125, 250, 500, 1000, 2000, 4000],
    espectrosEmisores: {
        1: [70, 80, 65, 60, 51, 65, 54],
        2: [75, 75, 64, 58, 52, 51, 60]
    },
    ponderacionA: [-26, -16, -9, -3, 0, 1, 1],
    ejemplosCodigo: {
        caso1: `/**
 * Calcula el aislamiento de una fachada compuesta.
 * @param {number} frecuencia - Frecuencia de análisis en Hz.
 * @param {number} coefAbsorcion - Coeficiente de absorción de pared.
 * @param {number} anchoPared - Ancho de la pared en m.
 * @param {number} altoPared - Alto de la pared en m.
 * @param {number} densidad1 - Densidad de la primera capa de pared en Kg/m².
 * @param {number} densidad2 - Densidad de la segunda capa de pared en Kg/m².
 * @param {number} separacion - Separación entre paredes en m.
 * @param {number} anchoVentana - Ancho de la ventana en m.
 * @param {number} altoVentana - Alto de la ventana en m.
 * @param {number} densidadV1 - Densidad de la primera ventana en Kg/m².
 * @param {number} densidadV2 - Densidad de la segunda ventana en Kg/m².
 * @return {number} El aislamiento de la fachada compuesta en dB.
 * @customfunction
 */
function AISLAMIENTO_FACHADA_COMPUESTA(frecuencia, coefAbsorcion, anchoPared, altoPared, densidad1, densidad2, separacion, anchoVentana, altoVentana, densidadV1, densidadV2) {
  // Paso 1: Cálculo del aislamiento de cada pared simple (Ley de la masa)
  var R1 = 20 * Math.log10(densidad1) + 20 * Math.log10(frecuencia) - 43;
  var R2 = 20 * Math.log10(densidad2) + 20 * Math.log10(frecuencia) - 43;
  
  // Paso 2: Cálculo de la frecuencia de resonancia
  var fo = 60 * Math.sqrt((1/densidad1 + 1/densidad2)/separacion);
  
  // Paso 3: Determinación del comportamiento acústico
  var R_paredDoble;
  if (frecuencia < fo) {
    // Estamos en el dominio de la elasticidad
    R_paredDoble = R1 + R2 - 10 * Math.log10(fo/frecuencia);
  } else {
    // Otro comportamiento (simplificado para este ejemplo)
    R_paredDoble = R1 + R2 + 20 * Math.log10(separacion*frecuencia/55) - 29;
  }
  
  // Paso 4: Cálculo del aislamiento de la ventana doble (mismo procedimiento)
  var R1_ventana = 20 * Math.log10(densidadV1) + 20 * Math.log10(frecuencia) - 43;
  var R2_ventana = 20 * Math.log10(densidadV2) + 20 * Math.log10(frecuencia) - 43;
  
  var fo_ventana = 60 * Math.sqrt((1/densidadV1 + 1/densidadV2)/separacion);
  
  var R_ventanaDoble;
  if (frecuencia < fo_ventana) {
    R_ventanaDoble = R1_ventana + R2_ventana - 10 * Math.log10(fo_ventana/frecuencia);
  } else {
    R_ventanaDoble = R1_ventana + R2_ventana + 20 * Math.log10(separacion*frecuencia/55) - 29;
  }
  
  // Paso 5: Cálculo del aislamiento global de la fachada compuesta
  var S_pared = anchoPared * altoPared - anchoVentana * altoVentana;
  var S_ventana = anchoVentana * altoVentana;
  var S_total = S_pared + S_ventana;
  
  var R_global = 10 * Math.log10(S_total / (S_pared * Math.pow(10, -R_paredDoble/10) + S_ventana * Math.pow(10, -R_ventanaDoble/10)));
  
  // Paso 6: Consideración del coeficiente de absorción
  var R_efectivo = R_global - 10 * Math.log10(1 - coefAbsorcion);
  
  return R_efectivo;
}`,
        caso2: `/**
 * Calcula el aislamiento total de una pared compuesta en función del espectro emisor.
 * @param {number} anchoPared - Ancho de la pared en m.
 * @param {number} altoPared - Alto de la pared en m.
 * @param {number} espesorPared - Espesor de la pared en m.
 * @param {number} densidadPared - Densidad de la pared en Kg/m³.
 * @param {number} anchoPuerta - Ancho de la puerta en m.
 * @param {number} altoPuerta - Alto de la puerta en m.
 * @param {number} espesorPuerta - Espesor de la puerta en m.
 * @param {number} densidadPuerta - Densidad de la puerta en Kg/m³.
 * @param {string} espectroEmisor - Tipo de espectro emisor ("1" o "2").
 * @return {number} El aislamiento total de la pared compuesta en dBA.
 * @customfunction
 */
function AISLAMIENTO_PARED_COMPUESTA(anchoPared, altoPared, espesorPared, densidadPared, anchoPuerta, altoPuerta, espesorPuerta, densidadPuerta, espectroEmisor) {
  // Paso 1: Cálculo de las masas por unidad de superficie
  var masaPared = densidadPared * espesorPared; // kg/m²
  var masaPuerta = densidadPuerta * espesorPuerta; // kg/m²
  
  // Paso 2: Definición de frecuencias y espectros
  var frecuencias = [63, 125, 250, 500, 1000, 2000, 4000];
  var espectroEmisor1 = [70, 80, 65, 60, 51, 65, 54];
  var espectroEmisor2 = [75, 75, 64, 58, 52, 51, 60];
  var ponderacionA = [-26, -16, -9, -3, 0, 1, 1];
  
  // Paso 3: Cálculo de áreas
  var areaPuerta = anchoPuerta * altoPuerta;
  var areaPared = anchoPared * altoPared - areaPuerta;
  var areaTotal = anchoPared * altoPared;
  
  // Continúa con el análisis por frecuencia...
  return nivelGlobalPonderadoA;
}`,
        caso3: `/**
 * Calcula el aislamiento acústico para múltiples elementos en una fachada.
 * @param {range} elementos - Rango con información de elementos (tipo, ancho, alto, densidad, etc.)
 * @param {range} frecuencias - Rango con las frecuencias de análisis
 * @param {number} coefAbsorcion - Coeficiente de absorción
 * @return {array} Matriz con los resultados de aislamiento para cada frecuencia
 * @customfunction
 */
function AISLAMIENTO_PERSONALIZADO(elementos, frecuencias, coefAbsorcion) {
  var resultados = [];
  var header = ['Frecuencia (Hz)', 'Aislamiento Global (dB)', 'Aislamiento Efectivo (dB)'];
  resultados.push(header);
  
  // Procesar cada frecuencia...
  return resultados;
}`
    }
};

// Variables globales
let elementosPersonalizados = [];
let currentCase = 'caso1';

// Inicialización de la aplicación
document.addEventListener('DOMContentLoaded', function() {
    initializeTabs();
    initializeCodePanel();
    initializeCalculations();
    initializeCustomCase();
    
    // Calcular valores iniciales
    calculateCaso1();
    calculateCaso2();
});

// ================================
// GESTIÓN DE PESTAÑAS
// ================================

function initializeTabs() {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const caseId = this.getAttribute('data-case');
            
            // Actualizar pestañas activas
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(tc => tc.classList.remove('active'));
            
            this.classList.add('active');
            document.getElementById(caseId).classList.add('active');
            
            currentCase = caseId;
            
            // Mostrar código correspondiente
            if (document.getElementById('codePanel').classList.contains('active')) {
                showCode(caseId);
            }
        });
    });
}

// ================================
// PANEL DE CÓDIGO
// ================================

function initializeCodePanel() {
    const showCodeBtn = document.getElementById('showCodeBtn');
    const closeCodeBtn = document.getElementById('closeCodeBtn');
    const codePanel = document.getElementById('codePanel');
    
    showCodeBtn.addEventListener('click', function() {
        codePanel.classList.add('active');
        showCode(currentCase);
    });
    
    closeCodeBtn.addEventListener('click', function() {
        codePanel.classList.remove('active');
    });
}

function showCode(caseId) {
    const codeDisplay = document.getElementById('codeDisplay');
    const codeKey = caseId;
    
    if (CONFIG.ejemplosCodigo[codeKey]) {
        codeDisplay.textContent = CONFIG.ejemplosCodigo[codeKey];
    } else {
        codeDisplay.textContent = '// Código no disponible para este caso';
    }
}

// ================================
// CÁLCULOS - CASO 1: FACHADA COMPUESTA
// ================================

function initializeCalculations() {
    // Event listeners para inputs del Caso 1
    const caso1Inputs = document.querySelectorAll('#caso1 .cell-input');
    caso1Inputs.forEach(input => {
        input.addEventListener('input', debounce(calculateCaso1, 500));
    });
    
    // Event listeners para inputs del Caso 2
    const caso2Inputs = document.querySelectorAll('#caso2 .cell-input, #caso2 select');
    caso2Inputs.forEach(input => {
        input.addEventListener('input', debounce(calculateCaso2, 500));
        input.addEventListener('change', debounce(calculateCaso2, 500));
    });
    
    // Botón calcular global
    const calculateBtn = document.getElementById('calculateBtn');
    calculateBtn.addEventListener('click', function() {
        calculateAll();
    });
}

function calculateCaso1() {
    try {
        // Obtener valores de entrada
        const frecuencia = parseFloat(document.getElementById('c1_frecuencia').value) || 63;
        const absorcion = parseFloat(document.getElementById('c1_absorcion').value) || 0.2;
        const anchoPared = parseFloat(document.getElementById('c1_ancho_pared').value) || 6;
        const altoPared = parseFloat(document.getElementById('c1_alto_pared').value) || 6;
        const densidad1 = parseFloat(document.getElementById('c1_densidad1').value) || 10;
        const densidad2 = parseFloat(document.getElementById('c1_densidad2').value) || 30;
        const separacion = parseFloat(document.getElementById('c1_separacion').value) || 0.1;
        const anchoVentana = parseFloat(document.getElementById('c1_ancho_ventana').value) || 0.5;
        const altoVentana = parseFloat(document.getElementById('c1_alto_ventana').value) || 0.5;
        const densidadV1 = parseFloat(document.getElementById('c1_densidadv1').value) || 10;
        const densidadV2 = parseFloat(document.getElementById('c1_densidadv2').value) || 30;
        
        // Paso 1: Cálculo del aislamiento de cada pared simple (Ley de la masa)
        const R1 = 20 * Math.log10(densidad1) + 20 * Math.log10(frecuencia) - 43;
        const R2 = 20 * Math.log10(densidad2) + 20 * Math.log10(frecuencia) - 43;
        
        // Paso 2: Frecuencia de resonancia
        const fo = 60 * Math.sqrt((1/densidad1 + 1/densidad2)/separacion);
        
        // Paso 3: Aislamiento de pared doble
        let RParedDoble;
        if (frecuencia < fo) {
            RParedDoble = R1 + R2 - 10 * Math.log10(fo/frecuencia);
        } else {
            RParedDoble = R1 + R2 + 20 * Math.log10(separacion * frecuencia / 55) - 29;
        }
        
        // Paso 4: Aislamiento de ventana doble (proceso similar)
        const R1Ventana = 20 * Math.log10(densidadV1) + 20 * Math.log10(frecuencia) - 43;
        const R2Ventana = 20 * Math.log10(densidadV2) + 20 * Math.log10(frecuencia) - 43;
        const foVentana = 60 * Math.sqrt((1/densidadV1 + 1/densidadV2)/separacion);
        
        let RVentanaDoble;
        if (frecuencia < foVentana) {
            RVentanaDoble = R1Ventana + R2Ventana - 10 * Math.log10(foVentana/frecuencia);
        } else {
            RVentanaDoble = R1Ventana + R2Ventana + 20 * Math.log10(separacion * frecuencia / 55) - 29;
        }
        
        // Paso 5: Áreas
        const areaPared = anchoPared * altoPared - anchoVentana * altoVentana;
        const areaVentana = anchoVentana * altoVentana;
        const areaTotal = areaPared + areaVentana;
        
        // Paso 6: Aislamiento global
        const RGlobal = 10 * Math.log10(areaTotal / (areaPared * Math.pow(10, -RParedDoble/10) + areaVentana * Math.pow(10, -RVentanaDoble/10)));
        
        // Paso 7: Aislamiento efectivo con absorción
        const REfectivo = RGlobal - 10 * Math.log10(1 - absorcion);
        
        // Actualizar resultados en la interfaz
        document.getElementById('c1_r1').textContent = R1.toFixed(2) + ' dB';
        document.getElementById('c1_r2').textContent = R2.toFixed(2) + ' dB';
        document.getElementById('c1_fo').textContent = fo.toFixed(2) + ' Hz';
        document.getElementById('c1_r_pared_doble').textContent = RParedDoble.toFixed(2) + ' dB';
        document.getElementById('c1_r_ventana_doble').textContent = RVentanaDoble.toFixed(2) + ' dB';
        document.getElementById('c1_area_pared').textContent = areaPared.toFixed(2) + ' m²';
        document.getElementById('c1_area_ventana').textContent = areaVentana.toFixed(2) + ' m²';
        document.getElementById('c1_r_global').textContent = RGlobal.toFixed(2) + ' dB';
        document.getElementById('c1_resultado_final').textContent = REfectivo.toFixed(2) + ' dB';
        
    } catch (error) {
        console.error('Error en cálculo Caso 1:', error);
        // Mostrar valores por defecto en caso de error
        const resultElements = document.querySelectorAll('#caso1 .result-cell, #caso1 .final-result');
        resultElements.forEach(el => el.textContent = 'Error');
    }
}

// ================================
// CÁLCULOS - CASO 2: PARED COMPUESTA
// ================================

function calculateCaso2() {
    try {
        // Obtener valores de entrada
        const anchoPared = parseFloat(document.getElementById('c2_ancho_pared').value) || 10;
        const altoPared = parseFloat(document.getElementById('c2_alto_pared').value) || 4;
        const espesorPared = parseFloat(document.getElementById('c2_espesor_pared').value) || 0.1;
        const densidadPared = parseFloat(document.getElementById('c2_densidad_pared').value) || 2000;
        const anchoPuerta = parseFloat(document.getElementById('c2_ancho_puerta').value) || 3;
        const altoPuerta = parseFloat(document.getElementById('c2_alto_puerta').value) || 1.66;
        const espesorPuerta = parseFloat(document.getElementById('c2_espesor_puerta').value) || 0.1;
        const densidadPuerta = parseFloat(document.getElementById('c2_densidad_puerta').value) || 100;
        const espectroTipo = document.getElementById('c2_espectro').value;
        
        // Calcular masas por unidad de superficie
        const masaPared = densidadPared * espesorPared; // kg/m²
        const masaPuerta = densidadPuerta * espesorPuerta; // kg/m²
        
        // Calcular áreas
        const areaPuerta = anchoPuerta * altoPuerta;
        const areaPared = anchoPared * altoPared - areaPuerta;
        const areaTotal = anchoPared * altoPared;
        
        // Seleccionar espectro emisor
        const espectroEmisor = CONFIG.espectrosEmisores[espectroTipo];
        
        // Crear tabla de resultados
        const tableBody = document.getElementById('c2_frequency_table');
        tableBody.innerHTML = '';
        
        let nivelesReceptorPonderados = [];
        
        CONFIG.frecuenciasEstandar.forEach((frecuencia, index) => {
            // Aislamiento de la pared (Ley de la masa)
            const aislamientoPared = 20 * Math.log10(masaPared) + 20 * Math.log10(frecuencia) - 43;
            
            // Aislamiento de la puerta (Ley de la masa)
            const aislamientoPuerta = 20 * Math.log10(masaPuerta) + 20 * Math.log10(frecuencia) - 43;
            
            // Aislamiento global (elementos mixtos)
            const aislamientoGlobal = 10 * Math.log10(areaTotal / 
                (areaPared * Math.pow(10, -aislamientoPared/10) + 
                 areaPuerta * Math.pow(10, -aislamientoPuerta/10)));
            
            // Nivel en el receptor
            const nivelEmisor = espectroEmisor[index];
            const nivelReceptor = nivelEmisor - aislamientoGlobal;
            
            // Aplicar ponderación A
            const ponderacion = CONFIG.ponderacionA[index];
            const nivelReceptorPonderado = nivelReceptor + ponderacion;
            nivelesReceptorPonderados.push(nivelReceptorPonderado);
            
            // Crear fila en la tabla
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${frecuencia}</td>
                <td>${aislamientoPared.toFixed(1)}</td>
                <td>${aislamientoPuerta.toFixed(1)}</td>
                <td>${aislamientoGlobal.toFixed(1)}</td>
                <td>${nivelEmisor.toFixed(1)}</td>
                <td>${nivelReceptor.toFixed(1)}</td>
                <td>${ponderacion.toFixed(0)}</td>
                <td>${nivelReceptorPonderado.toFixed(1)}</td>
            `;
            tableBody.appendChild(row);
        });
        
        // Calcular nivel global ponderado A
        let sumaEnergetica = 0;
        nivelesReceptorPonderados.forEach(nivel => {
            sumaEnergetica += Math.pow(10, nivel/10);
        });
        
        const nivelGlobalPonderadoA = 10 * Math.log10(sumaEnergetica);
        
        // Actualizar resultado final
        document.getElementById('c2_resultado_final').textContent = nivelGlobalPonderadoA.toFixed(1) + ' dBA';
        
    } catch (error) {
        console.error('Error en cálculo Caso 2:', error);
        document.getElementById('c2_resultado_final').textContent = 'Error';
    }
}

// ================================
// CASO 3: PERSONALIZADO
// ================================

function initializeCustomCase() {
    const addElementBtn = document.getElementById('c3_add_element');
    const calculateBtn = document.getElementById('c3_calculate');
    
    addElementBtn.addEventListener('click', addElement);
    calculateBtn.addEventListener('click', calculateCaso3);
    
    // Añadir algunos elementos por defecto
    addDefaultElements();
}

function addDefaultElements() {
    // Añadir una pared simple por defecto
    elementosPersonalizados = [
        {
            tipo: 'pared_simple',
            ancho: 10,
            alto: 4,
            densidad1: 200,
            densidad2: null,
            separacion: null
        },
        {
            tipo: 'ventana',
            ancho: 1.5,
            alto: 1.2,
            densidad1: 20,
            densidad2: null,
            separacion: null
        }
    ];
    updateElementsTable();
}

function addElement() {
    const tipo = document.getElementById('c3_tipo_elemento').value;
    
    const newElement = {
        tipo: tipo,
        ancho: 1,
        alto: 1,
        densidad1: tipo === 'ventana' ? 20 : 100,
        densidad2: tipo === 'pared_doble' ? 100 : null,
        separacion: tipo === 'pared_doble' ? 0.1 : null
    };
    
    elementosPersonalizados.push(newElement);
    updateElementsTable();
}

function updateElementsTable() {
    const tableBody = document.querySelector('#c3_elements_table tbody');
    tableBody.innerHTML = '';
    
    elementosPersonalizados.forEach((elemento, index) => {
        const row = document.createElement('tr');
        
        const tipoTexto = {
            'pared_simple': 'Pared Simple',
            'pared_doble': 'Pared Doble',
            'ventana': 'Ventana',
            'puerta': 'Puerta'
        };
        
        row.innerHTML = `
            <td>${tipoTexto[elemento.tipo]}</td>
            <td><input type="number" class="form-control cell-input" value="${elemento.ancho}" step="0.1" onchange="updateElement(${index}, 'ancho', this.value)"></td>
            <td><input type="number" class="form-control cell-input" value="${elemento.alto}" step="0.1" onchange="updateElement(${index}, 'alto', this.value)"></td>
            <td><input type="number" class="form-control cell-input" value="${elemento.densidad1}" onchange="updateElement(${index}, 'densidad1', this.value)"></td>
            <td><input type="number" class="form-control cell-input" value="${elemento.densidad2 || ''}" ${elemento.densidad2 === null ? 'disabled' : ''} onchange="updateElement(${index}, 'densidad2', this.value)"></td>
            <td><input type="number" class="form-control cell-input" value="${elemento.separacion || ''}" step="0.01" ${elemento.separacion === null ? 'disabled' : ''} onchange="updateElement(${index}, 'separacion', this.value)"></td>
            <td><button class="action-btn" onclick="removeElement(${index})">🗑️</button></td>
        `;
        
        tableBody.appendChild(row);
    });
}

function updateElement(index, property, value) {
    if (value === '' && (property === 'densidad2' || property === 'separacion')) {
        elementosPersonalizados[index][property] = null;
    } else {
        elementosPersonalizados[index][property] = parseFloat(value) || 0;
    }
}

function removeElement(index) {
    elementosPersonalizados.splice(index, 1);
    updateElementsTable();
}

function calculateCaso3() {
    try {
        const frecuenciasInput = document.getElementById('c3_frecuencias').value;
        const absorcionGlobal = parseFloat(document.getElementById('c3_absorcion_global').value) || 0.2;
        
        // Parsear frecuencias
        const frecuencias = frecuenciasInput.split(',').map(f => parseFloat(f.trim())).filter(f => !isNaN(f));
        
        if (frecuencias.length === 0) {
            throw new Error('No se especificaron frecuencias válidas');
        }
        
        // Tabla de resultados
        const tableBody = document.getElementById('c3_results_table');
        tableBody.innerHTML = '';
        
        frecuencias.forEach(frecuencia => {
            let areaTotal = 0;
            let sumatoriaTransmision = 0;
            
            elementosPersonalizados.forEach(elemento => {
                const area = elemento.ancho * elemento.alto;
                let aislamiento;
                
                if (elemento.tipo === 'pared_simple' || elemento.tipo === 'ventana' || elemento.tipo === 'puerta') {
                    // Ley de la masa simple
                    aislamiento = 20 * Math.log10(elemento.densidad1) + 20 * Math.log10(frecuencia) - 43;
                } else if (elemento.tipo === 'pared_doble') {
                    // Pared doble
                    const R1 = 20 * Math.log10(elemento.densidad1) + 20 * Math.log10(frecuencia) - 43;
                    const R2 = 20 * Math.log10(elemento.densidad2) + 20 * Math.log10(frecuencia) - 43;
                    const fo = 60 * Math.sqrt((1/elemento.densidad1 + 1/elemento.densidad2)/elemento.separacion);
                    
                    if (frecuencia < fo) {
                        aislamiento = R1 + R2 - 10 * Math.log10(fo/frecuencia);
                    } else {
                        aislamiento = R1 + R2 + 20 * Math.log10(elemento.separacion * frecuencia / 55) - 29;
                    }
                }
                
                areaTotal += area;
                sumatoriaTransmision += area * Math.pow(10, -aislamiento/10);
            });
            
            // Aislamiento global
            const aislamientoGlobal = 10 * Math.log10(areaTotal / sumatoriaTransmision);
            
            // Aislamiento efectivo con absorción
            const aislamientoEfectivo = aislamientoGlobal - 10 * Math.log10(1 - absorcionGlobal);
            
            // Crear fila
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${frecuencia}</td>
                <td>${aislamientoGlobal.toFixed(2)}</td>
                <td>${aislamientoEfectivo.toFixed(2)}</td>
            `;
            tableBody.appendChild(row);
        });
        
    } catch (error) {
        console.error('Error en cálculo Caso 3:', error);
        alert('Error en el cálculo: ' + error.message);
    }
}

// ================================
// FUNCIONES AUXILIARES
// ================================

function calculateAll() {
    const container = document.querySelector('.sheets-container');
    container.classList.add('calculating');
    
    setTimeout(() => {
        calculateCaso1();
        calculateCaso2();
        if (elementosPersonalizados.length > 0) {
            calculateCaso3();
        }
        container.classList.remove('calculating');
    }, 100);
}


function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}


function calcularNivelGlobalPonderadoA(espectro, aislamientoGlobal) {
  const PONDERACION_A = { 
    '63': -26, '125': -16, '250': -9, 
    '500': -3, '1k': 0, '2k': 1, '4k': 1 
  };

  let sumaEnergia = 0;
  const frecuencias = ['63', '125', '250', '500', '1k', '2k', '4k'];

  frecuencias.forEach(freq => {
    const nivelReceptor = espectro[freq] - aislamientoGlobal[freq];
    const nivelPonderadoA = nivelReceptor + PONDERACION_A[freq];
    sumaEnergia += Math.pow(10, nivelPonderadoA / 10);
  });

  return (10 * Math.log10(sumaEnergia)).toFixed(1);
}





// script.js
const PONDERACION_A = {
  '63': -26,
  '125': -16,
  '250': -9,
  '500': -3,
  '1k': 0,
  '2k': 1,
  '4k': 1
};

function calcularNivelGlobal() {
  try {
    const emisor1 = obtenerEspectro('emisor1');
    const emisor2 = obtenerEspectro('emisor2');
    const aislamiento = obtenerAislamientoGlobal();

    const dBA1 = calcularNivelPonderadoA(emisor1, aislamiento);
    const dBA2 = calcularNivelPonderadoA(emisor2, aislamiento);

    mostrarResultado(dBA1, dBA2);
  } catch (error) {
    console.error(error);
    document.getElementById('resultado').innerHTML = `
      <div class="error">⚠️ Error: ${error.message}</div>
    `;
  }
}

function obtenerEspectro(emisor) {
  const frecuencias = ['63', '125', '250', '500', '1k', '2k', '4k'];
  const espectro = {};
  
  frecuencias.forEach(freq => {
    const valor = parseFloat(document.getElementById(`${emisor}-${freq}`).value);
    if (isNaN(valor)) throw new Error(`Valor inválido en ${emisor} - ${freq} Hz`);
    espectro[freq] = valor;
  });
  
  return espectro;
}

function obtenerAislamientoGlobal() {
  // Implementa aquí la lógica para obtener R_global de tu hoja de cálculo
  return {
    '63': 19.8, '125': 25.1, '250': 30.6, '500': 36.2, '1k': 41.9, '2k': 47.7, '4k': 53.6
  };
}

function calcularNivelPonderadoA(emisor, aislamiento) {
  let sumaEnergia = 0;
  const frecuencias = Object.keys(emisor);

  frecuencias.forEach(freq => {
    const nivelReceptor = emisor[freq] - aislamiento[freq];
    const nivelPonderadoA = nivelReceptor + PONDERACION_A[freq];
    sumaEnergia += Math.pow(10, nivelPonderadoA / 10); // Conversión a energía
  });

  const nivelGlobal = 10 * Math.log10(sumaEnergia); // Conversión a dB
  return nivelGlobal.toFixed(1); // Redondeo a 1 decimal
}

function mostrarResultado(dBA1, dBA2) {
  document.getElementById('resultado').innerHTML = `
    <div class="resultado">
      <h3>Resultados:</h3>
      <p>Espectro Emisor 1: <strong>${dBA1} dBA</strong></p>
      <p>Espectro Emisor 2: <strong>${dBA2} dBA</strong></p>
    </div>
  `;
}


// Funciones globales para eventos inline
window.updateElement = updateElement;
window.removeElement = removeElement;
