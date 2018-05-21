import { SystemInfoModule } from './system-info.module';

describe('SystemInfoModule', () => {
  let systemInfoModule: SystemInfoModule;

  beforeEach(() => {
    systemInfoModule = new SystemInfoModule();
  });

  it('should create an instance', () => {
    expect(systemInfoModule).toBeTruthy();
  });
});
