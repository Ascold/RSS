export class Message {
  title: String;
  content: any;
  pubDate: String;
  description: String;
  author: String;

  constructor(data: any) {
    this.title = data.title;
    this.content = data.content;
    this.pubDate = data.pubDate;
    this.description = data.description;
    this.author = data.author;
  }
}
