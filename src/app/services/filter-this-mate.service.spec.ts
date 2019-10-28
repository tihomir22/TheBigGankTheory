import { TestBed } from '@angular/core/testing';

import { FilterThisMateService } from './filter-this-mate.service';

describe('FilterThisMateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilterThisMateService = TestBed.get(FilterThisMateService);
    expect(service).toBeTruthy();
  });
});
