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
    this.quoteTextElement.textContent = this.currentQuote.fomatText();
    this.quoteAutorElement.textContent = this.currentQuote.formatAuthor();
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
