# Deploying to Replit

This guide covers automated deployment of the RKPi5 marketing website to Replit.

---

## Prerequisites

- [ ] GitHub repository connected to Replit
- [ ] Replit account with Autoscale Deployments (or Always On for dev)
- [ ] Environment variables configured in Replit Secrets

---

## Method 1: Replit Autoscale Deployments (Recommended)

### Initial Setup

1. **Import Repository to Replit:**
   ```
   1. Go to replit.com
   2. Click "Create Repl" → "Import from GitHub"
   3. Select: prmnews/rkpi5_website
   4. Choose: Next.js template
   ```

2. **Configure Environment Variables:**
   
   In Replit, go to Secrets (🔒 icon) and add:
   
   ```bash
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
   CLERK_SECRET_KEY=sk_test_...
   
   # Convex Backend
   NEXT_PUBLIC_CONVEX_URL=https://...convex.cloud
   CONVEX_DEPLOY_KEY=prod:...
   
   # Resend Email
   RESEND_API_KEY=re_...
   
   # Next.js
   NODE_ENV=production
   ```

3. **Enable Autoscale Deployments:**
   ```
   1. Click "Deploy" button
   2. Select "Autoscale Deployments"
   3. Configure domain (optional)
   4. Click "Deploy"
   ```

4. **Connect to GitHub (Auto-deploy):**
   ```
   Replit → Settings → GitHub
   → Enable "Deploy on push to main"
   ```

### Deployment Flow

```
Developer pushes to main
    ↓
GitHub Actions runs CI/CD (lint, type-check, build)
    ↓
CI passes
    ↓
Replit detects push to main
    ↓
Automatic deployment starts
    ↓
Build runs: pnpm install && pnpm build && pnpm start
    ↓
Site live at: https://your-repl.replit.app
```

---

## Method 2: GitHub Actions Webhook (Alternative)

If you prefer more control, use GitHub Actions to trigger deployments.

### Setup Webhook

1. **Get Replit Deploy Webhook:**
   ```
   Replit → Deployments → Settings → Create Webhook
   Copy webhook URL
   ```

2. **Add to GitHub Secrets:**
   ```
   GitHub → Settings → Secrets and variables → Actions
   → New repository secret
   Name: REPLIT_DEPLOY_WEBHOOK
   Value: [paste webhook URL]
   ```

3. **Enable Workflow:**
   
   Edit `.github/workflows/deploy-replit.yml`:
   ```yaml
   # Uncomment the curl command in the workflow
   ```

### Manual Deployment

Trigger deployment manually:
```
GitHub → Actions → Deploy to Replit → Run workflow
```

---

## Method 3: Manual Deployment (Development)

For development/testing without auto-deploy:

### In Replit Shell:

```bash
# Install dependencies
pnpm install

# Run development server
pnpm run dev
# → Opens at https://your-repl.replit.dev

# Or production build
pnpm run build
pnpm run start
# → Production mode on port 3000
```

### Keep Alive (Development)

Without paid "Always On":

1. **Use UptimeRobot:**
   - Sign up at [uptimerobot.com](https://uptimerobot.com)
   - Add monitor for: https://your-repl.replit.app
   - Ping every 5 minutes to keep it awake

2. **Or use Replit's "Always On":**
   - $20/month Replit subscription
   - Repl stays running 24/7

---

## Environment-Specific Configuration

### Development (.env.local)
```bash
# Use Clerk test keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...

# Use Convex dev deployment
NEXT_PUBLIC_CONVEX_URL=https://your-dev.convex.cloud
```

### Staging (Replit Secrets)
```bash
# Use Clerk test keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...

# Use Convex staging
NEXT_PUBLIC_CONVEX_URL=https://your-staging.convex.cloud
```

### Production (Vercel/Netlify recommended)
```bash
# Use Clerk production keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_...

# Use Convex production
NEXT_PUBLIC_CONVEX_URL=https://your-prod.convex.cloud
```

---

## Troubleshooting

### Build Fails on Replit

**Issue:** `pnpm: command not found`

**Fix:** Install pnpm in Replit shell:
```bash
npm install -g pnpm
pnpm install
```

**Issue:** Out of memory during build

**Fix:** Increase Node memory in `.replit`:
```toml
[deployment]
run = ["sh", "-c", "NODE_OPTIONS='--max-old-space-size=4096' pnpm run build && pnpm run start"]
```

### Port Conflicts

**Issue:** `Port 3000 already in use`

**Fix:** Replit uses port 80 externally, but Next.js should run on 3000:
```bash
# In package.json
"start": "next start -p 3000"
```

### Environment Variables Not Loading

**Issue:** App can't connect to Clerk/Convex

**Fix:** 
1. Verify secrets are added in Replit (🔒 icon)
2. Restart the Repl after adding secrets
3. Check `.env.local.example` matches Replit secrets

---

## Monitoring Deployments

### Replit Dashboard
```
Replit → Deployments → View logs
→ See build output and errors
```

### GitHub Actions
```
GitHub → Actions → Latest workflow run
→ See CI/CD pipeline status
```

### Health Check Endpoint

Add to `src/app/api/health/route.ts`:
```typescript
export async function GET() {
  return Response.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    version: process.env.npm_package_version,
  });
}
```

Test: `curl https://your-repl.replit.app/api/health`

---

## Cost Comparison

| Feature | Free Tier | Cycles (Paid) | Autoscale |
|---------|-----------|---------------|-----------|
| Always On | ❌ | ✅ $20/mo | ✅ |
| Custom Domain | ❌ | ✅ | ✅ |
| Auto-scaling | ❌ | ❌ | ✅ |
| Build Minutes | Limited | Unlimited | Unlimited |
| Deploy on Push | ✅ | ✅ | ✅ |
| **Cost** | Free | $20/month | $7/month |

---

## Recommended Architecture

```
Development:
Local dev → Push to feature branch → Preview in Replit

Staging:
Merge to main → CI/CD runs → Auto-deploy to Replit

Production:
Tag release → Deploy to Vercel/Netlify (better Next.js support)
```

**Why Vercel for Production?**
- Built specifically for Next.js
- Better edge caching and CDN
- Automatic image optimization
- Serverless functions at edge
- Better global performance

**Use Replit for:**
- Staging environment
- Testing integrations (Clerk, Convex)
- Beta user access
- Internal demos

---

## Next Steps

1. ✅ Configure `.replit` file (already created)
2. ⬜ Import repo to Replit
3. ⬜ Add environment variables in Replit Secrets
4. ⬜ Test manual deployment
5. ⬜ Enable auto-deploy from GitHub
6. ⬜ Set up custom domain (optional)

---

_Created: November 12, 2025_  
_For: RKPi5 Marketing Website Deployment_

