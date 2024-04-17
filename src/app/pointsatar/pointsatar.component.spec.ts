import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointsatarComponent } from './pointsatar.component';

describe('PointsatarComponent', () => {
  let component: PointsatarComponent;
  let fixture: ComponentFixture<PointsatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PointsatarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PointsatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
