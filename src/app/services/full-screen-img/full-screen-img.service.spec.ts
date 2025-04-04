import { TestBed } from '@angular/core/testing';

import { FullScreenImgService } from './full-screen-img.service';

describe('FullScreenImgService', () => {
  let service: FullScreenImgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FullScreenImgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
