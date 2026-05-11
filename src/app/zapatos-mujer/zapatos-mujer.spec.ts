import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZapatosMujer } from './zapatos-mujer';

describe('ZapatosMujer', () => {
  let component: ZapatosMujer;
  let fixture: ComponentFixture<ZapatosMujer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZapatosMujer],
    }).compileComponents();

    fixture = TestBed.createComponent(ZapatosMujer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
