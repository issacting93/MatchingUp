# Women's Choosing Flow 🎯

A modern, elegant dating application built with React and TypeScript, featuring an intuitive card-swiping interface and organized SVG icon system.

![Women's Choosing Flow](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6.3.5-purple?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

### 🎨 **Modern UI/UX**
- **Elegant Design**: Dark theme with gold accents
- **Smooth Animations**: Framer Motion powered transitions
- **Responsive Layout**: Works perfectly on all devices
- **Accessibility**: Screen reader friendly with proper ARIA labels

### 🃏 **Card Stack Interface**
- **Swipe Gestures**: Intuitive card navigation
- **Decision Options**: Yes, No, Maybe, Open to Chat
- **Progress Tracking**: Visual feedback on completion
- **Completion Page**: Beautiful summary with decision statistics

### 🎯 **Organized Icon System**
- **13 SVG Icons**: Close, Check, User, Heart, Plus, Arrows, etc.
- **Flexible Usage**: Multiple rendering methods (inline, image, background)
- **Type-Safe**: Full TypeScript support with IconName type
- **Easy Maintenance**: Individual SVG files in organized folder structure

### 🔄 **Application Flow**
- **Invite System**: User invitation and redemption
- **Onboarding**: Profile creation with photo upload
- **Discovery**: Main card-swiping experience
- **Match Notifications**: Real-time match alerts
- **State Management**: Seamless flow transitions

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/issacting93/MatchingUp.git
   cd MatchingUp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3001`

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── assets/
│   └── icons/                 # 🎯 Organized SVG icon system
│       ├── index.ts          # Main icon exports
│       ├── utils.ts          # Icon utility functions
│       ├── README.md         # Icon documentation
│       ├── close.svg         # Close/X icon
│       ├── check.svg         # Checkmark icon
│       ├── user.svg          # User/Profile icon
│       ├── heart.svg         # Heart icon
│       ├── plus.svg          # Plus icon
│       ├── arrow-right.svg   # Right arrow
│       ├── arrow-left.svg    # Left arrow
│       ├── bookmark.svg      # Bookmark icon
│       ├── menu.svg          # Menu icon
│       ├── star.svg          # Star icon
│       ├── trophy.svg        # Trophy icon
│       └── lightbulb.svg     # Lightbulb icon
├── components/
│   ├── AppFlow.tsx           # Main application flow controller
│   ├── CardStack.tsx         # Card swiping interface
│   ├── ProfileCard.tsx       # Individual profile card
│   ├── ForYou.tsx            # Main discovery page
│   ├── Onboarding.tsx        # User onboarding flow
│   ├── InviteRedeem.tsx      # Invitation system
│   ├── MatchNotification.tsx # Match alerts
│   ├── figma/
│   │   └── ImageWithFallback.tsx # Image component with fallback
│   └── ui/                   # Reusable UI components
├── styles/
│   ├── globals.css           # Global styles
│   ├── grid.ts              # Grid utilities
│   └── spacing.ts           # Spacing utilities
├── hooks/
│   ├── useProfileCard.ts    # Profile card logic
│   └── useResponsive.ts     # Responsive utilities
├── guidelines/
│   └── Guidelines.md        # Development guidelines
├── App.tsx                  # Root application component
├── main.tsx                 # Application entry point
└── index.css               # Base styles
```

## 🎯 Icon System Usage

### Method 1: Using Utility Functions (Recommended)
```tsx
import { getIconHtml } from '../assets/icons/utils';

<div 
  className="w-6 h-6 text-green-500"
  dangerouslySetInnerHTML={{ __html: getIconHtml('check') }}
/>
```

### Method 2: Direct Import
```tsx
import { CheckIcon, HeartIcon } from '../assets/icons';

<img src={CheckIcon} alt="Check" className="w-6 h-6" />
```

### Method 3: Using Icons Object
```tsx
import { icons } from '../assets/icons';

const checkIcon = icons.check;
<div dangerouslySetInnerHTML={{ __html: checkIcon }} />
```

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.2.0
- **Language**: TypeScript 5.0
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion
- **Icons**: Custom SVG system
- **Deployment**: Vercel ready

## 🎨 Design System

### Colors
- **Primary**: `#C9A44C` (Gold)
- **Background**: `#0A0A0A` (Dark)
- **Surface**: `#121212` (Card background)
- **Text**: `#FFFFFF` (White)
- **Secondary Text**: `#BDBDBD` (Light gray)

### Typography
- **Display Font**: Modern sans-serif for headings
- **Body Font**: Clean, readable font for content
- **Responsive**: Scales appropriately across devices

## 🔧 Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Code Quality
- **TypeScript**: Full type safety
- **ESLint**: Code linting
- **Prettier**: Code formatting
- **Git Hooks**: Pre-commit checks

## 📱 Features in Detail

### Card Stack Interface
- **Smooth Animations**: Cards animate in/out with spring physics
- **Gesture Support**: Touch and mouse interactions
- **Decision Tracking**: Records user choices with timestamps
- **Progress Visualization**: Shows completion percentage

### Profile Cards
- **Rich Information**: Name, age, title, bio
- **High-Quality Images**: Optimized image loading with fallbacks
- **Interactive Elements**: Decision buttons with hover states
- **Accessibility**: Proper alt text and keyboard navigation

### Match System
- **Real-time Notifications**: Instant match alerts
- **Photo Pairing**: Side-by-side profile comparison
- **Action Buttons**: "Say Hello" functionality
- **Smooth Transitions**: Animated modal presentations

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with zero configuration

### Other Platforms
The app is compatible with any static hosting service:
- Netlify
- GitHub Pages
- AWS S3
- Firebase Hosting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Design Inspiration**: Modern dating app interfaces
- **Icons**: Custom designed SVG icons
- **Animations**: Framer Motion for smooth interactions
- **Styling**: Tailwind CSS for rapid development

## 📞 Support

If you have any questions or need help:
- **Issues**: [GitHub Issues](https://github.com/issacting93/MatchingUp/issues)
- **Discussions**: [GitHub Discussions](https://github.com/issacting93/MatchingUp/discussions)

---

**Built with ❤️ using React, TypeScript, and modern web technologies**
  