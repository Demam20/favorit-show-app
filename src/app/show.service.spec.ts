import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ShowService } from './show.service';

describe('ShowService', () => {
  let service: ShowService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ShowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
