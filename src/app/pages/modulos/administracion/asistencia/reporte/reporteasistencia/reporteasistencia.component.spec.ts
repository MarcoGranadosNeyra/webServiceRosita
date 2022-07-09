import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteasistenciaComponent } from './reporteasistencia.component';

describe('ReporteasistenciaComponent', () => {
  let component: ReporteasistenciaComponent;
  let fixture: ComponentFixture<ReporteasistenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteasistenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteasistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
