import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsFileListComponent } from './news-file-list.component';

describe('NewsFileListComponent', () => {
  let component: NewsFileListComponent;
  let fixture: ComponentFixture<NewsFileListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsFileListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsFileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
