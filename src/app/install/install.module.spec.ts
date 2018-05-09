import { InstallModule } from './install.module';

describe('InstallModule', () => {
  let installModule: InstallModule;

  beforeEach(() => {
    installModule = new InstallModule();
  });

  it('should create an instance', () => {
    expect(installModule).toBeTruthy();
  });
});
