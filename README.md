# ChristopherAI - Personal Portfolio Website

A stunning Apple-inspired portfolio website showcasing Chris Herrera's work as a Cloud Support Engineer transitioning to Software Development.

## 🚀 Features

- **Apple-inspired Design**: Clean, minimal, futuristic aesthetic
- **Dark Mode Theme**: Elegant gradients with blue, cyan, and purple accents
- **Smooth Animations**: Fade-in effects, typewriter animation, and parallax particles
- **Responsive Design**: Optimized for all devices
- **Interactive Elements**: Contact modal, hover effects, and smooth scrolling
- **Performance Optimized**: Fast loading and smooth scroll performance

## 📁 File Structure

```
website-final/
├── index.html          # Main HTML structure
├── styles.css          # Apple-inspired styling and animations
├── script.js           # Interactive functionality and animations
└── README.md          # This file
```

## 🎨 Design Elements

- **Typography**: Space Grotesk and Inter fonts
- **Color Palette**: 
  - Background: Deep space gradient (#0a0a0a to #1a1a2e)
  - Accent Colors: Cyan (#40e0d0), Purple (#7b68ee)
  - Text: White with transparency variations
- **Animations**: Smooth fade-ins, floating particles, typewriter effect
- **Layout**: Full-screen hero, centered sections, grid-based project cards

## 🔧 Easy Content Updates

### 1. Personal Information (Hero Section)
**File**: `script.js` - Line ~25
```javascript
const text = "Chris Herrera"; // Change name here
```

**File**: `index.html` - Line ~55
```html
<p class="hero-subtitle">Where cloud meets intelligence.</p> <!-- Update tagline -->
```

### 2. About Section
**File**: `index.html` - Lines ~75-80
```html
<p class="about-text">
    I'm a Cloud Support Engineer at AWS... <!-- Update bio here -->
</p>
```

**File**: `index.html` - Lines ~85-105
```html
<!-- Update statistics in highlight cards -->
<div class="card-number">5+</div> <!-- Years of experience -->
<div class="card-number">25+</div> <!-- Number of projects -->
<!-- etc... -->
```

### 3. Projects Section
**File**: `index.html` - Lines ~120-200
```html
<!-- Update each project card -->
<h3 class="project-title">Project Name</h3>
<p class="project-description">Project description...</p>
<a href="https://github.com/chris-hm" class="project-link"> <!-- Update GitHub links -->
```

### 4. Contact Information
**File**: `index.html` - Lines ~220-240
```html
<!-- Update contact links in modal -->
<a href="mailto:christopherhm0028@gmail.com" class="contact-link">
<a href="https://linkedin.com/in/chrishm0029" target="_blank" class="contact-link">
<!-- etc... -->
```

### 5. Color Customization
**File**: `styles.css` - Update gradient colors throughout
```css
/* Main gradient used in multiple places */
background: linear-gradient(135deg, #40e0d0, #7b68ee);

/* Background gradient */
background: radial-gradient(ellipse at center, #1a1a2e 0%, #16213e 25%, #0f0f23 50%, #000000 100%);
```

## 🌐 Deployment

1. **Local Testing**: Open `index.html` in a web browser
2. **Web Hosting**: Upload all files to your web hosting service
3. **GitHub Pages**: Push to GitHub and enable GitHub Pages
4. **Netlify/Vercel**: Connect repository for automatic deployment

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance Notes

- All animations use CSS transforms for optimal performance
- Scroll events are throttled to prevent performance issues
- Images and fonts are optimized for fast loading
- No external dependencies except Google Fonts

## 🔧 Customization Tips

- **Fonts**: Change font imports in HTML head and CSS font-family declarations
- **Background**: Modify particle count in HTML and adjust animations in CSS
- **Sections**: Add new sections by copying existing section structure
- **Colors**: Use find-and-replace to update gradient colors consistently

## 🐛 Troubleshooting

- **Typewriter not working**: Check JavaScript console for errors
- **Animations not smooth**: Ensure hardware acceleration is enabled in browser
- **Mobile issues**: Test responsive design at different screen sizes
- **Contact links**: Verify all external links are correct and accessible

## 📧 Support

For questions or customization help, contact Chris Herrera:
- Email: christopherhm0028@gmail.com
- LinkedIn: linkedin.com/in/chrishm0029
- GitHub: github.com/chris-hm

---

**Built with ❤️ by Chris Herrera - Where cloud meets intelligence.**