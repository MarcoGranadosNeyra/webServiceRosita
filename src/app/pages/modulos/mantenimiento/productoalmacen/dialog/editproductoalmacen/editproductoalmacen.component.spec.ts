import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditproductoalmacenComponent } from './editproductoalmacen.component';

describe('EditproductoalmacenComponent', () => {
  let component: EditproductoalmacenComponent;
  let fixture: ComponentFixture<EditproductoalmacenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditproductoalmacenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditproductoalmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
