import { CalendarDays, GraduationCap, MapPin } from "lucide-react"

export default function EducationPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-[800px]">
        <h1 className="font-heading mb-6 text-3xl md:text-5xl">Education</h1>
        <p className="text-muted-foreground mb-10">
          My academic journey that has shaped my knowledge and skills in software development and Information Technology.
        </p>

        <div className="relative border-l border-muted pl-8 space-y-12">
          <EducationItem
            degree="Bachelor of Engineering in Information Technology"
            institution="Government Engineering College, Bhavnagar"
            location="Bhavnagar, Gujarat, India"
            period="2020 - 2024"
            description="Focused on software engineering, web technologies, and data structures. Gained hands-on experience through academic projects and active participation in coding and development communities."
            achievements={[
              "Developed an Android app to assist dementia patients as a final year project",
              "Participated in various coding exams and development clubs",
              "Represented college in cricket and football tournaments",
            ]}
          />

          <EducationItem
            degree="Higher Secondary Certificate (HSC)"
            institution="P.P. Savani High School"
            location="Surat, Gujarat, India"
            period="2018 - 2020"
            description="Completed studies in the science stream with a focus on Mathematics and Computer Science."
            achievements={[
              "Achieved distinction in Mathematics and Physics",
              "Active member of the science exhibition team",
              "Participated in school-level quiz competitions",
            ]}
          />

          <EducationItem
            degree="Secondary School Certificate (SSC)"
            institution="Archana Vidhya Bhavan"
            location="Surat, Gujarat, India"
            period="2017"
            description="Completed general secondary education with strong performance in science and mathematics."
            achievements={[
              "Awarded Best Student of the Year",
              "Scored over 89% overall in board exams",
              "Participated in various physical games and school-level competitions",
            ]}
          />

        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Certifications & Additional Training</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="border rounded-lg p-4">
              <div className="flex justify-between mb-2">
                <h3 className="font-semibold">React, Redux, RTK Query & TanStack Query (React Query) Masterclass</h3>
                <span className="text-sm text-muted-foreground">2024</span>
              </div>
              <p className="text-sm text-muted-foreground">Udemy, Documentation, Open Source Platforms</p>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex justify-between mb-2">
                <h3 className="font-semibold">Next.js, Node.js & Nest.js</h3>
                <span className="text-sm text-muted-foreground">2024</span>
              </div>
              <p className="text-sm text-muted-foreground">Udemy, Documentation, Open Source Platforms</p>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex justify-between mb-2">
                <h3 className="font-semibold">Vue.js, Vuex & Vutify</h3>
                <span className="text-sm text-muted-foreground">2024</span>
              </div>
              <p className="text-sm text-muted-foreground">Udemy, Documentation, Open Source Platforms</p>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex justify-between mb-2">
                <h3 className="font-semibold">Tailwind CSS & Responsive UI Design</h3>
                <span className="text-sm text-muted-foreground">2024</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Udemy, Tailwind Docs, and open-source platforms. Gained hands-on experience with modern UI libraries like MUI, shadcn/ui, and React Bits to build accessible and elegant user interfaces.
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex justify-between mb-2">
                <h3 className="font-semibold">MongoDB & MySQL for Backend Development</h3>
                <span className="text-sm text-muted-foreground">2024</span>
              </div>
              <p className="text-sm text-muted-foreground">Udemy, Official Documentation</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

function EducationItem({
  degree,
  institution,
  location,
  period,
  description,
  achievements,
}: {
  degree: string
  institution: string
  location: string
  period: string
  description: string
  achievements: string[]
}) {
  return (
    <div className="relative">
      <div className="absolute -left-11 mt-1.5 flex h-6 w-6 items-center justify-center rounded-full border bg-background text-primary">
        <GraduationCap className="h-3.5 w-3.5" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold">{degree}</h2>
        <div className="space-y-1">
          <div className="font-medium">{institution}</div>
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
        {achievements.length > 0 && (
          <div>
            <h3 className="font-semibold text-sm mb-2">Key Achievements:</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              {achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
