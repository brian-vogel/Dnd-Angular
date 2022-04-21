import { TestBed } from '@angular/core/testing';

import { DmScreenService } from './dm-screen.service';

describe('DmScreenService', () => {
  let service: DmScreenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DmScreenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
