import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: " ./Nola",
  DESCRIPTION: "Welcome to my portfolio.",
  AUTHOR: "Nola01",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Proyectos en los que he trabajado",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const NAV_LINKS = {
  es: [
    { HREF: "/es", TEXT: "Inicio" },
    { HREF: "/es/proyectos", TEXT: "Proyectos" },
    { HREF: "/es/trayectoria", TEXT: "Trayectoria" },
    { HREF: "/es/contacto", TEXT: "Contacto" },
  ],
  en: [
    { HREF: "/en", TEXT: "Home" },
    { HREF: "/en/projects", TEXT: "Projects" },
    { HREF: "/en/career", TEXT: "Career" },
    { HREF: "/en/contact", TEXT: "Contact" },
  ],
};

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "jnolrom@gmail.com",
    HREF: "mailto:jnolrom@gmail.com"
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "Nola01",
    HREF: "https://github.com/Nola01"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Juanma Nolasco",
    HREF: "https://www.linkedin.com/in/juanma-nolasco/",
  }
]

