import { quoteFavouriteBtn } from '../../index.js';

function toggleFavourite(quote, btn, container) {
  quote.isFavourite = !quote.isFavourite;
  toggleFavouriteBtnIcon(quote.isFavourite, btn);
  quote.isFavourite
    ? showFavouriteCard(quote, container)
    : removeFavouriteCard(quote.id);
}

function handelFavourite(isFavourite) {
  showFavouriteBtn();
  toggleFavouriteBtnIcon(isFavourite);
}

function toggleFavouriteBtnIcon(isFavourite) {
  quoteFavouriteBtn.classList.toggle('fa', isFavourite);
  quoteFavouriteBtn.classList.toggle('far', !isFavourite);
}

function showFavouriteBtn() {
  quoteFavouriteBtn.style.display = 'inline-block';
}

function hideFavouriteBtn() {
  quoteFavouriteBtn.style.display = 'none';
}

function removeFavouriteQuote(quote) {
  {
    quote.isFavourite = false;
    removeFavouriteCard(quote.id);
    const currentQuote = document.querySelector('[data-current-quote-id]');
    const currentQuoteId = currentQuote.dataset.currentQuoteId;
    if (quote.id === currentQuoteId) {
      toggleFavouriteBtnIcon(quote.isFavourite);
    }
  }
}

function showFavouriteCard(quote, container) {
  const { id, text, author } = quote;
  const favouriteCard = document.createElement('div');
  favouriteCard.classList.add('favourite-card');
  favouriteCard.dataset.favouriteQuoteId = id;
  favouriteCard.innerHTML = `
  <div class="favourite-card-content">
    <p>${text}</p>
    <p class="favourite-card-author">${author}</p>
  </div>  
    <button class="btn btn-danger"><i class = 'far fa-trash-alt'></i> Remove from favourites</button>`;
  container.appendChild(favouriteCard);

  const removeButton = favouriteCard.querySelector('.btn-danger');
  removeButton.addEventListener('click', () => removeFavouriteQuote(quote));
}

function removeFavouriteCard(id) {
  const card = document.querySelector(`[data-favourite-quote-id="${id}"]`);
  if (card) {
    card.remove();
  }
}

export { handelFavourite, toggleFavourite, hideFavouriteBtn };
