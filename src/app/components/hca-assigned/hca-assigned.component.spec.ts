import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HcaAssignedComponent } from './hca-assigned.component';

describe('HcaAssignedComponent', () => {
  let component: HcaAssignedComponent;
  let fixture: ComponentFixture<HcaAssignedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HcaAssignedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HcaAssignedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
