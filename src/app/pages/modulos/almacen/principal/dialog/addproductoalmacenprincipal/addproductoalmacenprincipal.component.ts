import {Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {ProductoalmacenService} from 'src/app/service/productoAlmacen/productoalmacen.service';
import {AlmacenprincipalService} from 'src/app/service/almacenprincipal/almacenprincipal.service';
import {UnidadalmacenService} from 'src/app/service/unidadAlmacen/unidadalmacen.service';
import {FormControl, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data/data.service';

@Component({
  selector: 'app-addproductoalmacenprincipal',
  templateUrl: './addproductoalmacenprincipal.component.html',
  styleUrls: ['./addproductoalmacenprincipal.component.css']
})
export class AddproductoalmacenprincipalComponent {

  public formProductoAlmacen: FormGroup;
  formControl = new FormControl('', [Validators.required]);
  response: any = {};
  disabled: boolean = true;

  productos: any = [];

  constructor(
              private snackBar: MatSnackBar,
              private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<AddproductoalmacenprincipalComponent>, 
              @Inject(MAT_DIALOG_DATA) public data: any,
              public unidadalmacenService:UnidadalmacenService,
              public productoalmacenService: ProductoalmacenService,
              public almacenprincipalService: AlmacenprincipalService,
              private router: Router,public dataService:DataService
              ) { }

    onNoClick(): void {
      this.dialogRef.close();
     }

    ngOnInit() {
      this.formularioProductoAlmacenPrincipal();
      this.listarProductoAlmacen();
    }

    listarProductoAlmacen(){
      this.productoalmacenService.listarProductoAlmacen()
      .subscribe(
        res=> {this.productos=res;
        },
        err=> console.error(err)
      )
    }

    formularioProductoAlmacenPrincipal(){
      this.formProductoAlmacen = this.formBuilder.group({
        id_sucursal       :  [this.data.id_sucursal, Validators.required],
        id_producto       :  [this.data.id_producto, Validators.required],
        cantidad          :  [this.data.cantidad, Validators.required],
        cantidad_minima   :  [this.data.cantidad_minima, Validators.required],
        vencimiento       :  [this.data.vencimiento,Validators.required],
        fecha_vencimiento :  [this.data.fecha_vencimiento, null],
      });
    }

  getErrorMessage() {
  return this.formControl.hasError('id') ? 'id no valido' :
  this.formControl.hasError('cantidad') ? 'cantidad no valida' :
  '';
  }

  agregarProductoAlmacen() {
    if(this.formProductoAlmacen.valid){
      this.almacenprincipalService.agregarProductoAlmacenPrincipal(this.formProductoAlmacen.value)
      .subscribe( res => {
        this.response=res;
        if(this.response.result==1){
          this.openSnackBar('Mensaje : ',this.response.message)  
          this.formProductoAlmacen.reset();
          this.dialogRef.close(1);
        }else{
          this.openSnackBar('Mensaje : ',this.response.message)  

        }
      });
    }
  }

openSnackBar(message: string, action: string) {
  this.snackBar.open(message, action, {
    duration: 5000,
    verticalPosition: 'bottom',
    horizontalPosition:'right',
  });
}



}
