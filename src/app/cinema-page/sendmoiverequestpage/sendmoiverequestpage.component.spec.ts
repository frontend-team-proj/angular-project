import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendmoiverequestpageComponent } from './sendmoiverequestpage.component';

describe('SendmoiverequestpageComponent', () => {
  let component: SendmoiverequestpageComponent;
  let fixture: ComponentFixture<SendmoiverequestpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SendmoiverequestpageComponent]
    });
    fixture = TestBed.createComponent(SendmoiverequestpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
