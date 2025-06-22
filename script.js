// script.js - Calculadora de Aislamiento Acústico

// Constantes globales
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

// Parámetros fijos de la construcción
const PARAMETROS = {
    masaPared: 200,        // kg/m²
    masaPuerta: 10,        // kg/m²
    superficiePared: 35.02, // m²
    superficiePuerta: 4.98, // m²
    superficieTotal: 40     // m²
};

/**
 * Función principal para calcular el aislamiento completo
 */
function calcularAislamientoCompleto() {
    try {
        // Mostrar loading
        mostrarLoading(true);
        
        // Simular delay para mejor UX
        setTimeout(() => {
            try {
                // 1. Obtener datos de entrada
                const emisor1 = obtenerEspectro('emisor1');
                const emisor2 = obtenerEspectro('emisor2');
                
                // 2. Calcular aislamiento y resultados
                const resultado1 = calcularNivelGlobalCompleto(emisor1, 'Emisor 1');
                const resultado2 = calcularNivelGlobalCompleto(emisor2, 'Emisor 2');
                
                // 3. Mostrar resultados
                mostrarResultadosCompletos(resultado1, resultado2);
                
                // 4. Ocultar loading
                mostrarLoading(false);
                
            } catch (error) {
                mostrarLoading(false);
                mostrarError(error.message);
            }
        }, 500);
        
    } catch (error) {
        mostrarLoading(false);
        mostrarError(error.message);
    }
}

/**
 * Obtener espectro desde los inputs del formulario
 */
function obtenerEspectro(emisor) {
    const espectro = {};
    
    FRECUENCIAS.forEach(freq => {
        const elemento = document.getElementById(`${emisor}-${freq}`);
        if (!elemento) {
            throw new Error(`Elemento ${emisor}-${freq} no encontrado`);
        }
        
        const valor = parseFloat(elemento.value);
        if (isNaN(valor)) {
            throw new Error(`Valor inválido en ${emisor} - ${freq} Hz`);
        }
        
        espectro[freq] = valor;
    });
    
    return espectro;
}

/**
 * Calcular el nivel global completo con análisis detallado
 */
function calcularNivelGlobalCompleto(espectro, nombreEmisor) {
    let sumaEnergia = 0;
    const analisisDetallado = [];
    
    FRECUENCIAS.forEach(freq => {
        // PASO 1: Calcular aislamiento usando ley de la masa
        // R = 20*log(M) + 20*log(f) - 43
        const rPared = 20 * Math.log10(PARAMETROS.masaPared) + 20 * Math.log10(FRECUENCIAS_HZ[freq]) - 43;
        const rPuerta = 20 * Math.log10(PARAMETROS.masaPuerta) + 20 * Math.log10(FRECUENCIAS_HZ[freq]) - 43;
        
        // PASO 2: Calcular aislamiento global
        // R_g = 10*log(S_total / (S1*10^(-R1/10) + S2*10^(-R2/10)))
        const denominador = PARAMETROS.superficiePared * Math.pow(10, -rPared/10) + 
                           PARAMETROS.superficiePuerta * Math.pow(10, -rPuerta/10);
        const rGlobal = 10 * Math.log10(PARAMETROS.superficieTotal / denominador);
        
        // PASO 3: Calcular nivel receptor
        // Nivel_receptor = Nivel_emisor - R_global
        const nivelReceptor = espectro[freq] - rGlobal;
        
        // PASO 4: Aplicar ponderación A
        // Nivel_receptor_A = Nivel_receptor + Ponderacion_A
        const nivelReceptorA = nivelReceptor + PONDERACION_A[freq];
        
        // PASO 5: Suma energética para nivel global
        // 10^(Nivel_receptor_A/10)
        sumaEnergia += Math.pow(10, nivelReceptorA / 10);
        
        // Guardar análisis detallado
        analisisDetallado.push({
            frecuencia: FRECUENCIAS_HZ[freq],
            rPared: rPared,
            rPuerta: rPuerta,
            rGlobal: rGlobal,
            nivelEmisor: espectro[freq],
            nivelReceptor: nivelReceptor,
            ponderacionA: PONDERACION_A[freq],
            nivelReceptorA: nivelReceptorA
        });
    });
    
    // PASO 6: Nivel global ponderado A final
    // LAeq = 10*log10(suma_energia)
    const nivelGlobalDBA = 10 * Math.log10(sumaEnergia);
    
    return {
        nombreEmisor: nombreEmisor,
        analisisDetallado: analisisDetallado,
        nivelGlobal: nivelGlobalDBA,
        formula: "LAeq = 10·log(Σ(10^(LAᵢ/10)))"
    };
}

