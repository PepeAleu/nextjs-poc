---
marp: true
---

# Next.js Marvel POC

This project is a Proof of Concept built with Next.js that integrates with the Marvel API to display Marvel characters and their associated comics. It uses server functions, domain transformation utilities, and comprehensive testing with Vitest.

## Overview

- **Characters and Comics:**  
  The project contains separate modules for handling Marvel characters and comics.
  - **Character Module:** Provides functions to transform raw API responses into application-friendly objects (e.g., `character` and `characterDetail`).
  - **Comics Module:** Provides similar transformation functions for comics (e.g., `comic`) and a repository to fetch comics by character ID.
- **Repository Pattern:**  
  Repositories are implemented for both characters and comics, encapsulating API calls using fetch with proper configuration (e.g., caching and revalidation settings).

- **Server Functions:**  
  Server actions (using `'use server'`) are used to execute API calls and transformations.

- **Testing:**  
  The project includes a thorough test suite:
  - **Domain Tests:** Validate transformation functions.
  - **Repository Tests:** Ensure API calls are made and responses are handled correctly, including error scenarios.
  - **Component Tests:** Test UI components such as Header, FavoritesList, and ComicsList using React Testing Library and Vitest.

## Directory Structure

```
/Users/jose.aleu/Dev/lab/nextjs-poc
├── app/                    # Next.js app directory containing UI components.
│   ├── _components/        # Reusable components
│   ├── _css/               # Global CSS. We could put CSS variables here, but I ended up using Tailwind.
│   ├── _data/              # Reusable objects
│   ├── _providers/         # Reusable states
│   ├── _utils/             # Utils functions
│   ├── characters/[id]     # Character detail
│   ├── favorites/          # Favorites page
│   ├── layout.tsx          # Layout shell
│   ├── page.tsx            # Main page
│   └── comics/
├── modules/
│   ├── characters/         # Domain, application, and infrastructure for Marvel characters.
│   └── comics/             # Domain, application, and infrastructure for comics.
├── __tests__/              # Test files organized mirroring the source code.
└── README.md               # This file.
```

## Getting Started

1. **Install Dependencies:**

   ```bash
   pnpm install
   ```

2. **Run the Development Server:**

   ```bash
   pnpm run dev
   ```

3. **Run Tests:**
   The project uses Vitest for testing. To run tests, execute:
   ```bash
   pnpm test
   ```

## Technologies Used

- **Next.js:** For building the app.
- **Vitest:** For unit and integration testing.
- **Tailwind** I have chosen Tailwind because it has already been defined with default tokens as an initial design system.
- **Vercel** Vercel para alojar la web. Proporciona los Edge servers para

## Problems to solve

### Performance

#### Server Components

- When making server requests, the road to the server where the data is shorter in a real case.
- Investigate lazy loading and caching strategies to improve API response times and caching HTML generated on server on Edges servers provided by Vercel.

### Scalability

#### DDD Architecture

- Refine the Domain-Driven Design to better segregate business logic from infrastructure.
- Increase modularity by further decomposing modules as the project grows.
- Ensure boundaries between domains are maintained with well-defined interfaces to allow for easier future scaling.

### Accessibility

- Use of all native labels that correspond to each thing.
- Care in the visualization of the focus and be able to interact with the page with the tab, enter and space.

### SEO

#### Server Components

- It allows us to deliver HTML that will be read by search engines
- Use of Meta Tags
