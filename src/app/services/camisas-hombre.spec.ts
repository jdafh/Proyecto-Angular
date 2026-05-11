import { TestBed } from '@angular/core/testing';

import { CamisasHombre } from './camisas-hombre';

describe('CamisasHombre', () => {
  let service: CamisasHombre;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CamisasHombre);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
