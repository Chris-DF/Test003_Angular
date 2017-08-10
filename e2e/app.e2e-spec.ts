import { Test003Page } from './app.po';

describe('test003 App', () => {
  let page: Test003Page;

  beforeEach(() => {
    page = new Test003Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
