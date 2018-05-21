import { StorageInfoModule } from './storage-info.module';

describe('StorageInfoModule', () => {
  let storageInfoModule: StorageInfoModule;

  beforeEach(() => {
    storageInfoModule = new StorageInfoModule();
  });

  it('should create an instance', () => {
    expect(storageInfoModule).toBeTruthy();
  });
});
