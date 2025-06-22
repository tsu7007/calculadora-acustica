// =====================================================
// CALCULADORA DE AISLAMIENTO ACÚSTICO - JAVASCRIPT
// Sistema completo para 3 casos: Fachada, Pared, Personalizado
// =====================================================

// === CONSTANTES TÉCNICAS ===
const PONDERACION_A = {
    '63': -26,
    '125': -16,
    '250': -9,
    '500': -3,
    '1k': 0,
    '2k': 1,
    '4k': 1
};

const FRECUENCIAS_HZ = {
    '63': 63,
    '125': 125,
    '250': 250,
    '500': 500,
    '1k': 1000,
    '2k': 2000,
    '4k': 4000
};

const FRECUENCIAS = ['63', '125', '250', '500', '1k', '2k', '4k'];

// === VARIABLES GLOBALES ===
let casoActual = 'fachada';
let elementosPersonalizados = 2;
let espectrosPersonalizados = 2;

// === INICIALIZACIÓN ===
document.addEventListener('DOMContentLoaded', function() {
    console.log('🔊 Calculadora de Aislamiento Acústico v2.0 - Cargada');
    
    inicializarNavegacion();
    inicializarValidacion();
    inicializarElementosPersonalizados();
    
    console.log('✅ Sistema inicializado correctamente');
});

// === NAVEGACIÓN DE CASOS ===
function inicializarNavegacion() {
    const botonesCaso = document.querySelectorAll('.case-btn');
    const secciones = document.querySelectorAll('.case-section');
    
    botonesCaso.forEach(boton => {
        boton.addEventListener('click', function() {
            const caso = this.dataset.case;
            cambiarCaso(caso);
        });
    });
}

function cambiarCaso(nuevoCaso) {
    // Actualizar botones
    document.querySelectorAll('.case-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`btn-${nuevoCaso}`).classList.add('active');
    
    // Actualizar secciones
    document.querySelectorAll('.case-section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(`caso-${nuevoCaso}`).classList.add('active');
    
    casoActual = nuevoCaso;
    limpiarResultados();
    
    console.log(`📱 Caso cambiado a: ${nuevoCaso}`);
}

// === VALIDACIÓN EN TIEMPO REAL ===
function inicializarValidacion() {
    const inputs = document.querySelectorAll('input[type="number"]');
    
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            validarCampo(this);
        });
        
        input.addEventListener('blur', function() {
            validarCampo(this);
        });
    });
}

function validarCampo(campo) {
    const valor = parseFloat(campo.value);
    const min = parseFloat(campo.min) || 0;
    const max = parseFloat(campo.max) || Infinity;
    
    if (isNaN(valor) || valor < min || valor > max) {
        campo.style.borderColor = '#dc2626';
        campo.style.backgroundColor = '#fef2f2';
        return false;
    } else {
        campo.style.borderColor = '#059669';
        campo.style.backgroundColor = '#f0fdf4';
        return true;
    }
}

// === FÓRMULAS TÉCNICAS ===

/**
 * Ley de la Masa - Fórmula corregida según normativa
 * R = 20*log10(M) + 20*log10(f) - 47
 */
function calcularLeyMasa(masa, frecuencia) {
    if (masa <= 0 || frecuencia <= 0) {
        throw new Error('Masa y frecuencia deben ser positivas');
    }
    
    const aislamiento = 20 * Math.log10(masa) + 20 * Math.log10(frecuencia) - 47;
    return Math.max(0, aislamiento);
}

/**
 * Aislamiento Global para elementos compuestos
 * R_g = 10*log10(S_total / Σ(S_i * 10^(-R_i/10)))
 */
function calcularAislamientoGlobal(elementos) {
    let denominador = 0;
    let superficieTotal = 0;
    
    elementos.forEach(elemento => {
        denominador += elemento.superficie * Math.pow(10, -elemento.aislamiento / 10);
        superficieTotal += elemento.superficie;
    });
    
    if (denominador <= 0) {
        throw new Error('Error en cálculo de aislamiento global');
    }
    
    return 10 * Math.log10(superficieTotal / denominador);
}

