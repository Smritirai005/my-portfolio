# Smriti's Portfolio

A beautiful, modern portfolio website with light and dark mode themes. Features a cute pink/white aesthetic for light mode and a sleek, classy design for dark mode.

## Features

- 🌓 **Light & Dark Mode** - Toggle between cute pink/white theme and sleek dark theme
- 🎨 **Aesthetic Design** - Beautiful UI with gradient accents and smooth animations
- 📱 **Responsive** - Fully responsive design that works on all devices
- 🎯 **Bento Grid Layout** - Projects displayed in a modern bento-box style grid
- 🔗 **Project Links** - GitHub and Live Demo links for each project
- 📝 **Contact Form** - Interactive contact form with social media links
- ✨ **Smooth Animations** - Elegant transitions and hover effects

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
```

## Customization

### Update Your Information

1. **About Section** (`src/components/About.js`):
   - Update the name and description
   - Modify the tags/skills

2. **Projects** (`src/components/Projects.js`):
   - Replace the sample projects with your own
   - Update GitHub and Live Demo links
   - Adjust project sizes (large, medium, small)

3. **Contact** (`src/components/Contact.js`):
   - Update social media links
   - Modify email address

4. **Footer** (`src/components/Footer.js`):
   - Update your name in the footer

### Color Themes

Colors can be customized in `src/index.css`:
- Light mode colors: `--light-*` variables
- Dark mode colors: `--dark-*` variables

### Fonts

Fonts are imported from Google Fonts in `public/index.html`. You can change them to your preferred aesthetic fonts.

## Technologies Used

- React 18
- Lucide React (Icons)
- CSS3 with Custom Properties
- Google Fonts (Poppins, Playfair Display, Comfortaa)

## Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── About.js
│   │   ├── Contact.js
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   └── Projects.js
│   ├── context/
│   │   └── ThemeContext.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
└── package.json
```

## License

This project is open source and available under the MIT License.

