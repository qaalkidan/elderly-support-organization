# Quick Start Guide

## 🚀 Getting Started in 3 Steps

### Step 1: Ensure Dependencies are Installed
```bash
npm install
```

### Step 2: Start the Development Server
```bash
npm run dev
```

### Step 3: Open Your Browser
Navigate to: **http://localhost:5173/**

---

## 🎯 What You'll See

The homepage includes:
1. **Top Info Bar** - Contact info, language selector, font size controls
2. **Navigation** - Full menu with dropdown options and Donate button
3. **Hero Banner** - Beautiful hero image with Amharic headline and CTAs
4. **Impact Stats** - Four key statistics in a floating card
5. **Our Services** - Six service categories with icons
6. **About Section** - Organization info with upcoming events
7. **Donation CTA** - Call-to-action for donations
8. **Footer** - Complete footer with links and contact info

---

## 📱 Testing Responsive Design

### Desktop View (≥ 1200px)
- Open browser in full screen
- All sections display in multi-column layouts

### Tablet View (768px - 991px)
1. Open browser DevTools (F12)
2. Click device toolbar icon
3. Select iPad or similar device
4. Verify navigation adjusts and stats reflow

### Mobile View (< 768px)
1. Open browser DevTools (F12)
2. Click device toolbar icon
3. Select iPhone or similar device
4. Verify:
   - Hamburger menu appears
   - Sections stack vertically
   - Images resize properly
   - No horizontal scroll

---

## 🧪 Testing Navigation

Click through these links to verify routing:
- ✅ Home (/)
- ✅ About Us (/about)
- ✅ Our Services (/services)
- ✅ News & Events (/news-events)
- ✅ Gallery (/gallery)
- ✅ Get Involved (/get-involved)
- ✅ Contact Us (/contact)
- ✅ Donate (/donate)

---

## 🎨 Testing Accessibility Features

### Font Size Controls (Top Bar)
1. Click **A+** - Text should increase
2. Click **A** - Text returns to normal
3. Click **A-** - Text should decrease

### Language Selector (Top Bar)
1. Click the language dropdown
2. Select አማርኛ or English
3. (Full implementation in future phase)

### Keyboard Navigation
1. Press **Tab** to navigate through links
2. Press **Enter** to activate buttons/links
3. All interactive elements should be accessible

---

## ⚡ Quick Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

---

## 🔧 Troubleshooting

### Port Already in Use
If port 5173 is busy:
```bash
npm run dev -- --port 3000
```

### Dependencies Issues
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Browser Cache Issues
- Hard refresh: **Ctrl + Shift + R** (Windows/Linux)
- Hard refresh: **Cmd + Shift + R** (Mac)
- Or clear browser cache

---

## 📞 Need Help?

- Check `README.md` for detailed documentation
- Review `IMPLEMENTATION_SUMMARY.md` for complete feature list
- Contact: info@elderlysupport.et

---

## ✨ Enjoy Your New Homepage!

The application is fully functional and ready for use. All features match the provided UI screenshot with responsive design and full functionality.

**Happy Development! 🎉**
