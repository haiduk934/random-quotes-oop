import Quote from "./Quote.js";
import RandomeQuote from "./RandomQuote.js";

class RandomQuotesApp {
  constructor() {
    this.currentQuote = null;
    this.randomQuoteBtn = document.getElementById("random-quote-btn");
    this.randomQuotePublicAPIBtn = document.getElementById(
      "random-quote-public-api-btn",
    );
    this.randomQuoteOwnAPIBtn = document.getElementById(
      "random-quote-own-api-btn",
    );
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

  randomQuoteHandler() {
    const randomQuote = RandomeQuote.getRandomQuote();
    this.changeCurrentQuote(randomQuote);
  }

  async handleRandomQuoteViaPublicAPI() {
    // const quoteViaAPI = await RandomeQuote.getRandomQuoteViaPublicAPI();
    // this.changeCurrentQuote(quoteViaAPI);
    this.changeCurrentQuote(await RandomeQuote.getRandomQuoteViaPublicAPI());
  }

  async handleRandomQuoteViaOwnAPI() {
    this.changeCurrentQuote(await RandomeQuote.getRandomQuoteViaOwnAPI());
  }

  init() {
    this.randomQuoteBtn.addEventListener("click", () =>
      this.randomQuoteHandler(),
    );
    this.randomQuotePublicAPIBtn.addEventListener("click", () =>
      this.handleRandomQuoteViaPublicAPI(),
    );
    this.randomQuoteOwnAPIBtn.addEventListener("click", () =>
      this.handleRandomQuoteViaOwnAPI(),
    );
  }
}

export default RandomQuotesApp;
