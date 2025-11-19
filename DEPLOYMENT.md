# Quick Deployment Guide - GitHub Pages

## Step 1: Create GitHub Repository

1. Go to https://github.com
2. Click the **"+"** in top right → **"New repository"**
3. Name it: `simlish-translator`
4. Make it **Public**
5. **Don't** initialize with README (we already have one)
6. Click **"Create repository"**

## Step 2: Push Your Code to GitHub

Open your terminal in the project folder and run:

```bash
# Navigate to project
cd C:\Users\isaia\Documents\Antigravity\simlish-translator

# Add GitHub as remote (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/simlish-translator.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** tab
3. Click **"Pages"** in left sidebar
4. Under **"Source"**, select **"main"** branch
5. Click **"Save"**
6. Wait 1-2 minutes

## Step 4: Get Your Link!

Your translator will be live at:
```
https://YOUR-USERNAME.github.io/simlish-translator
```

**That's your shareable link!** 🎉

---

## Alternative: Netlify (Even Easier!)

1. Go to https://www.netlify.com
2. Sign up with GitHub
3. Click **"Add new site"** → **"Import from Git"**
4. Select your repository
5. Click **"Deploy"**

You'll get a link like: `https://random-name.netlify.app`

You can customize it to: `https://simlish-translator.netlify.app`

---

## Troubleshooting

### "git remote add" error?
If you get an error, the remote might already exist. Remove it first:
```bash
git remote remove origin
git remote add origin https://github.com/YOUR-USERNAME/simlish-translator.git
```

### Can't push to GitHub?
You might need to authenticate. GitHub will prompt you to log in.

---

**Once deployed, you can share the link with anyone!** 🌐
