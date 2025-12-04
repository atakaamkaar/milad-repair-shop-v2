# Milad Repair Shop

Static business website built with Next.js 16 (Turbopack) and shadcn/ui components.

## Live Deployment

Visit the site: [https://milad-repair-shop-v2.vercel.app/](https://milad-repair-shop-v2.vercel.app/)

## Required Dependencies

To run locally or sync your environment, install:

```
npm install
npm install @radix-ui/react-checkbox
npm install @radix-ui/react-slot
npm install @radix-ui/react-select
npm install @radix-ui/react-label
npm install @radix-ui/react-accordion
npm install class-variance-authority
npm install clsx
npm install tailwind-merge
npm install react-day-picker
npm install react-hook-form
npm install next-themes
npm install recharts
npm install @vercel/analytics
```

Development-only type dependencies:

```
npm install -D @types/node @types/react @types/react-day-picker
```

shadcn/ui installers used:

```
npx shadcn@latest add checkbox
npx shadcn-ui@latest add --all
```

Additional UI and utility packages:

```
npm install lucide-react
npm install d3-color@latest --save
npm install cmdk
npm install cmdk@latest
npm install cmdk lucide-react clsx tailwind-merge
```

Glob import rule used by generator:

```
npm install @radix-ui/react-* cmdk lucide-react clsx tailwind-merge
```

More UI primitives installed:

```
npm install @radix-ui/react-dropdown-menu
npm install @radix-ui/react-dropdown-menu
npm install @radix-ui/react-dropdown-menu
npm install input-otp
npm install input-otp
npm install sonner
npm install sonner
npm install cmdk@latest
npm install @radix-ui/react-dropdown-menu
npm install react-resizable-panels
npm install cmdk@latest
npm install @radix-ui/react-checkbox
npm install @radix-ui/react-checkbox
npm install @radix-ui/react-checkbox
npm install recharts
npm install @radix-ui/react-hover-card
npm install @radix-ui/react-menubar
npm install @radix-ui/react-navigation-menu
npm install @radix-ui/react-navigation-menu
npm install @radix-ui/react-navigation-menu
npm install @radix-ui/react-navigation-menu
npm install @radix-ui/react-navigation-menu
npm install @radix-ui/react-progress
npm install @radix-ui/react-radio-group
npm install @radix-ui/react-scroll-area
npm install @radix-ui/react-separator
npm install @radix-ui/react-slider
npm install @radix-ui/react-switch
npm install @radix-ui/react-tabs
npm install @radix-ui/react-toggle-group
npm install @radix-ui/react-toggle-group
npm install @radix-ui/react-toggle-group
npm install @radix-ui/react-toggle-group
npm install @radix-ui/react-toggle-group
npm install @radix-ui/react-toggle-group
npm install @radix-ui/react-tabs
npm install @radix-ui/react-tabs
npm install @radix-ui/react-tabs
npm install @radix-ui/react-slider
npm install @radix-ui/react-slider
npm install @radix-ui/react-slider
npm install @radix-ui/react-slider
npm install @radix-ui/react-menubar
npm install @radix-ui/react-menubar
npm install @radix-ui/react-menubar
npm install @radix-ui/react-menubar
npm install @radix-ui/react-menubar
npm install @radix-ui/react-menubar
npm install @radix-ui/react-menubar
npm install @radix-ui/react-menubar
npm install @radix-ui/react-menubar
npm install @radix-ui/react-menubar
npm install @radix-ui/react-menubar
npm install @radix-ui/react-accordion
npm install @radix-ui/react-menubar
npm install vaul
npm install vaul
npm install vaul
npm install @radix-ui/react-accordion
npm install @radix-ui/react-select
npm install @radix-ui/react-label
npm install clsx
npm install tailwind-merge
npm install @vercel/analytics
npm install cmdk@latest
npm install @radix-ui/react-dropdown-menu
npm install @radix-ui/react-hover-card
npm install @radix-ui/react-menubar
npm install @radix-ui/react-navigation-menu
npm install @radix-ui/react-progress
npm install @radix-ui/react-radio-group
npm install @radix-ui/react-scroll-area
npm install @radix-ui/react-separator
npm install @radix-ui/react-slider
npm install @radix-ui/react-switch
npm install @radix-ui/react-tabs
npm install @radix-ui/react-toggle-group
npm install @radix-ui/react-checkbox @radix-ui/react-slot lucide-react
npm install @radix-ui/react-checkbox @radix-ui/react-slot lucide-react
npm install
npm install
npm install @radix-ui/react-* cmdk lucide-react
npm install cmdk@latest
npm install @radix-ui/react-checkbox
npm install @radix-ui/react-checkbox
npm install @radix-ui/react-checkbox
npm install input-otp
npm install @radix-ui/react-menubar
npm install @radix-ui/react-navigation-menu
npm install @radix-ui/react-progress
npm install @radix-ui/react-progress
npm install @radix-ui/react-checkbox @radix-ui/react-slot lucide-react
npm install @radix-ui/react-checkbox @radix-ui/react-slot lucide-react
npm install d3-color@latest --save
npm install pkg@latest
npm install pkg@latest --save
npm install cmdk@latest --save
npm install cmdk@latest
npm install d3-color@latest --save
npm install cmdk@latest
npm install cmdk@latest
npm install cmdk@latest
npm install cmdk lucide-react clsx tailwind-merge
npm install clsx tailwind-merge
npm install @radix-ui/react-tabs
npm install @radix-ui/react-toggle-group
npm install @radix-ui/react-slider
npm install @radix-ui/react-switch
npm install @radix-ui/react-switch --save-dev clsx tailwind-merge cmdk lucide-react
```

## Project Configuration Recommendation

Make sure your `components.json` file contains:

```
"style": "default"
```

## Build and Run

After installing dependencies, run:

```
npm run build
npm run dev
```

## Backend Reservation Notes

This is a **static build**. Backend services are not included. To extend:

* Use API routes or serverless functions for reservations
* Send reservation info to manager via SMS or external webhook in future versions

## Contribution

This project is personal and for learning and deployment practice. You can fork or reuse freely.
