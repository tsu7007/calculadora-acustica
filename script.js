// script.js - Calculadora de Aislamiento Acústico
// Implementa todas las fórmulas de aislamiento acústico según normativas técnicas

// ========================= CONSTANTES =========================
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

const FRECUENCIAS_ARRAY = ['63', '125', '250', '500', '1k', '2k', '4k'];

// ========================= UTILIDADES =========================

/**
 * Muestra/oculta indicador de carga
 */
function toggleLoading(show) {
    const loading = document.getElementById('loading');
    if (show) {
        loading.classList.remove('hidden');
    } else {
        loading.classList.add('hidden');
    }
}

/**
 * Valida que un valor numérico esté en el rango permitido
 */
function validarValor(valor, min = 0, max = 200, campo = 'valor') {
    if (isNaN(valor)) {
        throw new Error(`${campo} debe ser un número válido`);
    }
    if (valor < min || valor > max) {
        throw new Error(`${campo} debe estar entre ${min} y ${max}`);
    }
    return true;
}

/**
 * Marca un campo como válido o inválido visualmente
 */
function marcarCampo(elementId, esValido) {
    const elemento = document.getElementById(elementId);
    if (elemento) {
        if (esValido) {
            elemento.classList.remove('error');
        } else {
            elemento.classList.add('error');
        }
    }
}

// ========================= OBTENCIÓN DE DATOS =========================

/**
 * Obtiene y valida los valores del espectro de emisión
 */
function obtenerEspectro(emisor) {
    const espectro = {};
    
    FRECUENCIAS_ARRAY.forEach(freq => {
        const elementId = `${emisor}-${freq}`;
        const valor = parseFloat(document.getElementById(elementId).value);
        
        try {
            validarValor(valor, 0, 150, `${emisor} ${freq}Hz`);
            espectro[freq] = valor;
            marcarCampo(elementId, true);
        } catch (error) {
            marcarCampo(elementId, false);
            throw new Error(`Error en ${emisor} ${freq}Hz: ${error.message}`);
        }
    });
    
    return espectro;
}

/**
 * Obtiene y valida los parámetros de construcción
 */
function obtenerParametrosConstruccion() {
    const parametros = {};
    
    // Masas
    parametros.masaPared = parseFloat(document.getElementById('masa-pared').value);
    parametros.masaPuerta = parseFloat(document.getElementById('masa-puerta').value);
    
    // Superficies
    parametros.superficiePared = parseFloat(document.getElementById('superficie-pared').value);
    parametros.superficiePuerta = parseFloat(document.getElementById('superficie-puerta').value);
    parametros.superficieTotal = parametros.superficiePared + parametros.superficiePuerta;
    
    // Validaciones
    validarValor(parametros.masaPared, 10, 1000, 'Masa de pared');
    validarValor(parametros.masaPuerta, 1, 200, 'Masa de puerta');
    validarValor(parametros.superficiePared, 1, 1000, 'Superficie de pared');
    validarValor(parametros.superficiePuerta, 0.1, 100, 'Superficie de puerta');
    
    return parametros;
}

// ========================= CÁLCULOS ACÚSTICOS =========================

/**
 * Calcula el aislamiento usando la Ley de la Masa
 * Fórmula: R = 20*log10(M) + 20*log10(f) - 43
 */
function calcularAislamientoLeyMasa(masa, frecuencia) {
    if (masa <= 0 || frecuencia <= 0) {
        throw new Error('Masa y frecuencia deben ser positivas');
    }
    
    const aislamiento = 20 * Math.log10(masa) + 20 * Math.log10(frecuencia) - 43;
    return Math.max(0, aislamiento); // El aislamiento no puede ser negativo
}

/**
 * Calcula el aislamiento global de elementos compuestos
 * Fórmula: R_g = 10*log10(S_total / (S1*10^(-R1/10) + S2*10^(-R2/10)))
 */
function calcularAislamientoGlobal(rPared, rPuerta, supPared, supPuerta, supTotal) {
    const denominador = supPared * Math.pow(10, -rPared/10) + supPuerta * Math.pow(10, -rPuerta/10);
    
    if (denominador <= 0) {
        throw new Error('Error en cálculo de aislamiento global: denominador inválido');
    }
    
    return 10 * Math.log10(supTotal / denominador);
}