/**
 * Nivel Global Ponderado A
 * LAeq = 10*log10(Σ(10^(LAi/10)))
 */
function calcularNivelGlobalA(nivelesReceptorA) {
    let sumaEnergia = 0;
    
    Object.values(nivelesReceptorA).forEach(nivel => {
        sumaEnergia += Math.pow(10, nivel / 10);
    });
    
    if (sumaEnergia <= 0) {
        throw new Error('Error en suma energética');
    }
    
    return 10 * Math.log10(sumaEnergia);
}

/**
 * Frecuencia de resonancia para paredes dobles
 * f0 = 60 * sqrt((1/M1 + 1/M2) / d)
 */
function calcularFrecuenciaResonancia(masa1, masa2, distancia) {
    const factor = (1/masa1 + 1/masa2) / (distancia / 1000); // distancia en metros
    return 60 * Math.sqrt(factor);
}

// === CÁLCULOS POR CASO ===

/**
 * CASO 1: FACHADA COMPUESTA
 */
function calcularFachada() {
    try {
        mostrarLoading(true);
        
        setTimeout(() => {
            try {
                // 1. Obtener parámetros
                const areaTotal = obtenerValor('fachada-area-total');
                const areaVentana = obtenerValor('fachada-area-ventana');
                const areaPuerta = obtenerValor('fachada-area-puerta');
                const areaPared = areaTotal - areaVentana - areaPuerta;
                
                const masaPared = obtenerValor('fachada-masa-pared');
                const masaVentana = obtenerValor('fachada-masa-ventana');
                const masaPuerta = obtenerValor('fachada-masa-puerta');
                
                // 2. Obtener espectro de emisión
                const espectro = obtenerEspectro('fachada-emisor');
                
                // 3. Validaciones
                if (areaPared <= 0) {
                    throw new Error('El área de pared debe ser positiva');
                }
                
                // 4. Calcular análisis completo
                const resultados = analizarFachada({
                    areaPared, areaVentana, areaPuerta, areaTotal,
                    masaPared, masaVentana, masaPuerta,
                    espectro
                });
                
                // 5. Mostrar resultados
                mostrarResultadosFachada(resultados);
                mostrarLoading(false);
                
            } catch (error) {
                mostrarError(error.message);
                mostrarLoading(false);
            }
        }, 300);
        
    } catch (error) {
        mostrarError(error.message);
        mostrarLoading(false);
    }
}

function analizarFachada(params) {
    const { areaPared, areaVentana, areaPuerta, areaTotal, masaPared, masaVentana, masaPuerta, espectro } = params;
    
    let analisisDetallado = [];
    let sumaEnergia = 0;
    
    FRECUENCIAS.forEach(freq => {
        const frecuenciaHz = FRECUENCIAS_HZ[freq];
        
        // Calcular aislamiento individual usando ley de la masa
        const rPared = calcularLeyMasa(masaPared, frecuenciaHz);
        const rVentana = calcularLeyMasa(masaVentana, frecuenciaHz);
        const rPuerta = calcularLeyMasa(masaPuerta, frecuenciaHz);
        
        // Calcular aislamiento global
        const elementos = [
            { superficie: areaPared, aislamiento: rPared },
            { superficie: areaVentana, aislamiento: rVentana },
            { superficie: areaPuerta, aislamiento: rPuerta }
        ].filter(elem => elem.superficie > 0);
        
        const rGlobal = calcularAislamientoGlobal(elementos);
        
        // Calcular niveles
        const nivelEmisor = espectro[freq];
        const nivelReceptor = nivelEmisor - rGlobal;
        const nivelReceptorA = nivelReceptor + PONDERACION_A[freq];
        
        sumaEnergia += Math.pow(10, nivelReceptorA / 10);
        
        analisisDetallado.push({
            frecuencia: frecuenciaHz,
            rPared, rVentana, rPuerta, rGlobal,
            nivelEmisor, nivelReceptor,
            ponderacionA: PONDERACION_A[freq],
            nivelReceptorA
        });
    });
    
    const nivelGlobalDBA = 10 * Math.log10(sumaEnergia);
    
    return {
        tipo: 'Fachada Compuesta',
        parametros: params,
        analisisDetallado,
        nivelGlobalDBA,
        resumen: {
            areaPared: areaPared.toFixed(2),
            areaVentana: areaVentana.toFixed(2),
            areaPuerta: areaPuerta.toFixed(2),
            masaPromedio: ((masaPared * areaPared + masaVentana * areaVentana + masaPuerta * areaPuerta) / areaTotal).toFixed(1)
        }
    };
}

