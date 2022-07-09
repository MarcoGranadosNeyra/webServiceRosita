import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaringresosalmacenprincipalComponent } from './listaringresosalmacenprincipal.component';

describe('ListaringresosalmacenprincipalComponent', () => {
  let component: ListaringresosalmacenprincipalComponent;
  let fixture: ComponentFixture<ListaringresosalmacenprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaringresosalmacenprincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaringresosalmacenprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