/**
 * Calcula el nivel global ponderado A
 * Fórmula: LAeq = 10*log10(Σ(10^(LAi/10)))
 */
function calcularNivelGlobalPonderadoA(nivelesReceptorA) {
    let sumaEnergia = 0;
    
    Object.values(nivelesReceptorA).forEach(nivel => {
        sumaEnergia += Math.pow(10, nivel / 10);
    });
    
    if (sumaEnergia <= 0) {
        throw new Error('Error en suma energética para nivel global');
    }
    
    return 10 * Math.log10(sumaEnergia);
}

// ========================= ANÁLISIS COMPLETO =========================

/**
 * Realiza el análisis completo de aislamiento acústico para un espectro
 */
function analizarEspectro(espectro, parametros, nombreEspectro) {
    const analisis = {
        nombre: nombreEspectro,
        frecuencias: {},
        resumen: {}
    };
    
    let sumaEnergiaTotal = 0;
    
    // Análisis por frecuencia
    FRECUENCIAS_ARRAY.forEach(freq => {
        const frecuenciaHz = FRECUENCIAS_HZ[freq];
        
        // 1. Calcular aislamiento por Ley de la Masa
        const rPared = calcularAislamientoLeyMasa(parametros.masaPared, frecuenciaHz);
        const rPuerta = calcularAislamientoLeyMasa(parametros.masaPuerta, frecuenciaHz);
        
        // 2. Calcular aislamiento global
        const rGlobal = calcularAislamientoGlobal(
            rPared, rPuerta, 
            parametros.superficiePared, parametros.superficiePuerta, 
            parametros.superficieTotal
        );
        
        // 3. Calcular nivel receptor
        const nivelEmisor = espectro[freq];
        const nivelReceptor = nivelEmisor - rGlobal;
        
        // 4. Aplicar ponderación A
        const nivelReceptorA = nivelReceptor + PONDERACION_A[freq];
        
        // 5. Acumular energía para nivel global
        sumaEnergiaTotal += Math.pow(10, nivelReceptorA / 10);
        
        // Guardar resultados por frecuencia
        analisis.frecuencias[freq] = {
            frecuenciaHz: frecuenciaHz,
            rPared: rPared,
            rPuerta: rPuerta,
            rGlobal: rGlobal,
            nivelEmisor: nivelEmisor,
            nivelReceptor: nivelReceptor,
            ponderacionA: PONDERACION_A[freq],
            nivelReceptorA: nivelReceptorA
        };
    });
    
    // Calcular nivel global
    analisis.resumen.nivelGlobalDBA = 10 * Math.log10(sumaEnergiaTotal);
    
    return analisis;
}

// ========================= GENERACIÓN DE RESULTADOS =========================

/**
 * Genera tabla HTML con análisis por frecuencias
 */
