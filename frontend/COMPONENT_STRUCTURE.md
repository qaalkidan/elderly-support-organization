# Component Structure and Hierarchy

## 🏗️ Application Architecture

```
App.vue
└── router-view
    └── PublicLayout.vue
        ├── AppHeader.vue
        │   ├── TopInfoBar.vue
        │   │   ├── Contact Info (📍 📞 ✉️)
        │   │   ├── Language Selector (🌐)
        │   │   └── Font Size Controls (A+ A A-)
        │   └── Navigation Section
        │       ├── Logo (logo.svg)
        │       ├── Organization Name (Am/En)
        │       └── AppNavbar.vue
        │           ├── Nav Links
        │           ├── Dropdown Menus
        │           └── Donate Button (❤️)
        │
        ├── main-content (router-view)
        │   └── HomeView.vue
        │       ├── HeroSection.vue
        │       │   ├── Background Image (hero-banner.png)
        │       │   ├── Gradient Overlay
        │       │   ├── Badge ("Together for...")
        │       │   ├── Amharic Headline
        │       │   ├── Description
        │       │   ├── CTA Buttons (2)
        │       │   └── Decorative Circles
        │       │
        │       ├── ImpactStatistics.vue
        │       │   └── Floating Stats Card
        │       │       ├── Stat 1 (2,500+ supported)
        │       │       ├── Stat 2 (800+ living peacefully)
        │       │       ├── Stat 3 (300+ partners)
        │       │       └── Stat 4 (50+ events)
        │       │
        │       ├── HomeServices.vue
        │       │   ├── Section Header
        │       │   │   ├── Gold Line
        │       │   │   ├── Title (የእኛ አገልግሎቶች)
        │       │   │   └── Gold Line
        │       │   └── Services Grid (6 cards)
        │       │       ├── Healthcare Support
        │       │       ├── Food and Basic Needs
        │       │       ├── Financial Assistance
        │       │       ├── Social Support
        │       │       ├── Home Visits
        │       │       └── Other Assistance
        │       │
        │       ├── HomeAbout.vue
        │       │   ├── Column 1: Image
        │       │   │   └── home-about-elderly-woman.png
        │       │   ├── Column 2: About Content
        │       │   │   ├── Label (ስለ እኛ)
        │       │   │   ├── Title
        │       │   │   ├── Description
        │       │   │   └── CTA Button
        │       │   └── Column 3: Events Card
        │       │       ├── Header (📅)
        │       │       ├── Event Item
        │       │       │   ├── Image (home-events-community.png)
        │       │       │   ├── Title
        │       │       │   ├── Date (📅)
        │       │       │   └── Location (📍)
        │       │       └── View All Link
        │       │
        │       └── DonationCTA.vue
        │           ├── Background Decorations
        │           ├── Heart Icon (❤️)
        │           ├── Amharic Title
        │           ├── Description
        │           └── Donate Button
        │
        └── AppFooter.vue
            ├── Footer Main Section
            │   ├── About Column
            │   │   ├── Logo
            │   │   ├── Description
            │   │   └── Social Links (4)
            │   ├── Quick Links Column
            │   ├── Get Involved Column
            │   └── Contact Info Column
            └── Footer Bottom
                ├── Copyright
                └── Legal Links
```

---

## 📦 Component Categories

### Layout Components (`src/components/layout/`)
| Component | Purpose | Used In |
|-----------|---------|---------|
| `TopInfoBar.vue` | Contact info, language, font controls | AppHeader |
| `AppHeader.vue` | Main header container | PublicLayout |
| `AppNavbar.vue` | Navigation menu | AppHeader |
| `AppFooter.vue` | Site footer | PublicLayout |
| `AppBreadcrumb.vue` | Breadcrumb navigation | Various pages |
| `AppSidebar.vue` | Sidebar for admin | AdminLayout |

### Home Components (`src/components/home/`)
| Component | Purpose | Used In |
|-----------|---------|---------|
| `HeroSection.vue` | Hero banner with CTA | HomeView |
| `ImpactStatistics.vue` | Stats showcase | HomeView |
| `HomeServices.vue` | Services overview | HomeView |
| `HomeAbout.vue` | About + events | HomeView |
| `DonationCTA.vue` | Donation call-to-action | HomeView |

### Common Components (`src/components/common/`)
| Component | Purpose | Reusability |
|-----------|---------|-------------|
| `BaseButton.vue` | Styled buttons | High |
| `BaseInput.vue` | Form inputs | High |
| `BaseModal.vue` | Modal dialogs | High |
| `BaseLoader.vue` | Loading spinner | High |
| `BasePagination.vue` | Pagination controls | Medium |

### Public Components (`src/components/public/`)
| Component | Purpose | Used In |
|-----------|---------|---------|
| `ServiceCard.vue` | Service display | Services page |
| `NewsCard.vue` | News article card | News page |
| `EventCard.vue` | Event display | Events page |
| `GalleryCard.vue` | Gallery item | Gallery page |
| `HeroSection.vue` | Generic hero | Various pages |
| `ImpactStatistics.vue` | Stats display | Various pages |

---

## 🎨 Style Architecture

```
src/assets/styles/
├── variables.css        → Color palette, fonts, spacing
├── main.css            → Base styles, typography, utilities
└── responsive.css      → Breakpoints and media queries
```

