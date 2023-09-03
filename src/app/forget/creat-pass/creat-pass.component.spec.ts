import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatPassComponent } from './creat-pass.component';

describe('CreatPassComponent', () => {
  let component: CreatPassComponent;
  let fixture: ComponentFixture<CreatPassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatPassComponent]
    });
    fixture = TestBed.createComponent(CreatPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
