# 🚀 My Portfolio

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=shadcnui)

A modern, responsive portfolio website built with cutting-edge web technologies.

[🚀 Live Demo](#) • [📖 Documentation](#) • [🐛 Report Bug](#) • [💡 Request Feature](#)

</div>

---

## ✨ Features

- 🎨 **Modern Design** - Clean, responsive UI with beautiful animations
- ⚡ **Next.js 15** - Latest App Router with server-side rendering
- 🔒 **Type Safety** - Full TypeScript integration with strict configuration
- 🎭 **Tailwind CSS v4** - Utility-first CSS with modern features
- 🧩 **shadcn/ui Components** - Beautiful, accessible UI components
- 📱 **Mobile First** - Responsive design that works on all devices
- 🚀 **Performance Optimized** - Fast loading and smooth interactions
- 🔧 **Developer Experience** - ESLint, Prettier, and modern tooling

## 🛠️ Tech Stack

<div align="center">

|                               **Frontend**                                |                                       **Styling**                                       |                                     **Development**                                     |                                   **Deployment**                                    |
| :-----------------------------------------------------------------------: | :-------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------: |
|  ![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)   | ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?logo=tailwind-css) |     ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)     |          ![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel)          |
|     ![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)     |       ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)       |            ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?logo=eslint)            |        ![Netlify](https://img.shields.io/badge/Netlify-00C7B7?logo=netlify)         |
| ![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?logo=shadcnui) |  ![PostCSS](https://img.shields.io/badge/PostCSS-DD3A0A?logo=postcss&logoColor=white)   | ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?logo=prettier&logoColor=black) | ![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?logo=github-pages) |

</div>

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) 18+
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**

   ```bash
   yarn install
   # or
   npm install
   ```

3. **Start development server**

   ```bash
   yarn dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

| Command                 | Description                                   |
| ----------------------- | --------------------------------------------- |
| `yarn dev`              | 🚀 Start development server                   |
| `yarn build`            | 🏗️ Build for production                       |
| `yarn start`            | 🌐 Start production server                    |
| `yarn lint`             | 🔍 Run ESLint                                 |
| `yarn lint:fix`         | 🛠️ Fix ESLint issues automatically            |
| `yarn format`           | ✨ Format code with Prettier                  |
| `yarn format:check`     | ✅ Check code formatting                      |
| `yarn type-check`       | 🔒 Run TypeScript type checking               |
| `yarn type-check:watch` | 👀 Run TypeScript type checking in watch mode |

## 🎨 Adding shadcn/ui Components

To add new shadcn/ui components:

```bash
npx shadcn@latest add <component-name>
```

**Examples:**

```bash
# Add multiple components at once
npx shadcn@latest add button card input

# Add specific components
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
npx shadcn@latest add form
```

## 🔧 Configuration

This project uses several configuration files for optimal development experience:

| File                 | Purpose                                 |
| -------------------- | --------------------------------------- |
| `components.json`    | shadcn/ui component configuration       |
| `eslint.config.mjs`  | ESLint rules and TypeScript integration |
| `tsconfig.json`      | TypeScript compiler options             |
| `tailwind.config.ts` | Tailwind CSS customization              |
| `next.config.ts`     | Next.js framework configuration         |

## 📁 Project Structure

```
my-portfolio/
├── 📁 src/
│   ├── 📁 app/                 # Next.js App Router
│   │   ├── 📄 globals.css     # Global styles & Tailwind imports
│   │   ├── 📄 layout.tsx      # Root layout component
│   │   └── 📄 page.tsx        # Home page component
│   ├── 📁 components/          # React components
│   │   └── 📁 ui/             # shadcn/ui components
│   │       ├── button.tsx     # Button component
│   │       ├── card.tsx       # Card component
│   │       ├── input.tsx      # Input component
│   │       └── label.tsx      # Label component
│   └── 📁 lib/                # Utility functions
│       └── utils.ts           # Helper functions
├── 📁 public/                  # Static assets
│   ├── file.svg               # File icon
│   ├── globe.svg              # Globe icon
│   ├── next.svg               # Next.js logo
│   ├── vercel.svg             # Vercel logo
│   └── window.svg             # Window icon
├── 📄 components.json          # shadcn/ui configuration
├── 📄 eslint.config.mjs       # ESLint configuration
├── 📄 next.config.ts          # Next.js configuration
├── 📄 package.json            # Dependencies & scripts
├── 📄 postcss.config.mjs      # PostCSS configuration
├── 📄 tailwind.config.ts      # Tailwind CSS configuration
├── 📄 tsconfig.json           # TypeScript configuration
└── 📄 yarn.lock               # Yarn lock file
```

## 🎯 Development Standards

### TypeScript Configuration

- ✅ **Strict mode** enabled
- ✅ **No implicit any** types
- ✅ **Exact optional property types**
- ✅ **No unchecked indexed access**
- ✅ **Comprehensive type checking**

### Code Quality

- 🔍 **ESLint** with TypeScript and React rules
- ✨ **Prettier** for consistent code formatting
- 🚫 **Import sorting** and organization
- ♿ **Accessibility** standards enforcement
- 📏 **Code quality** and consistency rules

### Tailwind CSS Features

- 🎨 **v4** with latest features
- 🌈 **CSS variables** for theming
- 📱 **Responsive design** utilities
- 🎭 **Custom color palette** (Zinc base)
- ⚡ **JIT compilation** for optimal performance

## 🚀 Deployment

This project is optimized for deployment on modern platforms:

### Recommended: Vercel

```bash
# Deploy to Vercel (recommended for Next.js)
npx vercel --prod
```

### Alternative Platforms

- [Netlify](https://netlify.com/) - Great for static sites
- [Railway](https://railway.app/) - Full-stack deployment
- [Render](https://render.com/) - Modern cloud platform
- [GitHub Pages](https://pages.github.com/) - Free hosting for open source

## 📚 Learning Resources

<div align="center">

|              **Framework**              |                 **Styling**                  |            **Components**             |                     **Language**                     |
| :-------------------------------------: | :------------------------------------------: | :-----------------------------------: | :--------------------------------------------------: |
| [Next.js Docs](https://nextjs.org/docs) | [Tailwind CSS](https://tailwindcss.com/docs) |  [shadcn/ui](https://ui.shadcn.com/)  |  [TypeScript](https://www.typescriptlang.org/docs/)  |
|    [React Docs](https://react.dev/)     |    [CSS Tricks](https://css-tricks.com/)     | [Radix UI](https://www.radix-ui.com/) | [TS Playground](https://www.typescriptlang.org/play) |

</div>

## 🤝 Contributing

We love your input! We want to make contributing to this project as easy and transparent as possible.

### How to Contribute

1. 🍴 **Fork** the repository
2. 🌿 **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. 💾 **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. 📤 **Push** to the branch (`git push origin feature/AmazingFeature`)
5. 🔀 **Open** a Pull Request

### Development Workflow

```bash
# 1. Fork and clone
git clone https://github.com/yourusername/my-portfolio.git
cd my-portfolio

# 2. Install dependencies
yarn install

# 3. Create feature branch
git checkout -b feature/your-feature

# 4. Make changes and test
yarn dev
yarn lint
yarn type-check

# 5. Commit and push
git add .
git commit -m "feat: add your feature"
git push origin feature/your-feature

# 6. Open Pull Request on GitHub
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

<div align="center">

**Made with ❤️ by [Your Name]**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/yourusername)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/yourusername)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/yourusername)

</div>

---

<div align="center">

⭐ **Star this repository if you found it helpful!** ⭐

</div>
