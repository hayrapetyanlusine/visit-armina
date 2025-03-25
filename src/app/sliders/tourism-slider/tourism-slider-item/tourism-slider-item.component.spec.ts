import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourismSliderItemComponent } from './tourism-slider-item.component';

describe('TourismSliderItemComponent', () => {
  let component: TourismSliderItemComponent;
  let fixture: ComponentFixture<TourismSliderItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TourismSliderItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourismSliderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
