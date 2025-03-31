import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MustToSeeDetailsComponent } from './must-to-see-details.component';

describe('MustToSeeDetailsComponent', () => {
  let component: MustToSeeDetailsComponent;
  let fixture: ComponentFixture<MustToSeeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MustToSeeDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MustToSeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
