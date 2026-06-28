# Shoun Adhikary - AI/ML Portfolio

A modern, animated, single-page developer portfolio built with **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**. It features live GitHub and LeetCode integrations, a working contact form, full dark/light theming, and a single data file that drives every section.

> **Live data, zero config:** the GitHub stats and the LeetCode submission calendar fetch real numbers from public APIs at runtime, and gracefully fall back to the values in `data/portfolio.ts` if the APIs are unavailable.

---

## ✨ Features

- **Live GitHub stats** - real repository, star, fork, and contribution counts pulled from the GitHub API.
- **Live LeetCode submission calendar** - real "submissions in the past year", active days, and max streak rendered as a green heatmap.
- **Working contact form** - submissions are delivered straight to your inbox via [Web3Forms](https://web3forms.com) (no backend required).
- **Dark / light theme** - a semantic CSS-variable token system that switches instantly via the navbar toggle, with the choice persisted.
- **Smooth animations** - scroll-reveal, typing hero, particle canvas, and a loading screen powered by Framer Motion.
- **SEO ready** - metadata, Open Graph, Twitter cards, auto-generated `sitemap.xml` and `robots.txt`.
- **Fully responsive** and content-driven from one file.

---

## 🚀 Quick Start

### Prerequisites
- **Node.js 20+** ([download](https://nodejs.org)) - required by Next.js 16
- npm (or pnpm / yarn)

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Open http://localhost:3000
```

### Available scripts

| Command         | Description                                  |
| --------------- | -------------------------------------------- |
| `npm run dev`   | Start the dev server (hot reload)            |
| `npm run build` | Create an optimized production build         |
| `npm start`     | Serve the production build                   |
| `npm run lint`  | Run ESLint                                   |

---

## ⚙️ Configuration

### Live GitHub & LeetCode data
Set your usernames in `data/portfolio.ts`:

```ts
export const githubStats = {
  username: "shounadhikary", // your GitHub username
  // ...fallback numbers used if the live fetch fails
};

export const leetcodeStats = {
  username: "shoun725",      // your LeetCode username
  // ...fallback numbers
};
```

These power the live fetches automatically - no API keys needed. The values you set in the same objects are used as a fallback when the public APIs are rate-limited or offline.

**Data sources used (all public, client-side, no token):**
- GitHub contribution total: `github-contributions-api.jogruber.de`
- GitHub repos / stars / forks: `api.github.com`
- LeetCode submission calendar: `leetcode-api-faisalshohag.vercel.app`

### Contact form (Web3Forms)
The contact form posts to Web3Forms, which emails submissions to your inbox.

1. Get a free access key at [web3forms.com](https://web3forms.com) (enter your email, copy the key).
2. Provide the key one of two ways:
   - **Env var (recommended):** create `.env.local` with
     ```env
     NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-access-key
     ```
   - **Or** edit the fallback constant in `components/sections/Contact.tsx`.

> The first submission may trigger a one-time confirmation email from Web3Forms - click the link to activate delivery. When deploying, add `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` to your host's environment variables.

---

## ✏️ Customizing Content

**All content lives in one file:** `data/portfolio.ts`. Edit these exports to personalize everything:

| Export           | Controls                                   |
| ---------------- | ------------------------------------------ |
| `personalInfo`   | name, bio, location, email, social links   |
| `education`      | university, degree, courses, CGPA          |
| `skills`         | skill categories and levels                |
| `experience`     | jobs and research roles                    |
| `projects`       | project cards with links                   |
| `research`       | research interest areas                    |
| `publications`   | papers and thesis                          |
| `certifications` | credentials                                |
| `achievements`   | awards and hackathons                      |
| `blogs`          | article cards                              |
| `githubStats`    | GitHub username + fallback numbers         |
| `leetcodeStats`  | LeetCode username + fallback numbers       |
| `timeline`       | journey milestones                         |

### Add your resume
Place your resume PDF in `public/` and point `personalInfo.resumeUrl` at it (e.g. `/resume.pdf`).

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css        # Theme tokens (light/dark), global styles, animations
│   ├── layout.tsx         # Root layout, SEO metadata, theme provider, toaster
│   ├── page.tsx           # Main page - assembles all sections
│   ├── sitemap.ts         # Auto-generated sitemap
│   └── robots.ts          # SEO robots config
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky nav with mobile menu + theme toggle
│   │   └── Footer.tsx          # Footer with social links
│   ├── sections/
│   │   ├── Hero.tsx            # Animated hero with particle canvas
│   │   ├── About.tsx           # Bio, education card, quick stats
│   │   ├── Skills.tsx          # Categorized skills with progress bars
│   │   ├── Experience.tsx      # Timeline of jobs / research
│   │   ├── Projects.tsx        # Filterable project cards
│   │   ├── Research.tsx        # Research interest cards
│   │   ├── Publications.tsx    # Academic papers list
│   │   ├── Certifications.tsx
│   │   ├── Education.tsx
│   │   ├── Achievements.tsx
│   │   ├── Blog.tsx
│   │   ├── Timeline.tsx        # Visual journey timeline
│   │   ├── GitHubStats.tsx     # Live GitHub stats + language breakdown
│   │   ├── LeetCode.tsx        # Coding profile stats
│   │   ├── LeetCodeHeatmap.tsx # Live LeetCode submission calendar
│   │   └── Contact.tsx         # Contact form (Web3Forms) with validation
│   └── ui/
│       ├── ThemeProvider.tsx   # Dark/light mode provider (next-themes)
│       ├── ThemeToggle.tsx     # Theme switch button
│       ├── SectionTitle.tsx    # Reusable section heading
│       ├── ScrollProgress.tsx  # Top scroll progress bar
│       ├── BackToTop.tsx       # Back-to-top button
│       ├── SocialIcons.tsx     # GitHub / LinkedIn / X icons
│       └── LoadingScreen.tsx   # Animated loading screen
├── data/
│   └── portfolio.ts       # ⭐ ALL CONTENT - edit this file
├── lib/
│   └── utils.ts           # Utility helpers
└── public/                # Static assets (resume.pdf, images, og-image.png)
```

---

## 🌐 Deployment

### Vercel (recommended, free)
```bash
npm install -g vercel
vercel
```
Add `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` under **Project Settings → Environment Variables** so the contact form works in production.

### Netlify / other Node hosts
```bash
npm run build
npm start
```

---

## 🛠 Tech Stack

| Layer        | Tool                                          |
| ------------ | --------------------------------------------- |
| Framework    | Next.js 16 (App Router, Turbopack)            |
| UI library   | React 19                                      |
| Language     | TypeScript 5                                  |
| Styling      | Tailwind CSS v4                               |
| Animations   | Framer Motion                                 |
| Theming      | next-themes                                   |
| Icons        | Lucide React                                  |
| Notifications| react-hot-toast                               |
| Fonts        | Syne + DM Sans + JetBrains Mono (Google Fonts)|

---

## 📝 License

MIT - free to use and customize.
```
