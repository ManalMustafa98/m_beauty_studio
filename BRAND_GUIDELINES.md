# Brand Guidelines & Assets - M Beauty Studio

## 🎨 Brand Identity

**Brand Name**: M Beauty Studio
**Owner**: Michelle
**Business Type**: Nail Artist (By Appointment Only)
**Location**: Cypress, TX 77433
**Phone**: 408-744-2647

---

## 🎯 Brand Color Palette

### Primary Colors
| Color | Hex Code | Usage | RGB |
|-------|----------|-------|-----|
| Soft Gold/Nude | #d4af9f | Primary CTA, accents | 212, 175, 159 |
| Blush | #f5e6d3 | Secondary backgrounds | 245, 230, 211 |
| Dark/Black | #2a2a2a | Text, dark elements | 42, 42, 42 |
| White | #ffffff | Light backgrounds | 255, 255, 255 |

### Secondary Colors
| Color | Hex Code | Usage |
|-------|----------|-------|
| Light Gray | #3a3a3a | Main text color |
| Medium Gray | #666666 | Light text/body |
| Border Gray | #e8d9c9 | Borders, dividers |

### Gradients
```css
Primary Gradient: linear-gradient(135deg, #d4af9f 0%, rgba(212, 175, 159, 0.8) 100%)
Section Gradient: linear-gradient(135deg, #f5e6d3 0%, #ffffff 100%)
```

---

## 🔤 Typography

### Font Stack

**Headings** (Brand Font)
```css
font-family: 'Playfair Display', serif;
font-weight: 700;
Character: Elegant, sophisticated, feminine
```

**Body Text** (Readable Font)
```css
font-family: 'Lato', sans-serif;
font-weight: 300, 400, 700;
Character: Clean, modern, professional
```

### Font Sizes (Responsive)

| Element | Size (Mobile) | Size (Desktop) |
|---------|---------------|----------------|
| H1 (Hero) | 2rem | 3.5rem - 4rem |
| H2 (Section) | 1.5rem | 2.5rem |
| H3 (Card) | 1.1rem | 1.8rem |
| Body | 1rem | 1rem |

### Font Weights
- **Bold**: 700 (headings, CTAs)
- **Regular**: 400 (body text)
- **Light**: 300 (subtle text)

---

## 🖼️ Logo & Brand Assets

### Logo Location
- File: `footages/Logo.jpeg`
- Format: JPEG
- Recommended Sizes:
  - Navbar: 45px height
  - Footer: 50px height
  - Hero: 100px+ height

### Logo Usage
- ✅ Always maintain aspect ratio
- ✅ Minimum size: 32px
- ✅ Ensure sufficient white space
- ✅ Use on light backgrounds

---

## 📸 Image Assets

### Featured Designs Carousel (Homepage)
- Design1.jpeg
- design2.png
- Design3.png
- Design4.png
- design5.png

### Gallery Full Set (10 images)
```
Design1.jpeg  (Featured + Gallery)
design2.png   (Featured + Gallery)
Design3.png   (Featured + Gallery)
Design4.png   (Featured + Gallery)
design5.png   (Featured + Gallery)
design6.png   (Gallery only)
design7.png   (Gallery only)
design8.png   (Gallery only)
design9.png   (Gallery only)
design10.png  (Gallery only)
```

### Image Optimization Tips
- **Format**: JPEG for photos, PNG for graphics
- **Size**: Compress using TinyPNG or similar
- **Dimensions**: 
  - Carousel: 600x600px minimum
  - Gallery: 400x400px minimum
  - Full resolution: 1200x1200px for quality

---

## 🎬 Animation Specifications

### Timing Functions
```css
Standard: ease
Smooth: ease-out
Bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55)
```

### Animation Durations
- Fade In: 0.6s
- Slide: 0.5s
- Hover: 0.3s
- Carousel: 4s autoplay

### Animations Used
- Fade In (opacity)
- Slide Up (translateY)
- Zoom (scale)
- Color transitions
- Shadow transitions

---

## 🎨 UI Components

### Buttons

**Primary Button** (CTA)
```css
Background: #d4af9f
Text: White
Padding: 0.75rem 2rem
Border-radius: 50px
Hover: #2a2a2a background
```

**Outline Button** (Secondary)
```css
Background: Transparent
Border: 2px #d4af9f
Text: #d4af9f
Hover: Fill with primary color
```

### Cards

**Service Card**
```css
Background: #f5e6d3
Padding: 2rem
Border-radius: 10px
Shadow: 0 4px 15px rgba(0,0,0,0.1)
Hover: Lift effect + larger shadow
```

**Testimonial Card**
```css
Background: White
Border-left: 4px #d4af9f
Shadow: Same as service card
Hover: Same hover effect
```

### Forms

**Input Fields**
```css
Border: 2px #e8d9c9
Padding: 0.75rem
Border-radius: 5px
Focus: Border #d4af9f + soft shadow
```

---

## 📐 Spacing System

### Padding/Margin Scale
- **xs**: 0.5rem
- **sm**: 1rem
- **md**: 1.5rem
- **lg**: 2rem
- **xl**: 3rem
- **xxl**: 4rem

### Section Padding
- Desktop: 4rem (top & bottom)
- Tablet: 3rem
- Mobile: 2.5rem

### Container Max-Width
- 1200px (desktop)
- Full width with padding (mobile)

