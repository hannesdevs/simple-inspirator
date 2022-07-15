const button = document.querySelector('button');
const container = document.querySelector('.container');

button.addEventListener('click', () => {
  container.innerHTML = '';
  const quote = document.createElement('h2');
  quote.classList.add('quote');
  const author = document.createElement('h3');
  author.classList.add('author');
  container.appendChild(quote);
  container.appendChild(author);
  getQuote();
});

function getQuote() {
  fetch('https://api.quotable.io/random')
    .then((response) => response.json())
    .then((data) => {
      displayQuote(data.content, data.author);
    });
}

function displayQuote(quote, author) {
  const quoteText = document.querySelector('.quote');
  const authorText = document.querySelector('.author');
  quoteText.textContent = quote;
  if (author) {
    authorText.textContent = author;
  } else {
    authorText.textContent = 'Unknown';
  }
}

getQuote();
