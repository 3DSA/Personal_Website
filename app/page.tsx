import { Hero } from '@/components/home/Hero'
import { FeaturedProjects } from '@/components/home/FeaturedProjects'
import { SkillsSection } from '@/components/home/SkillsSection'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <SkillsSection />
    </>
  )
}