---

## 🔍 Breakpoints

### Responsive Design Breakpoints
```css
Mobile: < 480px
Tablet: 480px - 768px
Desktop: > 768px
Large Desktop: > 1200px
```

### Mobile-First Approach
- Start with mobile styles
- Add desktop styles with @media
- Flexible layouts with CSS Grid & Flexbox

---

## 🌟 Shadow System

### Shadow Levels
```css
Subtle: 0 4px 15px rgba(0, 0, 0, 0.1)
Medium: 0 10px 30px rgba(0, 0, 0, 0.15)
Large: 0 20px 40px rgba(0, 0, 0, 0.2)
```

### Usage
- Subtle: Cards, inputs
- Medium: Modal, dropdown
- Large: Hero overlay

---

## 🎯 Accessibility Standards

### Color Contrast
- Text on background: 4.5:1 minimum
- Large text: 3:1 minimum
- Focus indicators: Always visible

### Typography
- Line height: 1.6 (body), 1.2 (headings)
- Letter spacing: Normal
- Font size: Minimum 16px on mobile

### Interactive Elements
- Min click target: 44x44px
- Focus state: Always visible
- Keyboard navigation: Fully supported

---

## 📱 Mobile Design Notes

### Navigation
- Hamburger menu for mobile
- Touch-friendly spacing
- Clear navigation hierarchy

### Images
- Responsive sizing
- Lazy loading ready
- Touch-friendly lightbox

### Forms
- Large input fields (44px height)
- Clear labels
- Error messages visible
- Submit button prominent

---

## ⚡ Performance Guidelines

### File Sizes
- CSS: < 20KB
- JavaScript: < 15KB
- Images: Optimized (use compression)
- Total: < 1MB for fast loading

### Optimization
- CSS: Already minified-ready
- JS: Vanilla (no frameworks)
- Images: Use modern formats
- CDN: Google Fonts (global)

---

## 🔐 Security & SEO

### Meta Tags Included
- `<meta charset="UTF-8">`
- `<meta viewport>` (responsive)
- `<meta description>`
- `<meta theme-color>`

### SEO Features
- Semantic HTML
- Proper heading hierarchy
- Image alt text
- Structured data ready

### Security Headers
- X-Content-Type-Options
- X-Frame-Options
- Content-Security-Policy ready

---

## 📝 Content Guidelines

### Tone of Voice
- Professional yet friendly
- Elegant and sophisticated
- Warm and welcoming
- Client-focused

### Messaging
- Quality-driven
- Detail-oriented
- Personal touch
- Passion for nails

### Calls-to-Action
- "Book Appointment"
- "Get a Gift Card"
- "View Our Gallery"
- "Contact Us Today"

---

## 🎬 Animation Presets

### Fade In
```css
@keyframes fadeIn {
    from: { opacity: 0; }
    to: { opacity: 1; }
}
Duration: 0.6s
```

### Fade In Up
```css
@keyframes fadeInUp {
    from: { opacity: 0; transform: translateY(30px); }
    to: { opacity: 1; transform: translateY(0); }
}
Duration: 0.6s
```

### Hover Zoom
```css
transform: scale(1.05)
Transition: 0.3s ease
```

---

## 📚 Asset Checklist

### Required Files
- ✅ Logo.jpeg (brand logo)
- ✅ 5 design images (featured carousel)
- ✅ 10 design images (full gallery)

### Recommended Additions
- Favicon (16x16, 32x32)
- Social media preview images
- Open Graph images

---

## 🎨 Design System Summary

| Aspect | Value |
|--------|-------|
| **Primary Color** | #d4af9f |
| **Secondary Color** | #f5e6d3 |
| **Max Width** | 1200px |
| **Border Radius** | 10px cards, 50px buttons |
| **Shadow Standard** | 0 4px 15px rgba(0,0,0,0.1) |
| **Font Family** | Playfair Display + Lato |
| **Animation Speed** | 0.3-0.6s |
| **Mobile Breakpoint** | 768px |

---

## 🚀 Brand Voice Examples

### Headlines
- "Nail Art Excellence in Cypress, TX"
- "Professional Beauty Services, Personal Touch"
- "Your Nails, Perfected"

### Body Copy
- "Handcrafted designs that reflect your style"
- "Where quality meets creativity"
- "Experience luxury nail care"

### CTAs
- "Book Your Moment"
- "Let's Create Magic"
- "Reserve Your Appointment"

---

## 📞 Brand Contact

**M Beauty Studio**
- Owner: Michelle
- Phone: 408-744-2647
- Email: [contact@mbeautystudio.com] (placeholder)
- Address: The Guest House Salon Studio, 15103 Mason Rd D1 #306, Cypress, TX 77433

### Social Media
- Instagram: @nailsbymichlle.t
- Threads: @nailsbymichlle.t

---

## ✅ Brand Consistency Checklist

- [ ] Logo visible on all pages
- [ ] Colors match palette exactly
- [ ] Typography uses specified fonts
- [ ] Consistent spacing and padding
- [ ] Shadows follow guidelines
- [ ] Mobile responsive design
- [ ] Animations smooth and elegant
- [ ] All CTAs visible and clickable
- [ ] Social links present
- [ ] Contact info accurate

---

**Last Updated**: May 6, 2026
**Version**: 1.0
**Status**: ✅ Complete & Ready