/**
 * CASO 2: PARED COMPUESTA
 */
function calcularPared() {
    try {
        mostrarLoading(true);
        
        setTimeout(() => {
            try {
                // 1. Obtener parámetros
                const tipo = document.getElementById('pared-tipo').value;
                const area = obtenerValor('pared-area');
                const masa1 = obtenerValor('pared-masa1');
                const masa2 = obtenerValor('pared-masa2');
                const espesor1 = obtenerValor('pared-espesor1');
                const espesor2 = obtenerValor('pared-espesor2');
                const camara = obtenerValor('pared-camara');
                const relleno = document.getElementById('pared-relleno').value;
                
                // 2. Obtener espectro
                const espectro = obtenerEspectro('pared-emisor');
                
                // 3. Calcular análisis
                const resultados = analizarPared({
                    tipo, area, masa1, masa2, espesor1, espesor2, camara, relleno, espectro
                });
                
                // 4. Mostrar resultados
                mostrarResultadosPared(resultados);
                mostrarLoading(false);
                
            } catch (error) {
                mostrarError(error.message);
                mostrarLoading(false);
            }
        }, 300);
        
    } catch (error) {
        mostrarError(error.message);
        mostrarLoading(false);
    }
}

function analizarPared(params) {
    const { tipo, area, masa1, masa2, espesor1, espesor2, camara, relleno, espectro } = params;
    
    // Calcular frecuencia de resonancia
    const f0 = calcularFrecuenciaResonancia(masa1, masa2, camara);
    
    let analisisDetallado = [];
    let sumaEnergia = 0;
    
    FRECUENCIAS.forEach(freq => {
        const frecuenciaHz = FRECUENCIAS_HZ[freq];
        
        // Aislamiento individual de cada capa
        const r1 = calcularLeyMasa(masa1, frecuenciaHz);
        const r2 = calcularLeyMasa(masa2, frecuenciaHz);
        
        // Corrección por resonancia y tipo de sistema
        let rGlobal;
        if (frecuenciaHz < f0) {
            // Por debajo de la resonancia: reducción del aislamiento
            rGlobal = r1 + r2 - 10 * Math.log10(f0 / frecuenciaHz);
        } else {
            // Por encima de la resonancia: mejora del aislamiento
            const factorRelleno = obtenerFactorRelleno(relleno);
            rGlobal = r1 + r2 + 20 * Math.log10(frecuenciaHz / f0) + factorRelleno;
        }
        
        // Aplicar correcciones por tipo de sistema
        rGlobal = aplicarCorreccionesSistema(rGlobal, tipo, frecuenciaHz);
        
        // Calcular niveles
        const nivelEmisor = espectro[freq];
        const nivelReceptor = nivelEmisor - rGlobal;
        const nivelReceptorA = nivelReceptor + PONDERACION_A[freq];
        
        sumaEnergia += Math.pow(10, nivelReceptorA / 10);
        
        analisisDetallado.push({
            frecuencia: frecuenciaHz,
            r1, r2, rGlobal,
            nivelEmisor, nivelReceptor,
            ponderacionA: PONDERACION_A[freq],
            nivelReceptorA
        });
    });
    
    const nivelGlobalDBA = 10 * Math.log10(sumaEnergia);
    
    return {
        tipo: 'Pared Compuesta',
        sistemaConstructivo: tipo,
        frecuenciaResonancia: f0.toFixed(1),
        parametros: params,
        analisisDetallado,
        nivelGlobalDBA,
        resumen: {
            masaTotal: (masa1 + masa2).toFixed(1),
            espesorTotal: (espesor1 + espesor2 + camara).toFixed(1),
            tipoRelleno: relleno
        }
    };
}

