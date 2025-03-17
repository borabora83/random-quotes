import quotes from './src/quotes.js';
import {
  hideFavouriteCard,
  showFavouriteCard,
  toggleFavouriteIcon,
} from './src/favouritesHandlers.js';

const generateBtn = document.getElementById('generate-btn');
const quoteAuthorElement = document.getElementById('quote-author');
const quoteElement = document.getElementById('quote');
const toggleFavouriteBtn = document.getElementById('toggle-favourite-btn');
const favouritesContainer = document.getElementById('favourites-container');

let currentQuoteIndex;

function generateRandomQuote() {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[currentQuoteIndex];
  const { quote, author } = randomQuote;
  quoteElement.textContent = quote;
  quoteAuthorElement.textContent = author;
  toggleFavouriteIcon(randomQuote.isFavourite, toggleFavouriteBtn);

  toggleFavouriteBtn.style.display = 'inline-block';
}

function toggleFavourite() {
  const currentQuote = quotes[currentQuoteIndex];
  currentQuote.isFavourite = !currentQuote.isFavourite;
  toggleFavouriteIcon(currentQuote.isFavourite, toggleFavouriteBtn);

  if (currentQuote.isFavourite) {
    showFavouriteCard(
      currentQuote.quote,
      currentQuote.author,
      favouritesContainer
    );
  } else {
    hideFavouriteCard(currentQuote.quote);
  }
}

generateBtn.addEventListener('click', generateRandomQuote);
toggleFavouriteBtn.addEventListener('click', toggleFavourite);

generateRandomQuote();
