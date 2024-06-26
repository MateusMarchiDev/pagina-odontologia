import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LentesContatoComponent } from './lentes-contato.component';

describe('LentesContatoComponent', () => {
  let component: LentesContatoComponent;
  let fixture: ComponentFixture<LentesContatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LentesContatoComponent]
    });
    fixture = TestBed.createComponent(LentesContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
