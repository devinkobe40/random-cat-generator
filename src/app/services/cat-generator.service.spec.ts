import { TestBed } from '@angular/core/testing';

import { CatGeneratorService } from './cat-generator.service';

describe('CatGeneratorService', () => {
  let service: CatGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
