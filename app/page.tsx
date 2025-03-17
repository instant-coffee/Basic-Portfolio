import { Mail, Github, Linkedin, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import SkillBadge from "@/components/skill-badge"
import ContactForm from "@/components/contact-form"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            Portfolio
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
              Skills
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex gap-3">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com" target="_blank" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:hello@example.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-10 md:py-16">
        {/* Hero Section */}
        <section className="py-12 md:py-24 lg:py-32 flex flex-col items-center text-center">
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              Hi, I'm <span className="text-primary">Your Name</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Full Stack Developer specializing in building exceptional digital experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" asChild>
                <Link href="#contact">Get in touch</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#projects">View my work</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 md:py-24 scroll-mt-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="aspect-square relative rounded-xl overflow-hidden">
              <img src="/placeholder.svg?height=600&width=600" alt="Profile" className="object-cover" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter">About Me</h2>
              <p className="text-muted-foreground">
                I'm a passionate developer with a strong foundation in both frontend and backend technologies. With over
                5 years of experience, I've worked on a variety of projects from e-commerce platforms to complex web
                applications.
              </p>
              <p className="text-muted-foreground">
                My approach combines technical expertise with creative problem-solving to build intuitive, user-centered
                applications. I'm constantly learning and exploring new technologies to stay at the forefront of web
                development.
              </p>
              <Button variant="outline" asChild>
                <Link href="/resume.pdf" target="_blank">
                  Download Resume
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 md:py-24 scroll-mt-16">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Featured Projects</h2>
              <p className="text-muted-foreground">A selection of my recent work and personal projects</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProjectCard
                title="E-commerce Platform"
                description="A full-featured online store with product management, cart functionality, and payment processing."
                tags={["React", "Node.js", "MongoDB"]}
                imageUrl="/placeholder.svg?height=400&width=600"
                projectUrl="#"
              />
              <ProjectCard
                title="Task Management App"
                description="A productivity application with drag-and-drop interface, team collaboration, and real-time updates."
                tags={["Next.js", "TypeScript", "Prisma"]}
                imageUrl="/placeholder.svg?height=400&width=600"
                projectUrl="#"
              />
              <ProjectCard
                title="Portfolio Website"
                description="A responsive portfolio website showcasing projects and skills with a modern design."
                tags={["React", "Tailwind CSS", "Framer Motion"]}
                imageUrl="/placeholder.svg?height=400&width=600"
                projectUrl="#"
              />
            </div>
            <div className="flex justify-center pt-6">
              <Button variant="outline" asChild>
                <Link href="https://github.com" target="_blank">
                  View More on GitHub <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 md:py-24 scroll-mt-16">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Skills & Technologies</h2>
              <p className="text-muted-foreground">The tools and technologies I work with</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <SkillBadge name="JavaScript" />
              <SkillBadge name="TypeScript" />
              <SkillBadge name="React" />
              <SkillBadge name="Next.js" />
              <SkillBadge name="Node.js" />
              <SkillBadge name="Express" />
              <SkillBadge name="MongoDB" />
              <SkillBadge name="PostgreSQL" />
              <SkillBadge name="Tailwind CSS" />
              <SkillBadge name="HTML/CSS" />
              <SkillBadge name="Git" />
              <SkillBadge name="Docker" />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-24 scroll-mt-16">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter">Get In Touch</h2>
              <p className="text-muted-foreground">
                Have a project in mind or want to discuss potential opportunities? Feel free to reach out through the
                contact form or directly via email.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:hello@example.com" className="hover:text-primary transition-colors">
                    hello@example.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    className="hover:text-primary transition-colors"
                    rel="noreferrer"
                  >
                    linkedin.com/in/yourname
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-primary" />
                  <a
                    href="https://github.com"
                    target="_blank"
                    className="hover:text-primary transition-colors"
                    rel="noreferrer"
                  >
                    github.com/yourusername
                  </a>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com" target="_blank" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:hello@example.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

