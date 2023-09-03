import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HallPageComponent } from './hall-page.component';

describe('HallPageComponent', () => {
  let component: HallPageComponent;
  let fixture: ComponentFixture<HallPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HallPageComponent]
    });
    fixture = TestBed.createComponent(HallPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