/**
 * Mostrar resultados completos en formato tabla
 */
function mostrarResultadosCompletos(resultado1, resultado2) {
    const contenidoHTML = `
        <div class="resultado">
            <h3>🔊 ${resultado1.nombreEmisor}</h3>
            <h4>📊 Análisis por Frecuencia</h4>
            ${generarTablaAnalisis(resultado1.analisisDetallado)}
            <div class="resultado-final">
                <h4>🎯 Resultado Final</h4>
                <div class="valor">${resultado1.nivelGlobal.toFixed(1)} dBA</div>
                <div class="formula-aplicada">
                    <strong>Fórmula:</strong> ${resultado1.formula}
                </div>
            </div>
        </div>
        
        <div class="resultado">
            <h3>🔊 ${resultado2.nombreEmisor}</h3>
            <h4>📊 Análisis por Frecuencia</h4>
            ${generarTablaAnalisis(resultado2.analisisDetallado)}
            <div class="resultado-final">
                <h4>🎯 Resultado Final</h4>
                <div class="valor">${resultado2.nivelGlobal.toFixed(1)} dBA</div>
                <div class="formula-aplicada">
                    <strong>Fórmula:</strong> ${resultado2.formula}
                </div>
            </div>
        </div>
        
        <div class="resumen-comparativo">
            <h3>📈 Resumen Comparativo</h3>
            <div class="comparativo-grid">
                <div class="comparativo-item">
                    <span class="label">${resultado1.nombreEmisor}:</span>
                    <span class="valor">${resultado1.nivelGlobal.toFixed(1)} dBA</span>
                </div>
                <div class="comparativo-item">
                    <span class="label">${resultado2.nombreEmisor}:</span>
                    <span class="valor">${resultado2.nivelGlobal.toFixed(1)} dBA</span>
                </div>
                <div class="comparativo-item diferencia">
                    <span class="label">Diferencia:</span>
                    <span class="valor">${Math.abs(resultado1.nivelGlobal - resultado2.nivelGlobal).toFixed(1)} dB</span>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('resultado').innerHTML = contenidoHTML;
    
    // Scroll suave hacia los resultados
    document.getElementById('resultado').scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
    });
}

/**
 * Generar tabla HTML con análisis detallado
 */
function generarTablaAnalisis(analisis) {
    let tablaHTML = `
        <table class="analisis-tabla">
            <thead>
                <tr>
                    <th>Freq<br/>(Hz)</th>
                    <th>R Pared<br/>(dB)</th>
                    <th>R Puerta<br/>(dB)</th>
                    <th>R Global<br/>(dB)</th>
                    <th>Nivel Emisor<br/>(dB)</th>
                    <th>Nivel Receptor<br/>(dB)</th>
                    <th>Pond. A<br/>(dB)</th>
                    <th>Nivel Receptor A<br/>(dB)</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    analisis.forEach(fila => {
        tablaHTML += `
            <tr>
                <td><strong>${fila.frecuencia}</strong></td>
                <td>${fila.rPared.toFixed(1)}</td>
                <td>${fila.rPuerta.toFixed(1)}</td>
                <td>${fila.rGlobal.toFixed(1)}</td>
                <td>${fila.nivelEmisor.toFixed(1)}</td>
                <td>${fila.nivelReceptor.toFixed(1)}</td>
                <td>${fila.ponderacionA}</td>
                <td><strong>${fila.nivelReceptorA.toFixed(1)}</strong></td>
            </tr>
        `;
    });
    
    tablaHTML += `
            </tbody>
        </table>
    `;
    
    return tablaHTML;
}

