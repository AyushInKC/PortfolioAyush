# Customization Guide

This guide explains how to customize every aspect of your portfolio to match your personal brand.

## 🎨 Color System

### Primary Colors (Located in: `app/globals.css`)

```css
:root {
  /* Primary color - appears in CTAs, highlights, hover states */
  --primary: 220 90% 56%;        /* Electric Blue */
  
  /* Background - main page background */
  --background: 0 0% 2%;         /* Matte Black */
  
  /* Foreground - main text color */
  --foreground: 0 0% 98%;        /* Soft White */
  
  /* Card backgrounds */
  --card: 0 0% 6%;               /* Dark Gray */
  
  /* Accent color - secondary highlights */
  --accent: 220 90% 56%;         /* Same as primary for consistency */
  
  /* Muted colors - secondary text */
  --muted: 0 0% 32%;             /* Medium Gray */
  --muted-foreground: 0 0% 64%; /* Light Gray */
}
```

### Changing Colors

1. **Edit `app/globals.css`** (lines 13-32)
2. **HSL Color Format**: `hue saturation% lightness%`
   - Hue: 0-360 (0=red, 120=green, 240=blue)
   - Saturation: 0-100%
   - Lightness: 0-100%

### Examples:

Purple accent:
```css
--primary: 280 90% 56%;  /* Purple */
```

Green accent:
```css
--primary: 140 90% 56%;  /* Green */
```

Pink accent:
```css
--primary: 320 90% 56%;  /* Pink */
```

## 📝 Content Customization

### 1. Hero Section

**File**: `app/components/Hero.tsx`

```typescript
// Change tagline
const subtitleVariants = {
  // Line 28: Change "Backend Engineer" to your role
  <span className="text-sm md:text-base font-mono text-primary uppercase tracking-widest">
    YOUR ROLE HERE
  </span>
}

// Change main heading
<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
  <span className="block">Your First Line</span>
  <span className="gradient-text block">Your Second Line</span>
</h1>

// Change description
<p className="text-base md:text-lg text-muted-foreground">
  YOUR CUSTOM DESCRIPTION HERE
</p>

// Change buttons
<a href="#projects">YOUR BUTTON TEXT</a>
```

### 2. About Section

**File**: `app/components/About.tsx`

Replace the `values` array (line ~30):
```typescript
const values = [
  {
    title: 'Your Skill 1',
    description: 'Your description',
    icon: '🎯', // Change emoji
  },
  // Add more...
];
```

Edit paragraphs:
```typescript
<p className="text-lg text-muted-foreground">
  YOUR CUSTOM ABOUT TEXT
</p>
```

### 3. Experience Section

**File**: `app/components/Experience.tsx`

Update the `experiences` array:
```typescript
const experiences = [
  {
    title: 'Your Job Title',
    company: 'Company Name',
    period: 'Start Date – End Date',
    type: 'Position',
    achievements: [
      'Achievement 1',
      'Achievement 2',
      // ...
    ],
    tags: ['Tag1', 'Tag2'],
    color: 'from-blue-500 to-cyan-500',
  },
  // ...
];
```

### 4. Projects Section

**File**: `app/components/Projects.tsx`

Update the `projects` array (line ~12):
```typescript
const projects = [
  {
    title: 'Project Name',
    subtitle: 'Project Tagline',
    description: 'Short description',
    longDescription: 'Detailed description',
    achievements: [
      'Achievement 1',
      'Achievement 2',
    ],
    technologies: ['Tech1', 'Tech2'],
    metrics: {
      throughput: 'Your metric',
      latency: 'Your metric',
      uptime: 'Your metric',
    },
    github: 'https://github.com/...',
    liveLink: 'https://...',
    color: 'from-orange-500 to-red-500',
  },
  // ...
];
```

### 5. Skills Section

**File**: `app/components/Skills.tsx`

Update the `skillCategories` array:
```typescript
const skillCategories = [
  {
    name: 'Category Name',
    skills: ['Skill1', 'Skill2', 'Skill3'],
    icon: '💻',
    color: 'from-blue-500 to-cyan-500',
  },
  // ...
];
```

### 6. Achievements Section

**File**: `app/components/Achievements.tsx`

Update the `achievements` array:
```typescript
const achievements = [
  {
    icon: Trophy, // Lucide icon
    title: 'Achievement Title',
    description: 'Achievement description',
    stat: 'Impressive stat',
    color: 'from-amber-500 to-orange-500',
  },
  // ...
];
```

### 7. Contact Section

**File**: `app/components/Contact.tsx`

Update contact methods:
```typescript
const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'your@email.com',
    href: 'mailto:your@email.com',
    color: 'from-red-500 to-pink-500',
  },
  // ...
];
```

