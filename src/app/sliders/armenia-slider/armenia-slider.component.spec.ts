import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmeniaSliderComponent } from './armenia-slider.component';

describe('ArmeniaSliderComponent', () => {
  let component: ArmeniaSliderComponent;
  let fixture: ComponentFixture<ArmeniaSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArmeniaSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArmeniaSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
