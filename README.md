# 🚀 Personal Portfolio - Vishvaa K

> **Software Engineer & AI Systems Developer** — A high-performance, immersive portfolio application built with React, TypeScript, and Tailwind CSS. Featuring interactive 3D elements, custom-designed metrics, dynamic particle networks, and a premium dark-themed layout.

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![ThreeJS](https://img.shields.io/badge/Three.js-black?style=for-the-badge&logo=three.js&logoColor=white)
![Spline](https://img.shields.io/badge/Spline-3D-FF3366?style=for-the-badge&logo=spline&logoColor=white)

---

## 📋 Table of Contents

- [About](#about)
- [Architecture & Features](#architecture--features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Run Locally](#run-locally)

---

## About 🎯

This portfolio highlights my experience in building intelligent, scalable backend systems, automating infrastructure operations, and integrating modern AI/LLM workflows. It serves as a visual showcase of my engineering trajectory, technical skillset, key projects, community leadership, and competitive achievements.

---

## Architecture & Features 🏗️

- **Immersive Visuals & 3D Interaction**: Integrated interactive 3D scene (Spline) and a smooth reactive canvas-based star field.
- **Dynamic Styling**: A sleek, custom dark-first color scheme with glassmorphism overlays and interactive micro-animations.
- **Trajectory Timeline**: A chronological timeline highlighting academic milestones and professional experience.
- **Beyond Engineering & Recognition**: Showcases community involvement, leadership, tech-for-good initiatives, hackathons, and certifications.
- **Optimized Performance**: Code-splitting secondary sections via `React.lazy` and `Suspense` for fast initial paint (TTI/LCP), coupled with hardware-accelerated transforms for custom mouse cursor behaviors.

---

## Tech Stack 🛠️

- **Core**: React 18, TypeScript, Vite
- **Styling & Motion**: Tailwind CSS, Framer Motion, Tailwind CSS Animate
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei, Spline 3D
- **UI Components**: Radix UI primitives, Lucide Icons, Custom HUD Cursors
- **Monitoring & Analytics**: Vercel Analytics, Vercel Speed Insights

---

## Folder Structure 📁

```text
src/
├── components/
│   ├── ui/                    # Reusable UI primitives
│   ├── About.tsx              # About section
│   ├── BeyondEngineering.tsx  # Leadership section
│   ├── BottomNav.tsx          # Mobile navigation
│   ├── CustomCursor.tsx       # 3D interactive cursor tracker
│   ├── Experience.tsx         # Trajectory/timeline
│   ├── Footer.tsx             # Footer links & socials
│   ├── Hero.tsx               # Splash screen & typewriters
│   ├── Navbar.tsx             # Main top navigation
│   ├── ProjectCard.tsx        # Project card component
│   ├── Projects.tsx           # Projects grid & modals
│   ├── Recognition.tsx        # Awards & certs list
│   ├── SplineScene.tsx        # Spline 3D loader
│   ├── StarBackground.tsx     # ThreeJS stars particle layer
│   └── TechStack.tsx          # Tech stack showcase
├── contexts/
│   └── theme-provider.tsx     # Theme state provider
├── hooks/
│   ├── use-mobile.tsx         # Responsive viewport checks
│   ├── useScrollAnimation.ts  # Element entry animation
│   └── useTypingEffect.ts     # Typewriter loops
├── lib/
│   └── utils.ts               # Tailwind class merges
├── locales/
│   └── content.ts             # Global portfolio content data
├── pages/
│   ├── Index.tsx              # Portfolio home page
│   └── NotFound.tsx           # Error 404 page
├── App.tsx                    # React routing & context setups
└── main.tsx                   # Mounting entry point
```

---

## Run Locally ▶️

### Setup

Install the project dependencies using your preferred package manager (npm, yarn, or bun):

```bash
# Using npm
npm install

# Or using bun
bun install
```

### Development Server

Run the local Vite server:

```bash
# Using npm
npm run dev

# Or using bun
bun dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

To compile and preview the production build locally:

```bash
# Compile bundle
npm run build

# Preview build
npm run preview
```
