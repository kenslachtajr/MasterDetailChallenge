import { MasterDetailTestChallengePage } from './app.po';

describe('master-detail-test-challenge App', () => {
  let page: MasterDetailTestChallengePage;

  beforeEach(() => {
    page = new MasterDetailTestChallengePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
