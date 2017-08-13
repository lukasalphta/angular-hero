import { ReactiveFormsTutPage } from './app.po';

describe('reactive-forms-tut App', () => {
  let page: ReactiveFormsTutPage;

  beforeEach(() => {
    page = new ReactiveFormsTutPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
