import RandomeQuote from "./RandomQuote.js";

class RandomQuotesApp {
  constructor() {
    this.currentQuote = null;
    this.randomQuoteBtn = document.getElementById("random-quote-btn");
    this.quoteTextElement = document.getElementById("quote-text");
    this.quoteAutorElement = document.getElementById("quote-author");

    this.init();
  }

  displayCurrentQuote() {
    const { text, author } = this.currentQuote;
    this.quoteTextElement.textContent = `"${text}"`;
    this.quoteAutorElement.textContent = author;
  }

  getRandomQuote() {
    const currentQuote = RandomeQuote.getRandomQuote();
    this.currentQuote = currentQuote;
    this.displayCurrentQuote();
  }

  init() {
    this.randomQuoteBtn.addEventListener("click", () => this.getRandomQuote());
  }
}

export default RandomQuotesApp;
