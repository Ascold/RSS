import { RSSPage } from './app.po';

describe('rss App', () => {
  let page: RSSPage;

  beforeEach(() => {
    page = new RSSPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
