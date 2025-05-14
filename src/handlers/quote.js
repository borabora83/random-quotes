import { handelFavourite } from './favourites.js';
import { genereteRandomInt } from '../utils.js';

function handleQuote(quotes, setCurrentQuote) {
  const randomQuote = chooseRandomQuote(quotes);
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
  quoteTextElement.textContent = text;
  quoteAuthorElement.textContent = author;
  handelFavourite(isFavourite);
}

function chooseRandomQuote(quotes) {
  const randomIndex = genereteRandomInt(quotes.length);
  return quotes[randomIndex];
}

export { handleQuote };
