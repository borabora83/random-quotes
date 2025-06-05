import { handelFavourite } from './favourites.js';
import { genereteRandomInt } from '../utils/math.js';

function handleQuote(quotes, favouriteQuotes, setCurrentQuote) {
  const randomQuote = chooseRandomQuote(quotes);
  if (favouriteQuotes.find((quote) => quote.id === randomQuote.id)) {
    randomQuote.isFavourite = true;
  }
  setCurrentQuote(randomQuote);
  displayQuote(randomQuote);
}

function displayQuote(quote) {
  const { id, text, author, isFavourite } = quote;
  const quoteElement = document.getElementById('quote');
  const quoteTextElement = document.getElementById('quote-text');
  const quoteAuthorElement = document.getElementById('quote-author');
  //Current quote will have data-current-quote-id HTML attribute
  quoteElement.dataset.currentQuoteId = id;
  quoteTextElement.textContent = `"${text}"`;
  quoteAuthorElement.textContent = author;
  handelFavourite(isFavourite);
}

function chooseRandomQuote(quotes) {
  const randomIndex = genereteRandomInt(quotes.length);
  return quotes[randomIndex];
}

function findQuoteById(quotes, id) {
  return quotes.find((quote) => quote.id === id);
}

export { handleQuote, displayQuote, findQuoteById };
