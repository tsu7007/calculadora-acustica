# 🔊 Calculadora de Aislamiento Acústico v2.0

Una calculadora web profesional para análisis de aislamiento acústico en edificación, desarrollada según normativas técnicas internacionales UNE-EN ISO.

## 🎯 Características Principales

### 📊 Tres Casos de Cálculo Especializados

#### 1. **Fachada Compuesta** 🏢
- Análisis de fachadas con elementos mixtos (pared + ventanas + puertas)
- Cálculo de aislamiento global según UNE-EN 12354
- Consideración de diferentes materiales y superficies
- Espectros de emisión configurables

#### 2. **Pared Compuesta** 🧱
- Sistemas multicapa (doble, triple, sandwich, trasdosado)
- Cálculo de frecuencia de resonancia
- Efectos de cámaras de aire y rellenos
- Correcciones por tipo de sistema constructivo

#### 3. **Personalizado** ⚙️
- Configuración completamente flexible
- Hasta 5 elementos simultáneos
- Múltiples espectros de emisión
- Análisis comparativo avanzado

### 🧮 Fórmulas Técnicas Implementadas

#### Ley de la Masa (Corregida)
```
R = 20·log(M) + 20·log(f) - 47
```
- **R**: Aislamiento acústico (dB)
- **M**: Masa superficial (kg/m²)
- **f**: Frecuencia (Hz)

#### Aislamiento Global
```
R_g = 10·log(S_total / Σ(S_i × 10^(-R_i/10)))
```
- **S_total**: Superficie total (m²)
- **S_i**: Superficie del elemento i
- **R_i**: Aislamiento del elemento i

#### Nivel Global Ponderado A
```
LAeq = 10·log(Σ(10^(LAi/10)))
```
- **LAi**: Nivel ponderado A por frecuencia

#### Frecuencia de Resonancia
```
f0 = 60 × √((1/M1 + 1/M2) / d)
```
- **M1, M2**: Masas de los paneles
- **d**: Distancia entre paneles (m)

### 📋 Valores de Ponderación A (UNE-EN ISO 61672-1)

| Frecuencia | Ponderación A |
|------------|---------------|
| 63 Hz      | -26 dB        |
| 125 Hz     | -16 dB        |
| 250 Hz     | -9 dB         |
| 500 Hz     | -3 dB         |
| 1000 Hz    | 0 dB          |
| 2000 Hz    | +1 dB         |
| 4000 Hz    | +1 dB         |

## 🚀 Instalación en GitHub Pages

### Paso 1: Preparar Repositorio
1. Crea un nuevo repositorio en GitHub
2. Nombre recomendado: `calculadora-acustica-pro`
3. Asegúrate de que sea **público**

### Paso 2: Subir Archivos
Descarga y sube estos 5 archivos esenciales:
- `index.html` - Interfaz principal
- `styles.css` - Estilos modernos y responsive
- `script.js` - Lógica de cálculo completa
- `README.md` - Esta documentación
- `.nojekyll` - Configuración para GitHub Pages

### Paso 3: Activar GitHub Pages
1. Ve a **Settings** > **Pages**
2. En **Source** selecciona "Deploy from a branch"
3. Selecciona rama **main** y carpeta **/ (root)**
4. Haz clic en **Save**

### Paso 4: Acceder a tu Calculadora
Tu calculadora estará disponible en:
```
https://TU-USUARIO.github.io/calculadora-acustica-pro/
```

⏱️ **Tiempo de espera**: 5-10 minutos para el primer despliegue.

## 🛠️ Tecnologías Utilizadas

- **HTML5** semántico con accesibilidad
- **CSS3** moderno con CSS Grid y Flexbox
- **JavaScript ES6+** vanilla (sin dependencias)
- **Design System** profesional con variables CSS
- **Responsive Design** para todos los dispositivos

## 📱 Funcionalidades de la Interfaz

### 🎨 Diseño Simple y Equilibrado
- **Navegación intuitiva** con pestañas visuales
- **Validación en tiempo real** de datos de entrada
- **Feedback visual** inmediato (colores de validación)
- **Animaciones suaves** para mejor experiencia
- **Diseño responsive** para móviles y tablets

### ⚡ Características Técnicas
- **Cálculos instantáneos** con loading indicators
- **Tablas interactivas** para espectros de emisión
- **Resultados detallados** con análisis por frecuencia
- **Exportación** de resultados (en desarrollo)
- **Atajos de teclado** (Ctrl+Enter para calcular)

### 🎛️ Controles Avanzados
- **Elementos dinámicos** en modo personalizado
- **Validación automática** de rangos permitidos
- **Configuración flexible** de parámetros
- **Sistema de errores** descriptivo

## 📊 Casos de Uso Típicos

### 🏗️ Profesionales de la Construcción
- Verificación de cumplimiento CTE DB-HR
- Diseño de soluciones acústicas
- Análisis comparativo de materiales
- Optimización de costes vs. prestaciones

