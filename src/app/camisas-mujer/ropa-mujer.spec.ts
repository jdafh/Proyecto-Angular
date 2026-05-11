import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RopaMujer } from './ropa-mujer';

describe('RopaMujer', () => {
  let component: RopaMujer;
  let fixture: ComponentFixture<RopaMujer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RopaMujer],
    }).compileComponents();

    fixture = TestBed.createComponent(RopaMujer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
