# 2morrowboyz Portfolio

A modern portfolio website built with **React**, **TypeScript**, **Tailwind CSS**, and **Vite**. This site features animated sections, responsive design, and a modular component structure to showcase personal projects, skills, and experience.

## Demo

[Live Demo](https://2morrowboyz-portfolio.netlify.app)

![Overview Website](src/assets/overview-website.jpg)

## Features

- ⚡️ Fast development with Vite and HMR
- 🛠️ TypeScript for type safety
- 🎨 Tailwind CSS for rapid styling
- 📱 Responsive and mobile-friendly design
- ✨ Animated section reveals on scroll
- 📦 Modular, scalable folder structure
- 📬 Contact form with [EmailJS](https://www.emailjs.com/) integration
- 🔔 Toast notifications with [sonner](https://sonner.emilkowal.ski/)
- 🧹 ESLint and Prettier for code quality

## Project Structure

```
src/
  assets/           # Images and static assets
  components/
    layouts/        # Navbar, Footer, MobileMenu
    sections/       # Home, About, Projects, Contact, RevealOnScroll
    shared/         # Loading, LoadingScreen
    components/
      ui/           # UI utilities (pagination, button, sonner, etc.)
    lib/            # Utility functions (e.g., cn)
  hooks/            # Custom React hooks (e.g., useInView)
  utils/            # Constants and helpers
public/             # Static files (e.g., favicon)
```

## Getting Started

1. **Install dependencies:**

   ```sh
   npm install
   ```

2. **Set up environment variables:**

   Copy `.env.example` to `.env` and fill in your [EmailJS](https://www.emailjs.com/) credentials:

   ```
   VITE_EMAILJS_PUBLIC_KEY=yourkey
   VITE_EMAILJS_SERVICE_ID=yourkey
   VITE_EMAILJS_TEMPLATE_ID=yourkey
   ```

3. **Run the development server:**

   ```sh
   npm run dev
   ```

4. **Build for production:**

   ```sh
   npm run build
   ```

5. **Preview the production build:**
   ```sh
   npm run preview
   ```

## Linting & Formatting

- **Lint code:**
  ```sh
  npm run lint
  ```
- **Formatting:**  
  Prettier is configured with Tailwind plugin.

## Customization

- Update content in `src/components/sections/` for each section.
- Add or replace images in `src/assets/`.
- Adjust navigation links in [`src/utils/constant.ts`](src/utils/constant.ts).
- Update styles in [`src/index.css`](src/index.css).

## Credits

- Built with [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Tailwind CSS](https://tailwindcss.com/), and [Vite](https://vitejs.dev/).
- Toast notifications by [sonner](https://sonner.emilkowal.ski/).
- Icons by [lucide-react](https://lucide.dev/).

---

© All Rights Reserved