### 🎓 Ámbito Educativo
- Aprendizaje de conceptos acústicos
- Experimentación con parámetros
- Validación de cálculos manuales
- Comprensión de normativas

### 🔬 Investigación y Desarrollo
- Evaluación de nuevos materiales
- Estudios paramétricos
- Desarrollo de productos acústicos
- Validación de modelos teóricos

## 🔧 Personalización y Configuración

### Modificar Valores por Defecto
Edita las constantes en `script.js`:
```javascript
// Valores por defecto para fachada
const DEFAULT_FACHADA = {
    areaTotal: 40,
    areaVentana: 8,
    areaPuerta: 4,
    masaPared: 300,
    masaVentana: 25,
    masaPuerta: 15
};
```

### Cambiar Esquema de Colores
Modifica las variables CSS en `styles.css`:
```css
:root {
    --primary-color: #2563eb;
    --accent-color: #0ea5e9;
    --success-color: #059669;
    /* ... más variables */
}
```

### Agregar Nuevos Materiales
Extiende la base de datos de materiales:
```javascript
const MATERIALES_DB = {
    'hormigon': { densidad: 2400, factor: 1.0 },
    'ladrillo': { densidad: 1800, factor: 0.9 },
    'yeso': { densidad: 1200, factor: 0.8 }
    // Agregar más materiales
};
```

## 📚 Normativas de Referencia

### Normativas Españolas
- **CTE DB-HR**: Protección frente al Ruido
- **UNE-EN 12354**: Cálculo del aislamiento acústico
- **UNE-EN ISO 140**: Medición del aislamiento acústico
- **UNE-EN ISO 717**: Evaluación del aislamiento acústico

### Normativas Internacionales
- **ISO 61672-1**: Sonómetros (Ponderación A)
- **ISO 717-1**: Evaluación del aislamiento a ruido aéreo
- **EN 12354**: Acústica en la edificación
- **ASHRAE**: Handbook HVAC Applications

## 🐛 Solución de Problemas

### Problemas Comunes

#### Página no Carga
1. Verifica que `index.html` esté en la raíz del repositorio
2. Asegúrate de que GitHub Pages esté activado
3. Confirma que el archivo `.nojekyll` esté presente
4. Espera 10-15 minutos para propagación

#### Errores de Cálculo
1. **Valores fuera de rango**: Verifica que las entradas estén en rangos válidos
2. **Campos vacíos**: Asegúrate de completar todos los campos requeridos
3. **Superficies negativas**: El área de pared debe ser positiva
4. **Masas muy bajas**: Verifica que las masas sean realistas (>5 kg/m²)

#### Problemas de Visualización
1. **Tablas deformadas**: Usa zoom del navegador al 100%
2. **Botones no responden**: Abre la consola (F12) para ver errores
3. **Estilos incorrectos**: Limpia caché del navegador (Ctrl+F5)

### Depuración Avanzada
```javascript
// Activar modo debug en consola
window.DEBUG_MODE = true;

// Ver datos de entrada
console.log('Datos fachada:', obtenerDatosFachada());

// Verificar cálculos paso a paso
console.log('Aislamiento 500Hz:', calcularLeyMasa(200, 500));
```

## 📈 Validación de Resultados

### Ejemplos de Verificación

#### Caso Fachada Típica
- **Pared**: 300 kg/m², 28 m²
- **Ventana**: 25 kg/m², 8 m²
- **Puerta**: 15 kg/m², 4 m²
- **Resultado esperado**: ~38-42 dBA

#### Caso Pared Doble
- **Capa 1**: 150 kg/m²
- **Cámara**: 50 mm con lana mineral
- **Capa 2**: 80 kg/m²
- **Resultado esperado**: ~45-50 dBA

## 🤝 Contribuciones y Mejoras

### Reportar Problemas
1. Abre un **Issue** en GitHub
2. Describe el problema detalladamente
3. Incluye datos de entrada y resultado esperado
4. Adjunta capturas de pantalla si es necesario

### Sugerir Mejoras
- Nuevos tipos de cálculo
- Materiales adicionales
- Mejoras de interfaz
- Optimizaciones de rendimiento

## 📄 Licencia y Uso

Este proyecto es de **dominio público** y puede ser utilizado libremente para:
- ✅ Fines educativos y académicos
- ✅ Consultorías y proyectos profesionales
- ✅ Investigación y desarrollo
- ✅ Modificación y redistribución

## 🔄 Historial de Versiones

### v2.0.0 (Actual)
- ✅ Tres casos de cálculo especializados
- ✅ Interfaz moderna y responsive
- ✅ Fórmulas técnicas corregidas según normativas
- ✅ Validación en tiempo real
- ✅ Sistema de elementos dinámicos
- ✅ Resultados detallados con tablas

### v1.0.0 (Anterior)
- ✅ Calculadora básica
- ✅ Cálculos simples de aislamiento
- ✅ Interfaz funcional

---

**Desarrollado para la comunidad técnica de acústica en edificación** 🏗️🔊

*Para soporte técnico o consultas, crear un Issue en el repositorio de GitHub.*