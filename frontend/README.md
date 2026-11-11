# Elderly Support Organization - Frontend

A modern, responsive Vue.js 3 web application for the Elderly Support Organization (አረጋውያን መርጃ ድርጅት).

## 🚀 Features

- **Modern UI**: Professional, welcoming design with Amharic and English support
- **Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Accessible**: Font size controls, semantic HTML, and proper ARIA labels
- **Performance**: Optimized images, lazy loading, and efficient routing
- **Multi-language Ready**: Prepared for Amharic and English language switching

## 🎨 Design System

### Colors
- Primary Green: `#244B3A`
- Dark Green: `#153D2F`
- Gold: `#D6A85F`
- Cream: `#F8F5EE`
- White: `#FFFFFF`
- Dark Text: `#334155`

### Typography
- Supports Ethiopian Ge'ez characters
- Font family: 'Segoe UI', 'Noto Sans Ethiopic', sans-serif
- Responsive font sizing with accessibility controls

## 📁 Project Structure

```
frontend/
├── public/
│   ├── images/
│   │   ├── hero-banner.png
│   │   ├── home-about-elderly-woman.png
│   │   └── home-events-community.png
│   ├── favicon.ico
│   └── logo.svg
├── src/
│   ├── assets/
│   │   └── styles/
│   │       ├── main.css
│   │       ├── variables.css
│   │       └── responsive.css
│   ├── components/
│   │   ├── common/          # Reusable components
│   │   ├── home/            # Homepage-specific components
│   │   └── layout/          # Layout components
│   ├── views/
│   │   └── public/          # Public-facing pages
│   ├── router/              # Vue Router configuration
│   ├── stores/              # Pinia state management
│   ├── services/            # API service modules
│   ├── composables/         # Vue composition functions
│   └── utils/               # Helper utilities
└── package.json
```

## 🏠 Homepage Sections

1. **Top Information Bar**
   - Organization contact information
   - Language selector (Amharic/English)
   - Font size accessibility controls

2. **Main Navigation**
   - Logo and organization name
   - Navigation links with dropdown menus
   - Donate button
   - Responsive mobile menu

3. **Hero Section**
   - Full-width background image
   - Amharic headline and description
   - Call-to-action buttons
   - Decorative elements

4. **Impact Statistics**
   - 2,500+ elderly supported
   - 800+ living peacefully
   - 300+ partners
   - 50+ events conducted

5. **Our Services**
   - Six service categories
   - Healthcare, Food, Financial, Social, Home Visits, Other
   - Interactive cards with hover effects

6. **About Section**
   - Organization introduction
   - Upcoming events card
   - Image gallery

7. **Donation CTA**
   - Call-to-action for donations
   - Prominent donate button
   - Decorative background

8. **Footer**
   - Quick links
   - Contact information
   - Social media links
   - Copyright information

## 🛠️ Tech Stack

- **Vue 3**: Progressive JavaScript framework
- **Vue Router**: Official router for Vue.js
- **Pinia**: State management
- **Axios**: HTTP client for API calls
- **Vite**: Next-generation frontend tooling

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Development

The development server runs at:
- **Local**: http://localhost:5173/
- **Network**: Use `npm run dev -- --host` to expose

## 🎯 Navigation Routes

- `/` - Homepage
- `/about` - About Us
- `/services` - Our Services
- `/services/:id` - Service Details
- `/news-events` - News & Events
- `/news/:id` - News Detail
- `/gallery` - Photo Gallery
- `/get-involved` - Get Involved
- `/contact` - Contact Us
- `/donate` - Donate

## 📱 Responsive Breakpoints

- **Desktop**: ≥ 1200px
- **Laptop**: 992px - 1199px
- **Tablet**: 768px - 991px
- **Mobile**: < 768px

## ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels where appropriate
- Font size controls (A+, A, A-)
- Keyboard navigation support
- High contrast ratios
- Alt text for all images

## 🌍 Internationalization

The application is prepared for multi-language support:
- Amharic (አማርኛ) - Primary
- English - Secondary

Language switching is handled through the language store (`stores/languageStore.js`).

## 📝 Environment Variables

Create a `.env` file based on `.env.example`:

```env
VITE_API_BASE_URL=http://localhost:3000/api
VITE_APP_NAME=Elderly Support Organization
VITE_APP_VERSION=1.0.0
```

## 🚀 Deployment

```bash
# Build for production
npm run build

# The build output will be in the `dist` folder
# Deploy the `dist` folder to your hosting service
```

## 📄 License

Copyright © 2024 Elderly Support Organization. All rights reserved.

## 🤝 Contributing

This is an internal project for the Elderly Support Organization.

## 📞 Support

For technical support, contact: info@elderlysupport.et
