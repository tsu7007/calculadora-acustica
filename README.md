# Calculadora de Aislamiento Acústico

## 📋 Descripción
Calculadora web automatizada para el análisis de aislamiento acústico en paredes compuestas. Implementa las fórmulas normalizadas para calcular el aislamiento global y el nivel global ponderado A (dBA).

## 🚀 Instalación en GitHub Pages

### Paso 1: Crear repositorio en GitHub
1. Entra en [GitHub](https://github.com) y crea un nuevo repositorio
2. Nombre sugerido: `calculadora-acustica`
3. Marca como **Public**
4. Haz clic en **Create repository**

### Paso 2: Subir archivos
1. En tu repositorio, haz clic en **Add file > Upload files**
2. Arrastra y suelta estos archivos:
   - `index.html`
   - `styles.css` 
   - `script.js`
   - `README.md` (este archivo)
3. Haz clic en **Commit changes**

### Paso 3: Activar GitHub Pages
1. Ve a **Settings** > **Pages** (en el menú lateral)
2. En **Source**, selecciona **Deploy from a branch**
3. Selecciona **main** y **/ (root)**
4. Haz clic en **Save**

### Paso 4: Acceder a tu calculadora
En 5-10 minutos, tu calculadora estará disponible en:
```
https://TU-USUARIO.github.io/calculadora-acustica/
```

## 🧮 Funcionalidades

### Cálculos Implementados
- **Ley de la Masa**: `R = 20·log(M) + 20·log(f) - 43`
- **Aislamiento Global**: `R_g = 10·log(S_total / (S₁·10^(-R₁/10) + S₂·10^(-R₂/10)))`
- **Nivel Global Ponderado A**: `LAeq = 10·log(Σ(10^(LAᵢ/10)))`

### Características
- ✅ Interfaz responsive y moderna
- ✅ Validación en tiempo real de datos
- ✅ Cálculos automáticos con fórmulas visibles
- ✅ Análisis detallado por frecuencias
- ✅ Comparativa entre espectros de emisión
- ✅ Resultados en formato tabla profesional

## 📊 Datos de Entrada

### Parámetros Fijos de la Construcción
- **Dimensiones pared**: 10m × 4m = 40m²
- **Dimensiones puerta**: 3m × 1.66m = 4.98m²
- **Superficie pared**: 35.02m²
- **Masa pared**: 200 kg/m²
- **Masa puerta**: 10 kg/m²

### Espectros Variables
Los usuarios pueden modificar los niveles de emisión en 7 bandas de frecuencia:
- 63 Hz, 125 Hz, 250 Hz, 500 Hz, 1000 Hz, 2000 Hz, 4000 Hz

### Ponderación A (Valores Fijos)
| Frecuencia | Ponderación A |
|------------|---------------|
| 63 Hz      | -26 dB        |
| 125 Hz     | -16 dB        |
| 250 Hz     | -9 dB         |
| 500 Hz     | -3 dB         |
| 1000 Hz    | 0 dB          |
| 2000 Hz    | +1 dB         |
| 4000 Hz    | +1 dB         |

## 🔧 Personalización

### Modificar Parámetros de Construcción
Para cambiar las dimensiones o masas, edita las constantes en `script.js`:

```javascript
const PARAMETROS = {
    masaPared: 200,        // kg/m² - Cambia aquí
    masaPuerta: 10,        // kg/m² - Cambia aquí
    superficiePared: 35.02, // m² - Cambia aquí
    superficiePuerta: 4.98, // m² - Cambia aquí
    superficieTotal: 40     // m² - Cambia aquí
};
```

### Personalizar Estilos
Los estilos están organizados en `styles.css` con variables CSS para fácil personalización:

```css
:root {
    --color-primary: #3498db;
    --color-success: #27ae60;
    --color-error: #e74c3c;
    /* Cambia estos valores para personalizar colores */
}
```

## 🧪 Validación

### Resultados Esperados (Valores de Referencia)
Con los datos por defecto del ejercicio:

**Espectro Emisor 1**: 39.3 dBA  
**Espectro Emisor 2**: 35.6 dBA

## 🛠️ Tecnologías Utilizadas
- **HTML5**: Estructura semántica
- **CSS3**: Diseño responsive con Flexbox/Grid
- **JavaScript ES6**: Lógica de cálculo y manipulación DOM
- **GitHub Pages**: Hosting gratuito

## 📱 Compatibilidad
- ✅ Chrome, Firefox, Safari, Edge (últimas versiones)
- ✅ Dispositivos móviles y tablets
- ✅ Responsive design

## 🤝 Contribuciones
Para contribuir al proyecto:
1. Fork el repositorio
2. Crea una rama feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Añadir nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia
Este proyecto está bajo la Licencia MIT. Ver archivo `LICENSE` para más detalles.

## 🆘 Soporte
Si encuentras algún problema:
1. Verifica que todos los archivos estén en la raíz del repositorio
2. Asegúrate de que GitHub Pages esté activado
3. Espera 5-10 minutos para que los cambios se reflejen
4. Revisa la consola del navegador (F12) para errores JavaScript

## 📚 Referencias
- Norma UNE-EN ISO 61672-1 (Ponderación A)
- Principios de acústica arquitectónica
- Ley de la masa para materiales de construcción