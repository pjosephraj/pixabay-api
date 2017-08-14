import { PixabayApiPage } from './app.po';

describe('pixabay-api App', () => {
  let page: PixabayApiPage;

  beforeEach(() => {
    page = new PixabayApiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
