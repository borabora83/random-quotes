import quotes from '../data/quotes.js';
import { handelFavourite } from './favourites.js';
import { genereteRandomInt } from '../utils.js';

let currentQuote = null;

function handleQuote() {
  const randomQuote = chooseRandomQuote(quotes);
  currentQuote = randomQuote;
  displayQuote(randomQuote);
}

function displayQuote(quote) {
  const { text, author, isFavourite } = quote;
  const quoteAuthorElement = document.getElementById('quote-author');
  const quoteElement = document.getElementById('quote');
  quoteElement.textContent = text;
  quoteAuthorElement.textContent = author;
  handelFavourite(isFavourite);
}

function chooseRandomQuote(quotes) {
  const randomIndex = genereteRandomInt(quotes.length);
  return quotes[randomIndex];
}

export { handleQuote, currentQuote };
