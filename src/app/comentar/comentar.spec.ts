import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comentar } from './comentar';

describe('Comentar', () => {
  let component: Comentar;
  let fixture: ComponentFixture<Comentar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Comentar],
    }).compileComponents();

    fixture = TestBed.createComponent(Comentar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
