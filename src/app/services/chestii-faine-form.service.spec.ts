import { TestBed } from '@angular/core/testing';

import { ChestiiFaineFormService } from './chestii-faine-form.service';

describe('ChestiiFaineFormService', () => {
  let service: ChestiiFaineFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChestiiFaineFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
