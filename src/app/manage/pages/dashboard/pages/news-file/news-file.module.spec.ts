import { NewsFileModule } from './news-file.module';

describe('NewsFileModule', () => {
  let newsFileModule: NewsFileModule;

  beforeEach(() => {
    newsFileModule = new NewsFileModule();
  });

  it('should create an instance', () => {
    expect(newsFileModule).toBeTruthy();
  });
});
