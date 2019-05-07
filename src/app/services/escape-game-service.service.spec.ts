import { TestBed } from '@angular/core/testing';

import { EscapeGameServiceService } from './escape-game-service.service';

describe('EscapeGameServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EscapeGameServiceService = TestBed.get(EscapeGameServiceService);
    expect(service).toBeTruthy();
  });
});
