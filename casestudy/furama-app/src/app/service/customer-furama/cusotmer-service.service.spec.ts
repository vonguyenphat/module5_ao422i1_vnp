import { TestBed } from '@angular/core/testing';

import { CusotmerServiceService } from './cusotmer-service.service';

describe('CusotmerServiceService', () => {
  let service: CusotmerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CusotmerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
