import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HcaLogComponent } from './hca-log.component';

describe('HcaLogComponent', () => {
  let component: HcaLogComponent;
  let fixture: ComponentFixture<HcaLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HcaLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HcaLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
