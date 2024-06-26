import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplanteDentarioComponent } from './implante-dentario.component';

describe('ImplanteDentarioComponent', () => {
  let component: ImplanteDentarioComponent;
  let fixture: ComponentFixture<ImplanteDentarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImplanteDentarioComponent]
    });
    fixture = TestBed.createComponent(ImplanteDentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
