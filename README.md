# AptoSend: Secure and Intelligent Money Transfers

AptoSend is a next-generation money transfer application designed for a global, interconnected world. It combines a seamless user experience with a powerful, AI-driven fraud detection engine to make cross-border payments fast, affordable, and secure.

## ✨ Key Features

-   **🤖 AI Fraud Shield**: Leverages Google's Gemini model via Genkit to perform real-time risk assessment on every transaction, providing a score, a detailed reason, and a recommended action (Approve, Review, Deny).
-   **🌐 Global Anomaly Graph**: A stunning, live visualization of the anonymized global transaction network, with AI-flagged anomalies highlighted with dynamic animations and glow effects.
-   **⚡ Instant Transactions**: Built on a modern stack for near-instant user feedback and data processing.
-   **📊 Interactive Dashboard**: A comprehensive user dashboard to send money, view transaction history, manage linked accounts, and visualize your personal transaction network.
-   **🚀 Modern Tech Stack**: Built with Next.js (App Router), TypeScript, Tailwind CSS, and ShadCN UI for a beautiful, responsive, and maintainable user interface.
-   **🎬 Rich Animations**: Fluid and professional animations powered by Framer Motion provide a premium user experience.

## 🛠️ Technology Stack

-   **Framework**: [Next.js](https://nextjs.org/) (App Router)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **AI/Generative**: [Genkit](https://firebase.google.com/docs/genkit) with [Google AI (Gemini)](https://ai.google.dev/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Forms**: [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/) for validation

## 📂 Project Structure

The project is organized to be clean, modular, and easy to navigate.

```
/src
├── app/                  # Next.js App Router: Pages, Layouts, Server Actions
│   ├── dashboard/        # Authenticated user dashboard
│   ├── login/            # Login page
│   └── page.tsx          # Main landing page
├── ai/                   # All Genkit AI-related code
│   ├── flows/            # Genkit flows (e.g., transaction risk assessment)
│   └── genkit.ts         # Genkit configuration
├── components/           # Reusable React components
│   ├── landing/          # Components specific to the landing page
│   ├── ui/               # Core ShadCN UI components
│   └── *.tsx             # App-specific components (forms, graphs, etc.)
└── lib/                  # Utility functions (e.g., cn for classnames)
```

## 🚀 Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

-   [Node.js](https://nodejs.org/) (v18 or later)
-   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### 1. Set Up Your Environment

First, you'll need a Google AI API key to use the AI Fraud Shield feature.

1.  Visit [Google AI Studio](https://aistudio.google.com/app/apikey) to create your API key.
2.  Clone this repository:
    ```bash
    git clone https://github.com/RohanSai22/AptoSend
    cd AptoSend
    ```
3.  Create a local environment file by copying the example:
    ```bash
    cp .env .env.local
    ```
4.  Open `.env.local` and add your Google AI API key:
    ```
    GOOGLE_API_KEY=YOUR_API_KEY_HERE
    ```

### 2. Install Dependencies

Install the project dependencies using npm:

```bash
npm install
```

### 3. Run the Development Servers

This project requires two development servers running concurrently: one for the Next.js application and one for Genkit.

-   **Terminal 1: Start the Next.js App**
    ```bash
    npm run dev
    ```
    Your application will be available at `http://localhost:9002`.

-   **Terminal 2: Start the Genkit AI Server**
    ```bash
    npm run genkit:dev
    ```
    This starts the Genkit development UI, which you can use to inspect and test your AI flows.

Now you can access the application in your browser and test all features, including the AI-powered transaction analysis.
