import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpermisoAsistenciaComponent } from './editpermiso-asistencia.component';

describe('EditpermisoAsistenciaComponent', () => {
  let component: EditpermisoAsistenciaComponent;
  let fixture: ComponentFixture<EditpermisoAsistenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditpermisoAsistenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpermisoAsistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
