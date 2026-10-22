# TheCocktailDB Search

A React app for searching cocktails with TheCocktailDB API, browsing results as cards and opening a detail page for each drink.

![React](https://img.shields.io/badge/React-16-61DAFB?logo=react&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-5-CA4245?logo=reactrouter&logoColor=white)

## About

Built in 2022 as a learning project while practicing React Router, the Context API and `useCallback`, based on the "Cocktails" project from John Smilga's React projects course.

## Features

- Live search: results update as you type (search input auto-focused with `useRef`)
- Cocktail cards with image, name, glass type and alcoholic/non-alcoholic info
- Detail page per cocktail (`/cocktail/:id`) with category, info, glass, instructions and ingredient list
- Empty-results message and a loading indicator
- About page and 404 error page
- Global state shared through a Context provider with a `useGlobalContext` hook
- Netlify `_redirects` file so client-side routes work after deploy

## Tech Stack

- React 16 (Create React App)
- React Router DOM v5
- Context API, `useCallback`, `useRef`
- [TheCocktailDB](https://www.thecocktaildb.com/) API

## Getting Started

Prerequisites: Node.js and npm.

```bash
git clone https://github.com/coderasraf/TheCocktailDB.git
cd TheCocktailDB
npm install
npm start        # http://localhost:3000
npm run build    # production build (CI= prevents warnings from failing Netlify builds)
```

## Project Structure

```text
├── public/_redirects        # SPA routing on Netlify
└── src/
    ├── App.js               # Routes
    ├── context.js           # Search state + API fetching
    ├── components/          # Navbar, SearchForm, CocktailList, Cocktail, Loading
    └── pages/               # Home, About, SingleCocktail, Error
```

## Live Demo

[thecocktaildb3.netlify.app](https://thecocktaildb3.netlify.app/)

## Author

Built by **Ashraf Siddik**, Shopify developer & CRO specialist.
- Website: [ashraf-siddik.com](https://ashraf-siddik.com)
- GitHub: [@coderasraf](https://github.com/coderasraf)
