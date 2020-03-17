import { TestBed } from '@angular/core/testing';

import { AuthService2 } from './auth.service';

describe('AuthService', () => {
  let service: AuthService2;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService2);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
