import { BriefcaseIcon, CalendarDays, MapPin } from "lucide-react"

export default function ExperiencePage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-[800px]">
        <h1 className="font-heading mb-6 text-3xl md:text-5xl">Experience</h1>
        <p className="text-muted-foreground mb-10">
          My professional journey as a full stack developer, with experiences across various technologies.
        </p>

        <div className="relative border-l border-muted pl-8 space-y-12">
          <ExperienceItem
            position="Full Stack Developer"
            company="La Net Team Software Solution Pvt Ltd"
            location="Surat Gujarat, India"
            period="Jul 2024 - Present"
            description="Development of enterprise-level web applications for clients across fintech, healthcare, and e-commerce sectors."
            responsibilities={[
              "Architected and implemented a high-performance fintech dashboard using Next.js, TypeScript, and Tailwind CSS that improved user engagement by 35%",
              "Developed and maintained RESTful APIs using Node.js and Express, ensuring 99.9% uptime",
              "Optimized database performance by implementing indexing strategies and query optimization, improving load times by 45%",
              "Designed and implemented dynamic, responsive UI components in Vue 3 with Vuetify and Tailwind CSS, enhancing user experience across devices",
              "Built graph data visualization APIs using NestJS to deliver analytical insights, improving decision-making efficiency for end-users",
              "Deployed full-stack applications with frontend on Vercel and backend & database on DigitalOcean using Docker and Nginx for scalable and secure production environments"
            ]}
            technologies={["React", "Next.js", "Vue.js", "Node.js", "Nest.js", "TypeScript", "MongoDB", "MySQL", "Docker", "Digital Ocean", "Nginx", "Vercel"]}
          />

          <ExperienceItem
            position="Software Engineer Intern"
            company="La Net Team Software Solution Pvt Ltd"
            location="Surat, Gujarat, India"
            period="Jan 2024 - Jul 2024"
            description="Gained hands-on experience in full-stack web development while learning modern tools and frameworks through real-world projects and team collaboration."
            responsibilities={[
              "Learned and worked with core web technologies including React, Next.js, Node.js, and Express",
              "Built simple web apps and features using Redux, Vue.js, and Vuex under the guidance of senior developers",
              "Practiced backend development using MongoDB and MySQL for creating and managing databases",
              "Used Git, GitHub, and Jira for version control and task management in a team environment",
              "Improved understanding of responsive design and API integration in modern web applications"
            ]}
            technologies={[
              "React",
              "Next.js",
              "Node.js",
              "Express",
              "MongoDB",
              "MySQL",
              "Redux",
              "Vue.js",
              "Vuex",
              "Firebase",
              "Git",
              "GitHub",
              "Jira"
            ]}
          />

          <ExperienceItem
            position="Summer Internship Trainee"
            company="TatvaSoft: Software Development Company"
            location="Ahmedabad, Gujarat, India"
            period="Jul 2023 - Aug 2023"
            description="Completed a summer internship focused on learning frontend development and building a book e-commerce project using React.js."
            responsibilities={[
              "Learned React.js fundamentals including components, state management, and routing",
              "Worked on a book e-commerce project using React, implementing product listing, cart functionality, and responsive UI",
              "Gained practical experience in building reusable components and managing application state",
              "Improved understanding of frontend development workflows and best practices",
              "Explored integration of basic APIs and user interactions within the application"
            ]}
            technologies={[
              "React.js",
              "JavaScript",
              "HTML",
              "CSS",
              "Bootstrap",
              "Git"
            ]}
          />
        </div>
      </div>
    </div>
  )
}

function ExperienceItem({
  position,
  company,
  location,
  period,
  description,
  responsibilities,
  technologies,
}: {
  position: string
  company: string
  location: string
  period: string
  description: string
  responsibilities: string[]
  technologies: string[]
}) {
  return (
    <div className="relative">
      <div className="absolute -left-11 mt-1.5 flex h-6 w-6 items-center justify-center rounded-full border bg-background text-primary">
        <BriefcaseIcon className="h-3.5 w-3.5" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold">{position}</h2>
        <div className="space-y-1">
          <div className="font-medium">{company}</div>
          <div className="flex flex-wrap gap-x-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" />
              {location}
            </span>
            <span className="flex items-center gap-1">
              <CalendarDays className="h-3.5 w-3.5" />
              {period}
            </span>
          </div>
        </div>
        <p className="text-muted-foreground">{description}</p>

        <div>
          <h3 className="font-semibold text-sm mb-2">Key Responsibilities:</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
            {responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-sm mb-2">Technologies Used:</h3>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
