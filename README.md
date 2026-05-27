# Ayush Singh - Premium Developer Portfolio

A world-class, minimalist, premium developer portfolio built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion. Designed to instantly communicate elite backend engineering skills.

## 🎯 Design Philosophy

- **Minimalistic**: Clean, elegant design with zero clutter
- **Technical**: Every detail communicates engineering excellence
- **Premium**: High-end startup aesthetic (Apple × Linear × Vercel × Stripe inspired)
- **Performant**: Blazing fast, fully responsive, production-optimized
- **Cinematic**: Smooth animations and premium interactions

## ✨ Features

- **Hero Section**: Cinematic entrance with staggered text reveals and animated gradients
- **About Section**: Engineering philosophy and core values
- **Experience Timeline**: Beautiful timeline with scroll-triggered animations
- **Projects Showcase**: Expandable project cards with architecture metrics and achievements
- **Skills Ecosystem**: Interactive skill clusters categorized by expertise
- **Achievements**: Premium achievement cards with impressive metrics
- **Contact Section**: Elegant contact form with social integration
- **Smooth Scrolling**: Lenis integration for premium scroll experience
- **Responsive Design**: Perfect on mobile, tablet, and desktop
- **SEO Optimized**: Meta tags, structured data, and performance optimization
- **Dark Mode First**: Sophisticated dark theme with subtle accents

## 🛠️ Tech Stack

- **Framework**: Next.js 15+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom theme
- **Animations**: Framer Motion + GSAP
- **Smooth Scroll**: Lenis
- **UI Components**: ShadCN UI patterns
- **Icons**: Lucide React
- **Font**: Geist family from Vercel

## 📦 Installation

### Prerequisites
- Node.js 18.17+ 
- npm or yarn

### Setup

1. **Clone the repository**
```bash
cd PortfolioWebsite
```

2. **Install dependencies**
```bash
npm install
```

3. **Install additional dependencies**
```bash
npm install tailwindcss-animate class-variance-authority clsx tailwind-merge
```

4. **Run development server**
```bash
npm run dev
```

5. **Open in browser**
Visit `http://localhost:3000`

## 🚀 Building for Production

```bash
npm run build
npm start
```

## 📂 Project Structure

```
PortfolioWebsite/
├── app/
│   ├── components/          # React components
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Achievements.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── SmoothScroll.tsx
│   │   └── ScrollProgress.tsx
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.js          # Next.js configuration
├── postcss.config.js       # PostCSS configuration
├── package.json            # Dependencies
└── README.md              # This file
```

## 🎨 Customization

### Colors
Edit the CSS variables in `app/globals.css`:
```css
:root {
  --primary: 220 90% 56%;      /* Electric Blue */
  --background: 0 0% 2%;       /* Matte Black */
  --foreground: 0 0% 98%;      /* Soft White */
}
```

### Content
- **Hero**: Edit `app/components/Hero.tsx`
- **Projects**: Update projects array in `app/components/Projects.tsx`
- **Experience**: Modify experience data in `app/components/Experience.tsx`
- **Skills**: Update skill categories in `app/components/Skills.tsx`

### Animations
- Adjust timing in component `transition` props
- Modify animation variants in `containerVariants`, `itemVariants`
- Customize Lenis settings in `app/components/SmoothScroll.tsx`

## 📊 Performance Optimizations

- Server Components where possible
- Image optimization with Next.js Image
- CSS-in-JS minimization
- Font optimization with next/font
- Lazy loading components
- Code splitting automatic with App Router

## 🔍 SEO

- Meta tags configured in `app/layout.tsx`
- Open Graph support
- Twitter Card integration
- Structured data ready
- Sitemap generation compatible
- Mobile-first responsive design

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
- **Netlify**: Supported
- **GitHub Pages**: Requires static export
- **Railway**: Docker compatible
- **AWS Amplify**: Supported

## 📝 License

This portfolio is open source and available under the MIT License.

## 👤 About

Built by **Ayush Singh**
- Backend Engineer & Systems Architect
- Specializing in scalable backend systems
- Distributed systems & architecture enthusiast

**Connect:**
- GitHub: [@sirfayush1008](https://github.com/sirfayush1008)
- LinkedIn: [@ayush-singh-2024](https://linkedin.com/in/ayush-singh-2024)
- Email: [sirfayush1008@gmail.com](mailto:sirfayush1008@gmail.com)

## 🙏 Acknowledgments

Inspired by:
- Apple's minimalist design
- Linear's premium UI
- Vercel's engineering excellence
- Stripe's attention to detail
- Raycast's product philosophy

---

**"Engineering systems that scale."**

Built with attention to detail, crafted for recruiter impact, designed for world-class engineers.
