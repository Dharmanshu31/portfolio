import Link from "next/link"
import { CalendarDays, Clock, User } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"

export default function BlogPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-[800px]">
        <h1 className="font-heading mb-6 text-3xl md:text-5xl">Blog</h1>
        <p className="text-muted-foreground mb-10">
          Thoughts, tutorials, and insights about web development, technology trends, and my journey as a developer.
        </p>

        <div className="space-y-8">
          <div className="rounded-xl border overflow-hidden transition-all hover:shadow-md">
            <img
              src="/placeholder.svg?height=300&width=800&text=Next.js+14+Features"
              alt="Next.js 14 Features"
              className="w-full aspect-[21/9] object-cover"
            />
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge>Next.js</Badge>
                <Badge variant="outline">Tutorial</Badge>
              </div>
              <h2 className="text-2xl font-bold mb-2">
                <Link href="/blog/nextjs-14-features" className="hover:text-primary">
                  Exploring Next.js 14: New Features and Improvements
                </Link>
              </h2>
              <p className="text-muted-foreground mb-4">
                A deep dive into the newest features of Next.js 14, including performance improvements, enhanced
                developer experience, and new API capabilities.
              </p>
              <div className="flex flex-wrap items-center gap-x-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <CalendarDays className="h-4 w-4" />
                  <span>April 10, 2023</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>8 min read</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>Dharmanshu Paghadar</span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border overflow-hidden transition-all hover:shadow-md">
            <img
              src="/placeholder.svg?height=300&width=800&text=TypeScript+Tips"
              alt="TypeScript Tips"
              className="w-full aspect-[21/9] object-cover"
            />
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge>TypeScript</Badge>
                <Badge variant="outline">Tips & Tricks</Badge>
              </div>
              <h2 className="text-2xl font-bold mb-2">
                <Link href="/blog/typescript-tips" className="hover:text-primary">
                  10 TypeScript Tips to Improve Your Code Quality
                </Link>
              </h2>
              <p className="text-muted-foreground mb-4">
                Practical TypeScript tips and best practices to enhance your code quality, improve type safety, and
                boost your productivity as a developer.
              </p>
              <div className="flex flex-wrap items-center gap-x-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <CalendarDays className="h-4 w-4" />
                  <span>March 15, 2023</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>12 min read</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>Dharmanshu Paghadar</span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border overflow-hidden transition-all hover:shadow-md">
            <img
              src="/placeholder.svg?height=300&width=800&text=Tailwind+vs+CSS"
              alt="Tailwind vs CSS"
              className="w-full aspect-[21/9] object-cover"
            />
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge>CSS</Badge>
                <Badge>Tailwind</Badge>
                <Badge variant="outline">Comparison</Badge>
              </div>
              <h2 className="text-2xl font-bold mb-2">
                <Link href="/blog/tailwind-vs-css" className="hover:text-primary">
                  Tailwind CSS vs. Traditional CSS: When to Use Each
                </Link>
              </h2>
              <p className="text-muted-foreground mb-4">
                A detailed comparison of Tailwind CSS and traditional CSS approaches, with practical guidelines on when
                to use each for your projects.
              </p>
              <div className="flex flex-wrap items-center gap-x-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <CalendarDays className="h-4 w-4" />
                  <span>February 28, 2023</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>10 min read</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>Dharmanshu Paghadar</span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border overflow-hidden transition-all hover:shadow-md">
            <img
              src="/placeholder.svg?height=300&width=800&text=React+State+Management"
              alt="React State Management"
              className="w-full aspect-[21/9] object-cover"
            />
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge>React</Badge>
                <Badge variant="outline">Tutorial</Badge>
              </div>
              <h2 className="text-2xl font-bold mb-2">
                <Link href="/blog/react-state" className="hover:text-primary">
                  Modern React State Management: Beyond Redux
                </Link>
              </h2>
              <p className="text-muted-foreground mb-4">
                Exploring modern approaches to state management in React applications, including Context API, Recoil,
                Zustand, and Jotai.
              </p>
              <div className="flex flex-wrap items-center gap-x-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <CalendarDays className="h-4 w-4" />
                  <span>January 20, 2023</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>15 min read</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>Dharmanshu Paghadar</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <Link
            href="#"
            className={buttonVariants({
              variant: "outline",
              size: "lg",
            })}
          >
            Load More Articles
          </Link>
        </div>
      </div>
    </div>
  )
}
