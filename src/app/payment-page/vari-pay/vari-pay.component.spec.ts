import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariPayComponent } from './vari-pay.component';

describe('VariPayComponent', () => {
  let component: VariPayComponent;
  let fixture: ComponentFixture<VariPayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VariPayComponent]
    });
    fixture = TestBed.createComponent(VariPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
