import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinmaProfileComponent } from './cinma-profile.component';

describe('CinmaProfileComponent', () => {
  let component: CinmaProfileComponent;
  let fixture: ComponentFixture<CinmaProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CinmaProfileComponent]
    });
    fixture = TestBed.createComponent(CinmaProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
