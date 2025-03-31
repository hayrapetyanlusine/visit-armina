import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourismPlasesComponent } from './tourism-plases.component';

describe('TourismPlasesComponent', () => {
  let component: TourismPlasesComponent;
  let fixture: ComponentFixture<TourismPlasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TourismPlasesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourismPlasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
