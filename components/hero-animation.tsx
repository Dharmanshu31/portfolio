"use client"

import { useEffect, useState } from "react"

export function HeroAnimation() {
  const [text, setText] = useState("")
  const [index, setIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const roles = ["Full Stack Developer", "Web Designer", "UI/UX Enthusiast", "Problem Solver"]
  const typingSpeed = 150
  const deletingSpeed = 100
  const pauseTime = 1500

  useEffect(() => {
    const currentRole = roles[index % roles.length]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentRole.substring(0, text.length + 1))

          if (text.length === currentRole.length) {
            setIsDeleting(true)
            clearTimeout(timeout)
            setTimeout(() => {}, pauseTime)
          }
        } else {
          setText(currentRole.substring(0, text.length - 1))

          if (text.length === 0) {
            setIsDeleting(false)
            setIndex((prevIndex) => prevIndex + 1)
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    )

    return () => clearTimeout(timeout)
  }, [text, index, isDeleting, roles])

  return (
    <div className="text-xl sm:text-2xl font-semibold text-primary min-h-[2rem]">
      {text}
      <span className="animate-blink">|</span>
    </div>
  )
}
