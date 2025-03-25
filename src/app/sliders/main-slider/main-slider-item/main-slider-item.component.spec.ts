import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSliderItemComponent } from './main-slider-item.component';

describe('MainSliderItemComponent', () => {
  let component: MainSliderItemComponent;
  let fixture: ComponentFixture<MainSliderItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainSliderItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainSliderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
