# Social Meok | Unified Social Inbox

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fparthshinge%2FUnified-Social-Inbox)

A premium, dark-themed social inbox dashboard replicating the "Social Meok" interface. Built with Next.js 15, Tailwind CSS v4, and integrated with Farcaster data via Neynar.

![Dashboard Preview](./public/dashboard-preview.png)

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- **Unified Inbox**: View messages from multiple platforms (Farcaster, Lens, Twitter).
- **Dark Mode UI**: Professional dark theme with glassmorphism effects.
- **Responsive Layout**: Sidebar navigation and responsive content area.
- **Metrics Dashboard**: Key performance indicators at a glance.

## key Components

- `components/Sidebar.tsx`: Main navigation.
- `components/RightSidebar.tsx`: Client accounts and insights.
- `components/Header.tsx`: Top bar with search and profile.
- `components/InboxCard.tsx`: Individual message display.
