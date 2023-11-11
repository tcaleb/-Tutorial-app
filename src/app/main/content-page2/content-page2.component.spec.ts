import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPage2Component } from './content-page2.component';

describe('ContentPage2Component', () => {
  let component: ContentPage2Component;
  let fixture: ComponentFixture<ContentPage2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentPage2Component]
    });
    fixture = TestBed.createComponent(ContentPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
