import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MustToSeeComponent } from './must-to-see.component';

describe('MustToSeeComponent', () => {
  let component: MustToSeeComponent;
  let fixture: ComponentFixture<MustToSeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MustToSeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MustToSeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
