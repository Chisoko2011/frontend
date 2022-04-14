import { TestBed } from '@angular/core/testing';

import { hcaService } from './hca.service';

describe('OrdersListService', () => {
  let service: hcaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(hcaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});



