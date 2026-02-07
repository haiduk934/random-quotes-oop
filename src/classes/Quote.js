class Quote {
  constructor(id, text, author) {
    this.id = id;
    this.text = text;
    this.author = author;
  }

  fomatText() {
    return `"${this.text}"`;
  }
  formatAuthor() {
    return `© ${this.author}`;
  }
}
export default Quote;
