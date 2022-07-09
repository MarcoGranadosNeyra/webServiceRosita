import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpermisoAsistenciaComponent } from './addpermiso-asistencia.component';

describe('AddpermisoAsistenciaComponent', () => {
  let component: AddpermisoAsistenciaComponent;
  let fixture: ComponentFixture<AddpermisoAsistenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpermisoAsistenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpermisoAsistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
