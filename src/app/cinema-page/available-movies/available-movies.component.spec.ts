import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableMoviesComponent } from './available-movies.component';

describe('AvailableMoviesComponent', () => {
  let component: AvailableMoviesComponent;
  let fixture: ComponentFixture<AvailableMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvailableMoviesComponent]
    });
    fixture = TestBed.createComponent(AvailableMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