/**
 * Mostrar/ocultar loading
 */
function mostrarLoading(mostrar) {
    const loadingElement = document.getElementById('loading');
    if (mostrar) {
        loadingElement.classList.remove('hidden');
    } else {
        loadingElement.classList.add('hidden');
    }
}

/**
 * Mostrar error
 */
function mostrarError(mensaje) {
    const contenidoHTML = `
        <div class="error">
            ⚠️ Error: ${mensaje}
        </div>
    `;
    document.getElementById('resultado').innerHTML = contenidoHTML;
}

/**
 * Limpiar todos los resultados
 */
function limpiarResultados() {
    document.getElementById('resultado').innerHTML = '';
    mostrarLoading(false);
    
    // Scroll suave hacia arriba
    window.scrollTo({ 
        top: 0, 
        behavior: 'smooth' 
    });
}

/**
 * Funciones de validación y utilidades
 */
function validarInputNumerico(input) {
    const valor = parseFloat(input.value);
    if (isNaN(valor) || valor < 0) {
        input.style.borderColor = '#e74c3c';
        return false;
    } else {
        input.style.borderColor = '#27ae60';
        return true;
    }
}

/**
 * Inicialización al cargar la página
 */
document.addEventListener('DOMContentLoaded', function() {
    // Añadir validación en tiempo real a todos los inputs
    const inputs = document.querySelectorAll('input[type="number"]');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            validarInputNumerico(this);
        });
        
        input.addEventListener('focus', function() {
            this.style.borderColor = '#3498db';
        });
        
        input.addEventListener('blur', function() {
            if (this.value) {
                validarInputNumerico(this);
            } else {
                this.style.borderColor = '#bdc3c7';
            }
        });
    });
    
    // Añadir atajo de teclado para calcular (Enter)
    document.addEventListener('keypress', function(event) {
        if (event.key === 'Enter' && event.ctrlKey) {
            calcularAislamientoCompleto();
        }
    });
    
    console.log('🔊 Calculadora de Aislamiento Acústico cargada correctamente');
    console.log('💡 Usa Ctrl + Enter para calcular rápidamente');
});

/**
 * Función para exportar resultados (futura implementación)
 */
function exportarResultados() {
    // Funcionalidad futura para exportar a PDF o Excel
    console.log('Función de exportación en desarrollo...');
}

// Añadir estilos adicionales para el resumen comparativo
const estilosAdicionales = `
    <style>
        .resumen-comparativo {
            background: linear-gradient(135deg, #f39c12, #e67e22);
            color: white;
            padding: 25px;
            border-radius: 10px;
            margin-top: 25px;
            box-shadow: 0 5px 15px rgba(243, 156, 18, 0.3);
        }
        
        .resumen-comparativo h3 {
            text-align: center;
            margin-bottom: 20px;
            font-size: 1.4rem;
        }
        
        .comparativo-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
        }
        
        .comparativo-item {
            background: rgba(255,255,255,0.2);
            padding: 15px;
            border-radius: 8px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .comparativo-item.diferencia {
            background: rgba(255,255,255,0.3);
            border: 2px solid rgba(255,255,255,0.5);
        }
        
        .comparativo-item .label {
            font-weight: 600;
        }
        
        .comparativo-item .valor {
            font-size: 1.2rem;
            font-weight: 700;
        }
        
        @media (max-width: 768px) {
            .comparativo-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
`;

// Inyectar estilos adicionales
document.head.insertAdjacentHTML('beforeend', estilosAdicionales);