function generarTablaAnalisis(analisis) {
    let tabla = `
        <table>
            <thead>
                <tr>
                    <th>Freq (Hz)</th>
                    <th>R Pared (dB)</th>
                    <th>R Puerta (dB)</th>
                    <th>R Global (dB)</th>
                    <th>Nivel Emisor (dB)</th>
                    <th>Nivel Receptor (dB)</th>
                    <th>Pond. A (dB)</th>
                    <th>Nivel Receptor A (dB)</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    FRECUENCIAS_ARRAY.forEach(freq => {
        const datos = analisis.frecuencias[freq];
        tabla += `
            <tr>
                <td>${datos.frecuenciaHz}</td>
                <td>${datos.rPared.toFixed(1)}</td>
                <td>${datos.rPuerta.toFixed(1)}</td>
                <td>${datos.rGlobal.toFixed(1)}</td>
                <td>${datos.nivelEmisor.toFixed(1)}</td>
                <td>${datos.nivelReceptor.toFixed(1)}</td>
                <td>${datos.ponderacionA}</td>
                <td>${datos.nivelReceptorA.toFixed(1)}</td>
            </tr>
        `;
    });
    
    tabla += `
            </tbody>
        </table>
    `;
    
    return tabla;
}

/**
 * Genera el HTML completo de resultados
 */
function generarHTMLResultados(analisis1, analisis2) {
    return `
        <div class="resultado-completo">
            <h3>📊 Resultados del Análisis de Aislamiento Acústico</h3>
            
            <!-- Resumen ejecutivo -->
            <div class="resumen-ejecutivo">
                <h4>🎯 Resumen Ejecutivo</h4>
                <div class="resumen-grid">
                    <div class="resumen-item">
                        <strong>Espectro Emisor 1:</strong>
                        <span class="valor-destacado">${analisis1.resumen.nivelGlobalDBA.toFixed(1)} dBA</span>
                    </div>
                    <div class="resumen-item">
                        <strong>Espectro Emisor 2:</strong>
                        <span class="valor-destacado">${analisis2.resumen.nivelGlobalDBA.toFixed(1)} dBA</span>
                    </div>
                </div>
            </div>
            
            <!-- Espectro Emisor 1 -->
            <div class="analisis-espectro">
                <h3>🔊 ${analisis1.nombre}</h3>
                <h4>Análisis por Frecuencia</h4>
                ${generarTablaAnalisis(analisis1)}
                
                <h4>Resultado Final</h4>
                <div class="total">
                    Nivel Global Ponderado A (dBA): ${analisis1.resumen.nivelGlobalDBA.toFixed(1)} dBA
                </div>
                <div class="formula">
                    Fórmula aplicada: LAeq = 10 log Σ(10^(LAi/10))
                </div>
            </div>
            
            <!-- Espectro Emisor 2 -->
            <div class="analisis-espectro">
                <h3>🔊 ${analisis2.nombre}</h3>
                <h4>Análisis por Frecuencia</h4>
                ${generarTablaAnalisis(analisis2)}
                
                <h4>Resultado Final</h4>
                <div class="total">
                    Nivel Global Ponderado A (dBA): ${analisis2.resumen.nivelGlobalDBA.toFixed(1)} dBA
                </div>
                <div class="formula">
                    Fórmula aplicada: LAeq = 10 log Σ(10^(LAi/10))
                </div>
            </div>
            
            <!-- Información técnica -->
            <div class="info-tecnica">
                <h4>📋 Información Técnica</h4>
                <div class="formula">
                    <strong>Fórmulas utilizadas:</strong><br>
                    • Ley de la Masa: R = 20log(M) + 20log(f) - 43<br>
                    • Aislamiento Global: R_g = 10log(S_total / Σ(S_i × 10^(-R_i/10)))<br>
                    • Nivel Global Ponderado A: LAeq = 10log(Σ(10^(LAi/10)))<br>
                    • Nivel Receptor: L_receptor = L_emisor - R_global<br>
                    • Ponderación A según UNE-EN ISO 61672-1
                </div>
            </div>
        </div>
    `;
}

// ========================= FUNCIÓN PRINCIPAL =========================

/**
 * Función principal que ejecuta todo el cálculo de aislamiento
 */
function calcularAislamientoCompleto() {
    try {
        // Mostrar loading
        toggleLoading(true);
        
        // Pequeña pausa para mostrar loading
        setTimeout(() => {
            try {
                // 1. Obtener datos de entrada
                const emisor1 = obtenerEspectro('emisor1');
                const emisor2 = obtenerEspectro('emisor2');
                const parametros = obtenerParametrosConstruccion();
                
                // 2. Realizar análisis completo
                const analisis1 = analizarEspectro(emisor1, parametros, 'Espectro Emisor 1');
                const analisis2 = analizarEspectro(emisor2, parametros, 'Espectro Emisor 2');
                
                // 3. Generar y mostrar resultados
                const htmlResultados = generarHTMLResultados(analisis1, analisis2);
                document.getElementById('resultado').innerHTML = htmlResultados;
                
                // Scroll suave a resultados
                document.getElementById('resultado').scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
                
                console.log('Cálculo completado exitosamente');
                console.log('Emisor 1:', analisis1.resumen.nivelGlobalDBA.toFixed(1), 'dBA');
                console.log('Emisor 2:', analisis2.resumen.nivelGlobalDBA.toFixed(1), 'dBA');
                
            } catch (error) {
                console.error('Error en cálculo:', error);
                document.getElementById('resultado').innerHTML = `
                    <div class="error">
                        ⚠️ Error en el cálculo: ${error.message}
                        <br><small>Revisa que todos los valores sean números válidos en los rangos permitidos.</small>
                    </div>
                `;
            } finally {
                toggleLoading(false);
            }
        }, 100);
        
    } catch (error) {
        toggleLoading(false);
        console.error('Error inicial:', error);
        document.getElementById('resultado').innerHTML = `
            <div class="error">
                ⚠️ Error: ${error.message}
            </div>
        `;
    }
}

// ========================= FUNCIONES AUXILIARES =========================

/**
 * Limpia todos los resultados
 */
function limpiarResultados() {
    document.getElementById('resultado').innerHTML = '';
    console.log('Resultados limpiados');
}

/**
 * Exporta los resultados a PDF (funcionalidad básica)
 */
function exportarResultados() {
    const contenido = document.getElementById('resultado').innerHTML;
    
    if (!contenido.trim()) {
        alert('No hay resultados para exportar. Primero realiza un cálculo.');
        return;
    }
    
    // Crear ventana de impresión
    const ventanaImpresion = window.open('', '_blank');
    ventanaImpresion.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Reporte de Aislamiento Acústico</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 20px; }
                table { width: 100%; border-collapse: collapse; margin: 10px 0; }
                th, td { border: 1px solid #ccc; padding: 8px; text-align: center; }
                th { background: #f5f5f5; }
                .total { background: #e8f5e8; padding: 10px; margin: 10px 0; font-weight: bold; }
                .formula { background: #f9f9f9; padding: 10px; margin: 10px 0; font-family: monospace; }
                .error { display: none; }
                h1 { color: #2563eb; }
                h3 { color: #1e40af; margin-top: 30px; }
            </style>
        </head>
        <body>
            <h1>📊 Reporte de Aislamiento Acústico</h1>
            <p><strong>Fecha:</strong> ${new Date().toLocaleDateString('es-ES')}</p>
            <p><strong>Hora:</strong> ${new Date().toLocaleTimeString('es-ES')}</p>
            ${contenido}
        </body>
        </html>
    `);
    
    ventanaImpresion.document.close();
    ventanaImpresion.print();
    
    console.log('Exportación a PDF iniciada');
}

