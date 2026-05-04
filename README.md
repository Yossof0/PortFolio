# Yossof Abdelwahed - Web Developer Portfolio

A modern, responsive portfolio website showcasing web development projects and skills. Built with React 19, TypeScript, and Tailwind CSS with full Arabic and English language support.

## 🌟 Features

### Design & UX
- **Tech Forward Minimalism**: Clean, professional design with electric blue accents
- **Smooth Animations**: Elegant transitions and entrance animations throughout
- **Responsive Layout**: Fully responsive design that works on all devices
- **Bilingual Support**: Complete Arabic and English translations with RTL support

### Sections
- **Hero Section**: Eye-catching introduction with animated background
- **Skills & Expertise**: Organized display of technical skills and competencies
- **Contact Information**: Direct access to phone, email, and Discord/Gaming nick
- **Featured Projects**: Showcase of major projects with descriptions and links
- **Other Projects**: Additional smaller projects and utilities
- **Call-to-Action**: Engaging section encouraging visitor interaction

### Projects Included
1. **Custom Grab Cursor Extension** - Browser extension with smooth cursor interactions
2. **Narcissus Brand Website** - Premium brand showcase with modern design
3. **Rubiks Cube Teaching Website** - Interactive educational platform for learning cube solving
4. **Word Combinations** - Utility tool for word combination generation
5. **Math Table Generator** - Interactive math table with customizable parameters

## 🛠️ Technology Stack

- **Frontend Framework**: React 19 with TypeScript
- **Styling**: Tailwind CSS 4 with custom design tokens
- **Routing**: Wouter (lightweight client-side router)
- **UI Components**: shadcn/ui with Radix UI primitives
- **Icons**: Lucide React
- **Animations**: CSS animations and Framer Motion
- **Build Tool**: Vite
- **Package Manager**: pnpm

## 📋 Project Structure

```
yossof-portfolio/
├── client/
│   ├── public/
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/
│   │   │   └── ui/              # shadcn/ui components
│   │   ├── contexts/
│   │   │   ├── ThemeContext.tsx # Theme management
│   │   │   └── LanguageContext.tsx # Language/i18n management
│   │   ├── pages/
│   │   │   ├── Home.tsx         # Main portfolio page
│   │   │   └── NotFound.tsx     # 404 page
│   │   ├── App.tsx              # Main app component with routing
│   │   ├── main.tsx             # React entry point
│   │   └── index.css            # Global styles and design tokens
│   └── index.html               # HTML template
├── server/
│   └── index.ts                 # Express server (static deployment)
├── shared/
│   └── const.ts                 # Shared constants
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and pnpm 10+
- Git

### Installation

```bash
# Clone or extract the project
cd yossof-portfolio

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The site will be available at `http://localhost:3000`

### Development Commands

```bash
# Start development server with hot reload
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Type checking
pnpm check

# Format code
pnpm format
```

## 🌍 Language Support

The portfolio supports both English and Arabic with a language toggle button in the navigation bar.

### Language Features
- **Complete Translations**: All text content is translated
- **RTL Support**: Arabic layout automatically switches to right-to-left
- **Persistent Language**: Language preference is maintained during browsing
- **Easy Toggle**: Simple button in the header to switch languages

### Adding New Translations

Edit `client/src/contexts/LanguageContext.tsx` and add new keys to the `translations` object:

```typescript
const translations = {
  en: {
    "new.key": "English text",
    // ...
  },
  ar: {
    "new.key": "النص العربي",
    // ...
  },
};
```

Then use in components:

```typescript
const { t } = useLanguage();
<h1>{t("new.key")}</h1>
```

## 📱 Contact Information

- **Phone**: +20 01554873048
- **Email**: yossef2989@2012
- **Discord/Gaming Nick**: Yossof0
- **GitHub**: https://github.com/Yossof0/
- **YouTube**: https://www.youtube.com/@overclock33

## 🎨 Design System

### Colors
- **Primary**: Electric Blue (#0066FF)
- **Background**: Pure White
- **Text**: Dark Gray/Black
- **Accents**: Light Gray for secondary elements

### Typography
- **Headings**: Poppins (Bold, 700 weight)
- **Body Text**: Inter (Regular, 400 weight)
- **Font Sizes**: Responsive scaling for mobile and desktop

### Spacing & Layout
- **Grid System**: Responsive grid (1 column mobile, 2-3 columns desktop)
- **Container**: Max-width 1280px with responsive padding
- **Gap**: Consistent 8px, 16px, 24px, 32px spacing

## ✨ Animations

The portfolio features several smooth animations:

- **Fade-In**: Elements fade in on page load
- **Slide-Up**: Content slides up with fade effect
- **Float**: Subtle floating motion on background elements
- **Hover Effects**: Interactive feedback on cards and buttons
- **Scroll Parallax**: Background images move with scroll

## 📈 Performance Optimizations

- **Image Optimization**: Background images use WebP format
- **Lazy Loading**: Components load on demand
- **Code Splitting**: Vite handles automatic code splitting
- **CSS-in-JS**: Minimal runtime overhead with Tailwind CSS
- **Asset CDN**: Generated images served from optimized CDN

## 🔧 Customization

### Changing Colors

Edit `client/src/index.css` and modify the CSS variables:

```css
:root {
  --primary: #0066FF;  /* Change primary color */
  --background: oklch(1 0 0);  /* Change background */
  --foreground: oklch(0.15 0.02 0);  /* Change text color */
}
```

### Adding New Projects

Edit `client/src/pages/Home.tsx` and add to the `projects` array:

```typescript
{
  id: "6",
  titleKey: "project.newProject.title",
  descKey: "project.newProject.desc",
  tagsKey: "project.newProject.tags",
  link: "https://your-project-link.com",
  featured: true,
}
```

Then add translations in `LanguageContext.tsx`.

### Modifying Content

All text content is managed through the `LanguageContext`. Update translations to change any text on the site.

## 🚢 Deployment

The portfolio is ready to deploy on any static hosting platform:

- **Manus**: Built-in hosting with custom domain support
- **Vercel**: Zero-config deployment
- **Netlify**: Drag-and-drop deployment
- **GitHub Pages**: Free hosting with GitHub
- **Any Static Host**: Build and deploy the `dist/` folder

### Build for Production

```bash
pnpm build
```

This creates an optimized production build in the `dist/` folder.

## 📚 Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
- [Wouter Router](https://github.com/molefrog/wouter)
- [shadcn/ui](https://ui.shadcn.com)
- [Lucide Icons](https://lucide.dev)

## 📝 License

This project is open source and available for personal and commercial use.

## 👨‍💻 About the Developer

**Yossof Abdelwahed** is a 15-year-old web developer with 3 years of JavaScript experience. He creates interactive, beautiful web experiences with smooth animations and modern design principles.

- **Age**: 15 years old
- **Experience**: 3+ years with JavaScript
- **Specialties**: Frontend Development, Interactive Design, 3D Graphics
- **Location**: Egypt

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📞 Support

For questions or issues, reach out through:
- **Email**: yossef2989@2012
- **Phone**: +20 01554873048
- **GitHub**: https://github.com/Yossof0/

---

**Last Updated**: May 4, 2026

**Version**: 1.0.0

Built with ❤️ by Yossof Abdelwahed
