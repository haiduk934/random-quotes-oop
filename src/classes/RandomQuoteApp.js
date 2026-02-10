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

  randomQuoteHandler() {
    const randomQuote = RandomeQuote.getRandomQuote();
    this.changeCurrentQuote(randomQuote);
  }

  // randomQuoteViaAPIHandler() {
  //   RandomeQuote.getRandomQuoteViaAPI().then((quote) => {
  //     this.changeCurrentQuote(quote);
  //   });
  // }

  async randomQuoteViaAPIHandler() {
    // const quoteViaAPI = await RandomeQuote.getRandomQuoteViaAPI();
    // this.changeCurrentQuote(quoteViaAPI);
    this.changeCurrentQuote(await RandomeQuote.getRandomQuoteViaAPI());
  }

  init() {
    this.randomQuoteBtn.addEventListener("click", () =>
      this.randomQuoteHandler(),
    );
    this.randomQuoteAPIBtn.addEventListener("click", () =>
      this.randomQuoteViaAPIHandler(),
    );
  }
}

export default RandomQuotesApp;
