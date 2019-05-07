import { TestBed } from '@angular/core/testing';

import { BowlingServiceService } from './bowling-service.service';

describe('BowlingServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BowlingServiceService = TestBed.get(BowlingServiceService);
    expect(service).toBeTruthy();
  });
});
