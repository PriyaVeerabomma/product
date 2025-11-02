

```markdown
#  Personal Portfolio Website

This is a responsive, modern portfolio website built using **Next.js**, **Tailwind CSS**, **ShadCN/UI components**, and **V0.dev** for AI-assisted development. The project showcases three projects, a contact form, and social links in a mobile-first layout.

---

##  Features

-  **Hero Section** with name, title, and call-to-action
-  **Projects Section** with images, titles, and descriptions
-  **Contact Form** with functional layout
-  **Fully Responsive** (Mobile + Desktop)
-  **Modular React Components** using ShadCN and Tailwind CSS
-  AI-assisted development workflow with V0.dev

---

##  Folder Structure

```plaintext
app/
  ├── blog/               # Blog loading and routing (optional)
  ├── page.tsx            # Root landing page
  ├── layout.tsx          # Shared layout
  └── globals.css         # Global styles

components/
  ├── atoms/              # Small reusable components
  ├── layout/             # Layout-related components
  ├── molecules/          # Reusable complex components
  ├── sections/           # Hero, Projects, Contact
  └── ui/                 # ShadCN UI primitives

public/                   # Static assets (images, etc.)
styles/                   # Custom Tailwind styles
hooks/                    # Custom React hooks
lib/                      # Utility functions

theme-provider.tsx        # ShadCN theme setup
tailwind.config.ts        # Tailwind config
next.config.mjs           # Next.js config
v0-user-next.config.mjs   # V0.dev config
```

---

##  Tech Stack

- **Next.js** – App Router architecture
- **Tailwind CSS** – Utility-first responsive styling
- **ShadCN/UI** – Pre-built, accessible React components
- **V0.dev** – AI-based code generation
- **TypeScript** – Strongly typed components and pages
- **PNPM** – Fast package management

---

##  Setup Instructions

```bash
# Install dependencies
pnpm install

# Start the dev server
pnpm dev
```

---

##  V0 Iterations Summary

This project was built using V0.dev with multiple prompt-based iterations. Key changes included:

1. **Initial Layout**: Hero, Projects, Contact sections scaffolded
2. **Responsive Design**: Two-column layout on desktop, single column on mobile
3. **Styling Enhancements**: Font sizes, paddings, and section spacing improved
4. **Componentization**: Separated into `<HeroSection />`, `<ProjectCard />`, `<ContactForm />`, etc.
5. **Branding & Theming**: Custom color scheme, typography, and social links added

---

