# DM Elevators & Escalators

Premium vertical mobility engineering, architectural elevators, commercial escalators, and certified 24/7 AMC maintenance.

## Architecture

- **`frontend/`**: React 18, Vite, Tailwind CSS, Three.js 3D cabins, Lucide & HugeIcons, Framer Motion, Lenis Smooth Scroll.
- **`backend/`**: Node.js & Express REST API (`/api/health`, `/api/contact`, `/api/service-request`) with Nodemailer support.
- **`api/`**: Serverless Function adapter (`api/index.js`) allowing the Express API to run natively on Vercel without separate server hosting.

---

## Local Development

```bash
# 1. Install dependencies across root and workspaces
npm install

# 2. Start the Frontend (Vite on http://localhost:3000 with automatic /api proxy)
npm run dev

# 3. Start the Backend API (Express on http://localhost:5000)
npm run dev:backend
```

---

## Production Build

```bash
npm run build
```

The output will be placed in `frontend/dist`.

---

## Deploying to Vercel

This repository is pre-configured for one-click deployment on [Vercel](https://vercel.com).

### Deployment Settings in Vercel Dashboard:
- **Framework Preset**: `Vite` (or `Other`)
- **Root Directory**: `./` (leave default repository root)
- **Build Command**: `npm run build` (or leave default from `vercel.json`)
- **Output Directory**: `frontend/dist` (pre-configured in `vercel.json`)

### Environment Variables (optional, set in Vercel Project Settings):
- `ADMIN_EMAIL`: `dmliftsescalators@gmail.com`
- `SMTP_HOST`: `smtp.gmail.com`
- `SMTP_PORT`: `587`
- `SMTP_SECURE`: `false`
- `SMTP_USER`: your SMTP username
- `SMTP_PASS`: your SMTP app password
- `VITE_WEB3FORMS_ACCESS_KEY`: `33ed9000-1899-4422-94ec-96df6257e62b`
