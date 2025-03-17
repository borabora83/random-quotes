function toggleFavouriteIcon(isFavourite, element) {
  element.classList.toggle('fa', isFavourite);
  element.classList.toggle('far', !isFavourite);
}

function showFavouriteCard(quote, author, container) {
  const favouriteCard = document.createElement('div');
  favouriteCard.classList.add('favourite-card');
  favouriteCard.innerHTML = `
    <p>${quote}</p>
    <p class="author">${author}</p>`;
  container.appendChild(favouriteCard);
}

function hideFavouriteCard(quote) {
  const favouriteCards = document.querySelectorAll('.favourite-card');
  const processFavouriteCard = (card) => {
    if (card.textContent.includes(quote)) {
      card.remove();
    }
  };
  favouriteCards.forEach(processFavouriteCard);
}

export { toggleFavouriteIcon, showFavouriteCard, hideFavouriteCard };
