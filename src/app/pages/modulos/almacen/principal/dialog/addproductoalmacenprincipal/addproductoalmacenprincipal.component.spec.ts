import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproductoalmacenprincipalComponent } from './addproductoalmacenprincipal.component';

describe('AddproductoalmacenprincipalComponent', () => {
  let component: AddproductoalmacenprincipalComponent;
  let fixture: ComponentFixture<AddproductoalmacenprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddproductoalmacenprincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddproductoalmacenprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
