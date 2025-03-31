import { favouriteBtn } from '../../index.js';

function toggleFavourite(quote, btn, container) {
  quote.isFavourite = !quote.isFavourite;
  const { text, author, isFavourite } = quote;
  toggleFavouriteBtnIcon(isFavourite, btn);

  if (isFavourite) {
    showFavouriteCard(text, author, container);
  } else {
    hideFavouriteCard(text);
  }
}

function handelFavourite(isFavourite) {
  showFavouriteBtn(favouriteBtn);
  toggleFavouriteBtnIcon(isFavourite, favouriteBtn);
}

function toggleFavouriteBtnIcon(isFavourite, element) {
  element.classList.toggle('fa', isFavourite);
  element.classList.toggle('far', !isFavourite);
}

function showFavouriteBtn(btn) {
  btn.style.display = 'inline-block';
}

function hideFavouriteBtn(btn) {
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

export { handelFavourite, toggleFavourite, hideFavouriteBtn };
