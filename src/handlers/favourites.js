import { favouriteBtn } from '../../index.js';

function toggleFavourite(quote, btn, container) {
  quote.isFavourite = !quote.isFavourite;
  toggleFavouriteBtnIcon(quote.isFavourite, btn);
  quote.isFavourite
    ? showFavouriteCard(quote, container)
    : hideFavouriteCard(quote.id);
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

function showFavouriteCard(quote, container) {
  const { id, text, author } = quote;
  const favouriteCard = document.createElement('div');
  favouriteCard.classList.add('favourite-card');
  favouriteCard.dataset.quoteId = id;
  favouriteCard.innerHTML = `
    <p>${text}</p>
    <p class="author">${author}</p>`;
  container.appendChild(favouriteCard);
}

function hideFavouriteCard(id) {
  const card = document.querySelector(`.favourite-card[data-quote-id="${id}"]`);
  if (card) {
    card.remove();
  }
}

export { handelFavourite, toggleFavourite, hideFavouriteBtn };
