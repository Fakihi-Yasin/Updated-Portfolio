import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    title: "Senior Developer",
    company: "Tech Corp",
    period: "2020 - Present",
    description: "Led development of multiple high-impact projects, mentored junior developers, and implemented best practices.",
  },
  {
    title: "Full Stack Developer",
    company: "Web Solutions Inc",
    period: "2016 - 2020",
    description: "Developed and maintained various web applications, collaborated with cross-functional teams, and improved application performance.",
  },
  {
    title: "Junior Developer",
    company: "StartUp Co",
    period: "2015 - 2017",
    description: "Assisted in the development of company's main product, learned and applied new technologies, and participated in code reviews.",
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <h2 className="text-3xl font-bold mb-8">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <Card key={index} className="transition-transform hover:scale-105">
            <CardHeader>
              <CardTitle>{exp.title}</CardTitle>
              <CardDescription>{exp.company} | {exp.period}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{exp.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

