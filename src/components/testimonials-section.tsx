"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: "John Doe",
    position: "CEO, Tech Corp",
    content: "Working with this developer was an absolute pleasure. Their technical skills and attention to detail are outstanding.",
  },
  {
    name: "Jane Smith",
    position: "Project Manager, Web Solutions Inc",
    content: "I was impressed by the developer's ability to deliver high-quality work consistently and on time. Highly recommended!",
  },
  {
    name: "Mike Johnson",
    position: "CTO, StartUp Co",
    content: "This developer's problem-solving skills and innovative approach to challenges make them a valuable asset to any team.",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
      <div className="relative">
        <Card className="transition-transform hover:scale-105">
          <CardHeader>
            <CardTitle>{testimonials[currentIndex].name}</CardTitle>
            <CardDescription>{testimonials[currentIndex].position}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="italic">&ldquo;{testimonials[currentIndex].content}&rdquo;</p>
          </CardContent>
        </Card>
        <div className="absolute top-1/2 -translate-y-1/2 left-0 -ml-4">
          <Button variant="outline" size="icon" onClick={prevTestimonial}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-0 -mr-4">
          <Button variant="outline" size="icon" onClick={nextTestimonial}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

