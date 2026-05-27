# Quick Start Guide

Get your premium portfolio up and running in 5 minutes.

## Prerequisites

- Node.js 18.17 or higher
- npm or yarn
- Git (optional, for version control)

## Installation Steps

### Step 1: Open Terminal

Navigate to your portfolio directory:
```bash
cd PortfolioWebsite
```

### Step 2: Install Dependencies

```bash
npm install
```

This installs all required packages (~5-10 minutes depending on internet speed)

### Step 3: Run Development Server

```bash
npm run dev
```

### Step 4: Open in Browser

Visit: **http://localhost:3000**

You should see your premium portfolio loading with smooth animations!

## Basic Customization (First Steps)

### 1. Change Your Name

- Open `app/components/Navigation.tsx`
- Find line with "Ayush"
- Replace with your name

### 2. Update Social Links

Search and replace in the following files:

- `app/components/Navigation.tsx`
- `app/components/Hero.tsx`
- `app/components/Contact.tsx`
- `app/components/Footer.tsx`

Replace:
- `sirfayush1008` → your GitHub username
- `ayush-singh-2024` → your LinkedIn profile
- `sirfayush1008@gmail.com` → your email

### 3. Update Hero Text

Edit `app/components/Hero.tsx`:

```typescript
// Around line 65
<span className="text-sm md:text-base font-mono text-primary uppercase tracking-widest">
  YOUR ROLE HERE  // Change this
</span>

// Around line 73
<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
  <span className="block">YOUR HEADLINE</span>
  <span className="gradient-text block">YOUR TAGLINE</span>
</h1>

// Around line 80
<p className="text-base md:text-lg text-muted-foreground">
  YOUR DESCRIPTION HERE
</p>
```

### 4. Update Your Content

See [CUSTOMIZATION.md](./CUSTOMIZATION.md) for detailed instructions on:
- Changing colors
- Updating projects
- Modifying experience
- Adding skills
- Changing achievements

## File Structure Overview

```
PortfolioWebsite/
├── app/
│   ├── components/          # All section components
│   ├── hooks/              # Custom React hooks
│   ├── globals.css         # Global styles & theme
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Main page
├── public/                 # Static assets
├── README.md              # Full documentation
├── CUSTOMIZATION.md       # Detailed customization guide
├── DEPLOYMENT.md          # Deployment instructions
├── package.json           # Dependencies
└── tailwind.config.ts     # Tailwind configuration
```

## Development Workflow

### While Developing

1. **Keep dev server running**
```bash
npm run dev
```

2. **Edit files** in `app/components/`
3. **See changes instantly** in browser (hot reload)

### Before Deploying

1. **Build for production**
```bash
npm run build
```

2. **Test production build locally**
```bash
npm start
```

3. **Check for errors**
```bash
npm run lint
```

## Common Tasks

### Change Colors

Edit `app/globals.css` (lines 13-32):

```css
--primary: 220 90% 56%;      /* Change to new color */
```

[See color examples in CUSTOMIZATION.md](./CUSTOMIZATION.md#color-system)

### Add a New Section

1. Create component in `app/components/NewSection.tsx`
2. Import in `app/page.tsx`
3. Add to the JSX

### Update Project Data

Edit `app/components/Projects.tsx` lines 12-85

### Modify Experience

Edit `app/components/Experience.tsx` lines 11-54

### Edit Skills

Edit `app/components/Skills.tsx` lines 10-56

## Deployment

### Deploy to Vercel (1-click)

```bash
npm install -g vercel
vercel
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed steps

### Deploy Elsewhere

- **Netlify**: Same steps as Vercel
- **Railway**: See DEPLOYMENT.md
- **GitHub Pages**: See DEPLOYMENT.md

## Troubleshooting

### Port 3000 Already in Use

```bash
npm run dev -- -p 3001
```

Then visit `http://localhost:3001`

### Dependencies Issue

Clear and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

Clear Next.js cache:
```bash
rm -rf .next
npm run build
```

### Styles Not Updating

Rebuild Tailwind:
```bash
npm run build
npm run dev
```

## Next Steps

1. **Customize content** with your information
2. **Change colors** to match your brand
3. **Update social links**
4. **Add your projects**
5. **Deploy to Vercel**
6. **Share with recruiters!**

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

## Support

Having issues?

1. Check [CUSTOMIZATION.md](./CUSTOMIZATION.md)
2. Check [DEPLOYMENT.md](./DEPLOYMENT.md)
3. Review the [README.md](./README.md)
4. Check component comments

## You're All Set! 🚀

Your elite portfolio is ready to impress recruiters.

**Next:** Customize your content and deploy!

---

**Quick Customization Checklist:**
- [ ] Update hero section text
- [ ] Change social links
- [ ] Update projects
- [ ] Modify experience
- [ ] Add skills
- [ ] Change colors (optional)
- [ ] Test on mobile
- [ ] Deploy to Vercel
- [ ] Share with network

**Go make them impressed!** 💪
