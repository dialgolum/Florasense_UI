# Florasense — AI Agricultural Dashboard

Welcome to the **Florasense Commercial Nursery Portal**, a Next.js application built to unify agricultural dashboards including Disease Diagnostics, Export Quality, Plant ID & Chat, and Supply Forecasting.

This project was built using **Next.js (App Router)**, **React**, and **Tailwind CSS**.

## Project Structure

- `/app`: Contains all Next.js App Router pages and layouts.
  - `/app/page.tsx`: The main Overview dashboard.
  - `/app/disease-scanner/page.tsx`: Disease Diagnostics dashboard.
  - `/app/export-quality/page.tsx`: Export Quality Assessment portal.
  - `/app/plant-id/page.tsx`: Plant ID & Chat portal.
  - `/app/supply-forecast/page.tsx`: Supply Forecast dashboard.
  - `/app/components/Sidebar.tsx`: The shared navigation sidebar used across all pages.
- `/app/globals.css`: Contains the Tailwind design system configuration (using `@theme inline`), custom scrollbars, and Material Symbols configurations.

## Getting Started

Follow these steps to set up the project locally and run the development server.

### 1. Prerequisites
Ensure you have **Node.js** (v18.17 or newer) installed on your machine.

### 2. Installation
Navigate to the project directory and install the required dependencies:

```bash
# Navigate to the nextjs app directory
cd florasense-dashboard

# Install dependencies using npm
npm install
```

### 3. Running the Development Server
Once the dependencies are installed, start the local development server:

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### 4. Navigating the App
Open your browser and navigate to `http://localhost:3000`. You will see the main **Overview** dashboard. Use the sidebar on the left to seamlessly navigate between the different agricultural modules.

## Technologies Used
- **Next.js 15+** (App Router)
- **React 19**
- **Tailwind CSS v4**
- **Google Fonts** (Hanken Grotesk & JetBrains Mono)
- **Material Symbols** (for iconography)

## Design System
The UI relies on a specific nature-inspired, biophilic design system tailored for commercial floriculture. All design tokens (Colors, Typography, Spacing, etc.) are implemented directly in `app/globals.css`.
