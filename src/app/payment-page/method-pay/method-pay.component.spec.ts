import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodPayComponent } from './method-pay.component';

describe('MethodPayComponent', () => {
  let component: MethodPayComponent;
  let fixture: ComponentFixture<MethodPayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MethodPayComponent]
    });
    fixture = TestBed.createComponent(MethodPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
