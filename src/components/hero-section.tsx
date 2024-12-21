import { Button } from "./ui/button"
import { Github, Linkedin, X } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="py-20 flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-4xl font-bold mb-4">Hi, I'm Yasin Fakihi</h1>
        <p className="text-xl mb-6">A passionate developer creating amazing web experiences</p>
        <div className="flex space-x-4">
          <Button asChild>
            <a href="/path-to-your-resume.pdf" download>Download Resume</a>
          </Button>
          <Button variant="outline" size="icon">
            <a href="https://github.com/Fakihi-Yasin" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" size="icon">
            <a href="https://www.linkedin.com/in/yasin-fakihi/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" size="icon">
            <a href="https://x.com/YassinFakihi" target="_blank" rel="noopener noreferrer">
              <X className="h-4 w-4"  />
            </a>
          </Button>
        </div>
      </div>
      <div className="md:w-1/2">
        <img
          src="https://fakihiportfolio.s3.eu-central-1.amazonaws.com/1715340253160.jpeg"
          alt="Your Name"
          className="rounded-full w-64 h-64 mx-auto"
        />
      </div>
    </section>
  )
}

