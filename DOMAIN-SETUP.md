# Domain Setup Guide - rkpi5.com

## Current State

✅ **DNS Records** - Configured for Resend email  
❌ **Vercel Connection** - Not yet connected  
❌ **Production Deployment** - Not live on rkpi5.com

---

## Option 1: Deploy to Vercel URL First (RECOMMENDED) 🎯

**Use this approach for v1.0.0 launch**

### Advantages:
- ✅ Faster deployment (no DNS wait)
- ✅ Test everything on Vercel URL first
- ✅ Add custom domain later (zero downtime)
- ✅ Lower risk for beta launch

### Steps:

1. **Deploy to Vercel's auto-generated URL**
   - URL will be: `rkpi5-marketing.vercel.app` or similar
   - This happens automatically when you push v1.0.0 tag

2. **Test thoroughly on Vercel URL**
   - Verify all features work
   - Test with beta users
   - Collect feedback

3. **Add custom domain later** (when ready)
   - Vercel Dashboard → Domains → Add rkpi5.com
   - Follow Vercel's DNS instructions
   - Zero downtime migration

### Vercel Production Environment Variables:

```bash
NEXT_PUBLIC_SITE_URL=https://rkpi5-marketing.vercel.app
# (or whatever Vercel assigns)
```

---

## Option 2: Setup Custom Domain Now

**Use this if you want rkpi5.com live immediately**

### Steps:

#### 1. Add Domain in Vercel

Go to: **Vercel Dashboard → Your Project → Settings → Domains**

1. Click "Add Domain"
2. Enter: `rkpi5.com`
3. Also add: `www.rkpi5.com` (optional)
4. Vercel will show you DNS records to add

#### 2. Configure DNS

Vercel will provide records like:

```
Type: A
Name: @
Value: 76.76.21.21 (example - use what Vercel gives you)

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**Important:** You already have DNS records for Resend. Make sure to:
- ✅ Keep existing MX/TXT records for Resend
- ✅ Add new A/CNAME records for Vercel
- ❌ Don't delete email-related records!

#### 3. Verify Domain

- Vercel will auto-verify (can take 10-60 minutes)
- Once verified, traffic goes to your Vercel deployment

#### 4. Update Environment Variables

```bash
NEXT_PUBLIC_SITE_URL=https://rkpi5.com
```

---

## Recommendation for v1.0.0 Launch

### **Use Option 1** (Vercel URL)

**Reasoning:**
1. **Faster** - No DNS propagation wait
2. **Safer** - Test on Vercel URL before going live on custom domain
3. **Flexible** - Add rkpi5.com later without redeployment
4. **Beta-appropriate** - Vercel URL is fine for 10 beta testers

**Timeline:**
```
Today:        Deploy v1.0.0 to rkpi5-marketing.vercel.app
Week 1-2:     Beta testing on Vercel URL
After beta:   Add rkpi5.com custom domain (seamless)
Public launch: Live on rkpi5.com
```

---

## DNS Records Reference

### Current DNS (for Resend):
```
Type: MX
Type: TXT (SPF)
Type: TXT (DKIM)
```

### Future DNS (when adding Vercel):
```
Type: A     → Vercel IP
Type: CNAME → Vercel CNAME
Type: MX    → Keep for email
Type: TXT   → Keep for email
```

---

## Production URLs

**For v1.0.0 Beta:**
```
Production: https://rkpi5-marketing.vercel.app (or similar)
Preview:    https://rkpi5-marketing-git-main-[org].vercel.app
```

**After Custom Domain:**
```
Production: https://rkpi5.com
www:        https://www.rkpi5.com (optional)
```

---

## Next Steps

See `PRODUCTION-DEPLOYMENT.md` for complete deployment checklist.

