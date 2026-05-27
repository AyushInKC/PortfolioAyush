# Deployment Guide

This comprehensive guide covers deploying your premium portfolio to various platforms.

## 🚀 Vercel Deployment (Recommended)

Vercel is the optimal platform for Next.js applications and offers seamless deployment.

### Method 1: Git Push (Simplest)

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

2. **Connect to Vercel**
- Visit https://vercel.com
- Click "New Project"
- Import your GitHub repository
- Configure settings (mostly auto-configured)
- Click "Deploy"

### Method 2: Vercel CLI

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Deploy**
```bash
vercel
```

3. **Follow the prompts** to set up your project

### Method 3: Manual Integration

1. **Build locally**
```bash
npm run build
```

2. **Deploy folder** (`.next` output)
Upload to your hosting provider

## Custom Domain Setup

1. **Add domain in Vercel**
- Project Settings → Domains
- Add your domain (e.g., ayushsingh.dev)

2. **Update DNS Records**
```
Name: @
Type: A
Value: 76.76.19.165

Name: www
Type: CNAME
Value: cname.vercel-dns.com
```

3. **SSL Certificate**
- Automatically provisioned by Vercel (free)

## Environment Variables

1. **Create `.env.local`**
```bash
cp .env.example .env.local
```

2. **Update with your values**
```
NEXT_PUBLIC_APP_URL=https://yourdomain.com
```

3. **In Vercel Dashboard**
- Settings → Environment Variables
- Add variables same as `.env.local`

## Performance Optimization

### Image Optimization
```bash
# Already included with Next.js Image component
# Images are automatically optimized and delivered
```

### Build Optimization
```bash
# The build is already optimized with:
# - Code splitting
# - Tree shaking
# - Minification
# - Compression
```

### Monitoring
- Vercel Analytics: Auto-enabled
- Core Web Vitals tracked automatically

## Alternative Hosting

### Netlify

1. **Connect Git Repository**
- Visit netlify.com
- Connect your GitHub account
- Select repository

2. **Configure Build Settings**
```
Build command: npm run build
Publish directory: .next
```

3. **Deploy**
- Netlify handles everything automatically

### Railway.app

1. **Install Railway CLI**
```bash
npm i -g @railway/cli
```

2. **Deploy**
```bash
railway init
railway up
```

### GitHub Pages (Static Export)

Note: Requires removing dynamic features

1. **Export as static**
```bash
npm run build && next export
```

2. **Deploy to GitHub Pages**
```bash
npm run deploy
```

## Post-Deployment Checklist

- [ ] Domain points correctly
- [ ] SSL certificate active
- [ ] Email contact form tested
- [ ] Social links redirect correctly
- [ ] Analytics initialized
- [ ] Performance metrics checked
- [ ] Mobile responsiveness verified
- [ ] SEO meta tags visible
- [ ] Open Graph preview working
- [ ] Core Web Vitals optimized

## Monitoring & Maintenance

### Vercel Analytics
- Real-time performance metrics
- Core Web Vitals tracking
- Error monitoring

### Google Search Console
1. Verify domain ownership
2. Submit sitemap
3. Monitor search performance
4. Fix any crawl errors

### Google Analytics (Optional)
Add your GA ID to environment variables

## Continuous Integration

### Automatic Deployments

Changes to main branch automatically deploy:

```yaml
# .github/workflows/deploy.yml (for reference)
- Build on commit
- Run tests
- Deploy to production
- Invalidate cache
```

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
npm run build
```

### Slow Performance
- Check Core Web Vitals in Vercel Analytics
- Optimize images
- Review dependencies
- Enable compression

### Domain Not Working
- Wait 24-48 hours for DNS propagation
- Check DNS records in domain registrar
- Verify CNAME/A records

## Security Headers

All security headers are configured in `next.config.js`:
- X-DNS-Prefetch-Control
- X-Frame-Options
- X-Content-Type-Options
- X-XSS-Protection

## SSL/TLS Certificate

- Automatically provisioned by Vercel
- Free Let's Encrypt certificate
- Auto-renewal handled

## Backup & Recovery

### GitHub Backup
Your code is automatically backed up on GitHub:
```bash
# Clone anytime
git clone https://github.com/yourusername/portfolio.git
```

## Support

For issues:
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- GitHub Issues: Create issue in repository

---

**Happy deploying! Your elite portfolio is now live.** 🚀
