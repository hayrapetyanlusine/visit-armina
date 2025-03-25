import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourismSliderComponent } from './tourism-slider.component';

describe('TourismSliderComponent', () => {
  let component: TourismSliderComponent;
  let fixture: ComponentFixture<TourismSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TourismSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourismSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
