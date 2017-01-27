import { TpSteamPage } from './app.po';

describe('tp-steam App', function() {
  let page: TpSteamPage;

  beforeEach(() => {
    page = new TpSteamPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
