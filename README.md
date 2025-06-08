# Eurocode 5 Wood Connection Calculator

A comprehensive web application for calculating wood structural connections according to **EN 1995-1-1 (Eurocode 5)**. This tool provides accurate calculations for tirefonds/screws, nails, and bolts commonly used in timber construction.

![Wood Connection Calculator](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![Eurocode 5](https://img.shields.io/badge/Standard-EN%201995--1--1-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## 🚀 Features

### Connection Types Supported
- **Tirefonds/Screws**: Complete analysis including withdrawal capacity and rope effect
- **Nails**: Single and double shear calculations with slip verification  
- **Bolts**: Bearing, shear, and tension resistance according to EC5

### Advanced Calculations
- **Bearing strength** calculation for all wood types (solid wood, glulam, LVL)
- **Withdrawal capacity** for angled and perpendicular fasteners
- **Rope effect** consideration for improved connection efficiency
- **Spacing requirements** verification with automatic compliance checking
- **Load combinations** (ELS/ELU) with proper safety factors

### Professional Features
- **Real-time calculations** as you type
- **Color-coded compliance** indicators (Green=OK, Red=Non-compliant)
- **Comprehensive reference tables** embedded in the application
- **Project save/load** functionality
- **Export capabilities** for documentation
- **Mobile-responsive** design for field use

## 🏗️ Quick Start

### Option 1: GitHub Pages (Recommended)
1. Fork this repository
2. Enable GitHub Pages in repository settings
3. Select `main` branch as source
4. Access your calculator at `https://yourusername.github.io/eurocode5-wood-calculator`

### Option 2: Local Development
```bash
# Clone the repository
git clone https://github.com/yourusername/eurocode5-wood-calculator.git
cd eurocode5-wood-calculator

# Serve locally (Python 3)
python -m http.server 8000

# Or with Node.js
npx serve .

# Open http://localhost:8000
```

## 📊 Supported Wood Classes

### Solid Wood
- **Softwood**: C14, C16, C18, C22, C24, C27
- **Hardwood**: D30, D35, D40, D50, D60, D70

### Engineered Wood
- **Glulam**: GL20, GL22, GL24, GL24h, GL26, GL28, GL30, GL32
- **LVL**: Various densities and strength classes

## 🔧 Technical Implementation

### Calculation Engine
The application implements all relevant Eurocode 5 formulas:

```javascript
// Bearing strength (§8.5.1.1)
fh_k = 0.082 * ρk * d^(-0.3)

// Withdrawal capacity (§8.7.2)  
fax_k = 0.52 * d^(-0.5) * ρk^0.8

// Rope effect (§8.7.1(3))
Rope = min(0.25*Fax_Rk, 0.5*Fv_Rk) * sin(α)
```

### Architecture
- **Frontend**: Pure HTML5, CSS3, JavaScript (ES6+)
- **No dependencies**: Runs entirely in the browser
- **Responsive design**: Works on desktop, tablet, and mobile
- **Progressive Web App** ready

## 📝 Usage Examples

### Example 1: Tirefond Connection
```
Wood Class: GL24h
Screw Diameter: 8.0 mm
Length: 120 mm
Angle: 45°
Applied Force: 5.2 kN
→ Result: Connection is COMPLIANT
```

### Example 2: Nail Connection  
```
Wood Class: C24
Nail Diameter: 3.1 mm
Length: 70 mm
Penetration: 45 mm
→ Result: Adequate penetration, capacity: 0.8 kN
```

## 🏭 Improvements Over Original Excel

| Feature | Original Excel | Web Application |
|---------|---------------|-----------------|
| User Interface | Complex spreadsheet | Intuitive tabs and forms |
| Error Handling | #REF! errors | Real-time validation |
| Mobility | Desktop only | Mobile responsive |
| Collaboration | File sharing issues | Web-based sharing |
| Updates | Manual download | Instant access |
| Documentation | Separate files | Integrated help |
| Calculations | Manual refresh | Real-time updates |

## 📚 Reference Standards

This calculator implements calculations according to:
- **EN 1995-1-1:2004** - Eurocode 5: Design of timber structures
- **EN 14592** - Timber fasteners
- **EN 383** - Timber fasteners - Determination of withdrawal capacity

## 🤝 Contributing

We welcome contributions! Please read our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Setup
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test thoroughly with various input combinations
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Based on the original Excel calculation sheet by structural engineering professionals
- Eurocode 5 specifications and examples
- Timber construction industry best practices
- Open source community feedback and contributions

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/eurocode5-wood-calculator/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/eurocode5-wood-calculator/discussions)
- **Documentation**: [Wiki](https://github.com/yourusername/eurocode5-wood-calculator/wiki)

---

**⚠️ Disclaimer**: This tool is for preliminary design purposes. All calculations should be verified by a qualified structural engineer before implementation in actual construction projects.