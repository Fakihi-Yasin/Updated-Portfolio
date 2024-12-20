import { useState, useEffect } from 'react'
import { Button } from "./ui/button"
import { Moon, Sun } from 'lucide-react'
import { useTheme } from "./theme-provider"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <header className="py-6">
      <nav className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold">
        Yasin Fakihi
        </a>
        <ul className="flex space-x-4">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? (
            <Moon className="h-6 w-6" />
          ) : (
            <Sun className="h-6 w-6" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
        
      </nav>
    </header>
  )
}

