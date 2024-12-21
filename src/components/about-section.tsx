import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
const skills = [
 { 
   category: "Frontend", 
   items: ["React", "Next.js", "Tailwind CSS"],
   icon: "🎨"
 },
 { 
   category: "Backend", 
   items: ["Node.js", "Express", "MongoDB"],
   icon: "⚙️"
 },
 { 
   category: "DevOps", 
   items: ["CI/CD", "GitHub Actions", "GitLab", "AWS", "Docker"],
   icon: "🚀"
 },
 { 
   category: "Tools", 
   items: ["Git", "Docker", "VS Code"],
   icon: "🛠️"
 },
]

export default function AboutSection() {
 return (
   <section id="about" className="container mx-auto py-24 px-4">
     <motion.div
       initial={{ opacity: 0, y: 20 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.5 }}
       viewport={{ once: true }}
     >
       <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
         About Me
       </h2>
       <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/50 rounded-full mb-8" />
     </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
       <motion.div
         initial={{ opacity: 0, x: -20 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.5, delay: 0.2 }}
         viewport={{ once: true }}
         className="space-y-6"
       >
         <p className="text-lg text-muted-foreground leading-relaxed">
           I'm a passionate developer with a strong focus on creating intuitive and efficient web applications. With years of experience in both frontend and backend technologies, I strive to deliver high-quality solutions that meet and exceed client expectations.
         </p>
         <p className="text-lg text-muted-foreground leading-relaxed">
           When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities.
         </p>
       </motion.div>
        <motion.div
         initial={{ opacity: 0, x: 20 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.5, delay: 0.2 }}
         viewport={{ once: true }}
         className="grid grid-cols-1 sm:grid-cols-2 gap-4"
       >
         {skills.map((skill, index) => (
           <motion.div
             key={index}
             whileHover={{ scale: 1.02 }}
             transition={{ type: "spring", stiffness: 300 }}
           >
             <Card className="border border-border/50 bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-background/60">
               <CardHeader>
                 <CardTitle className="flex items-center gap-2">
                   <span className="text-2xl">{skill.icon}</span>
                   {skill.category}
                 </CardTitle>
               </CardHeader>
               <CardContent>
                 <ul className="space-y-2">
                   {skill.items.map((item, itemIndex) => (
                     <li 
                       key={itemIndex}
                       className="flex items-center gap-2 text-muted-foreground"
                     >
                       <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
                       {item}
                     </li>
                   ))}
                 </ul>
               </CardContent>
             </Card>
           </motion.div>
         ))}
       </motion.div>
     </div>
   </section>
 )
}
