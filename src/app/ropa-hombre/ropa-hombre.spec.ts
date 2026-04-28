import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RopaHombre } from './ropa-hombre';

describe('RopaHombre', () => {
  let component: RopaHombre;
  let fixture: ComponentFixture<RopaHombre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RopaHombre],
    }).compileComponents();

    fixture = TestBed.createComponent(RopaHombre);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
