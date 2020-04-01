import { TestBed } from '@angular/core/testing';

import { FootyService } from './footy.service';

describe('FootyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FootyService = TestBed.get(FootyService);
    expect(service).toBeTruthy();
  });
});