## 🔤 Typography

### Font Families

**File**: `app/globals.css` (lines 9-10)

```css
@import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500&display=swap');
```

### Change Fonts

1. Visit [Google Fonts](https://fonts.google.com)
2. Select your fonts
3. Copy the import URL
4. Replace in `globals.css`

Example: Using Inter + Fira Code
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Fira+Code:wght@400;500&display=swap');
```

Then update CSS variables:
```css
--font-sans: 'Inter', system-ui, sans-serif;
--font-mono: 'Fira Code', monospace;
```

## 🖼️ Adding Images

### Profile Picture (Optional)

Create `app/components/ProfileImage.tsx`:
```typescript
import Image from 'next/image';

export default function ProfileImage() {
  return (
    <Image
      src="/profile.jpg"
      alt="Profile"
      width={200}
      height={200}
      className="rounded-lg"
    />
  );
}
```

Add to `app/components/Hero.tsx` or `app/components/About.tsx`

### Project Images

Add to `app/public/projects/` folder and reference in Projects component

## 🔗 Social Links

All social links are in respective components:

### Navigation (`app/components/Navigation.tsx`)
- GitHub
- LinkedIn
- Email

### Hero (`app/components/Hero.tsx`)
- GitHub
- LinkedIn
- Email

### Contact (`app/components/Contact.tsx`)
- Email
- GitHub
- LinkedIn

### Footer (`app/components/Footer.tsx`)
- All social links

**Update all instances with your URLs:**
```typescript
href="https://github.com/YOURUSERNAME"
href="https://linkedin.com/in/YOUR-PROFILE"
href="mailto:YOUR@EMAIL.COM"
```

## 📱 Responsive Breakpoints

Tailwind breakpoints (default):
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

Use in components:
```typescript
<h1 className="text-4xl md:text-5xl lg:text-6xl">
  Responsive Heading
</h1>
```

## ⚙️ Animation Tweaks

### Stagger Timing

In any component's `containerVariants`:
```typescript
const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.2,      // Increase for slower stagger
      delayChildren: 0.1,         // Initial delay
    },
  },
};
```

### Item Animation Duration

In `itemVariants`:
```typescript
const itemVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,              // Increase for slower animation
      ease: 'easeOut',
    },
  },
};
```

### Available easing:
- `'easeIn'`
- `'easeOut'`
- `'easeInOut'`
- `'linear'`
- `[0.17, 0.67, 0.83, 0.67]` (custom cubic-bezier)

## 🔐 Security Considerations

1. **Never commit sensitive data**
   - API keys
   - Tokens
   - Passwords

2. **Use environment variables** for:
   - API endpoints
   - Third-party credentials
   - Configuration

3. **Keep dependencies updated**
```bash
npm update
npm audit
```

## 📊 Analytics Integration (Optional)

### Google Analytics

1. Get your GA ID from Google Analytics
2. Add to `.env.local`:
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXX
```

3. Create `app/components/Analytics.tsx`:
```typescript
'use client';

import Script from 'next/script';

export default function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  
  if (!gaId) return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="ga-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}');
          `,
        }}
      />
    </>
  );
}
```

4. Add to `app/layout.tsx`:
```typescript
import Analytics from '@/components/Analytics';

export default function RootLayout() {
  return (
    <html>
      <body>
        <Analytics />
        {/* ... */}
      </body>
    </html>
  );
}
```

## 🧪 Testing

### Run locally before deploying:
```bash
npm run dev
```

### Check all sections:
- [ ] Hero section loads properly
- [ ] Navigation responsive
- [ ] All links work
- [ ] Animations smooth
- [ ] Mobile looks good
- [ ] Dark mode consistent

## 📦 Advanced Customization

### Theme Toggle (Dark/Light)

Install next-themes:
```bash
npm install next-themes
```

Create `app/components/ThemeToggle.tsx`:
```typescript
'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="icon-button"
    >
      {theme === 'dark' ? <Sun /> : <Moon />}
    </button>
  );
}
```

### Custom Hooks

Located in `app/hooks/useCustom.ts`:
- `useScrollProgress`
- `useInView`
- `usePrefersReducedMotion`

Use in components:
```typescript
import { useScrollProgress } from '@/hooks/useCustom';

export default function Component() {
  const progress = useScrollProgress();
  return <div style={{ width: `${progress}%` }} />;
}
```

---

**Pro Tips:**
- Start small with color changes
- Test responsive design on mobile
- Keep content concise and impactful
- Use emojis sparingly for professionalism
- Ensure sufficient color contrast for accessibility

**Questions?** Check the main README.md or Next.js documentation.
