# Contributing to Eurocode 5 Wood Connection Calculator

Thank you for your interest in contributing to this project! This guide will help you get started.

## 🎯 Types of Contributions

We welcome various types of contributions:

### 🐛 Bug Reports
- Calculation errors or incorrect formulas
- User interface issues
- Browser compatibility problems
- Documentation errors

### ✨ Feature Requests
- New connection types (dowels, connector plates, etc.)
- Additional wood classes or standards
- Enhanced user interface features
- Export/import capabilities

### 📝 Documentation
- Code comments and documentation
- User guides and tutorials
- Translation to other languages
- Reference material updates

### 🔧 Code Contributions
- Bug fixes
- New calculation functions
- Performance improvements
- UI/UX enhancements

## 🚀 Getting Started

### Prerequisites
- Basic knowledge of HTML, CSS, and JavaScript
- Understanding of structural engineering principles (helpful but not required)
- Familiarity with Eurocode 5 standards (for calculation-related contributions)

### Development Setup

1. **Fork the Repository**
   ```bash
   # Click "Fork" on GitHub, then clone your fork
   git clone https://github.com/YOUR-USERNAME/eurocode5-wood-calculator.git
   cd eurocode5-wood-calculator
   ```

2. **Create a Development Branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b bugfix/issue-description
   ```

3. **Set Up Local Development**
   ```bash
   # Serve the application locally
   python -m http.server 8000
   # or
   npx serve .
   
   # Open http://localhost:8000 in your browser
   ```

## 📋 Contribution Guidelines

### Code Style
- Use meaningful variable and function names
- Add comments for complex calculations
- Follow existing code formatting patterns
- Include JSDoc comments for new functions

### Calculation Functions
When adding new calculations:
```javascript
/**
 * Calculate bearing strength according to EC5 §8.5.1.1
 * @param {string} woodClass - Wood class (e.g., 'C24', 'GL24h')
 * @param {number} diameter - Fastener diameter in mm
 * @param {boolean} predrilling - Whether pre-drilling is used
 * @returns {number} Bearing strength in N/mm²
 */
function calculateBearingStrength(woodClass, diameter, predrilling = false) {
    // Implementation with clear formula reference
}
```

### Testing
Before submitting:
- Test calculations with known reference values
- Verify UI responsiveness on different screen sizes
- Check browser compatibility (Chrome, Firefox, Safari, Edge)
- Validate input handling and error cases

### Documentation
- Update README.md if adding new features
- Add inline help text for new input fields
- Include reference to relevant Eurocode sections

## 🔍 Submitting Changes

### Pull Request Process

1. **Ensure Quality**
   - Test your changes thoroughly
   - Update documentation as needed
   - Follow the existing code style

2. **Commit Messages**
   ```bash
   # Good commit messages
   git commit -m "Add withdrawal capacity calculation for angled screws"
   git commit -m "Fix bearing strength formula for LVL materials"
   git commit -m "Improve mobile responsiveness of input forms"
   
   # Less helpful messages
   git commit -m "Fix bug"
   git commit -m "Update stuff"
   ```

3. **Create Pull Request**
   - Provide a clear description of changes
   - Reference any related issues
   - Include screenshots for UI changes
   - List any breaking changes

### Pull Request Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement

## Testing
- [ ] Tested calculations with reference values
- [ ] Tested on multiple browsers
- [ ] Tested mobile responsiveness

## Related Issues
Fixes #(issue number)

## Screenshots (if applicable)
```

## 🧮 Calculation Verification

### Reference Sources
When adding calculations, verify against:
- **EN 1995-1-1** (Eurocode 5) official documentation
- Published structural engineering textbooks
- Existing validated calculation software
- Worked examples from engineering literature

### Test Cases
Include test cases for new calculations:
```javascript
// Example test case
const testCase = {
    input: {
        woodClass: 'C24',
        diameter: 6.0,
        length: 100,
        angle: 30
    },
    expectedOutput: {
        bearingStrength: 18.4, // N/mm²
        withdrawalCapacity: 850 // N
    }
};
```

## 🐛 Reporting Issues

### Bug Report Template
```markdown
**Bug Description**
Clear description of the issue

**Steps to Reproduce**
1. Go to '...'
2. Enter values '...'
3. Click on '...'
4. See error

**Expected Behavior**
What should happen

**Screenshots**
If applicable

**Browser/Device**
- Browser: [Chrome 91, Firefox 89, etc.]
- Device: [Desktop, Mobile]
- OS: [Windows 10, macOS, etc.]

**Additional Context**
Any other relevant information
```

## 📚 Resources

### Eurocode 5 References
- [EN 1995-1-1:2004](https://eurocodes.jrc.ec.europa.eu/EN-Eurocodes/eurocode-5-design-timber-structures)
- Timber Engineering textbooks
- National annexes for specific countries

### Development Resources
- [MDN Web Docs](https://developer.mozilla.org/) for HTML/CSS/JS
- [GitHub Guides](https://guides.github.com/) for Git workflow

## 💬 Community

- **GitHub Discussions**: For general questions and feature discussions
- **Issues**: For bug reports and specific problems
- **Pull Requests**: For code contributions

## 🙏 Recognition

Contributors will be acknowledged in:
- README.md contributors section
- Release notes for significant contributions
- GitHub contributors page

Thank you for helping make this tool better for the structural engineering community!

---

**Questions?** Feel free to open an issue or start a discussion. We're here to help!