import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestesPageComponent } from './requestes-page.component';

describe('RequestesPageComponent', () => {
  let component: RequestesPageComponent;
  let fixture: ComponentFixture<RequestesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestesPageComponent]
    });
    fixture = TestBed.createComponent(RequestesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
