import { BasicReactiveFormPage } from './app.po';

describe('basic-reactive-form App', () => {
  let page: BasicReactiveFormPage;

  beforeEach(() => {
    page = new BasicReactiveFormPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
