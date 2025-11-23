# 🌬️ NAFAS - Air Quality Monitoring Platform

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite)](https://vitejs.dev/)

> **Breaking the silence on air pollution in North Africa**

NAFAS is a comprehensive air quality monitoring platform designed to make pollution visible and actionable for municipalities, industrial facilities, and citizens across North Africa. Built to address the critical lack of environmental data in industrial zones, NAFAS combines low-cost IoT sensors with powerful visualization and analytics.

---

## 🎯 Mission

For 50 years, cities like Gabes have breathed toxic air in silence. NAFAS provides the infrastructure North Africa needs to:

- 🏛️ **Municipalities** - Plan smarter with real-time environmental data
- 🏭 **Factories** - Prove compliance and meet EU regulations
- 👨‍👩‍👧‍👦 **Families** - Protect communities with actionable alerts

---

## ✨ Features

### 🗺️ Real-Time Monitoring
- Live pollution heatmaps with geographic visualization
- Multi-pollutant tracking (PM2.5, PM10, SO₂, Fluoride)
- Historical trend analysis and forecasting

### 📊 Interactive Dashboard
- Beautiful, modern UI with dark mode support
- Real-time data updates
- Customizable alerts and notifications
- Multi-language support (Arabic, French, English)

### 📱 Citizen Engagement
- SMS alerts for air quality events
- Public API for transparency
- Educational resources about air quality

### 🏢 Enterprise Features
- Municipal dashboards with ANPE reporting integration
- Industrial compliance monitoring
- CSV export for regulatory submissions
- Multi-zone management

---

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm
- Modern web browser

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/nafas.git
cd NAFAS

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm preview
```

---

## 🛠️ Technology Stack

### Frontend
- **React 19.2** - Modern UI framework
- **Vite** - Lightning-fast build tool
- **Framer Motion** - Smooth animations
- **Leaflet** - Interactive maps
- **Chart.js** - Data visualization
- **Lucide React** - Beautiful icons

### Styling
- CSS Modules for scoped styling
- Custom design system with glassmorphism
- Responsive design for all devices

---

## 📁 Project Structure

```
NAFAS/
├── public/              # Static assets
│   ├── nafas_logo.png
│   ├── nafas_pitch_deck.html
│   └── nafas_bmc.html
├── src/
│   ├── components/      # React components
│   ├── data/           # Mock data and configurations
│   ├── assets/         # Images and media
│   ├── App.jsx         # Main application component
│   ├── App.css         # Global styles
│   └── main.jsx        # Application entry point
├── dist/               # Production build output
└── package.json        # Project dependencies
```

---

## 🎨 Component Architecture

The application is built with reusable, modular components:

- **Dashboard** - Main air quality overview
- **Map** - Interactive pollution heatmap
- **Charts** - Time-series data visualization
- **Alerts** - Real-time notifications
- **Settings** - User preferences and configuration

---

## 🌍 Use Cases

### Municipal Applications
- Urban planning and zoning decisions
- Environmental compliance reporting
- Public health monitoring
- Community engagement

### Industrial Applications
- EU Carbon Border Adjustment documentation
- Emissions monitoring and reporting
- Environmental impact assessments
- Compliance verification

### Citizen Applications
- Daily air quality awareness
- Health risk alerts
- Educational resources
- Community advocacy

---

## 📊 Business Model

### Revenue Streams

1. **Municipalities** - 15,000 TND/year for 50km² network
2. **Industrial Clients** - 25,000 TND installation + 5,000 TND annual service
3. **Data Licensing** - API access for researchers and NGOs
4. **Citizens** - Free basic access with premium features

---

## 🔬 Technical Innovation

### What Makes NAFAS Unique

1. **Localization** - First Arabic-French air quality platform with SMS alerts
2. **Industrial Compounds** - Tracks fluoride, phosphate dust, SO₂ specific to North African industrial zones
3. **Cost-Effective** - 60 TND build cost vs $300 USD competitor retail price
4. **Partner-Led Distribution** - Leverages NGO networks to reduce customer acquisition costs

### Hardware (Sensor Network)
- Plantower PMS5003 (PM2.5/PM10)
- Alphasense SO2-B4 (Sulfur Dioxide)
- Honeywell HF-3 (Fluoride Gas)
- ESP32 microcontroller
- 4G connectivity
- Solar-powered with battery backup

---

## 🚦 Development

### Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Lint code
npm run lint

# Preview production build
npm preview
```

### Code Quality

The project uses ESLint with React-specific rules to maintain code quality and consistency.

---

## 📈 Roadmap

### Phase 1: Gabes Pilot (Current)
- [ ] Deploy 18 sensors across Gabes
- [ ] Secure municipal contract
- [ ] Validate sensor calibration with Dr. Salah Hamdi
- [ ] Launch public dashboard

### Phase 2: Regional Expansion
- [ ] Expand to Sfax and Gafsa
- [ ] Onboard 2-3 industrial clients
- [ ] Launch mobile app
- [ ] Integrate ANPE reporting

### Phase 3: North Africa Scale
- [ ] Expand to Algeria, Libya, Morocco
- [ ] 100+ cities coverage
- [ ] Government partnerships
- [ ] Open data initiative

---

## 👥 Team

**Core Team**
- Oussama - Co-founder, Technical Lead
- Aziz - Co-founder, Business Development

**Advisors**
- Dr. Salah Hamdi - Technical Advisor, Gabes University
- Former ANPE Deputy - Regulatory Advisor

---

## 🤝 Contributing

We welcome contributions from the community! Whether it's:

- 🐛 Bug reports
- 💡 Feature suggestions
- 📝 Documentation improvements
- 🔧 Code contributions

Please feel free to open an issue or submit a pull request.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact

- **Website**: [Coming Soon]
- **Email**: contact@nafas.tn
- **LinkedIn**: [Team Sabkha](https://linkedin.com)

---

## 🙏 Acknowledgments

- Tunisian Association for Environmental Protection (TAEP)
- Gabes Municipality Environmental Department
- All the communities breathing toxic air in silence

---

## 📚 Additional Resources

- [Pitch Deck](public/nafas_pitch_deck.html)
- [Business Model Canvas](public/nafas_bmc.html)
- [Pitch Scripts](nafas_pitch_scripts.md)
- [Deployment Guide](DEPLOYMENT.md)

---

<div align="center">
  <strong>Profitable Transparency. Regional Impact.</strong>
  <br><br>
  Made with ❤️ by Team Sabkha
</div>
