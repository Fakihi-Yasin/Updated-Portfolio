import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Express", "MongoDB"] },
  { category: "Tools", items: ["Git", "Docker", "VS Code"] },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <h2 className="text-3xl font-bold mb-8">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="mb-4">
            I'm a passionate developer with a strong focus on creating intuitive and efficient web applications. With years of experience in both frontend and backend technologies, I strive to deliver high-quality solutions that meet and exceed client expectations.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <Card key={index} className="transition-transform hover:scale-105">
              <CardHeader>
                <CardTitle>{skill.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-4">
                  {skill.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

