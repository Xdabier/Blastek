import { TestBed } from '@angular/core/testing';

import { HallsService } from './halls.service';

describe('HallsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HallsService = TestBed.get(HallsService);
    expect(service).toBeTruthy();
  });
});
