import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseseatsComponent } from './chooseseats.component';

describe('ChooseseatsComponent', () => {
  let component: ChooseseatsComponent;
  let fixture: ComponentFixture<ChooseseatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChooseseatsComponent]
    });
    fixture = TestBed.createComponent(ChooseseatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
