import Link from "next/link"
import { ArrowRight, Github, Linkedin } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { HeroAnimation } from "@/components/hero-animation"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export const projects = [
  {
    id: 1,
    title: "Book E-Commerce",
    description:
      "Book E-Commerce is a modern web platform built with React for browsing and purchasing books online. The app features full authentication, enabling users to search for books freely, but requiring login to add books to their cart and complete purchases. Authentication is handled with login and signup flows. The UI is designed using MUI components, providing a responsive and professional user interface. The application's state is managed via the Context API, allowing seamless sharing of user and cart data across components. The search functionality is intuitive and fast, and the overall experience prioritizes simplicity and clean design. This project showcases strong front-end engineering with React, custom hooks, protected routes, and dynamic rendering based on auth state.",
    image: "/images/project1/cover.png",
    subImags: ["/images/project1/sub1.png", "/images/project1/sub2.png", "/images/project1/sub3.png", "/images/project1/sub4.png", "/images/project1/sub5.png", "/images/project1/sub6.png",],
    technologies: ["React", "MUI", "Context API"],
    gitUrl: "https://github.com/Dharmanshu31/Book-E-Commerce"
  },
  {
    id: 2,
    title: "Holiday Home Hubbub",
    description:
      "Holiday Home Hubbub is a full-stack vacation rental platform designed for users looking to rent properties during their holidays. Built with Vue.js and Vuex for front-end logic and dynamic state management, the platform uses Tailwind CSS and Vuetify for styling. The backend is developed in NestJS with MongoDB as the primary database. It features advanced property search with MongoDB's GeoNear functionality and aggregation pipeline to provide location-based search and filtering. Users can draw a circle on the map to find properties within a radius. The app supports three user roles: Admin, User, and Landlord. Landlords can list properties, while users can explore, filter, and book homes. Bookings are integrated with Stripe for secure payments. The platform automatically locks the availability slot for 5 minutes during checkout and frees it if payment is not completed. Additional features include advanced pagination, full property details, and a responsive, mobile-first design.",
    image: "/images/project2/cover.png",
    subImags: ["/images/project2/sub1.png", "/images/project2/sub2.png", "/images/project2/sub3.png", "/images/project2/sub4.png", "/images/project2/sub5.png", "/images/project2/sub6.png", "/images/project2/sub7.png", "/images/project2/sub8.png", "/images/project2/sub9.png", "/images/beProject/nest.png", "/images/beProject/rest.webp"],
    technologies: [
      "Vue.js",
      "Vuex",
      "Tailwind CSS",
      "Vuetify",
      "NestJS",
      "MongoDB",
      "Stripe",
      "Leaflet.js",
    ],
    gitUrl: "https://github.com/Dharmanshu31/Home-Holiday-Hubbub-Frontend"
  },
  {
    id: 3,
    title: "NextLevel Food",
    description:
      "NextLevel Food is a personal recipe-sharing web application created using Next.js. Designed for food lovers, the platform allows the admin to upload and manage recipes for public browsing. It supports both Server-Side Rendering (SSR) and Client-Side Rendering (CSR) for optimized performance and SEO. The layout and styling are built with modular CSS, maintaining a clean and scalable structure. Though the current version is multi-user (anyone can add), the app is structured to easily accommodate multi-user capabilities. It's a space to explore unique dishes, each with rich visuals and descriptions. This project highlights dynamic routing, image optimization, and the core principles of the Next.js framework.",
    image: "/images/project3/cover.png",
    subImags: ["/images/project3/sub1.png", "/images/project3/sub2.png", "/images/project3/sub3.png", "/images/project3/sub4.png"],
    technologies: ["Next.js", "Modular CSS"],
    gitUrl: "https://github.com/Dharmanshu31/Foodie"
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <div className="overflow-hidden rounded-full border-2 border-primary p-1">
            <img
              src="/placeholder.svg?height=120&width=120"
              alt="Dharmanshu Paghadar"
              className="h-28 w-28 rounded-full object-cover"
            />
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">Dharmanshu Paghadar</h1>
          <HeroAnimation />
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            I'm a Full Stack Developer passionate about building innovative web applications. I specialize in modern
            frameworks and technologies to create seamless user experiences.
          </p>
          <div className="flex gap-4">
            <Link
              href="/projects"
              className={buttonVariants({
                size: "lg",
              })}
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
              })}
            >
              Contact Me
            </Link>
          </div>
          <div className="flex gap-4 mt-4">
            <Link
              href="https://github.com/Dharmanshu31"
              target="_blank"
              className="rounded-full bg-muted p-2 transition-colors hover:bg-muted/80"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/dharmanshu-paghadar-b50387221/?originalSubdomain=in"
              target="_blank"
              className="rounded-full bg-muted p-2 transition-colors hover:bg-muted/80"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="container space-y-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Featured Projects</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Check out some of my recent work that showcases my technical skills and creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects`}
              className="group relative overflow-hidden rounded-lg border shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <Carousel className="w-full aspect-video">
                <CarouselContent>
                  {[project.image, ...project.subImags].map((img, index) => (
                    <CarouselItem key={index}>
                      <img
                        src={img}
                        alt={`Slide ${index + 1}`}
                        className="min-h-[280px] w-full object-cover rounded-md"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious
                  className="left-2 top-1/2 -translate-y-1/2 z-10"
                />
                <CarouselNext
                  className="right-2 top-1/2 -translate-y-1/2 z-10"
                />
              </Carousel>
              <div className="p-4">
                <h3 className="font-semibold text-xl">{project.title}</h3>
                <p className="mt-2 text-muted-foreground line-clamp-4 min-h-[72px]">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}

        </div>
        <div className="flex justify-center">
          <Link
            href="/projects"
            className={buttonVariants({
              variant: "ghost",
            })}
          >
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
