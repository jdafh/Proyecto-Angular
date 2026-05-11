import { TestBed } from '@angular/core/testing';

import { CamisasMujer } from './camisas-mujer';

describe('CamisasMujer', () => {
  let service: CamisasMujer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CamisasMujer);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
