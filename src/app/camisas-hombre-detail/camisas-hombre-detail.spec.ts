import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamisasHombreDetail } from './camisas-hombre-detail';

describe('CamisasHombreDetail', () => {
  let component: CamisasHombreDetail;
  let fixture: ComponentFixture<CamisasHombreDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CamisasHombreDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(CamisasHombreDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
