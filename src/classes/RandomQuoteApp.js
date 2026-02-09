import Quote from "./Quote.js";
import RandomeQuote from "./RandomQuote.js";

class RandomQuotesApp {
  constructor() {
    this.currentQuote = null;
    this.randomQuoteBtn = document.getElementById("random-quote-btn");
    this.randomQuoteAPIBtn = document.getElementById("random-quote-api-btn");
    this.quoteTextElement = document.getElementById("quote-text");
    this.quoteAutorElement = document.getElementById("quote-author");

    this.init();
  }

  displayCurrentQuote() {
    const { text, author } = this.currentQuote;
    this.quoteTextElement.textContent = this.currentQuote.fomatText();
    this.quoteAutorElement.textContent = this.currentQuote.formatAuthor();
  }

  changeCurrentQuote(newQuote) {
    if (newQuote instanceof Quote) {
      this.currentQuote = newQuote;
      this.displayCurrentQuote();
    }
  }

  getRandomQuote() {
    const randomQuote = RandomeQuote.getRandomQuote();
    this.changeCurrentQuote(randomQuote);
  }

  getRandomQuoteViaAPI() {
    RandomeQuote.getRandomQuoteViaAPI().then((quote) => {
      this.changeCurrentQuote(quote);
    });
  }

  init() {
    this.randomQuoteBtn.addEventListener("click", () => this.getRandomQuote());
    this.randomQuoteAPIBtn.addEventListener("click", () =>
      this.getRandomQuoteViaAPI(),
    );
  }
}

export default RandomQuotesApp;
