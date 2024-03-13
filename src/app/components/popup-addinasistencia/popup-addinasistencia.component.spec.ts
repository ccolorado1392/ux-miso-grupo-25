import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAddinasistenciaComponent } from './popup-addinasistencia.component';

describe('PopupAddinasistenciaComponent', () => {
  let component: PopupAddinasistenciaComponent;
  let fixture: ComponentFixture<PopupAddinasistenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupAddinasistenciaComponent]
    });
    fixture = TestBed.createComponent(PopupAddinasistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
