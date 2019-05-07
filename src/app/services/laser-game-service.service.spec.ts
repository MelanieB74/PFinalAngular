import { TestBed } from '@angular/core/testing';

import { LaserGameServiceService } from './laser-game-service.service';

describe('LaserGameServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LaserGameServiceService = TestBed.get(LaserGameServiceService);
    expect(service).toBeTruthy();
  });
});
