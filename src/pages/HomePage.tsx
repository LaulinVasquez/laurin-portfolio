import FeaturedProjects from '../components/projects/FeaturedProjects'
import HeroWindow from '../components/windows/HeroWindow'

function HomePage() {
  return (
    <section id="home" className="flex w-full flex-col gap-6">
      <HeroWindow />
      <FeaturedProjects />
    </section>
  )
}

export default HomePage
