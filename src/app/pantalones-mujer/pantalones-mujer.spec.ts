import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantalonesMujer } from './pantalones-mujer';

describe('PantalonesMujer', () => {
  let component: PantalonesMujer;
  let fixture: ComponentFixture<PantalonesMujer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PantalonesMujer],
    }).compileComponents();

    fixture = TestBed.createComponent(PantalonesMujer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
