import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MustSeeSliderComponent } from './must-see-slider.component';

describe('MustSeeSliderComponent', () => {
  let component: MustSeeSliderComponent;
  let fixture: ComponentFixture<MustSeeSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MustSeeSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MustSeeSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
