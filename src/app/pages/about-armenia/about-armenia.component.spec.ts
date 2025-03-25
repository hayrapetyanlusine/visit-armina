import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutArmeniaComponent } from './about-armenia.component';

describe('AboutArmeniaComponent', () => {
  let component: AboutArmeniaComponent;
  let fixture: ComponentFixture<AboutArmeniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutArmeniaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutArmeniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
