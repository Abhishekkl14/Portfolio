# Abhishek B S - Portfolio Website

A modern, responsive portfolio website showcasing Machine Learning projects, research publications, and professional experience.

## 🚀 Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Interactive Elements** - Typing animation, scroll effects, and hover interactions
- **Performance Optimized** - Fast loading with lazy loading and efficient code
- **SEO Friendly** - Proper meta tags and semantic HTML

## 📁 Project Structure

```
portfolio/
│
├── index.html          # Main HTML file
├── style.css           # Compiled CSS stylesheet
├── style.scss          # SCSS source file (optional)
├── script.js           # JavaScript functionality
├── README.md           # This file
│
└── assets/             # Images and resources folder
    ├── profile.jpg     # Your profile picture
    ├── project-disaster.jpg
    ├── project-tripcraft.jpg
    ├── project-survey.jpg
    └── Abhishek_BS_CV.pdf
```

## 🛠️ Setup Instructions

### Option 1: Quick Start (Using CSS directly)

1. **Extract all files** to a folder
2. **Create an `assets` folder** in the same directory
3. **Add your images** to the assets folder:
   - `profile.jpg` - Your professional photo (recommended: 400x400px, circular crop)
   - `project-disaster.jpg` - Aerial disaster detection project image
   - `project-tripcraft.jpg` - Trip-Craft project image
   - `project-survey.jpg` - Data survey project image
   - `Abhishek_BS_CV.pdf` - Your resume/CV file

4. **Open `index.html`** in your browser
5. **Done!** Your portfolio is ready

### Option 2: Using SCSS (Advanced)

If you want to customize the SCSS file:

1. Install Node.js from [nodejs.org](https://nodejs.org)
2. Install Sass compiler:
   ```bash
   npm install -g sass
   ```
3. Compile SCSS to CSS:
   ```bash
   sass style.scss style.css
   ```
4. Or watch for changes:
   ```bash
   sass --watch style.scss:style.css
   ```

## 🎨 Customization Guide

### 1. Personal Information

Edit `index.html` and update:
- Name and title in the hero section
- Contact information (email, phone, location)
- Social media links (LinkedIn, GitHub)
- About me text
- Experience details
- Project information
- Skills and technologies
- Certifications

### 2. Colors & Theme

Edit `style.css` or `style.scss` variables:

```css
:root {
    --primary-color: #6C63FF;      /* Main brand color */
    --secondary-color: #FF6584;     /* Accent color */
    --accent-color: #00D9FF;        /* Additional accent */
    --bg-dark: #0A0E27;             /* Background */
    --bg-card: #0F1629;             /* Card background */
}
```

### 3. Typography

Current fonts used:
- **Poppins** - Main font (via Google Fonts)
- **Fira Code** - Code/monospace font

To change fonts, update the Google Fonts link in `index.html` and the CSS variables.

### 4. Images

Replace placeholder images in the `assets` folder:
- Use high-quality images (recommended format: JPG/PNG)
- Optimize images for web (use tools like TinyPNG)
- Recommended sizes:
  - Profile: 400x400px
  - Projects: 800x600px

### 5. Content Sections

To add/remove sections:
1. Add/remove the section in `index.html`
2. Add corresponding styles in `style.css`
3. Update navigation links

## 🌐 Deployment

### GitHub Pages (Free Hosting)

1. Create a GitHub repository named `yourusername.github.io`
2. Push all files to the repository
3. Go to Settings → Pages
4. Select main branch as source
5. Your site will be live at `https://yourusername.github.io`

### Netlify (Free Hosting)

1. Create account at [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Your site will be live instantly
4. Get a custom domain or use Netlify's subdomain

### Vercel (Free Hosting)

1. Create account at [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Deploy with one click
4. Automatic deployment on every push

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## 🔧 Technologies Used

- **HTML5** - Structure
- **CSS3/SCSS** - Styling
- **JavaScript (ES6)** - Interactivity
- **Font Awesome** - Icons
- **Google Fonts** - Typography

## 📝 Features Breakdown

### Hero Section
- Animated typing effect
- Profile image with gradient glow
- Call-to-action buttons
- Social media links

### About Section
- Professional summary
- Contact information
- Animated statistics counter
- Download resume button

### Experience Timeline
- Visual timeline layout
- Alternating design
- Technology tags
- Hover effects

### Projects Showcase
- Grid layout
- Image overlays
- Technology tags
- GitHub links
- Project statistics

### Skills Display
- Categorized skills
- Icon representations
- Hover animations
- Responsive grid

### Publications & Certifications
- Research publication card
- Certification grid
- Detailed information
- Visual icons

### Contact Section
- Contact information
- Interactive form
- Email integration
- Social media links

## 🎯 Performance Tips

1. **Optimize Images**: Use WebP format for better compression
2. **Minify Code**: Use CSS/JS minifiers before deployment
3. **Enable Caching**: Configure proper cache headers
4. **Use CDN**: For Font Awesome and Google Fonts
5. **Lazy Loading**: Images load as user scrolls

## 🐛 Troubleshooting

### Images not showing?
- Check file paths in `index.html`
- Ensure images are in the `assets` folder
- Verify image file names match exactly (case-sensitive)

### Styles not applying?
- Clear browser cache (Ctrl+F5 / Cmd+Shift+R)
- Check if `style.css` is in the same folder as `index.html`
- Open browser console (F12) to check for errors

### Form not working?
- The contact form opens default email client
- Ensure email addresses are correct
- Test in different browsers

## 📧 Contact

**Abhishek B S**
- Email: abhishekbs242@gmail.com
- LinkedIn: [linkedin.com/in/abhishek-bs0018](https://www.linkedin.com/in/abhishek-bs0018/)
- GitHub: [github.com/Abhishekkl14](https://github.com/Abhishekkl14)

## 📄 License

Feel free to use this template for your own portfolio. Attribution appreciated but not required.

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Inspiration from modern portfolio designs

---

**Built with ❤️ by Abhishek B S**

Last Updated: February 2025
