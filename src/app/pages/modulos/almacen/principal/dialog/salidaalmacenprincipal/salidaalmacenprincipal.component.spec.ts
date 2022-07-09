import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalidaalmacenprincipalComponent } from './salidaalmacenprincipal.component';

describe('SalidaalmacenprincipalComponent', () => {
  let component: SalidaalmacenprincipalComponent;
  let fixture: ComponentFixture<SalidaalmacenprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalidaalmacenprincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalidaalmacenprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
