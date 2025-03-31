import { handelFavourite } from './favourites.js';
import { genereteRandomInt } from '../utils.js';

function handleQuote(quotes, setCurrentQuote) {
  const randomQuote = chooseRandomQuote(quotes);
  setCurrentQuote(randomQuote);
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

export { handleQuote };