/**
 * CASO 3: PERSONALIZADO
 */
function calcularPersonalizado() {
    try {
        mostrarLoading(true);
        
        setTimeout(() => {
            try {
                const tipoCalculo = document.getElementById('custom-tipo-calculo').value;
                const elementos = obtenerElementosPersonalizados();
                const espectros = obtenerEspectrosPersonalizados();
                
                const resultados = analizarPersonalizado({
                    tipoCalculo, elementos, espectros
                });
                
                mostrarResultadosPersonalizados(resultados);
                mostrarLoading(false);
                
            } catch (error) {
                mostrarError(error.message);
                mostrarLoading(false);
            }
        }, 300);
        
    } catch (error) {
        mostrarError(error.message);
        mostrarLoading(false);
    }
}

function analizarPersonalizado(params) {
    const { tipoCalculo, elementos, espectros } = params;
    
    let resultados = {
        tipo: 'Análisis Personalizado',
        tipoCalculo,
        espectros: []
    };
    
    espectros.forEach((espectro, index) => {
        let analisisDetallado = [];
        let sumaEnergia = 0;
        
        FRECUENCIAS.forEach(freq => {
            const frecuenciaHz = FRECUENCIAS_HZ[freq];
            
            // Calcular aislamiento según elementos configurados
            let rGlobal;
            if (tipoCalculo === 'directo') {
                // Usar primer elemento como referencia
                rGlobal = calcularLeyMasa(elementos[0].masa, frecuenciaHz);
            } else {
                // Aislamiento global con todos los elementos
                const elementosCalculo = elementos.map(elem => ({
                    superficie: elem.superficie,
                    aislamiento: calcularLeyMasa(elem.masa, frecuenciaHz)
                }));
                rGlobal = calcularAislamientoGlobal(elementosCalculo);
            }
            
            const nivelEmisor = espectro[freq];
            const nivelReceptor = nivelEmisor - rGlobal;
            const nivelReceptorA = nivelReceptor + PONDERACION_A[freq];
            
            sumaEnergia += Math.pow(10, nivelReceptorA / 10);
            
            analisisDetallado.push({
                frecuencia: frecuenciaHz,
                rGlobal,
                nivelEmisor, nivelReceptor,
                ponderacionA: PONDERACION_A[freq],
                nivelReceptorA
            });
        });
        
        const nivelGlobalDBA = 10 * Math.log10(sumaEnergia);
        
        resultados.espectros.push({
            nombre: `Espectro ${index + 1}`,
            analisisDetallado,
            nivelGlobalDBA
        });
    });
    
    return resultados;
}

// === FUNCIONES AUXILIARES ===

function obtenerValor(id) {
    const elemento = document.getElementById(id);
    if (!elemento) throw new Error(`Elemento ${id} no encontrado`);
    
    const valor = parseFloat(elemento.value);
    if (isNaN(valor)) throw new Error(`Valor inválido en ${id}`);
    
    return valor;
}

function obtenerEspectro(prefijo) {
    const espectro = {};
    FRECUENCIAS.forEach(freq => {
        espectro[freq] = obtenerValor(`${prefijo}-${freq}`);
    });
    return espectro;
}

