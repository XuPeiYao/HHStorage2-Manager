import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageNavComponent } from './storage-nav.component';

describe('StorageNavComponent', () => {
  let component: StorageNavComponent;
  let fixture: ComponentFixture<StorageNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorageNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorageNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
