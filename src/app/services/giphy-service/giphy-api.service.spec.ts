import { TestBed } from '@angular/core/testing';
import { GiphyApiService } from './giphy-api.service';

describe('GiphyService', () => {
  let service: GiphyApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GiphyApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
