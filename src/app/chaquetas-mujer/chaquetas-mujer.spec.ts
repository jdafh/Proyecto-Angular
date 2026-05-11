import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaquetasMujer } from './chaquetas-mujer';

describe('ChaquetasMujer', () => {
  let component: ChaquetasMujer;
  let fixture: ComponentFixture<ChaquetasMujer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChaquetasMujer],
    }).compileComponents();

    fixture = TestBed.createComponent(ChaquetasMujer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
