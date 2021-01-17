import { TestBed } from '@angular/core/testing';

import { BookRepoService } from './book-repo.service';

describe('BookRepoService', () => {
  let service: BookRepoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookRepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
