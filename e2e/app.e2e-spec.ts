import { TournamentListingClientPage } from './app.po';

describe('tournament-listing-client App', () => {
  let page: TournamentListingClientPage;

  beforeEach(() => {
    page = new TournamentListingClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
