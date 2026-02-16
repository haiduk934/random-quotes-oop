import quotes from "../data/quotes.js";
import MathUtils from "../utils/MathUtils.js";
import Quote from "./Quote.js";
import config from "../../config.js";

class RandomeQuote {
  static getRandomQuote() {
    const randomIndex = MathUtils.generateRandomInt(quotes.length);
    const { id, text, author } = quotes[randomIndex];
    return new Quote(id, text, author);
  }

  /**
   * 1.Each async function retorns Promise
   * 2.Promise returned by the getRandomQuoteViaAPI function will be always "fulfilled"
   * because we catch all possible errors
   * 3.Result of the "fulfuled" promise will be either Quote or undefined
   * 4.Therefore there is no need for try/catch block where we call this function
   */

  static async getRandomQuoteViaPublicAPI() {
    const url = `${config.PUBLIC_API_URL}/api/quotes/random`;
    const options = { headers: { "Content-Type": "application/json" } };
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      const { id, quote, author } = data;
      //Resolves promise to Quote
      return new Quote(id, quote, author);
    } catch (error) {
      console.error(error);
      /**
       * 1.Returns undefined implicitly(resolves promise to undefined)
       * 2.Promise becomes "fulfilled"
       */
    }
  }
  static async getRandomQuoteViaOwnAPI() {
    const url = `${config.OWN_API_URL}/quotes/random-single`;
    const options = { headers: { "Content-Type": "application/json" } };
    try {
      const response = await fetch(url, options);
      const quote = await response.json();
      const { id, text, author } = quote;
      return new Quote(id, text, author);
    } catch (error) {
      console.error(error);
    }
  }
}

export default RandomeQuote;
