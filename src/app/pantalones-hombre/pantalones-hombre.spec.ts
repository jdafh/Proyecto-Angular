import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantalonesHombre } from './pantalones-hombre';

describe('PantalonesHombre', () => {
  let component: PantalonesHombre;
  let fixture: ComponentFixture<PantalonesHombre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PantalonesHombre],
    }).compileComponents();

    fixture = TestBed.createComponent(PantalonesHombre);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
