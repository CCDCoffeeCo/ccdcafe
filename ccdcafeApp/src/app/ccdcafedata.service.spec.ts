import { TestBed } from '@angular/core/testing';

import { CcdcafedataService } from './ccdcafedata.service';

describe('CcdcafedataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CcdcafedataService = TestBed.get(CcdcafedataService);
    expect(service).toBeTruthy();
  });
});
