# GitHub Container Registry Guide

This guide explains how to push your Docker image to GitHub Container Registry (ghcr.io) and automate the process with GitHub Actions.

## 📦 What is GitHub Container Registry?

GitHub Container Registry (GHCR) is a free service that allows you to store and manage Docker images directly on GitHub. It's integrated with your repositories and supports both public and private images. You can publish packages to your personal account or to any organization where you have the necessary permissions.

## 🚀 Method 1: Manual Push (Quick Start)

### Step 1: Create a Personal Access Token (PAT)

1. Go to [GitHub Settings → Developer Settings → Personal Access Tokens](https://github.com/settings/tokens)
2. Click **"Generate new token (classic)"**
3. Give it a descriptive name: `Docker Registry Access`
4. Select the following scopes:
   - ✅ `write:packages` - Upload packages
   - ✅ `read:packages` - Download packages
   - ✅ `delete:packages` - Delete packages (optional)
   - ✅ `repo` - Full control of private repositories (if your repo is private)
5. Click **"Generate token"**
6. **Copy the token immediately** (you won't see it again!)
7. Save it securely (consider using a password manager)

### Step 2: Login to GitHub Container Registry

```bash
export CR_PAT=YOUR_TOKEN_HERE
echo $CR_PAT | docker login ghcr.io -u YOUR_GITHUB_USERNAME --password-stdin
```

Or in one command (replace with your actual values):

```bash
echo "ghp_your_token_here" | docker login ghcr.io -u yourusername --password-stdin
```

You should see: `Login Succeeded`

### Step 3: Build and Tag Your Image

```bash
# Navigate to your project
cd landing-page

# Build with GHCR tag (replace YOUR_GITHUB_USERNAME)
docker build --platform linux/amd64 -t ghcr.io/YOUR_GITHUB_USERNAME/landing-page:latest .
```

**Example** (if your username is `alexdev`):

```bash
docker build -t ghcr.io/alexdev/landing-page:latest .
```

### Step 4: Push to GitHub Container Registry

```bash
docker push ghcr.io/YOUR_GITHUB_USERNAME/landing-page:latest
```

### Step 5: Verify the Upload

1. Go to your GitHub profile: `https://github.com/YOUR_GITHUB_USERNAME`
2. Click on the **"Packages"** tab
3. You should see your `landing-page` package listed

### Step 6: Make the Package Public (Optional)

By default, packages are **private**. To make it public:

1. Click on your `landing-page` package
2. Click **"Package settings"** (right sidebar)
3. Scroll to **"Danger Zone"**
4. Click **"Change visibility"** → Select **"Public"**
5. Type the repository name to confirm

## 🏢 Publishing to Organization Packages

If you want to push Docker images to an organization instead of your personal account:

### Step 1: Ensure You Have Organization Permissions

1. Go to your organization on GitHub: `https://github.com/YOUR_ORG`
2. Go to **Settings** → **Member privileges**
3. Ensure you have permission to create packages (Admin or Member with package permissions)

### Step 2: Create Organization PAT or Use Org Settings

**Option A: Use Personal Token with Org Access**

1. Create a PAT as described earlier
2. When creating it, under "Select scopes", also enable:
   - ✅ `read:org` (if needed)
3. After creating the token, authorize it for your organization:
   - Go to your organization → **Settings** → **Personal access tokens**
   - Click **"Approve"** for your token

**Option B: Use Organization Secret**

1. Go to your organization → **Settings** → **Secrets and variables** → **Actions**
2. Create a new secret: `ORG_GHCR_TOKEN`
3. Value: A PAT with `write:packages` scope

### Step 3: Login with Organization Context

```bash
echo "YOUR_TOKEN" | docker login ghcr.io -u YOUR_USERNAME --password-stdin
```

### Step 4: Build and Tag with Organization Name

```bash
# Build with organization name (replace YOUR_ORG)
docker build -t ghcr.io/YOUR_ORG/landing-page:latest .
```

**Example** (if your organization is `devver-company`):

```bash
docker build -t ghcr.io/devver-company/landing-page:latest .
```

### Step 5: Push to Organization Registry

```bash
docker push ghcr.io/YOUR_ORG/landing-page:latest
```

### Step 6: Link Package to Repository (Important!)

After the first push:

1. Go to your organization: `https://github.com/orgs/YOUR_ORG/packages`
2. Click on your `landing-page` package
3. Click **"Package settings"** → **"Connect repository"**
4. Select your repository from the dropdown
5. This links the package to your repo for better visibility

### Step 7: Make Organization Package Public (Optional)

1. In Package settings, scroll to **"Danger Zone"**
2. Click **"Change visibility"** → **"Public"**
3. Type the package name to confirm
