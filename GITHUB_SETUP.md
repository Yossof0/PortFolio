# GitHub Setup & Local Import Guide

This guide will help you set up your portfolio on GitHub and import it to your local machine.

## 📋 Prerequisites

Before you start, make sure you have:
- **Git** installed on your computer ([Download Git](https://git-scm.com/))
- **Node.js 18+** and **pnpm** installed ([Download Node.js](https://nodejs.org/))
- A **GitHub account** ([Create one here](https://github.com/signup))

### Check if you have them installed:

```bash
# Check Git
git --version

# Check Node.js
node --version

# Check pnpm
pnpm --version
```

If you don't have pnpm, install it:
```bash
npm install -g pnpm
```

---

## 🚀 Step 1: Create a New GitHub Repository

### Option A: Using GitHub Web Interface (Easiest)

1. Go to [GitHub.com](https://github.com)
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name**: `yossof-portfolio` (or any name you prefer)
   - **Description**: `My professional web developer portfolio`
   - **Visibility**: Choose **Public** (so others can see it) or **Private** (only you can see it)
   - **Initialize with**: Leave unchecked (we'll push existing code)
5. Click **"Create repository"**

### Option B: Using Git Command Line

```bash
# You'll need to use GitHub CLI for this
# Install GitHub CLI from: https://cli.github.com/

gh repo create yossof-portfolio --public --source=. --remote=origin --push
```

---

## 📤 Step 2: Push Your Portfolio to GitHub

### First Time Setup:

```bash
# Navigate to your portfolio directory
cd yossof-portfolio

# Initialize Git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Yossof portfolio website"

# Add remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/yossof-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Replace `YOUR_USERNAME` with your actual GitHub username!

---

## 💻 Step 3: Import to Your Local Machine

### Clone the Repository:

```bash
# Clone your repository
git clone https://github.com/YOUR_USERNAME/yossof-portfolio.git

# Navigate into the project
cd yossof-portfolio

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The site will be available at `http://localhost:3000`

---

## 🔄 Step 4: Making Changes and Pushing Updates

After making changes to your portfolio:

```bash
# Check what files changed
git status

# Add all changes
git add .

# Create a commit with a message
git commit -m "Update: Added new project section"

# Push changes to GitHub
git push
```

### Common Commit Messages:
- `git commit -m "Fix: Update email address"`
- `git commit -m "Feature: Add dark mode toggle"`
- `git commit -m "Update: Improve mobile responsiveness"`
- `git commit -m "Docs: Update README with new instructions"`

---

## 🌐 Step 5: Deploy Your Portfolio

After pushing to GitHub, you can deploy it for free using:

### Option 1: GitHub Pages (Free)

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **Deploy from a branch**
4. Select **main** branch and **/ (root)** folder
5. Click **Save**
6. Your site will be available at: `https://YOUR_USERNAME.github.io/yossof-portfolio`

**Note**: You need to build the project first:
```bash
pnpm build
```

Then commit and push the `dist/` folder.

### Option 2: Vercel (Recommended - Easier)

1. Go to [Vercel.com](https://vercel.com)
2. Sign up with your GitHub account
3. Click **"New Project"**
4. Select your `yossof-portfolio` repository
5. Click **"Import"**
6. Vercel will automatically detect it's a Vite project
7. Click **"Deploy"**
8. Your site will be live at a Vercel URL!

### Option 3: Netlify

1. Go to [Netlify.com](https://netlify.com)
2. Click **"Add new site"** → **"Connect to Git"**
3. Select GitHub and authorize
4. Choose your `yossof-portfolio` repository
5. Configure build settings:
   - **Build command**: `pnpm build`
   - **Publish directory**: `dist`
6. Click **"Deploy"**

---

## 📝 Useful Git Commands

```bash
# See commit history
git log

# See changes before committing
git diff

# Undo last commit (keep changes)
git reset --soft HEAD~1

# See all branches
git branch -a

# Create a new branch
git checkout -b feature/new-feature

# Switch to a branch
git checkout main

# Delete a branch
git branch -d feature/new-feature

# Pull latest changes from GitHub
git pull

# Check remote URL
git remote -v
```

---

## 🆘 Troubleshooting

### "fatal: not a git repository"
```bash
# Initialize git in your project directory
git init
```

### "Permission denied (publickey)"
You need to set up SSH keys with GitHub:
1. [Generate SSH key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-gpg-key)
2. [Add SSH key to GitHub](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

### "Updates were rejected because the tip of your current branch is behind"
```bash
# Pull latest changes first
git pull origin main

# Then push your changes
git push origin main
```

### "fatal: 'origin' does not appear to be a 'git' repository"
```bash
# Add the remote repository
git remote add origin https://github.com/YOUR_USERNAME/yossof-portfolio.git

# Verify it was added
git remote -v
```

---

## 📚 Useful Resources

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [GitHub Desktop](https://desktop.github.com/) - GUI alternative to command line
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com/)

---

## ✅ Quick Checklist

- [ ] Git installed
- [ ] Node.js and pnpm installed
- [ ] GitHub account created
- [ ] Repository created on GitHub
- [ ] Code pushed to GitHub
- [ ] Repository cloned locally
- [ ] Dependencies installed (`pnpm install`)
- [ ] Development server running (`pnpm dev`)
- [ ] Deployed to Vercel/Netlify/GitHub Pages

---

## 🎉 You're All Set!

Your portfolio is now on GitHub and ready to be shared with the world. Every time you make changes, just:

```bash
git add .
git commit -m "Your message here"
git push
```

And your changes will be live!

---

**Need help?** Check the troubleshooting section above or visit [GitHub Support](https://support.github.com/).
