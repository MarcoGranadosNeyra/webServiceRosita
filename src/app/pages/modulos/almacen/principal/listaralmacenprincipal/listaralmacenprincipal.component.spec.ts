import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaralmacenprincipalComponent } from './listaralmacenprincipal.component';

describe('ListaralmacenprincipalComponent', () => {
  let component: ListaralmacenprincipalComponent;
  let fixture: ComponentFixture<ListaralmacenprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaralmacenprincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaralmacenprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
