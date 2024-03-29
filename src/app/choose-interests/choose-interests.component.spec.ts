import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseInterestsComponent } from './choose-interests.component';

describe('ChooseInterestsComponent', () => {
  let component: ChooseInterestsComponent;
  let fixture: ComponentFixture<ChooseInterestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChooseInterestsComponent]
    });
    fixture = TestBed.createComponent(ChooseInterestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
