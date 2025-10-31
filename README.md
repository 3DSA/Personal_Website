# Personal Website - Dhruv Susheelkar

A modern, responsive personal portfolio website built with Next.js 14+, TypeScript, and Tailwind CSS. Features include project showcases with video demos, dark/light mode, and a contact form.

## Features

- **Modern Design**: Clean, professional UI with smooth animations and transitions
- **Dark Mode**: Toggle between light and dark themes with persistence
- **Responsive**: Fully responsive design that works on all devices
- **Video Demos**: Showcase projects with embedded video players (YouTube, Vimeo, or local videos)
- **Project Filtering**: Filter projects by category
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Proper meta tags, sitemap, and robots.txt
- **Performance**: Optimized images, fonts, and code splitting
- **Type-Safe**: Built with TypeScript for better developer experience

## Tech Stack

- **Framework**: [Next.js 14+](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Video Player**: [React Player](https://github.com/cookpete/react-player)
- **Deployment**: [Vercel](https://vercel.com/)

## Project Structure

```
/
├── app/                      # Next.js app directory
│   ├── about/               # About page
│   ├── projects/            # Projects page
│   ├── contact/             # Contact page
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Homepage
│   ├── sitemap.ts           # Dynamic sitemap
│   └── robots.ts            # Robots.txt configuration
├── components/              # React components
│   ├── layout/             # Layout components (Header, Footer)
│   ├── home/               # Home page components
│   ├── projects/           # Project-related components
│   ├── ui/                 # Reusable UI components
│   └── forms/              # Form components
├── data/                   # Data files
│   ├── projects.ts         # Project data
│   ├── skills.ts           # Skills data
│   ├── experience.ts       # Work experience & education
│   └── social.ts           # Social media links
├── lib/                    # Utility functions
│   ├── utils.ts            # Helper functions
│   ├── types.ts            # TypeScript types
│   └── constants.ts        # App constants
├── public/                 # Static assets
│   ├── images/             # Images
│   ├── videos/             # Local videos (optional)
│   └── resume.pdf          # Resume file
└── styles/                 # Global styles
    └── globals.css         # Global CSS with Tailwind
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/3DSA/Personal_Website.git
cd Personal_Website
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file:
```bash
cp .env.local.example .env.local
```

4. Update environment variables in `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME="Your Name"
NEXT_PUBLIC_SITE_DESCRIPTION="Your Description"
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Update Personal Information

1. **Site Configuration**: Edit `lib/constants.ts` to update site metadata and navigation links

2. **Projects**: Edit `data/projects.ts` to add/modify your projects
   - Add project images to `public/images/projects/`
   - Add video URLs (YouTube, Vimeo) or local videos to `public/videos/`

3. **Skills**: Edit `data/skills.ts` to list your technical skills

4. **Experience**: Edit `data/experience.ts` to add your work experience and education

5. **Social Links**: Edit `data/social.ts` to update your social media profiles

6. **Resume**: Replace `public/resume.pdf` with your own resume

### Add Project Video Demos

Projects can have video demos in three formats:

#### YouTube Videos
```typescript
{
  videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID',
  videoType: 'youtube',
  videoThumbnail: '/images/projects/thumbnail.jpg', // optional
}
```

#### Vimeo Videos
```typescript
{
  videoUrl: 'https://vimeo.com/VIDEO_ID',
  videoType: 'vimeo',
  videoThumbnail: '/images/projects/thumbnail.jpg', // optional
}
```

#### Local Videos
```typescript
{
  videoUrl: '/videos/project-demo.mp4',
  videoType: 'local',
  videoThumbnail: '/images/projects/thumbnail.jpg',
}
```

### Styling

- **Colors**: Edit `tailwind.config.ts` to customize the color scheme
- **Fonts**: Update `app/layout.tsx` to change fonts
- **Global Styles**: Edit `styles/globals.css` for custom CSS

## Building for Production

Build the project:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## Deployment to Vercel

### Automatic Deployment

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com/) and sign in
3. Click "New Project" and import your GitHub repository
4. Configure environment variables if needed
5. Click "Deploy"

### Manual Deployment

Install Vercel CLI:
```bash
npm install -g vercel
```

Deploy:
```bash
vercel
```

### Environment Variables

Add these environment variables in Vercel dashboard:
- `NEXT_PUBLIC_SITE_URL`: Your production URL
- `NEXT_PUBLIC_SITE_NAME`: Your name
- `NEXT_PUBLIC_SITE_DESCRIPTION`: Site description

## Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm start`: Start production server
- `npm run lint`: Run ESLint
- `npm run format`: Format code with Prettier

## Performance Optimization

- **Images**: Use Next.js Image component for automatic optimization
- **Fonts**: Google Fonts are optimized with `next/font`
- **Code Splitting**: Automatic with Next.js App Router
- **Lazy Loading**: Videos and heavy components load on demand

## SEO Features

- **Meta Tags**: Comprehensive meta tags for all pages
- **Open Graph**: Social media preview cards
- **Sitemap**: Auto-generated sitemap at `/sitemap.xml`
- **Robots.txt**: SEO-friendly robots.txt at `/robots.txt`
- **Structured Data**: Schema.org markup (can be extended)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Accessibility

- Semantic HTML
- ARIA labels
- Keyboard navigation support
- Focus indicators
- Screen reader friendly

## Contributing

This is a personal portfolio project, but suggestions and feedback are welcome! Feel free to open an issue or submit a pull request.

## License

MIT License - feel free to use this project as a template for your own portfolio!

## Contact

- **Email**: your.email@example.com
- **GitHub**: [3DSA](https://github.com/3DSA)
- **LinkedIn**: [Your Profile](https://linkedin.com/in/yourprofile)

## Acknowledgments

- Design inspiration from various portfolio websites
- Icons from [Lucide](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

---

Built with ❤️ using Next.js and TypeScript
