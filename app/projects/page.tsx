import Link from "next/link"
import { ArrowRight, ExternalLink, Github } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"

const feProject = [
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
    title: "Holiday Home Hubbub FE",
    description:
      "Holiday Home Hubbub is a full-stack vacation rental platform with a highly interactive and responsive frontend developed using Vue.js. The frontend handles dynamic state management using Vuex and features a clean, modern UI built with Tailwind CSS and Vuetify. Users can browse and search for vacation properties through a map-based interface using Leaflet.js, allowing for features like drawing circles to filter properties by radius. The interface is designed to support three roles: Admin, User, and Landlord. Landlords can manage property listings, while users can explore listings, filter by location or features, and initiate the booking process. The platform emphasizes a mobile-first design, smooth user experience, component reusability, and intuitive navigation throughout the booking flow. It includes advanced pagination, wishlist functionality, full property previews, and clean transitions between views for a seamless user journey.",
    image: "/images/project2/cover.png",
    subImags: ["/images/project2/sub1.png", "/images/project2/sub2.png", "/images/project2/sub3.png", "/images/project2/sub4.png", "/images/project2/sub5.png", "/images/project2/sub6.png", "/images/project2/sub7.png", "/images/project2/sub8.png", "/images/project2/sub9.png"],
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
]

const beProjects = [
  {
    id: 11,
    title: "Holiday Home Hubbub BE",
    description:
      "The backend of Holiday Home Hubbub is a robust and scalable API built using NestJS, designed to power a vacation rental platform. It features role-based access control, supporting Admins, Users, and Landlords. The backend is tightly integrated with MongoDB and uses advanced features like the GeoNear aggregation pipeline to enable location-based property searches. Stripe is implemented to securely handle payments and reservation holds, automatically locking availability slots for 5 minutes during the checkout flow to prevent booking conflicts. The API handles authentication and authorization using JWTs, enforces strict validation using DTOs, and structures routes in a modular way for maintainability. Cloudinary integration supports image uploads, while booking data, reviews, and wishlist functionalities are all managed through clean RESTful endpoints. The application also ensures proper pagination, filtering, and sorting mechanisms for scalability and better UX on the frontend.",
    image: "/images/beProject/nest.png",
    subImags: ["/images/beProject/rest.webp", "/images/beProject/mongo.avif", "/images/beProject/sql.jpg"],
    technologies: [
      "NestJS",
      "MongoDB",
      "Stripe",
    ],
    gitUrl: "https://github.com/Dharmanshu31/Home-Holiday-Hubbub-Backend"
  },
  {
    id: 12,
    title: "Vacation Home Backend (Node.js)",
    description:
      "The Vacation Home Backend is a RESTful API developed with Node.js and Express, designed to support a property rental platform. Built with scalability and performance in mind, this backend uses MongoDB for data storage and provides full CRUD operations for users, properties, bookings, and reviews. It includes robust user authentication and authorization using JSON Web Tokens (JWT), and bcrypt for secure password hashing. Stripe integration enables seamless payment processing and booking management. The system features efficient error handling, middleware for request validation, and modular routing for clean code separation. It also supports features like wishlisting properties, submitting reviews, and storing images using a cloud solution like Cloudinary. The backend ensures responsive and fast API response times with proper indexing and optimized queries, while maintaining a simple, expressive codebase for fast development and easy maintenance.",
    image: "/images/beProject/node.jpg",
    subImags: ["/images/beProject/rest.webp", "/images/beProject/mongo.avif", "/images/beProject/sql.jpg"],
    technologies: [
      "NodeJS",
      "MongoDB",
      "Stripe",
      "Express"
    ],
    gitUrl: "https://github.com/Dharmanshu31/vacation-home-backend"
  },
];

const fullStack = [
  {
    id: 32,
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
    gitUrl: "https://github.com/Dharmanshu31/Home-Holiday-Hubbub-Frontend",
    beGitUrl: "https://github.com/Dharmanshu31/Home-Holiday-Hubbub-Backend"
  },
]

const allProjects = [
  ...feProject,
  ...beProjects,
  ...fullStack
]

export default function ProjectsPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-[1000px]">
        <h1 className="font-heading mb-6 text-3xl md:text-5xl">My Projects</h1>
        <p className="text-muted-foreground mb-10 max-w-[800px]">
          Explore my portfolio of projects showcasing my skills in full stack development, from responsive web
          applications to backend APIs and everything in between.
        </p>

        <Tabs defaultValue="all" className="mb-12">
          <TabsList className="mb-8">
            <TabsTrigger value="all">All Projects</TabsTrigger>
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {
                allProjects.map(project => (
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    technologies={project.technologies}
                    liveUrl="#"
                    githubUrl={project.gitUrl}
                    subImags={project.subImags}
                  />
                ))
              }
            </div>
          </TabsContent>

          <TabsContent value="frontend" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {
                feProject.map(project => (
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    technologies={project.technologies}
                    liveUrl="#"
                    githubUrl={project.gitUrl}
                    subImags={project.subImags}
                  />
                ))
              }
            </div>
          </TabsContent>

          <TabsContent value="fullstack" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {
                fullStack.map(project => (
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    technologies={project.technologies}
                    liveUrl="#"
                    githubUrl={project.gitUrl}
                    beGitUrl={project.beGitUrl}
                    subImags={project.subImags}
                  />
                ))
              }
            </div>
          </TabsContent>

          <TabsContent value="backend" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {
                beProjects.map(project => (
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    technologies={project.technologies}
                    liveUrl="#"
                    githubUrl={project.gitUrl}
                    subImags={project.subImags}
                  />
                ))
              }
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center">
          <p className="mb-4 text-muted-foreground">Want to see more of my work or collaborate on a project?</p>
          <Link
            href="/contact"
            className={buttonVariants({
              size: "lg",
            })}
          >
            Get in Touch
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

function ProjectCard({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
  beGitUrl,
  subImags
}: {
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
  beGitUrl?: string
  subImags: string[]
}) {
  return (
    <div className="rounded-xl border overflow-hidden h-full flex flex-col">
      <Carousel className="w-full aspect-video">
        <CarouselContent>
          {[image, ...subImags].map((img, index) => (
            <CarouselItem key={index}>
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="min-h-[318px] w-full object-cover rounded-md"
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
      <div className="p-5 flex flex-col flex-grow">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-muted-foreground text-sm mb-4 flex-grow">{description}</p>

        <div className="mt-auto">
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            {beGitUrl && <Link href={beGitUrl} target="_blank" className={buttonVariants({ variant: "outline", size: "sm" })}>
            <Github className="h-5 w-5" /> GitHub BE
            </Link>}
            <Link href={githubUrl} target="_blank" className={buttonVariants({ variant: "outline", size: "sm" })}>
            <Github className="h-5 w-5" /> GitHub
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
