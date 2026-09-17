# Movie Explorer

A responsive Movie Explorer application built with React. Browse through thousands of TV shows, search by title, and view detailed information in an interactive modal.

## Live Demo

[View Live](https://your-deployment-url.com)

## Features

- **Hero Banner** - Auto-cycling carousel with 6 movie backdrop images and smooth crossfade transitions
- **Movie Listing** - Responsive grid displaying shows fetched from the TVMaze API
- **Search** - Real-time debounced search across all available shows
- **Movie Details Modal** - Interactive overlay with full show information including rating, genres, runtime, and summary
- **Responsive Design** - Optimized for mobile, tablet, and desktop viewports
- **Dark Theme** - Netflix-inspired dark UI with red accent colors

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React 18 | UI Framework |
| React Router | Client-side routing |
| Tailwind CSS | Utility-first styling |
| Webpack | Module bundling |
| Babel | JavaScript transpilation |
| TVMaze API | Movie/TV show data |

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
git clone https://github.com/nufayer/movie-explorer.git
cd movie-explorer
npm install
```

### Development

```bash
npm start
```

Opens [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
```

Outputs optimized files to the `dist/` directory.

## Project Structure

```
movie-explorer/
├── public/
│   ├── index.html
│   └── *.jpg / *.webp        # Banner images
├── src/
│   ├── components/
│   │   ├── Navbar.js          # Fixed navigation bar
│   │   ├── HeroBanner.js      # Auto-cycling hero carousel
│   │   ├── Footer.js          # Footer with social links
│   │   ├── MovieCard.js       # Reusable movie card
│   │   ├── MovieModal.js      # Movie details overlay
│   │   └── SearchBar.js       # Search input component
│   ├── pages/
│   │   ├── Home.js            # Landing page
│   │   └── Movies.js          # Movie listing page
│   ├── services/
│   │   └── api.js             # TVMaze API functions
│   ├── index.js               # App entry point
│   └── index.css              # Global styles + Tailwind
├── tailwind.config.js
├── webpack.config.js
└── package.json
```

## API

This project uses the [TVMaze API](https://www.tvmaze.com/api) for movie and TV show data.

| Endpoint | Description |
|----------|-------------|
| `GET /shows` | Fetch all shows |
| `GET /search/shows?q=:query` | Search shows by title |
| `GET /shows/:id` | Fetch single show details |

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Author

**Nufayer Mahmud**

- GitHub: [nufayer](https://github.com/nufayer)
- LinkedIn: [nufayer-mahmud009](https://www.linkedin.com/in/nufayer-mahmud009)

## License

This project is open source and available under the [MIT License](LICENSE).
