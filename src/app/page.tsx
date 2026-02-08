import Hero from '@/components/Hero/Hero'
import Skills from '@/components/Skills/Skills'
import ProjectList from '@/components/Projects/ProjectList'
import Experience from '@/components/Experience/Experience'
import Footer from '@/components/Footer/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <ProjectList />
      <Experience />
      <Footer />
    </main>
  )
}
