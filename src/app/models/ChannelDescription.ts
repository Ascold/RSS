export class ChannelDescription {
  description: String;
  title: String;
  image: String;

  constructor(data: any) {
    this.description = data.description;
    this.title = data.title;
    this.image = data.image;
  }
}
