import { Code, Cpu, Database, Globe, Layers, Palette } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-[800px]">
        <h1 className="font-heading mb-6 text-3xl md:text-5xl">About Me</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-16">
          <div className="md:col-span-1">
            <div className="sticky top-20">
              <img
                src="/placeholder.svg?height=300&width=300"
                alt="Dharmanshu Paghadar"
                className="rounded-xl w-full mb-4"
              />
              <h2 className="text-xl font-bold mb-2">Dharmanshu Paghadar</h2>
              <p className="text-muted-foreground mb-4">Full Stack Software Developer</p>
              <div className="space-y-1 text-sm">
                <div className="flex items-center">
                  <span className="font-semibold mr-2">Location:</span>
                  <span>Surat, Gujarat, India</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold mr-2">Experience:</span>
                  <span>1+ Years</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold mr-2">Email:</span>
                  <span className="break-all">paghadardharmanshu31@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Who I Am</h2>
              <p className="text-muted-foreground mb-4">
                Hello! I'm Dharmanshu, a passionate Full Stack Developer with expertise in building modern web
                applications. I enjoy solving complex problems and creating intuitive, dynamic user experiences.
              </p>
              <p className="text-muted-foreground">
                I believe in writing clean, maintainable code and constantly staying updated with the latest
                technologies and best practices in the field. When I'm not coding, you can find me exploring new
                technologies, contributing to open-source projects, or sharing my knowledge through technical blogs.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">My Skills</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Code className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Frontend Development</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">React, Next.js, Vue.js, TypeScript, Tailwind CSS, Redux, VueX</p>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Cpu className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Backend Development</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Node.js, Express, Nest, REST APIs</p>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Database className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Databases</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">MongoDB, PostgreSQL, MySQL</p>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Globe className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">DevOps</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Docker, CI/CD, GitHub Actions</p>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Layers className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Tools & Methodologies</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Git, Jira, Bitbucket</p>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Palette className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">UI/UX Design</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Figma, Responsive Design</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Personal Interests</h2>
              <p className="text-muted-foreground">
                Outside of coding, I most enjoy playing cricket, along with hiking, reading technical books, 
                playing chess, and attending tech conferences and meetups. 
                I'm also passionate about mentoring junior developers and contributing to the tech community.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
