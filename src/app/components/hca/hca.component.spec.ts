import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HcaComponent } from './hca.component';

describe('HcaComponent', () => {
  let component: HcaComponent;
  let fixture: ComponentFixture<HcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HcaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
