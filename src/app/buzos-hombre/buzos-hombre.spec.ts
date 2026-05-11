import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuzosHombre } from './buzos-hombre';

describe('BuzosHombre', () => {
  let component: BuzosHombre;
  let fixture: ComponentFixture<BuzosHombre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuzosHombre],
    }).compileComponents();

    fixture = TestBed.createComponent(BuzosHombre);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