/**
 * Valida inputs en tiempo real
 */
function configurarValidacionTiempoReal() {
    // Validar inputs de espectros
    FRECUENCIAS_ARRAY.forEach(freq => {
        ['emisor1', 'emisor2'].forEach(emisor => {
            const input = document.getElementById(`${emisor}-${freq}`);
            if (input) {
                input.addEventListener('input', function() {
                    const valor = parseFloat(this.value);
                    if (isNaN(valor) || valor < 0 || valor > 150) {
                        this.classList.add('error');
                    } else {
                        this.classList.remove('error');
                    }
                });
            }
        });
    });
    
    // Validar parámetros de construcción
    const parametros = ['masa-pared', 'masa-puerta', 'superficie-pared', 'superficie-puerta'];
    parametros.forEach(param => {
        const input = document.getElementById(param);
        if (input) {
            input.addEventListener('input', function() {
                const valor = parseFloat(this.value);
                let esValido = !isNaN(valor) && valor > 0;
                
                if (param.includes('masa') && valor > 1000) esValido = false;
                if (param.includes('superficie') && valor > 1000) esValido = false;
                
                if (esValido) {
                    this.classList.remove('error');
                } else {
                    this.classList.add('error');
                }
            });
        }
    });
}

// ========================= INICIALIZACIÓN =========================

/**
 * Inicialización cuando se carga la página
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('🔊 Calculadora de Aislamiento Acústico cargada');
    console.log('📋 Fórmulas implementadas: Ley de la Masa, Aislamiento Global, Ponderación A');
    
    // Configurar validación en tiempo real
    configurarValidacionTiempoReal();
    
    // Event listeners para teclas
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === 'Enter') {
            calcularAislamientoCompleto();
        }
    });
    
    console.log('✅ Sistema inicializado correctamente');
    console.log('💡 Tip: Usa Ctrl+Enter para calcular rápidamente');
});