import quotes from './quotes.js';

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
  toggleFavouriteBtn.textContent = randomQuote.isFavourite
    ? 'Remove from favourites'
    : 'Add to favourites';
  toggleFavouriteBtn.style.display = 'inline-block';
}

function toggleFavourite() {
  const currentQuote = quotes[currentQuoteIndex];
  currentQuote.isFavourite = !currentQuote.isFavourite;
  toggleFavouriteBtn.textContent = currentQuote.isFavourite
    ? 'Remove from favourites'
    : 'Add to favourites';
  if (currentQuote.isFavourite) {
    const favouriteCard = document.createElement('div');
    favouriteCard.classList.add('favourite-card');
    favouriteCard.innerHTML = `
      <p>${currentQuote.quote}</p>
      <p class="author">${currentQuote.author}</p>`;
    favouritesContainer.appendChild(favouriteCard);
  } else {
    const favouriteCards = document.querySelectorAll('.favourite-card');
    favouriteCards.forEach((card) => {
      if (card.textContent.includes(currentQuote.quote)) {
        card.remove();
      }
    });
  }
}

generateBtn.addEventListener('click', generateRandomQuote);
toggleFavouriteBtn.addEventListener('click', toggleFavourite);
