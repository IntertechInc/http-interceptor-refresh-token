import { HttpInterceptorRefreshTokenPage } from './app.po';

describe('http-interceptor-refresh-token App', () => {
  let page: HttpInterceptorRefreshTokenPage;

  beforeEach(() => {
    page = new HttpInterceptorRefreshTokenPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
