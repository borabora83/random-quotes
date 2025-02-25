const quotes = [
  'Будь тем изменением, которое ты хочешь увидеть в мире. – Махатма Ганди',
  'Сила не в том, чтобы делать то, что легко, а в том, чтобы делать то, что правильно. – Стив Джобс',
  'Не важно, сколько раз ты упал, важно, сколько раз ты встал. – Винс Ломбарди',
  'Верь в себя и все будет возможно. – Кристофер Рив',
  'Каждый день — это новый шанс изменить свою жизнь. – Аноним',
];

const quoteBtn = document.getElementById('quoteBtn');
const quoteDisplay = document.getElementById('quote');

quoteBtn.addEventListener('click', function () {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteDisplay.textContent = quotes[randomIndex];
});
