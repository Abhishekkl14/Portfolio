# 🚀 QUICK SETUP GUIDE

Follow these simple steps to get your portfolio running:

## Step 1: Extract Files
Extract all files to a folder on your computer (e.g., "my-portfolio")

## Step 2: Prepare Images
1. Go to the `assets` folder
2. Add these images:
   - `profile.jpg` - Your photo
   - `project-disaster.jpg` - Disaster detection project
   - `project-tripcraft.jpg` - Trip-Craft project
   - `project-survey.jpg` - Survey dashboard
   - `Abhishek_BS_CV.pdf` - Your CV/Resume

**Don't have images yet?** The site will still work! Add them later.

## Step 3: Open in VS Code
1. Open VS Code
2. File → Open Folder
3. Select your portfolio folder
4. Install "Live Server" extension if you don't have it

## Step 4: Run the Website
### Method 1: Using Live Server (Recommended)
1. Right-click on `index.html`
2. Select "Open with Live Server"
3. Website opens in your browser automatically

### Method 2: Direct Opening
1. Double-click `index.html`
2. Opens in default browser

## Step 5: Customize
1. Edit `index.html` to update your information
2. Replace placeholder text with your details:
   - Name, email, phone
   - Experience details
   - Project descriptions
   - Skills
   - Social media links

## Step 6: Customize Colors (Optional)
Edit `style.css` and change these variables at the top:
```css
--primary-color: #6C63FF;    /* Change to your preferred color */
--secondary-color: #FF6584;  /* Accent color */
```

## 🎨 Using SCSS (Optional - Advanced)

If you want to use SCSS for easier customization:

1. **Install Node.js** (if not installed)
   - Download from: https://nodejs.org
   - Choose LTS version

2. **Install Sass**
   Open terminal in VS Code (Ctrl+` or Cmd+`) and run:
   ```bash
   npm install
   ```

3. **Compile SCSS to CSS**
   ```bash
   npm run sass
   ```

4. **Auto-compile on changes**
   ```bash
   npm run sass:watch
   ```

Now edit `style.scss` instead of `style.css`

## 📱 Testing on Mobile

1. Open website using Live Server
2. Right-click → Inspect (or F12)
3. Click the device icon (top-left)
4. Select different devices to test

## 🌐 Deploy to the Internet (Free!)

### Option A: GitHub Pages
1. Create GitHub account
2. Create repository: `yourusername.github.io`
3. Upload all files
4. Settings → Pages → Select main branch
5. Live at: `https://yourusername.github.io`

### Option B: Netlify
1. Go to netlify.com
2. Sign up (free)
3. Drag & drop your folder
4. Get instant website!

### Option C: Vercel
1. Go to vercel.com
2. Sign up with GitHub
3. Import repository
4. Auto-deploy!

## ⚡ Quick Tips

1. **Images not showing?**
   - Check file names match exactly (case-sensitive)
   - Ensure images are in `assets` folder

2. **Colors not changing?**
   - Clear browser cache (Ctrl+F5)
   - Make sure you saved the file

3. **Responsive issues?**
   - Test in different browsers
   - Use browser dev tools (F12)

## 📝 Checklist Before Publishing

- [ ] Updated all personal information
- [ ] Added all images to assets folder
- [ ] Uploaded CV/Resume
- [ ] Updated social media links
- [ ] Tested on mobile
- [ ] Checked all links work
- [ ] Proofread all text
- [ ] Optimized images
- [ ] Tested in different browsers

## 🆘 Need Help?

Common VS Code Extensions to Install:
1. **Live Server** - Preview website
2. **Auto Rename Tag** - HTML editing
3. **Prettier** - Code formatting
4. **Live Sass Compiler** - SCSS compilation (alternative)

## 📧 Questions?

Contact: abhishekbs242@gmail.com

---

**You're all set! 🎉**

Your portfolio should now be running. Customize it to make it yours!
