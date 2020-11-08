import { TestBed } from '@angular/core/testing';

import { JsonsearchService } from './jsonsearch.service';

describe('JsonsearchService', () => {
  let service: JsonsearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonsearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
