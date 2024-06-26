import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClareamentoDentalComponent } from './clareamento-dental.component';

describe('ClareamentoDentalComponent', () => {
  let component: ClareamentoDentalComponent;
  let fixture: ComponentFixture<ClareamentoDentalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClareamentoDentalComponent]
    });
    fixture = TestBed.createComponent(ClareamentoDentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
