const quotes = [
  {
    quote: 'Будь тем изменением, которое ты хочешь увидеть в мире',
    author: 'Махатма Ганди',
  },
  {
    quote:
      'Сила не в том, чтобы делать то, что легко, а в том, чтобы делать то, что правильно',
    author: 'Стив Джобс',
  },
  {
    quote: 'Верь в себя и все будет возможно',
    author: 'Кристофер Рив',
  },
  {
    quote: 'Каждый день — это новый шанс изменить свою жизнь',
    author: 'Аноним',
  },
  {
    quote:
      'Не позволяй вчерашнему дню занять слишком много места в твоем сегодняшнем',
    author: 'Уилл Роджерс',
  },
  {
    quote: 'Секрет успеха в том, чтобы начать',
    author: 'Марк Твен',
  },
  {
    quote:
      'Единственный способ делать великие дела — любить то, что ты делаешь',
    author: 'Стив Джобс',
  },
  {
    quote:
      'Все наши мечты могут сбыться, если у нас хватит смелости их осуществить',
    author: 'Уолт Дисней',
  },
  {
    quote:
      'Не судите меня по моим успехам, судите меня по тому, сколько раз я падал и вставал снова',
    author: 'Нельсон Мандела',
  },
  {
    quote:
      'Если хочешь идти быстро — иди один, если хочешь идти далеко — иди вместе',
    author: 'Африканская пословица',
  },
  {
    quote:
      'Жизнь — это 10% того, что с вами происходит, и 90% того, как вы на это реагируете',
    author: 'Чарльз Свиндолл',
  },
  {
    quote: 'Неважно, как медленно ты идешь, главное — не останавливаться',
    author: 'Конфуций',
  },
  {
    quote:
      'Начни делать необходимое, затем возможное, и вскоре ты окажешься делающим невозможное',
    author: 'Франциск Ассизский',
  },
  {
    quote: 'Будь собой. Прочие роли уже заняты',
    author: 'Оскар Уайльд',
  },
];

const quoteBtn = document.getElementById('quoteBtn');
const quoteAuthorElement = document.getElementById('quote-author');
const quoteDisplay = document.getElementById('quote');

quoteBtn.addEventListener('click', function () {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  const { quote, author } = randomQuote;
  quoteDisplay.textContent = quote;
  quoteAuthorElement.textContent = author;
});
