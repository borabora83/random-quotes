import {
  handleQuote,
  displayQuote,
  findQuoteById,
} from './src/handlers/quote.js';
import quotes from './src/data/quotes.js';
import {
  toggleFavourite,
  hideFavouriteBtn,
  showFavouriteCard,
} from './src/handlers/favourites.js';
import {
  localStorageSetItem,
  localStorageGetItem,
} from './src/utils/localStorage.js';

const CURRENT_QUOTE_KEY = 'currentQuote';
const FAVOURITE_QUOTES_KEY = 'favouriteQuotes';

let currentQuote = null;
const favouriteQuotes = [];

function setCurrentQuote(quote, shouldToggleIsFavourite = false) {
  if (shouldToggleIsFavourite) {
    quote.isFavourite = !quote.isFavourite;
    if (quote.isFavourite) {
      favouriteQuotes.push({ ...quote });
    } else {
      const index = favouriteQuotes.findIndex(
        (favouriteQuote) => favouriteQuote.id === quote.id
      );
      if (index !== -1) {
        favouriteQuotes.splice(index, 1);
      }
    }
    localStorageSetItem(FAVOURITE_QUOTES_KEY, favouriteQuotes);
  }
  currentQuote = quote;
  localStorageSetItem(CURRENT_QUOTE_KEY, quote);
}

const favouritesContainer = document.getElementById('favourites-container');
const quoteFavouriteBtn = document.getElementById('quote-favourite-btn');
quoteFavouriteBtn.addEventListener('click', () =>
  toggleFavourite(
    currentQuote,
    setCurrentQuote,
    quoteFavouriteBtn,
    favouritesContainer
  )
);

hideFavouriteBtn();

const generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click', () =>
  handleQuote(quotes, favouriteQuotes, setCurrentQuote)
);

function init() {
  const currentQuoteFromStorage = localStorageGetItem(CURRENT_QUOTE_KEY);
  if (currentQuoteFromStorage) {
    const quote = findQuoteById(quotes, currentQuoteFromStorage.id);
    displayQuote(currentQuoteFromStorage);
    quote.isFavourite = currentQuoteFromStorage.isFavourite;
    currentQuote = quote;
  }
  const favouriteQuotesFromStorage = localStorageGetItem(FAVOURITE_QUOTES_KEY);
  if (favouriteQuotesFromStorage) {
    favouriteQuotesFromStorage.forEach((quote) => {
      showFavouriteCard(quote, setCurrentQuote, favouritesContainer);
      favouriteQuotes.push(quote);
    });
  }
}

window.addEventListener('load', init);

export { quoteFavouriteBtn };
