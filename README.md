# My Portfolio

A modern portfolio website built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui components.

## 🚀 Features

- **Next.js 15** with App Router
- **TypeScript** with strict configuration
- **Tailwind CSS v4** for styling
- **shadcn/ui** components for beautiful UI
- **ESLint** with comprehensive rules
- **Prettier** for code formatting
- **Modern development tools** and best practices

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [ESLint](https://eslint.org/) - Code linting
- [Prettier](https://prettier.io/) - Code formatting

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd my-portfolio
   ```

2. **Install dependencies**

   ```bash
   yarn install
   ```

3. **Run the development server**

   ```bash
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🧹 Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint
- `yarn lint:fix` - Fix ESLint issues automatically
- `yarn format` - Format code with Prettier
- `yarn format:check` - Check code formatting
- `yarn type-check` - Run TypeScript type checking
- `yarn type-check:watch` - Run TypeScript type checking in watch mode

## 🎨 Adding shadcn/ui Components

To add new shadcn/ui components:

```bash
npx shadcn@latest add <component-name>
```

Example:

```bash
npx shadcn@latest add button card input
```

## 🔧 Configuration Files

- **`components.json`** - shadcn/ui configuration
- **`eslint.config.mjs`** - ESLint configuration with TypeScript rules
- **`.prettierrc`** - Prettier formatting rules
- **`tsconfig.json`** - TypeScript configuration
- **`tailwind.config.ts`** - Tailwind CSS configuration

## 📁 Project Structure

```
my-portfolio/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   ├── components/          # React components
│   │   └── ui/             # shadcn/ui components
│   └── lib/                # Utility functions
├── public/                  # Static assets
├── components.json          # shadcn/ui config
├── eslint.config.mjs       # ESLint config
├── .prettierrc             # Prettier config
├── tsconfig.json           # TypeScript config
└── package.json            # Dependencies
```

## 🎯 TypeScript Style Guide

This project follows strict TypeScript practices:

- **Strict mode** enabled
- **No implicit any** types
- **Exact optional property types**
- **No unchecked indexed access**
- **Comprehensive type checking**

## 🔍 ESLint Rules

Comprehensive linting rules for:

- **TypeScript** best practices
- **React** development patterns
- **Import** organization and sorting
- **Accessibility** standards
- **Code quality** and consistency

## 🎨 Tailwind CSS

- **v4** with latest features
- **CSS variables** for theming
- **Responsive design** utilities
- **Custom color palette** (Zinc base)

## 🚀 Deployment

This project is ready to deploy on:

- [Vercel](https://vercel.com/) (recommended)
- [Netlify](https://netlify.com/)
- Any Node.js hosting platform

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting and formatting
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
