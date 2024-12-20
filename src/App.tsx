import HeroSection from './components/hero-section'
import AboutSection from './components/about-section'
import ProjectsSection from './components/projects-section'
import ExperienceSection from './components/expereince.section'
import TestimonialsSection from './components/testimonials-section'
import ContactSection from './components/contact.section'

function App() {
  return (
    <div className="container mx-auto px-4">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  )
}

export default App