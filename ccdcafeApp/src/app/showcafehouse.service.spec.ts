import { TestBed } from '@angular/core/testing';

import { ShowcafehouseService } from './showcafehouse.service';

describe('ShowcafehouseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowcafehouseService = TestBed.get(ShowcafehouseService);
    expect(service).toBeTruthy();
  });
});
