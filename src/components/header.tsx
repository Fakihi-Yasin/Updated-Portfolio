import { useState, useEffect } from 'react'
import { Button } from "./ui/button.tsx"
import { Moon, Sun, Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
export default function Header() {
 const [mounted, setMounted] = useState(false)
 const [theme, setTheme] = useState<'light' | 'dark'>('light')
 const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
   // Get initial theme from localStorage or system preference
   const savedTheme = localStorage.getItem('theme') || 
     (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
   setTheme(savedTheme as 'light' | 'dark')
   setMounted(true)
 }, [])
  useEffect(() => {
   // Update document class and localStorage when theme changes
   if (mounted) {
     document.documentElement.classList.remove('light', 'dark')
     document.documentElement.classList.add(theme)
     localStorage.setItem('theme', theme)
   }
 }, [theme, mounted])
  if (!mounted) {
   return null
 }
  const toggleTheme = () => {
   setTheme(theme === 'light' ? 'dark' : 'light')
 }
  const navItems = [
   { href: "#about", label: "About" },
   { href: "#projects", label: "Projects" },
   { href: "#experience", label: "Experience" },
   { href: "#contact", label: "Contact" },
 ]
  return (
   <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
     <nav className="container mx-auto flex h-16 items-center justify-between px-4">
       <a href="/" className="text-2xl font-bold">
         Yasin Fakihi
       </a>
        {/* Desktop Navigation */}
       <ul className="hidden md:flex md:space-x-6">
         {navItems.map((item) => (
           <li key={item.href}>
             <a
               href={item.href}
               className="text-foreground/60 transition-colors hover:text-foreground"
             >
               {item.label}
             </a>
           </li>
         ))}
       </ul>
        <div className="flex items-center gap-4">
         <Button
           variant="ghost"
           size="icon"
           onClick={toggleTheme}
         >
           {theme === "light" ? (
             <Moon className="h-5 w-5" />
           ) : (
             <Sun className="h-5 w-5" />
           )}
           <span className="sr-only">Toggle theme</span>
         </Button>
          {/* Mobile Navigation */}
         <Sheet open={isOpen} onOpenChange={setIsOpen}>
           <SheetTrigger asChild className="md:hidden">
             <Button variant="ghost" size="icon">
               <Menu className="h-5 w-5" />
               <span className="sr-only">Toggle menu</span>
             </Button>
           </SheetTrigger>
           <SheetContent side="right">
             <nav className="flex flex-col gap-4">
               {navItems.map((item) => (
                 <a
                   key={item.href}
                   href={item.href}
                   className="text-foreground/60 transition-colors hover:text-foreground"
                   onClick={() => setIsOpen(false)}
                 >
                   {item.label}
                 </a>
               ))}
             </nav>
           </SheetContent>
         </Sheet>
       </div>
     </nav>
   </header>
 )
}