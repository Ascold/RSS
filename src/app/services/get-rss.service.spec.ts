import { TestBed, inject } from '@angular/core/testing';

import { GetRssService } from './get-rss.service';

describe('GetRssService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetRssService]
    });
  });

  it('should ...', inject([GetRssService], (service: GetRssService) => {
    expect(service).toBeTruthy();
  }));
});
