# 🚀 GitHub Pages Deployment Guide

This guide will help you deploy the Eurocode 5 Wood Connection Calculator to GitHub Pages in just a few minutes.

## ⚡ Quick Deployment (5 minutes)

### Step 1: Fork the Repository
1. Click the **"Fork"** button at the top-right of this repository
2. Choose your GitHub account as the destination
3. Wait for the fork to complete

### Step 2: Enable GitHub Pages
1. Go to your forked repository on GitHub
2. Click on **"Settings"** tab
3. Scroll down to **"Pages"** in the left sidebar
4. Under **"Source"**, select **"Deploy from a branch"**
5. Choose **"main"** branch and **"/ (root)"** folder
6. Click **"Save"**

### Step 3: Access Your Calculator
- GitHub will provide a URL like: `https://yourusername.github.io/eurocode5-wood-calculator`
- It may take 5-10 minutes for the site to become available
- You can check deployment status in the **"Actions"** tab

## 🛠️ Custom Domain (Optional)

If you have a custom domain:

1. In the Pages settings, enter your domain in **"Custom domain"**
2. Add a `CNAME` file to your repository root with your domain
3. Configure your DNS provider to point to GitHub Pages

## 📁 File Structure for GitHub Pages

Your repository should contain these files in the root directory:
```
/
├── index.html          # Main application file
├── style.css           # Styling
├── app.js             # JavaScript calculations
├── README.md          # Documentation
├── LICENSE.md         # License
├── CONTRIBUTING.md    # Contribution guidelines
└── DEPLOYMENT.md      # This file
```

## 🔧 Local Development

For local development and testing:

### Option 1: Python (Recommended)
```bash
# Navigate to your project folder
cd eurocode5-wood-calculator

# Start local server
python -m http.server 8000

# Open browser to http://localhost:8000
```

### Option 2: Node.js
```bash
# Install a simple server
npm install -g serve

# Serve the application
serve .

# Open browser to http://localhost:3000
```

### Option 3: VS Code Live Server
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## ⚠️ Troubleshooting

### Pages Not Working?
- Check that GitHub Pages is enabled in repository settings
- Ensure `index.html` is in the root directory
- Wait 5-10 minutes after enabling Pages
- Check the Actions tab for deployment errors

### Calculator Not Loading?
- Open browser developer tools (F12)
- Check Console for JavaScript errors
- Ensure all files are in the correct directory
- Verify file permissions are public

### Custom Domain Issues?
- Check DNS propagation (can take up to 48 hours)
- Verify CNAME file contains only the domain name
- Ensure DNS records point to GitHub Pages IPs

## 🔄 Updating Your Calculator

To update your deployed calculator:

1. **Make changes** to your files locally or directly on GitHub
2. **Commit and push** changes to the main branch
3. **GitHub Pages will automatically redeploy** (usually within 1-2 minutes)

## 📊 Monitoring and Analytics

### GitHub Pages Analytics
- View traffic in repository **Insights > Traffic**
- Monitor deployment status in **Actions** tab

### Adding Google Analytics (Optional)
Add to your `index.html` before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

## 🏗️ Advanced Configuration

### Custom 404 Page
Create a `404.html` file in your root directory for custom error pages.

### Security Headers
GitHub Pages automatically includes security headers, but you can enhance them with a `_headers` file.

### HTTPS
GitHub Pages automatically provides HTTPS for all sites. No additional configuration needed.

## 📞 Support

If you encounter issues:

1. **Check the [GitHub Pages documentation](https://docs.github.com/en/pages)**
2. **Review repository Actions tab** for deployment errors
3. **Open an issue** in this repository with details
4. **Join the discussion** in GitHub Discussions

## 🎉 Success!

Once deployed, you'll have a professional structural engineering calculator available 24/7 at your GitHub Pages URL. Share it with colleagues, use it on job sites, or contribute improvements back to the community!

---

**Next Steps:**
- Bookmark your calculator URL
- Test all functionality
- Consider contributing improvements
- Share with the engineering community