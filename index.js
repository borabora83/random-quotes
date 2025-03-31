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
const favouriteBtn = document.getElementById('favourite-btn');
favouriteBtn.addEventListener('click', () =>
  toggleFavourite(currentQuote, favouriteBtn, favouritesContainer)
);

hideFavouriteBtn(favouriteBtn);

const generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click', () =>
  handleQuote(quotes, setCurrentQuote)
);
export { favouriteBtn };
