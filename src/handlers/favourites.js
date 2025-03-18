import { currentQuote } from '../handlers/quote.js';
const favouritesContainer = document.getElementById('favourites-container');
const toggleBtn = document.getElementById('toggle-favourite-btn');
toggleBtn.addEventListener('click', toggleFavourite);

hideBtn(toggleBtn);

function toggleFavourite() {
  currentQuote.isFavourite = !currentQuote.isFavourite;
  toggleFavouriteIcon(currentQuote.isFavourite, toggleBtn);

  if (currentQuote.isFavourite) {
    showFavouriteCard(
      currentQuote.text,
      currentQuote.author,
      favouritesContainer
    );
  } else {
    hideFavouriteCard(currentQuote.text);
  }
}

function handelFavourite(isFavourite) {
  showBtn(toggleBtn);
  toggleFavouriteIcon(isFavourite, toggleBtn);
}

function toggleFavouriteIcon(isFavourite, element) {
  element.classList.toggle('fa', isFavourite);
  element.classList.toggle('far', !isFavourite);
}

function showBtn(btn) {
  btn.style.display = 'inline-block';
}

function hideBtn(btn) {
  btn.style.display = 'none';
}

function showFavouriteCard(text, author, container) {
  const favouriteCard = document.createElement('div');
  favouriteCard.classList.add('favourite-card');
  favouriteCard.innerHTML = `
    <p>${text}</p>
    <p class="author">${author}</p>`;
  container.appendChild(favouriteCard);
}

function hideFavouriteCard(text) {
  const favouriteCards = document.querySelectorAll('.favourite-card');
  const processFavouriteCard = (card) => {
    if (card.textContent.includes(text)) {
      card.remove();
    }
  };
  favouriteCards.forEach(processFavouriteCard);
}

export { handelFavourite };
