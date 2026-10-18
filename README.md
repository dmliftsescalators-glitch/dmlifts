# DM Lifts & Escalators

Premium vertical mobility engineering, architectural elevators, commercial escalators, and certified 24/7 AMC maintenance.

## Tech Stack
- **Framework**: React 18, Vite
- **Styling**: Tailwind CSS
- **3D & Animation**: Three.js, React Three Fiber, Framer Motion, GSAP, Lenis Smooth Scroll
- **Icons**: Lucide Icons, HugeIcons

## Local Development
```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev
```

## Production Build
```bash
npm run build
```
This generates the optimized production bundle inside the `dist/` directory, including the `.htaccess` configuration file for Hostinger.

---

## Deploying to Hostinger

### Method 1: Automated Deployment via GitHub Actions (Recommended)
This repository includes a CI/CD workflow (`.github/workflows/deploy-hostinger.yml`) that automatically builds and deploys to Hostinger whenever changes are pushed to `main`.

1. **Get your FTP credentials from Hostinger**:
   - Log into **Hostinger hPanel** > **Websites** > click **Manage** next to your domain.
   - Navigate to **Files** > **FTP Accounts**.
   - Note the **FTP Hostname / IP**, **FTP Username**, and set/copy your **FTP Password**.
2. **Add GitHub Secrets**:
   - In your GitHub repository, go to **Settings** > **Secrets and variables** > **Actions** > **New repository secret**.
   - Add the following secrets:
     - `HOSTINGER_FTP_SERVER`: Your FTP host (e.g., `ftp.yourdomain.com` or your Hostinger server IP).
     - `HOSTINGER_FTP_USERNAME`: Your Hostinger FTP username.
     - `HOSTINGER_FTP_PASSWORD`: Your Hostinger FTP password.
     - `VITE_WEB3FORMS_ACCESS_KEY`: `33ed9000-1899-4422-94ec-96df6257e62b`
3. **Deploy**:
   - Push to `main` (or run manually via **Actions** tab > **Deploy to Hostinger** > **Run workflow**).

---

### Method 2: Manual Deployment via Hostinger File Manager
1. Run local production build:
   ```bash
   npm run build
   ```
2. In Hostinger **hPanel**:
   - Go to **Files** > **File Manager**.
   - Open your domain's `public_html/` folder.
   - If there is a default `default.php` file, delete or replace it.
   - Upload all files and folders from inside your local `dist/` folder (including `index.html`, `assets/`, and `.htaccess`) directly into `public_html/`.
   - *Note: Ensure `.htaccess` is uploaded (it handles React SPA routing and HTTPS).*