### CSS Variables Used
```css
--primary-green: #244B3A
--dark-green: #153D2F
--gold: #D6A85F
--cream: #F8F5EE
--white: #FFFFFF
--dark-text: #334155
--light-green: #E8F4F0
```

---

## 🗺️ Route Structure

```
/ (PublicLayout)
├── / (HomeView)
├── /about (AboutView)
├── /services (ServicesView)
│   └── /services/:id (ServiceDetailView)
├── /news-events (NewsEventsView)
│   └── /news/:id (NewsDetailView)
├── /gallery (GalleryView)
├── /get-involved (GetInvolvedView)
├── /contact (ContactView)
└── /donate (DonateView)
```

---

## 📊 Data Flow

```
User Interaction
      ↓
Vue Component
      ↓
Event Handler
      ↓
Vue Router (Navigation)
  or
Pinia Store (State)
  or
API Service (Backend)
      ↓
Update UI
```

### State Management (Pinia Stores)

```
stores/
├── authStore.js           → User authentication
├── languageStore.js       → Language preference
└── notificationStore.js   → Toast notifications
```

---

## 🔄 Component Communication

### Parent → Child (Props)
```vue
<HomeServices :services="servicesList" />
```

### Child → Parent (Events)
```vue
<BaseButton @click="handleClick" />
```

### Global State (Pinia)
```javascript
import { useLanguageStore } from '@/stores/languageStore';
const languageStore = useLanguageStore();
```

### Router Navigation
```javascript
import { useRouter } from 'vue-router';
const router = useRouter();
router.push('/about');
```

---

## 🎯 Responsive Behavior

### Desktop (≥1200px)
```
TopInfoBar (full)
AppHeader (horizontal)
HeroSection (full width, content left)
ImpactStatistics (4 columns)
HomeServices (6 columns)
HomeAbout (3 columns)
DonationCTA (centered)
AppFooter (4 columns)
```

### Tablet (768-991px)
```
TopInfoBar (wrapped)
AppHeader (horizontal, smaller)
HeroSection (full width, overlay)
ImpactStatistics (2x2 grid)
HomeServices (3 columns)
HomeAbout (1 column stacked)
DonationCTA (centered)
AppFooter (2 columns)
```

### Mobile (<768px)
```
TopInfoBar (stacked, icons only)
AppHeader (hamburger menu)
HeroSection (full overlay)
ImpactStatistics (1 column)
HomeServices (1 column)
HomeAbout (1 column)
DonationCTA (full width)
AppFooter (1 column)
```

---

## 🔌 API Integration Points (Future)

```
services/
├── api.js                 → Axios instance with interceptors
├── assistanceService.js   → Assistance requests
├── donationService.js     → Donation handling
├── volunteerService.js    → Volunteer management
├── newsService.js         → News articles
├── eventService.js        → Events management
├── galleryService.js      → Gallery images
└── contactService.js      → Contact messages
```

---

## 📱 Component Lifecycle

### HomePage Load Sequence
```
1. App.vue mounts
2. Router initializes
3. PublicLayout.vue renders
   ├── TopInfoBar.vue (loads language from store)
   ├── AppHeader.vue
   │   └── AppNavbar.vue (checks active route)
   └── AppFooter.vue
4. HomeView.vue renders (lazy loaded)
   ├── HeroSection.vue
   ├── ImpactStatistics.vue
   ├── HomeServices.vue
   ├── HomeAbout.vue
   └── DonationCTA.vue
```

---

## 🎨 Styling Strategy

### Component-Scoped Styles
- Each component has `<style scoped>`
- Prevents style leaking
- Maintains encapsulation

### Global Styles
- Variables in `variables.css`
- Base styles in `main.css`
- Responsive in `responsive.css`

### CSS Methodology
- BEM-inspired naming
- Utility classes for common patterns
- Responsive utilities
- Transition classes

---

## 🚀 Performance Optimizations

### Code Splitting
- Route-based lazy loading
- Component async imports
- Reduced initial bundle size

### Image Optimization
- Proper image sizing
- Object-fit for hero images
- Lazy loading for below-fold images

### CSS Optimization
- CSS variables for theming
- Minimal specificity
- Efficient selectors

---

## 🧪 Testing Strategy

### Component Testing
```
├── Unit Tests (components)
├── Integration Tests (views)
└── E2E Tests (user flows)
```

### Accessibility Testing
- Keyboard navigation
- Screen reader compatibility
- Color contrast validation
- Font scaling

---

## 📚 Documentation Files

```
frontend/
├── README.md                          → Complete project docs
├── QUICK_START.md                     → Quick start guide
├── IMPLEMENTATION_SUMMARY.md          → Implementation details
├── COMPONENT_STRUCTURE.md             → This file
└── HOMEPAGE_IMPLEMENTATION_COMPLETE.md → Final summary
```

---

## ✨ Key Takeaways

1. **Modular Design**: Each section is its own component
2. **Reusability**: Common components shared across pages
3. **Maintainability**: Clear structure and naming
4. **Scalability**: Easy to add new features
5. **Performance**: Optimized loading and rendering
6. **Accessibility**: Inclusive design principles
7. **Responsive**: Works on all devices
8. **Professional**: Production-ready code

---

*This structure ensures a maintainable, scalable, and professional codebase for the Elderly Support Organization website.*
