import HeroWindow from '../components/windows/HeroWindow'

interface HomePageProps {
  className?: string
}

function HomePage({ className = '' }: HomePageProps) {
  return (
    <section id="home" className={`flex w-full flex-col gap-6 ${className}`.trim()}>
      <HeroWindow />
    </section>
  )
}

export default HomePage
