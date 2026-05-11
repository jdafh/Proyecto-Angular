import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZapatosHombre } from './zapatos-hombre';

describe('ZapatosHombre', () => {
  let component: ZapatosHombre;
  let fixture: ComponentFixture<ZapatosHombre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZapatosHombre],
    }).compileComponents();

    fixture = TestBed.createComponent(ZapatosHombre);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
