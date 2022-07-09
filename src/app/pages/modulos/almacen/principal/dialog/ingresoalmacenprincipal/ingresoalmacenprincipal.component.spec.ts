import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoalmacenprincipalComponent } from './ingresoalmacenprincipal.component';

describe('IngresoalmacenprincipalComponent', () => {
  let component: IngresoalmacenprincipalComponent;
  let fixture: ComponentFixture<IngresoalmacenprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresoalmacenprincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoalmacenprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
