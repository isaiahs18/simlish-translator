# Deploy Using GitHub Desktop

## Step-by-Step Guide

### 1. Open GitHub Desktop
- Launch the GitHub Desktop app on your laptop

### 2. Add Your Repository
- Click **File** → **Add Local Repository**
- Browse to: `c:\Users\isaia\Documents\Antigravity\simlish-translator`
- Click **Add Repository**

### 3. Publish to GitHub
- You should see all your files listed in the "Changes" tab
- Click the blue **"Publish repository"** button in the top right
- In the dialog:
  - Repository name: `simlish-translator`
  - Description: "Simlish song translator with syllable matching"
  - ✅ Keep **"Public"** checked (so your friend can access it)
  - ❌ Uncheck "Keep this code private"
- Click **"Publish Repository"**

### 4. Enable GitHub Pages
After publishing, you need to enable Pages:

**Option A: Using GitHub Desktop**
- Click **Repository** → **View on GitHub** (opens in browser)
- Go to **Settings** tab
- Scroll down to **Pages** section (left sidebar)
- Under "Source":
  - Branch: Select **"main"** or **"master"**
  - Folder: **"/ (root)"**
- Click **Save**

**Option B: Using Browser Directly**
- Go to: `https://github.com/[your-username]/simlish-translator/settings/pages`
- Set Source to branch "main" or "master"
- Click Save

### 5. Get Your Live URL
After a few minutes, your site will be live at:
```
https://[your-username].github.io/simlish-translator/
```

You can find the exact URL in the Pages settings (it will show a green checkmark when ready).

### 6. Share with Your Friend
Send them the URL! They can use it directly in any browser.

## Updating Your Site Later
When you make changes:
1. Open GitHub Desktop
2. You'll see the changes listed
3. Add a commit message (e.g., "Added more rhyme words")
4. Click **"Commit to main"**
5. Click **"Push origin"** button
6. Changes will be live in a few minutes!

## Troubleshooting
- **Can't find the folder?** Make sure you're looking in the exact path: `c:\Users\isaia\Documents\Antigravity\simlish-translator`
- **No "Publish" button?** The repo might already be published. Look for "Push origin" instead.
- **Site not loading?** Wait 2-3 minutes after enabling Pages, then refresh.

## 🛑 Troubleshooting: "It asks for money" or "Can't make public"

**Problem:** You see a message saying you need **GitHub Pro** or that it costs money.
**Cause:** Your repository is likely set to **Private**. GitHub Pages is only free for **Public** repositories.

**Solution: Make it Public (Free)**
1. Go to your repository on GitHub.com
2. Click **Settings** (top tab)
3. Scroll all the way down to the "Danger Zone"
4. Look for **"Change repository visibility"**
5. Click **"Change visibility"** → Select **"Make public"**
6. Confirm the action
7. Now go back to **Pages** settings - it should be free!

**Problem:** "I can't make it public" (Button disabled or error)
**Cause:** 
- If you are using a work/school account, your organization might block public repos.
- If your account is brand new, GitHub might have temporarily flagged it (spam protection).
**Solution:** Try creating a new account or contact GitHub Support.

