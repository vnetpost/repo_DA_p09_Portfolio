import { TestBed } from '@angular/core/testing';

import { UserDatabankService } from './user-databank-service';

describe('UserDatabankService', () => {
  let service: UserDatabankService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDatabankService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
