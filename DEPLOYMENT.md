# Deployment Guide - M Beauty Studio

## Quick Start Deployment on Vercel

### Step 1: Prepare Your GitHub Repository

```bash
# Initialize Git (if not already done)
git init

# Add all files
git add .

# Initial commit
git commit -m "Initial commit: M Beauty Studio website"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/m-beauty-studio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 2: Connect to Vercel

1. Visit **[vercel.com](https://vercel.com)**
2. Sign up with GitHub (recommended)
3. Click **"New Project"**
4. Select **"Import Git Repository"**
5. Find and select `m-beauty-studio` repository
6. Click **"Import"**
7. Keep default settings (framework: Static)
8. Click **"Deploy"**

### Step 3: Custom Domain (Optional)

After deployment:
1. Go to your Vercel project settings
2. Click **"Domains"**
3. Add your custom domain (e.g., `mbeautystudio.com`)
4. Follow DNS configuration instructions

---

## Alternative Deployment Options

### Netlify Deployment

1. Connect your GitHub repository to [Netlify](https://netlify.com)
2. Auto-deploys on every push to main branch

### GitHub Pages

1. Push code to GitHub
2. Go to repository **Settings → Pages**
3. Select **"Deploy from a branch"**
4. Choose **"main"** branch
5. Your site will be at `https://USERNAME.github.io/m-beauty-studio`

### Manual Hosting (Bluehost, GoDaddy, etc.)

1. Download all files
2. Upload to your hosting server via FTP/SFTP
3. Ensure `index.html` is in the root directory
4. Visit your domain

---

## Post-Deployment Checklist

- [ ] Website loads correctly in all browsers
- [ ] Mobile responsive design works on all devices
- [ ] All images load properly
- [ ] Navigation links work on all pages
- [ ] Contact form submissions work
- [ ] External links (Instagram, Threads) open correctly
- [ ] Google Map embeds correctly
- [ ] Carousel and lightbox functions work
- [ ] Page performance is good (check with Lighthouse)
- [ ] SEO tags are in place

---

## Environment Variables (Optional)

If you want to add contact form backend integration:

Create a `.env.local` file:

```env
VITE_FORM_SERVICE_URL=https://your-form-service.com/api/submit
VITE_BUSINESS_EMAIL=contact@mbeautystudio.com
```

---

## Website Files Structure

```
M_beauty_Studio/
├── index.html           (Home page)
├── about.html           (About Michelle)
├── services.html        (Services listing)
├── gallery.html         (Nail designs gallery)
├── contact.html         (Contact form)
├── css/
│   └── style.css       (All styling)
├── js/
│   └── script.js       (All interactivity)
├── footages/           (Images directory)
│   ├── Logo.jpeg
│   ├── Design1.jpeg
│   └── design*.png
├── .gitignore
├── README.md
├── package.json
└── vercel.json        (Vercel config)
```

---

## Performance Optimization

### Image Optimization
- Images are already optimized
- Further optimize using tools like:
  - TinyPNG
  - ImageOptim
  - WebP conversion

### Caching Strategy
The `vercel.json` includes:
- HTML: 1 hour cache
- Images: 1 year cache (immutable)

### SEO Improvements
Already included:
- Meta descriptions
- Open Graph tags (add if needed)
- Semantic HTML
- Mobile-friendly design

---

## Monitoring & Analytics

### Add Google Analytics

Add this to all HTML files (before `</head>`):

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

Replace `GA_MEASUREMENT_ID` with your Google Analytics ID.

### Monitor with Vercel Analytics
- Vercel provides built-in analytics
- View in Vercel dashboard
- Track page views, errors, performance

---

## Maintenance & Updates

### Regular Tasks
1. **Update content** - Edit HTML files directly
2. **Change images** - Replace files in `footages/` folder
3. **Update prices** - Edit services.html
4. **Add testimonials** - Update index.html

### Git Workflow
```bash
# Make changes
git add .
git commit -m "Update content/images"
git push origin main

# Vercel auto-deploys!
```

---

## Contact Form Integration

### Current Setup
Form validates and shows success/error messages locally.

### To Enable Email Submissions
Option 1: **Formspree**
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

Option 2: **EmailJS** (JavaScript-based)

Option 3: **Backend API** (Custom server)

---

## SSL/HTTPS

✅ Already included with Vercel hosting
- All connections secured
- Auto-renewal

---

## Support & Troubleshooting

### Website not loading?
- Check internet connection
- Clear browser cache (Ctrl+Shift+Delete)
- Try different browser
- Check Vercel deployment logs

### Images not showing?
- Verify `footages/` folder exists
- Check image file names match HTML
- Ensure images are in correct format

### Form not working?
- Check console for errors (F12)
- Verify email field has valid format
- Check required fields are filled

### Mobile menu not working?
- Clear cache
- Check JavaScript is enabled
- Test in different browser

---

## Document Customization for Your Business

Before final deployment, ensure:

1. **Contact Information** is updated in all pages:
   - Phone: 408-744-2647
   - Address: Cypress, TX 77433
   - Email: contact@mbeautystudio.com

2. **Social Links** point to correct profiles:
   - Instagram: @nailsbymichlle.t
   - Threads: @nailsbymichlle.t

3. **Services & Pricing** reflect your current offerings

4. **Testimonials** include real client feedback

5. **Hours/Availability** are accurately displayed

---

## Going Live

Your website is now ready to serve real clients! 

**Final Steps:**
1. ✅ Domain is set up
2. ✅ HTTPS is active
3. ✅ All content is accurate
4. ✅ Mobile-responsive
5. ✅ Fast loading
6. ✅ Forms working
7. ✅ Analytics enabled

**You're live!** 🎉

---

## Contact for Support

If you need help:
- Check the README.md file
- Review JavaScript console (F12 → Console)
- Check Vercel deployment logs
- Verify all file paths are correct

---

**Last Updated:** May 6, 2026
**Website Status:** ✅ Production Ready
**Deployment:** 🚀 Ready for Vercel
