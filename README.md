# Stellaz Admin Guide 🛍️

Documentation and implementation guide for the Stellaz Shopify Theme.

This project is a modern, responsive web application built with Next.js to help store administrators configure custom Shopify components like Complementary Products, Media Badges, and more.

## ✨ Features

- **Interactive Guides**: Step-by-step instructions for implementing Shopify components.
- **Video Placeholders**: Ready-to-use slots for tutorial videos.
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices.
- **Branded UI**: Custom theme matching the "Stellaz" brand identity (Soft Pink & Navy Blue).
- **Assistance Section**: Integrated support contact card with clipboard functionality.

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Library**: React
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Looziolooz/stellaz-admin-guide.git
   cd stellaz-admin-guide
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📂 Project Structure

```
src/
├── app/
│   ├── page.tsx            # Main entry point (Homepage)
│   └── globals.css         # Global styles & Tailwind directives
├── components/
│   ├── layout/
│   │   └── Sidebar.tsx     # Navigation sidebar
│   └── ui/
│       ├── Accordion.tsx   # Collapsible instruction steps
│       ├── ProfileCard.tsx # Support contact card
│       └── ...             # Other UI components
├── data/
│   └── guideData.ts        # Content source (Edit this to change text!)
├── constants/
│   └── theme.ts            # Color palette and design tokens
└── ...
```

## 📝 Customization

### Updating Content

To change the text, add new steps, or modify existing guides, edit the file:
```
src/data/guideData.ts
```

### Changing Colors

To adjust the color scheme (Brand colors), edit the theme constants:
```
src/constants/theme.ts
```

### Adding Images

Place your images (e.g., profile.png) in the `public/` folder and reference them like `/profile.png` in your code.

## 👤 Author

**Lorenzo Dastoli**  
- Role: Frontend Developer (React, Next.js, Shopify Liquid)  
- Email: lorenzo.dastoli@gmail.com  
- GitHub: [@Looziolooz](https://github.com/Looziolooz)  
- LinkedIn: [Lorenzo Dastoli](https://linkedin.com/in/lorenzo-dastoli)  

This project was developed to assist the Stellaz e-commerce team