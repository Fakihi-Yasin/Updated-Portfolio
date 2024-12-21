import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"

const projects = [
  {
    title: "Project 1",
    description: "A brief description of Project 1",
    image: "/public/Stadium.png",
    techStack: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername/project1",
    demo: "https://project1-demo.com",
  },
  {
    title: "Project 2",
    description: "A brief description of Project 2",
    image: "/public/web-dark.png",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/yourusername/project2",
    demo: "https://project2-demo.com",
  },
  {
    title: "Project 3",
    description: "A brief description of Project 3",
    image: "/public/peoplePerTask.png",
    techStack: ["React", "Redux", "Express"],
    github: "https://github.com/yourusername/project3",
    demo: "https://project3-demo.com",
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="transition-transform hover:scale-105">
            <CardHeader>
              <img src={project.image} alt={project.title} className="rounded-t-lg w-full h-48 object-cover" />
            </CardHeader>
            <CardContent>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
              <div className="mt-4">
                <h4 className="font-semibold">Tech Stack:</h4>
                <ul className="flex flex-wrap gap-2 mt-2">
                  {project.techStack.map((tech, techIndex) => (
                    <li key={techIndex} className="bg-primary text-primary-foreground px-2 py-1 rounded text-sm">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button asChild variant="outline">
                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              </Button>
              <Button asChild>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

