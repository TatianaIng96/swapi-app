import { TestBed } from '@angular/core/testing';

import { StartshipsService } from './startships.service';

describe('StartshipsService', () => {
  let service: StartshipsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StartshipsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
