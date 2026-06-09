# Shoun Adhikary - Portfolio

A premium, modern portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ ([download](https://nodejs.org))
- npm or yarn

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
# → http://localhost:3000
```

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css        # Global styles, CSS variables, animations
│   ├── layout.tsx         # Root layout with SEO metadata
│   ├── page.tsx           # Main page — assembles all sections
│   ├── sitemap.ts         # Auto-generated sitemap
│   └── robots.ts          # SEO robots config
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx     # Sticky nav with mobile menu
│   │   └── Footer.tsx     # Footer with social links
│   ├── sections/
│   │   ├── Hero.tsx          # Animated hero with particle canvas
│   │   ├── About.tsx         # Bio, education card, quick stats
│   │   ├── Skills.tsx        # Categorized skills with progress bars
│   │   ├── Experience.tsx    # Timeline of jobs/research
│   │   ├── Projects.tsx      # Filterable project cards
│   │   ├── Research.tsx      # Research interest cards
│   │   ├── Publications.tsx  # Academic papers list
│   │   ├── Certifications.tsx
│   │   ├── Education.tsx
│   │   ├── Achievements.tsx
│   │   ├── Blog.tsx
│   │   ├── Timeline.tsx      # Visual journey timeline
│   │   ├── GitHubStats.tsx   # GitHub dashboard
│   │   ├── LeetCode.tsx      # Coding profile stats
│   │   └── Contact.tsx       # Contact form with validation
│   └── ui/
│       ├── ThemeProvider.tsx  # Dark/light mode provider
│       ├── ThemeToggle.tsx    # Theme switch button
│       ├── SectionTitle.tsx   # Reusable section heading
│       ├── ScrollProgress.tsx # Top scroll progress bar
│       ├── BackToTop.tsx      # Back-to-top button
│       └── LoadingScreen.tsx  # Animated loading screen
├── data/
│   └── portfolio.ts       # ⭐ ALL CONTENT — edit this file!
├── lib/
│   └── utils.ts           # Utility functions
└── public/                # Static assets (resume.pdf, images)
```

## ✏️ Customization

**All content lives in one file:** `data/portfolio.ts`

Edit these exports to personalize everything:
- `personalInfo` - name, bio, location, social links
- `education` - university, degree, courses, CGPA
- `skills` - all skill categories with levels
- `experience` - jobs and research roles
- `projects` - project cards with links
- `research` - research interest areas
- `publications` - papers and thesis
- `certifications` - credentials
- `achievements` - awards and hackathons
- `blogs` - article cards
- `githubStats` - GitHub numbers
- `leetcodeStats` - LeetCode numbers
- `timeline` - journey milestones

## 📦 Add Your Resume

Place your resume PDF at:
```
public/resume.pdf
```

## 🌐 Deployment

### Vercel (Recommended — Free)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload the .next folder to Netlify
```

### Self-hosted
```bash
npm run build
npm start
```

## 🛠 Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Theme:** next-themes
- **Icons:** Lucide React
- **Fonts:** Syne + DM Sans + JetBrains Mono (Google Fonts)

## 📝 License
MIT - free to use and customize.
