import { Spmanagerv2Page } from './app.po';

describe('spmanagerv2 App', () => {
  let page: Spmanagerv2Page;

  beforeEach(() => {
    page = new Spmanagerv2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