function obtenerFactorRelleno(relleno) {
    const factores = {
        'aire': 0,
        'lana': 6,
        'poliuretano': 4
    };
    return factores[relleno] || 0;
}

function aplicarCorreccionesSistema(aislamiento, tipo, frecuencia) {
    const correcciones = {
        'doble': 0,
        'triple': 3,
        'sandwich': 2,
        'trasdosado': 5
    };
    
    return aislamiento + (correcciones[tipo] || 0);
}

// === ELEMENTOS DINÁMICOS ===

function inicializarElementosPersonalizados() {
    generarElementosPersonalizados();
}

function generarElementosPersonalizados() {
    const container = document.getElementById('custom-elements-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    for (let i = 1; i <= elementosPersonalizados; i++) {
        const elementHTML = `
            <div class="custom-element" id="elemento-${i}">
                <div class="custom-element-header">
                    <h5>Elemento ${i}</h5>
                    ${i > 1 ? `<button class="remove-element" onclick="eliminarElemento(${i})">✕</button>` : ''}
                </div>
                <div class="layer-inputs">
                    <input type="number" id="custom-masa-${i}" placeholder="Masa (kg/m²)" value="${50 + i * 20}" step="1">
                    <input type="number" id="custom-superficie-${i}" placeholder="Superficie (m²)" value="${10 + i * 5}" step="0.01">
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', elementHTML);
    }
}

function agregarElemento() {
    if (elementosPersonalizados < 5) {
        elementosPersonalizados++;
        generarElementosPersonalizados();
        inicializarValidacion();
    }
}

function eliminarElemento(numero) {
    if (elementosPersonalizados > 1) {
        elementosPersonalizados--;
        generarElementosPersonalizados();
        inicializarValidacion();
    }
}

function obtenerElementosPersonalizados() {
    const elementos = [];
    for (let i = 1; i <= elementosPersonalizados; i++) {
        elementos.push({
            masa: obtenerValor(`custom-masa-${i}`),
            superficie: obtenerValor(`custom-superficie-${i}`)
        });
    }
    return elementos;
}

function agregarEspectro() {
    if (espectrosPersonalizados < 3) {
        espectrosPersonalizados++;
        generarEspectrosPersonalizados();
    }
}

function generarEspectrosPersonalizados() {
    // Implementar lógica para generar múltiples espectros
    // Similar a generarElementosPersonalizados()
}

function obtenerEspectrosPersonalizados() {
    const espectros = [];
    for (let i = 1; i <= Math.min(espectrosPersonalizados, 2); i++) {
        espectros.push(obtenerEspectro(`custom-emisor${i}`));
    }
    return espectros;
}

// === VISUALIZACIÓN DE RESULTADOS ===

function mostrarResultadosFachada(resultados) {
    const container = document.getElementById('results-container');
    
    const html = `
        <div class="result-header">
            <h3>🏢 Resultados: ${resultados.tipo}</h3>
            <p>Análisis completo del sistema de fachada compuesta</p>
        </div>
        
        <div class="result-content">
            <!-- Resumen ejecutivo -->
            <div class="result-grid">
                <div class="result-card">
                    <h4>Nivel Global</h4>
                    <div class="result-value">${resultados.nivelGlobalDBA.toFixed(1)}</div>
                    <div class="result-unit">dBA</div>
                </div>
                <div class="result-card">
                    <h4>Área Pared</h4>
                    <div class="result-value">${resultados.resumen.areaPared}</div>
                    <div class="result-unit">m²</div>
                </div>
                <div class="result-card">
                    <h4>Masa Promedio</h4>
                    <div class="result-value">${resultados.resumen.masaPromedio}</div>
                    <div class="result-unit">kg/m²</div>
                </div>
            </div>
            
            <!-- Tabla de análisis detallado -->
            <h4>📊 Análisis por Frecuencias</h4>
            ${generarTablaAnalisis(resultados.analisisDetallado, 'fachada')}
            
            <!-- Información técnica -->
            <div class="formula-section">
                <h4>📋 Fórmulas Aplicadas</h4>
                <div class="formula-list">
                    <div class="formula-item">
                        <strong>Ley de la Masa:</strong> R = 20·log(M) + 20·log(f) - 47
                    </div>
                    <div class="formula-item">
                        <strong>Aislamiento Global:</strong> R_g = 10·log(S_total / Σ(S_i × 10^(-R_i/10)))
                    </div>
                    <div class="formula-item">
                        <strong>Nivel Global Ponderado A:</strong> LAeq = 10·log(Σ(10^(LAi/10)))
                    </div>
                </div>
            </div>
        </div>
    `;
    
    container.innerHTML = html;
    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function mostrarResultadosPared(resultados) {
    const container = document.getElementById('results-container');
    
    const html = `
        <div class="result-header">
            <h3>🧱 Resultados: ${resultados.tipo}</h3>
            <p>Análisis de sistema ${resultados.sistemaConstructivo}</p>
        </div>
        
        <div class="result-content">
            <div class="result-grid">
                <div class="result-card">
                    <h4>Nivel Global</h4>
                    <div class="result-value">${resultados.nivelGlobalDBA.toFixed(1)}</div>
                    <div class="result-unit">dBA</div>
                </div>
                <div class="result-card">
                    <h4>Frecuencia Resonancia</h4>
                    <div class="result-value">${resultados.frecuenciaResonancia}</div>
                    <div class="result-unit">Hz</div>
                </div>
                <div class="result-card">
                    <h4>Masa Total</h4>
                    <div class="result-value">${resultados.resumen.masaTotal}</div>
                    <div class="result-unit">kg/m²</div>
                </div>
            </div>
            
            <h4>📊 Análisis por Frecuencias</h4>
            ${generarTablaAnalisis(resultados.analisisDetallado, 'pared')}
        </div>
    `;
    
    container.innerHTML = html;
    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function mostrarResultadosPersonalizados(resultados) {
    const container = document.getElementById('results-container');
    
    let html = `
        <div class="result-header">
            <h3>⚙️ Resultados: ${resultados.tipo}</h3>
            <p>Tipo de cálculo: ${resultados.tipoCalculo}</p>
        </div>
        <div class="result-content">
    `;
    
    resultados.espectros.forEach((espectro, index) => {
        html += `
            <div class="result-section">
                <h4>${espectro.nombre}</h4>
                <div class="result-card">
                    <div class="result-value">${espectro.nivelGlobalDBA.toFixed(1)}</div>
                    <div class="result-unit">dBA</div>
                </div>
                ${generarTablaAnalisis(espectro.analisisDetallado, 'personalizado')}
            </div>
        `;
    });
    
    html += '</div>';
    
    container.innerHTML = html;
    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function generarTablaAnalisis(datos, tipo) {
    let columnas = '';
    let filas = '';
    
    // Generar columnas según el tipo
    if (tipo === 'fachada') {
        columnas = `
            <th>Freq (Hz)</th>
            <th>R Pared (dB)</th>
            <th>R Ventana (dB)</th>
            <th>R Puerta (dB)</th>
            <th>R Global (dB)</th>
            <th>Nivel Emisor (dB)</th>
            <th>Nivel Receptor (dB)</th>
            <th>Pond. A (dB)</th>
            <th>Nivel Receptor A (dB)</th>
        `;
        
        filas = datos.map(fila => `
            <tr>
                <td><strong>${fila.frecuencia}</strong></td>
                <td>${fila.rPared.toFixed(1)}</td>
                <td>${fila.rVentana.toFixed(1)}</td>
                <td>${fila.rPuerta.toFixed(1)}</td>
                <td>${fila.rGlobal.toFixed(1)}</td>
                <td>${fila.nivelEmisor.toFixed(1)}</td>
                <td>${fila.nivelReceptor.toFixed(1)}</td>
                <td>${fila.ponderacionA}</td>
                <td><strong>${fila.nivelReceptorA.toFixed(1)}</strong></td>
            </tr>
        `).join('');
        
    } else if (tipo === 'pared') {
        columnas = `
            <th>Freq (Hz)</th>
            <th>R Capa 1 (dB)</th>
            <th>R Capa 2 (dB)</th>
            <th>R Global (dB)</th>
            <th>Nivel Emisor (dB)</th>
            <th>Nivel Receptor (dB)</th>
            <th>Pond. A (dB)</th>
            <th>Nivel Receptor A (dB)</th>
        `;
        
        filas = datos.map(fila => `
            <tr>
                <td><strong>${fila.frecuencia}</strong></td>
                <td>${fila.r1.toFixed(1)}</td>
                <td>${fila.r2.toFixed(1)}</td>
                <td>${fila.rGlobal.toFixed(1)}</td>
                <td>${fila.nivelEmisor.toFixed(1)}</td>
                <td>${fila.nivelReceptor.toFixed(1)}</td>
                <td>${fila.ponderacionA}</td>
                <td><strong>${fila.nivelReceptorA.toFixed(1)}</strong></td>
            </tr>
        `).join('');
        
    } else {
        columnas = `
            <th>Freq (Hz)</th>
            <th>R Global (dB)</th>
            <th>Nivel Emisor (dB)</th>
            <th>Nivel Receptor (dB)</th>
            <th>Pond. A (dB)</th>
            <th>Nivel Receptor A (dB)</th>
        `;
        
        filas = datos.map(fila => `
            <tr>
                <td><strong>${fila.frecuencia}</strong></td>
                <td>${fila.rGlobal.toFixed(1)}</td>
                <td>${fila.nivelEmisor.toFixed(1)}</td>
                <td>${fila.nivelReceptor.toFixed(1)}</td>
                <td>${fila.ponderacionA}</td>
                <td><strong>${fila.nivelReceptorA.toFixed(1)}</strong></td>
            </tr>
        `).join('');
    }
    
    return `
        <table class="result-table">
            <thead>
                <tr>${columnas}</tr>
            </thead>
            <tbody>
                ${filas}
            </tbody>
        </table>
    `;
}

// === UTILIDADES ===

function mostrarLoading(mostrar) {
    const loading = document.getElementById('loading');
    if (mostrar) {
        loading.classList.remove('hidden');
    } else {
        loading.classList.add('hidden');
    }
}

function mostrarError(mensaje) {
    const container = document.getElementById('results-container');
    container.innerHTML = `
        <div class="result-header" style="background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);">
            <h3>⚠️ Error en el Cálculo</h3>
        </div>
        <div class="result-content">
            <div class="error-message" style="padding: 2rem; text-align: center; color: #dc2626;">
                <p style="font-size: 1.2rem; margin-bottom: 1rem;">${mensaje}</p>
                <p style="color: #666;">Revisa los parámetros de entrada y vuelve a intentarlo.</p>
            </div>
        </div>
    `;
    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function limpiarResultados() {
    const container = document.getElementById('results-container');
    container.innerHTML = '';
    mostrarLoading(false);
}

// === EXPORTACIÓN Y UTILIDADES ADICIONALES ===

function exportarResultados() {
    // Implementar exportación a PDF
    console.log('Función de exportación en desarrollo...');
}

// Atajos de teclado
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key === 'Enter') {
        // Ejecutar cálculo según caso actual
        switch(casoActual) {
            case 'fachada':
                calcularFachada();
                break;
            case 'pared':
                calcularPared();
                break;
            case 'personalizado':
                calcularPersonalizado();
                break;
        }
    }
});

console.log('🔧 Sistema de cálculos cargado correctamente');
console.log('💡 Usa Ctrl + Enter para calcular rápidamente');