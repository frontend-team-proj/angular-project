import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinmaSearchComponent } from './cinma-search.component';

describe('CinmaSearchComponent', () => {
  let component: CinmaSearchComponent;
  let fixture: ComponentFixture<CinmaSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CinmaSearchComponent]
    });
    fixture = TestBed.createComponent(CinmaSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
