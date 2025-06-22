# 🔊 Calculadora de Aislamiento Acústico

Una calculadora web automatizada para el análisis de aislamiento acústico en paredes compuestas, implementando las fórmulas estándar de acústica arquitectónica según normativas técnicas internacionales.

## 🎯 Características Principales

### Cálculos Automatizados
- **Ley de la Masa**: `R = 20log(M) + 20log(f) - 43`
- **Aislamiento Global**: `R_g = 10log(S_total / Σ(S_i × 10^(-R_i/10)))`
- **Nivel Global Ponderado A**: `LAeq = 10log(Σ(10^(LAi/10)))`
- **Ponderación A** según normativa UNE-EN ISO 61672-1

### Interfaz Intuitiva
- 📊 Tablas editables para espectros de emisión
- 🏗️ Parámetros de construcción personalizables
- 📱 Diseño responsive para todos los dispositivos
- ⚡ Validación en tiempo real
- 📄 Exportación a PDF

## 🚀 Instalación en GitHub Pages

### Paso 1: Crear Repositorio
1. Entra en [GitHub](https://github.com) y crea un nuevo repositorio
2. Nombre recomendado: `calculadora-acustica`
3. Marca como **público**

### Paso 2: Subir Archivos
1. Descarga todos los archivos de esta calculadora:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
   - `.nojekyll`

2. En tu repositorio de GitHub:
   - Haz clic en "Upload files"
   - Arrastra y suelta todos los archivos
   - Escribe mensaje de commit: "Calculadora de aislamiento acústico v1.0"
   - Haz clic en "Commit changes"

### Paso 3: Activar GitHub Pages
1. Ve a **Settings** > **Pages**
2. En **Source** selecciona "Deploy from a branch"
3. Selecciona rama **main** y carpeta **/ (root)**
4. Haz clic en **Save**

### Paso 4: Acceder a tu Calculadora
Tu calculadora estará disponible en:
```
https://TU-USUARIO.github.io/calculadora-acustica/
```

⏱️ **Tiempo de espera**: 5-10 minutos para el primer despliegue.

## 📊 Casos de Uso

### Espectros de Emisión Variables
Los usuarios pueden modificar los niveles de emisión en las 7 bandas de frecuencia estándar:
- 63 Hz, 125 Hz, 250 Hz, 500 Hz
- 1000 Hz, 2000 Hz, 4000 Hz

### Parámetros de Construcción Editables
- **Masa de pared**: 10 - 1000 kg/m²
- **Masa de puerta**: 1 - 200 kg/m²  
- **Superficies**: Configurables según proyecto

### Resultados Esperados
Con los valores por defecto del ejercicio de referencia:
- **Espectro Emisor 1**: 39.3 dBA
- **Espectro Emisor 2**: 35.6 dBA

## 🔧 Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Diseño moderno con CSS Grid y Flexbox
- **JavaScript ES6**: Lógica de cálculo sin dependencias externas
- **GitHub Pages**: Hosting gratuito y confiable

## 📱 Compatibilidad

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Dispositivos móviles iOS/Android
- ✅ Tablets y pantallas grandes

## 🎓 Fundamentos Técnicos

### Fórmulas Implementadas

#### 1. Ley de la Masa (Elements Simples)
```
R = 20 × log₁₀(M) + 20 × log₁₀(f) - 43
```
- **R**: Aislamiento acústico (dB)
- **M**: Masa superficial (kg/m²)
- **f**: Frecuencia (Hz)

#### 2. Aislamiento Global (Elementos Compuestos)
```
R_global = 10 × log₁₀(S_total / Σ(S_i × 10^(-R_i/10)))
```
- **S_total**: Superficie total (m²)
- **S_i**: Superficie del elemento i (m²)
- **R_i**: Aislamiento del elemento i (dB)

#### 3. Nivel Global Ponderado A
```
LAeq = 10 × log₁₀(Σ(10^(LAi/10)))
```
- **LAi**: Nivel ponderado A por frecuencia (dBA)

### Valores de Ponderación A
Según norma UNE-EN ISO 61672-1:

| Frecuencia | Ponderación A |
|------------|---------------|
| 63 Hz      | -26 dB        |
| 125 Hz     | -16 dB        |
| 250 Hz     | -9 dB         |
| 500 Hz     | -3 dB         |
| 1000 Hz    | 0 dB          |
| 2000 Hz    | +1 dB         |
| 4000 Hz    | +1 dB         |

## 🛠️ Personalización

### Modificar Parámetros por Defecto
Edita el archivo `script.js` en las líneas de constantes:

```javascript
// Valores por defecto
const PARAMETROS_DEFAULT = {
    masaPared: 200,      // kg/m²
    masaPuerta: 10,      // kg/m²
    superficiePared: 35.02,  // m²
    superficiePuerta: 4.98   // m²
};
```

### Cambiar Esquema de Colores
Modifica las variables CSS en `styles.css`:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    --accent-color: #f59e0b;
    /* ... más variables */
}
```

## 🐛 Solución de Problemas

### Página en Blanco
1. Verifica que el archivo `index.html` esté en la raíz del repositorio
2. Asegúrate de que GitHub Pages esté activado
3. Comprueba que el archivo `.nojekyll` esté presente

### Errores de Cálculo
1. Verifica que todos los valores sean números válidos
2. Revisa los rangos permitidos para cada parámetro
3. Abre la consola del navegador (F12) para ver errores detallados

### Problemas de Estilo
1. Asegúrate de que `styles.css` esté en la misma carpeta que `index.html`
2. Verifica que no haya errores de sintaxis CSS
3. Limpia la caché del navegador (Ctrl+F5)

## 📈 Validación de Resultados

Los cálculos han sido validados contra:
- ✅ Ejercicios de referencia académica
- ✅ Normativas UNE-EN ISO 61672-1
- ✅ Software profesional de acústica
- ✅ Cálculos manuales verificados

## 🤝 Contribuciones

Si encuentras errores o tienes sugerencias:
1. Crea un **Issue** en el repositorio
2. Describe el problema detalladamente
3. Incluye capturas de pantalla si es necesario

## 📄 Licencia

Este proyecto es de dominio público y puede ser utilizado libremente para:
- 🎓 Fines educativos
- 🏢 Consultorías profesionales
- 🔬 Investigación académica
- 🏗️ Proyectos de construcción

## 📚 Referencias

- UNE-EN ISO 61672-1: Electroacústica. Sonómetros
- UNE-EN ISO 140: Acústica. Medición del aislamiento acústico
- CTE DB-HR: Código Técnico de la Edificación (España)
- ASHRAE Handbook: HVAC Applications

## 🔄 Historial de Versiones

### v1.0.0 (Actual)
- ✅ Implementación completa de fórmulas acústicas
- ✅ Interfaz responsive
- ✅ Validación en tiempo real
- ✅ Exportación a PDF
- ✅ Compatibilidad móvil

---

**Desarrollado para la comunidad de acústica arquitectónica** 🏗️🔊