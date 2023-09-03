import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookinkPageComponent } from './bookink-page.component';

describe('BookinkPageComponent', () => {
  let component: BookinkPageComponent;
  let fixture: ComponentFixture<BookinkPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookinkPageComponent]
    });
    fixture = TestBed.createComponent(BookinkPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
