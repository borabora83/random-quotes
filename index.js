import { handleQuote } from './src/handlers/quote.js';
import quotes from './src/data/quotes.js';
import {
  toggleFavourite,
  hideFavouriteBtn,
} from './src/handlers/favourites.js';

let currentQuote = null;

function setCurrentQuote(quote) {
  currentQuote = quote;
}

const favouritesContainer = document.getElementById('favourites-container');
const quoteFavouriteBtn = document.getElementById('quote-favourite-btn');
quoteFavouriteBtn.addEventListener('click', () =>
  toggleFavourite(currentQuote, quoteFavouriteBtn, favouritesContainer)
);

hideFavouriteBtn();

const generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click', () =>
  handleQuote(quotes, setCurrentQuote)
);
export { quoteFavouriteBtn };
