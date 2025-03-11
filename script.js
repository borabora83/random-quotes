import quotes from './quotes.js';

const generateBtn = document.getElementById('generate-btn');
const quoteAuthorElement = document.getElementById('quote-author');
const quoteElement = document.getElementById('quote');

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  const { quote, author } = randomQuote;
  quoteElement.textContent = quote;
  quoteAuthorElement.textContent = author;
}

generateBtn.addEventListener('click', generateRandomQuote);
