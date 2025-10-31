# Next.js Personal Website - Implementation Plan

## Project Overview
A modern, professional personal website built with Next.js 14+, TypeScript, and Tailwind CSS, optimized for deployment on Vercel. The site will showcase projects (including video demos), skills, experience, and provide a contact method.

---

## Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Form Validation**: React Hook Form + Zod
- **Icons**: Lucide React
- **Deployment**: Vercel
- **Video Player**: react-player or native HTML5 video

---

## Phase 1: Project Initialization

### 1.1 Setup Next.js Project
```bash
npx create-next-app@latest personal-website --typescript --tailwind --app --eslint
```

**Configuration Options:**
- ✅ TypeScript
- ✅ ESLint
- ✅ Tailwind CSS
- ✅ App Router
- ✅ Import alias (@/*)
- ❌ Turbopack (optional)

### 1.2 Install Dependencies
```bash
npm install framer-motion lucide-react react-hook-form zod @hookform/resolvers
npm install -D prettier prettier-plugin-tailwindcss
```

### 1.3 Configure Files

**next.config.js**
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['your-image-domain.com'],
  },
}

module.exports = nextConfig
```

**tailwind.config.js**
- Add custom colors (brand colors)
- Add custom fonts
- Configure dark mode: 'class'
- Add custom animations

**.prettierrc**
```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

**.env.local**
```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
# Add email service API keys if using
```

---

## Phase 2: Project Structure Setup

### 2.1 Create Directory Structure
```
/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── projects/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx (optional detail pages)
│   ├── blog/ (optional)
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   └── contact/
│       └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── FeaturedProjects.tsx
│   │   └── SkillsSection.tsx
│   ├── projects/
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectGrid.tsx
│   │   ├── ProjectFilter.tsx
│   │   └── VideoPlayer.tsx (for video demos)
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   └── ThemeToggle.tsx
│   └── forms/
│       └── ContactForm.tsx
├── lib/
│   ├── utils.ts (utility functions)
│   ├── constants.ts
│   └── types.ts
├── data/
│   ├── projects.ts (project data)
│   ├── skills.ts
│   ├── experience.ts
│   └── social.ts
├── public/
│   ├── images/
│   │   ├── projects/
│   │   ├── profile/
│   │   └── icons/
│   ├── videos/ (if hosting locally)
│   ├── resume.pdf
│   ├── favicon.ico
│   └── og-image.jpg
└── styles/
    └── globals.css
```

---

## Phase 3: Core Components Implementation

### 3.1 Layout Components

#### Header.tsx
**Features:**
- Sticky navigation bar
- Logo/name
- Navigation links (Home, About, Projects, Contact)
- Theme toggle (dark/light mode)
- Mobile responsive hamburger menu
- Smooth scroll to sections

**Implementation Steps:**
1. Create navigation state management
2. Implement mobile menu toggle
3. Add scroll detection for styling changes
4. Integrate theme toggle component
5. Add active link highlighting

#### Footer.tsx
**Features:**
- Copyright notice
- Social media links
- Quick navigation links
- Contact email
- Built with Next.js badge

#### ThemeToggle.tsx
**Features:**
- Toggle between dark/light mode
- Persist preference in localStorage
- Smooth transition animations
- Moon/Sun icon

### 3.2 Home Page Components

#### Hero.tsx
**Features:**
- Large headline with name
- Animated subtitle (profession/role)
- Brief tagline
- CTA buttons (View Projects, Contact Me)
- Profile image (optional)
- Animated background or gradient

**Implementation:**
```typescript
// Text animation with Framer Motion
// Staggered fade-in for elements
// Hover effects on buttons
```

#### FeaturedProjects.tsx
**Features:**
- Display 3-4 featured projects
- Project cards with hover effects
- Quick preview with image/video thumbnail
- Link to full projects page

#### SkillsSection.tsx
**Features:**
- Grid/list of technical skills
- Categorized by type (Languages, Frameworks, Tools)
- Skill level indicators (optional)
- Icon for each technology

### 3.3 Projects Components

#### ProjectCard.tsx
**Features:**
- Project thumbnail (image or video thumbnail)
- Project title
- Brief description
- Tech stack badges
- Links (GitHub, Live Demo, Video Demo)
- Hover effects with overlay
- Video indicator icon if project has video

**Props Interface:**
```typescript
interface ProjectCardProps {
  title: string
  description: string
  image?: string
  videoUrl?: string // YouTube, Vimeo, or local path
  videoThumbnail?: string
  techStack: string[]
  githubUrl?: string
  liveUrl?: string
  featured?: boolean
}
```

#### VideoPlayer.tsx
**Features:**
- Embedded video player (YouTube/Vimeo)
- Or HTML5 video player for local videos
- Play/pause controls
- Fullscreen option
- Loading states
- Fallback for video errors

**Implementation Options:**
1. **YouTube/Vimeo**: Use react-player library
2. **Local videos**: HTML5 video element with custom controls
3. **Modal popup**: Open video in modal on click

```typescript
// For YouTube/Vimeo
import ReactPlayer from 'react-player'

// For local videos
<video controls poster={thumbnail}>
  <source src="/videos/project-demo.mp4" type="video/mp4" />
</video>
```

#### ProjectGrid.tsx
**Features:**
- Responsive grid layout
- Filter by technology/category
- Sort options (date, name, featured)
- Animation on load

#### ProjectFilter.tsx
**Features:**
- Filter buttons by tech stack
- "All" option
- Active state styling
- Smooth filtering animation

---

## Phase 4: Data Structure

### 4.1 projects.ts

```typescript
export interface Project {
  id: string
  title: string
  slug: string
  description: string
  longDescription?: string
  image?: string
  videoUrl?: string // YouTube/Vimeo URL or local path
  videoType?: 'youtube' | 'vimeo' | 'local'
  videoThumbnail?: string
  techStack: string[]
  category: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
  date: string
  highlights?: string[]
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Project Name',
    slug: 'project-name',
    description: 'Short description of the project',
    longDescription: 'Detailed description with challenges, solutions, and learnings',
    image: '/images/projects/project1-thumbnail.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID',
    videoType: 'youtube',
    videoThumbnail: '/images/projects/project1-video-thumb.jpg',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    category: ['Web Development', 'Full Stack'],
    githubUrl: 'https://github.com/username/project',
    liveUrl: 'https://project.vercel.app',
    featured: true,
    date: '2024-01',
    highlights: [
      'Implemented real-time features',
      'Optimized performance by 50%',
      'Achieved 95+ Lighthouse score'
    ]
  },
  // More projects...
]
```

### 4.2 skills.ts

```typescript
export interface Skill {
  name: string
  category: 'Language' | 'Framework' | 'Tool' | 'Database' | 'Other'
  level?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'
  icon?: string
}

export const skills: Skill[] = [
  { name: 'TypeScript', category: 'Language', level: 'Advanced' },
  { name: 'React', category: 'Framework', level: 'Advanced' },
  { name: 'Next.js', category: 'Framework', level: 'Advanced' },
  // More skills...
]
```

### 4.3 experience.ts

```typescript
export interface Experience {
  title: string
  company: string
  location: string
  startDate: string
  endDate: string | 'Present'
  description: string[]
  technologies: string[]
}

export const experiences: Experience[] = [
  // Work experience...
]
```

---

## Phase 5: Page Implementation

### 5.1 Homepage (app/page.tsx)

**Sections:**
1. Hero section with introduction
2. Featured projects (3-4 cards)
3. Skills overview
4. Brief about section
5. CTA to contact

**Layout:**
```typescript
export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProjects />
      <SkillsSection />
      <AboutPreview />
      <CTASection />
    </main>
  )
}
```

### 5.2 About Page (app/about/page.tsx)

**Sections:**
1. Professional bio with profile photo
2. Work experience timeline
3. Education
4. Complete skills list
5. Interests/hobbies
6. Download resume button

**Features:**
- Animated timeline
- Collapsible experience cards
- Skill progress bars (optional)

### 5.3 Projects Page (app/projects/page.tsx)

**Features:**
1. Filter bar at top
2. Project grid (3 columns on desktop, 1-2 on mobile)
3. Each card shows:
   - Thumbnail image OR video preview
   - Video play icon overlay if video exists
   - Project title
   - Brief description
   - Tech stack badges
   - Links (GitHub, Live, Video)

**Video Handling:**
```typescript
// On card click or play button click:
// Option 1: Open modal with video player
// Option 2: Navigate to project detail page with video
// Option 3: Inline video player expansion
```

**Filter Implementation:**
```typescript
const [filter, setFilter] = useState('all')
const filteredProjects = projects.filter(project =>
  filter === 'all' || project.category.includes(filter)
)
```

### 5.4 Project Detail Page (app/projects/[slug]/page.tsx) - OPTIONAL

**Sections:**
1. Large hero image/video
2. Project title and date
3. Tech stack badges
4. Long description
5. Key highlights/features
6. Video demo section (if exists)
7. Screenshots/images gallery
8. Links (GitHub, Live Demo)
9. "More Projects" section

**Video Section:**
```typescript
{project.videoUrl && (
  <section className="my-8">
    <h2>Video Demo</h2>
    <VideoPlayer
      url={project.videoUrl}
      type={project.videoType}
      thumbnail={project.videoThumbnail}
    />
  </section>
)}
```

### 5.5 Contact Page (app/contact/page.tsx)

**Features:**
1. Contact form with fields:
   - Name
   - Email
   - Subject
   - Message
2. Form validation (Zod schema)
3. Success/error messages
4. Social media links
5. Alternative contact info (email link)

**Form Implementation:**
```typescript
// Use React Hook Form + Zod
// Option 1: Client-side only (shows email in mailto)
// Option 2: API route with email service (Resend, SendGrid)
// Option 3: Form service (Formspree, Netlify Forms)
```

---

## Phase 6: Styling & Design

### 6.1 Color Scheme
**Light Mode:**
- Background: White/Light gray
- Text: Dark gray/Black
- Primary: Blue/Custom brand color
- Secondary: Complementary color
- Accents: Highlight colors

**Dark Mode:**
- Background: Dark gray/Near black
- Text: White/Light gray
- Primary: Lighter blue/Brand color
- Secondary: Adjusted complementary
- Accents: Brighter highlights

### 6.2 Typography
- Headings: Inter, Poppins, or Montserrat
- Body: Inter or Open Sans
- Code: JetBrains Mono or Fira Code

```typescript
// app/layout.tsx
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
```

### 6.3 Animations
**Use Framer Motion for:**
- Page transitions
- Fade-in on scroll
- Hover effects
- Card animations
- Staggered children animations

**Example:**
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  {content}
</motion.div>
```

### 6.4 Responsive Design Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

**Grid Layouts:**
```typescript
// Tailwind classes
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
```

---

## Phase 7: SEO & Performance

### 7.1 Metadata Configuration

**app/layout.tsx:**
```typescript
export const metadata: Metadata = {
  title: 'Your Name | Software Developer',
  description: 'Personal website and portfolio of Your Name - Software Developer specializing in...',
  keywords: ['Next.js', 'Developer', 'Portfolio', 'Your Name'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Your Name | Software Developer',
    description: 'Personal website and portfolio...',
    url: 'https://yourwebsite.com',
    siteName: 'Your Name',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Name | Software Developer',
    description: 'Personal website and portfolio...',
    images: ['/og-image.jpg'],
  },
}
```

**Per-page metadata:**
```typescript
// app/projects/page.tsx
export const metadata: Metadata = {
  title: 'Projects | Your Name',
  description: 'Portfolio of projects and work...',
}
```

### 7.2 Image Optimization

```typescript
import Image from 'next/image'

<Image
  src="/images/project.jpg"
  alt="Project description"
  width={800}
  height={600}
  priority={featured} // for above-fold images
  placeholder="blur"
  blurDataURL="data:image/..." // optional
/>
```

### 7.3 Video Optimization
- Use compressed video formats (H.264, VP9)
- Provide multiple resolutions
- Use poster images
- Lazy load videos below fold
- Consider hosting on YouTube/Vimeo for better CDN

### 7.4 Performance Optimizations
- Code splitting (automatic with App Router)
- Dynamic imports for heavy components
- Image optimization with next/image
- Font optimization with next/font
- Static generation where possible
- ISR for dynamic content

### 7.5 Generate Sitemap

**app/sitemap.ts:**
```typescript
export default function sitemap() {
  return [
    {
      url: 'https://yourwebsite.com',
      lastModified: new Date(),
    },
    {
      url: 'https://yourwebsite.com/about',
      lastModified: new Date(),
    },
    {
      url: 'https://yourwebsite.com/projects',
      lastModified: new Date(),
    },
    {
      url: 'https://yourwebsite.com/contact',
      lastModified: new Date(),
    },
  ]
}
```

### 7.6 robots.txt

**app/robots.ts:**
```typescript
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://yourwebsite.com/sitemap.xml',
  }
}
```

---

## Phase 8: Vercel Deployment

### 8.1 Pre-deployment Checklist
- [ ] All environment variables documented
- [ ] Build succeeds locally (`npm run build`)
- [ ] No TypeScript errors
- [ ] No ESLint errors
- [ ] Images optimized
- [ ] Test on mobile devices
- [ ] Test dark/light mode
- [ ] Test all navigation links
- [ ] Test contact form
- [ ] Test video playback

### 8.2 Vercel Configuration

**vercel.json (optional):**
```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "regions": ["iad1"]
}
```

### 8.3 Deployment Steps

1. Push code to GitHub
2. Connect repository to Vercel
3. Configure project:
   - Framework: Next.js
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: (auto-detected)
4. Add environment variables in Vercel dashboard
5. Deploy

### 8.4 Post-deployment
- [ ] Verify all pages load
- [ ] Check video playback
- [ ] Test forms
- [ ] Verify SEO metadata (view source)
- [ ] Test on multiple devices
- [ ] Check Lighthouse scores
- [ ] Set up custom domain (optional)
- [ ] Configure analytics (optional)

---

## Phase 9: Optional Enhancements

### 9.1 Blog Section
- Markdown-based blog posts
- MDX support for interactive content
- Blog post listing page
- Individual blog post pages
- Syntax highlighting for code blocks
- Reading time estimation
- Tags/categories

### 9.2 Analytics
- Vercel Analytics (built-in)
- Google Analytics 4
- Track page views
- Track button clicks
- Track video plays

### 9.3 Contact Form Backend
**Option 1: API Route + Email Service**
```typescript
// app/api/contact/route.ts
import { Resend } from 'resend'

export async function POST(request: Request) {
  const body = await request.json()
  // Send email using Resend
}
```

**Option 2: Third-party Form Service**
- Formspree
- Netlify Forms (if deploying to Netlify)
- Google Forms embed

### 9.4 Testimonials Section
- Client testimonials
- Colleague recommendations
- Display with carousel

### 9.5 Resume Download Tracking
- Track resume downloads
- Add download button with analytics event

### 9.6 Search Functionality
- Search projects by keyword
- Algolia integration (optional)

### 9.7 Internationalization (i18n)
- Multi-language support
- Language switcher

---

## Implementation Timeline

### Week 1: Setup & Foundation
- Days 1-2: Project setup, dependencies, configuration
- Days 3-5: Create directory structure, layout components
- Days 6-7: Data structure, implement home page

### Week 2: Core Pages
- Days 8-10: About and Projects pages
- Days 11-12: Video player component, project cards
- Days 13-14: Contact page and form

### Week 3: Polish & Deploy
- Days 15-17: Styling, animations, responsive design
- Days 18-19: SEO optimization, performance tuning
- Days 20-21: Testing, bug fixes, deployment

---

## Testing Checklist

### Functionality
- [ ] All navigation links work
- [ ] Theme toggle works and persists
- [ ] Mobile menu opens/closes
- [ ] Project filters work
- [ ] Videos play correctly
- [ ] Contact form validates correctly
- [ ] Contact form submits successfully
- [ ] External links open in new tabs
- [ ] Images load correctly
- [ ] Resume downloads

### Responsive Design
- [ ] Mobile (< 640px)
- [ ] Tablet (640px - 1024px)
- [ ] Desktop (> 1024px)
- [ ] Large screens (> 1920px)

### Browser Compatibility
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

### Performance
- [ ] Lighthouse Performance > 90
- [ ] Lighthouse Accessibility > 90
- [ ] Lighthouse Best Practices > 90
- [ ] Lighthouse SEO > 90

### SEO
- [ ] Meta tags present
- [ ] Open Graph tags working
- [ ] Sitemap accessible
- [ ] robots.txt accessible
- [ ] Proper heading hierarchy
- [ ] Alt text on images

---

## Resources & References

### Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Vercel Documentation](https://vercel.com/docs)

### Design Inspiration
- [Awwwards](https://www.awwwards.com/)
- [Dribbble](https://dribbble.com/)
- [Behance](https://www.behance.net/)

### Video Handling
- [react-player](https://github.com/cookpete/react-player)
- [YouTube Embedded Player](https://developers.google.com/youtube/player_parameters)
- [HTML5 Video](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)

### Icons
- [Lucide React](https://lucide.dev/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Heroicons](https://heroicons.com/)

---

## Notes
- Prioritize projects with video demos by marking them as `featured`
- Ensure video thumbnails are optimized for quick loading
- Consider YouTube/Vimeo for hosting to save bandwidth
- For local videos, compress and provide multiple formats
- Test video playback on mobile devices (autoplay restrictions)
- Add "Watch Demo" CTA prominently on project cards with videos
