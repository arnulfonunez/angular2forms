import { Angular4test1Page } from './app.po';

describe('angular4test1 App', function() {
  let page: Angular4test1Page;

  beforeEach(() => {
    page = new Angular4test1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
