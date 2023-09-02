const newQuoteBtn = document.querySelector(".btn-secondary");
const quoteAuthor = document.querySelector(".quote-author-js");
const quoteText = document.querySelector(".quote-text-js");

let apiQuotes = [];

function generateNewQuote() {
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  const updatedAuthor = quote.author.replace(", type.fit", " ");
  if (!quote.author) {
    quoteAuthor.textContent = "Unknown";
  } else {
    quoteAuthor.textContent = updatedAuthor;
  }
  quoteText.textContent = quote.text;
}

async function getQuote() {
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    generateNewQuote();
  } catch (error) {
    quoteAuthor.textContent = "Unknown";
    quoteText.textContent = "Unknown";
  }
}

getQuote();

newQuoteBtn.addEventListener("click", generateNewQuote);
