import { TestBed } from '@angular/core/testing';

import { GVarsService } from './gvars.service';

describe('GVarsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GVarsService = TestBed.get(GVarsService);
    expect(service).toBeTruthy();
  });
});
