import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupConfigureinasistenciaComponent } from './popup-configureinasistencia.component';

describe('PopupConfigureinasistenciaComponent', () => {
  let component: PopupConfigureinasistenciaComponent;
  let fixture: ComponentFixture<PopupConfigureinasistenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupConfigureinasistenciaComponent]
    });
    fixture = TestBed.createComponent(PopupConfigureinasistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
