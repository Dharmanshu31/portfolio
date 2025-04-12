"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface ThemeContextProps {
  theme: "light" | "dark" | "system"
  setTheme: (theme: "light" | "dark" | "system") => void
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: "system",
  setTheme: () => {},
})

// Define getSystemTheme outside the component so it's available before use
const getSystemTheme = (): "light" | "dark" => {
  if (typeof window === "undefined") return "light"
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

export const ThemeProvider = ({
  attribute,
  defaultTheme,
  enableSystem,
  disableTransitionOnChange,
  children,
}: {
  attribute: string
  defaultTheme: "system" | "light" | "dark"
  enableSystem: boolean
  disableTransitionOnChange: boolean
  children: React.ReactNode
}) => {
  const [theme, setTheme] = useState<ThemeContextProps["theme"]>(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme") as "light" | "dark" | "system" | null
      if (storedTheme) {
        return storedTheme
      } else if (enableSystem) {
        return "system"
      }
    }
    return defaultTheme
  })

  useEffect(() => {
    if (typeof window === "undefined") {
      return
    }

    localStorage.setItem("theme", theme)

    if (theme === "system") {
      document.documentElement.setAttribute(attribute, getSystemTheme())
    } else if (theme) {
      document.documentElement.setAttribute(attribute, theme)
    }
  }, [theme, attribute])

  // Add listener for system theme changes
  useEffect(() => {
    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
      const handleChange = () => {
        document.documentElement.setAttribute(attribute, getSystemTheme())
      }

      mediaQuery.addEventListener("change", handleChange)
      return () => mediaQuery.removeEventListener("change", handleChange)
    }
  }, [theme, attribute])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)
