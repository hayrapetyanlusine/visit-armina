import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurToursComponent } from './our-tours.component';

describe('OurToursComponent', () => {
  let component: OurToursComponent;
  let fixture: ComponentFixture<OurToursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurToursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
