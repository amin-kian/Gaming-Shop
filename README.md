# Gaming Shop

A modern e-commerce platform for purchasing video games and gaming gear. Built with Next.js and Tailwind CSS.

**Live Demo:** [https://amin-gaming-shop.vercel.app/](https://amin-gaming-shop.vercel.app/)

## 🌟 Features

* **Product Browse:** A clean and intuitive interface to browse through a list of products.
* **Product Categories:** Filter and view products based on different categories.
* **Product Details Page:** Dedicated pages for each product with detailed information.
* **Responsive Design:** Fully responsive layout that looks great on all devices, from mobile phones to desktops.
* **Optimized Performance:** Fast page loads thanks to Next.js server-side rendering and static generation.

## 📁 Project Structure

The project uses the latest Next.js App Router structure:

```
.
├── app/
│   ├── _components/      # Reusable components used across the app
│   ├── _hooks/           # Custom React hooks
│   ├── _lib/             # Library functions and utilities
│   ├── category/         # Route for product categories
│   ├── product/          # Route for individual product pages
│   ├── layout.js         # Main app layout
│   ├── page.js           # Main homepage
│   └── globals.css       # Global styles
├── public/               # Static assets (images, fonts, etc.)
├── .gitignore            # Files and folders to ignore in git
├── next.config.mjs       # Next.js configuration
├── package.json          # Project dependencies and scripts
└── tailwind.config.mjs   # Tailwind CSS configuration
```

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing
purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/en/) (version 18.x or later) and a package manager
like [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) installed.

### Installation

1. Clone the repository:

   ```bash
   git clone <your-repository-url>
   cd gaming-shop
   ```

2. Install the dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

### Running the Development Server

Start the development server to view the application in your browser.

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) with your browser to see the result.

## 🛠️ Available Scripts

In the `package.json` file, you will find the following scripts:

* `dev`: Runs the app in development mode.
* `build`: Creates a production-ready build of the app.
* `start`: Starts the production server.
* `lint`: Lints the code using Next.js's built-in ESLint configuration.

## 💻 Technologies Used

* [Next.js](https://nextjs.org/) - React Framework
* [React](https://reactjs.org/) - JavaScript Library
* [Tailwind CSS](https://tailwindcss.com/) - Utility-First CSS Framework
* [ESLint](https://eslint.org/) - Code Linter

## ☁️ Deployment

This application is deployed on [Vercel](https://vercel.com/), the platform made for Next.js. The live version is
automatically updated upon pushes to the `main` branch.
