import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproductoalmacenComponent } from './addproductoalmacen.component';

describe('AddproductoalmacenComponent', () => {
  let component: AddproductoalmacenComponent;
  let fixture: ComponentFixture<AddproductoalmacenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddproductoalmacenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddproductoalmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
