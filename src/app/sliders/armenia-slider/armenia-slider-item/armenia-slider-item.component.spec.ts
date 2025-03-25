import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmeniaSliderItemComponent } from './armenia-slider-item.component';

describe('ArmeniaSliderItemComponent', () => {
  let component: ArmeniaSliderItemComponent;
  let fixture: ComponentFixture<ArmeniaSliderItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArmeniaSliderItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArmeniaSliderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
