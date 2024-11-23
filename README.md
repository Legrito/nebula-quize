# Nebula Quiz

Nebula Quiz is a web application built with Next.js, React, and Redux Toolkit. It serves as an interactive quiz platform, providing users with an engaging way to test their knowledge.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Scripts](#scripts)
- [Usage](#usage)
- [Linting and Formatting](#linting-and-formatting)
- [Contributing](#contributing)
- [License](#license)

## Features

- Interactive quiz interface
- State management using Redux Toolkit
- Responsive design with Tailwind CSS
- Linting and formatting for code quality

## Technologies

- **Next.js**: A React framework for server-rendered applications.
- **React**: A JavaScript library for building user interfaces.
- **Redux Toolkit**: A powerful toolset for efficient Redux development.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **TypeScript**: A superset of JavaScript that adds static types.

## Installation

To get started with the Nebula Quiz project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/nebula-quize.git
   cd nebula-quize
   ```

2. Install dependencies:

```bash
pnpm install
```

3. Set up pre-commit:

```bash
pnpm husky init

pnpm run prepare

pnpm husky add .husky/pre-commit "npm run format:fix && npm run lint"
```

## Scripts

The following scripts are available to manage the application:

Run the app in development mode:

```bash
pnpm dev
```

Run the app in production mode:

```bash
pnpm prod
```

## Usage

After starting the application, navigate to [http://localhost:3000] in your web browser to access the Nebula Quiz platform.
