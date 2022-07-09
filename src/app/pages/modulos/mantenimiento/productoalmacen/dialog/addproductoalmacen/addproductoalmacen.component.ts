import {Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {ProductoalmacenService} from 'src/app/service/productoAlmacen/productoalmacen.service';
import {CategoriaalmacenService} from 'src/app/service/categoriaAlmacen/categoriaalmacen.service';
import {UnidadalmacenService} from 'src/app/service/unidadAlmacen/unidadalmacen.service';
import {FormControl, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data/data.service';


@Component({
  selector: 'app-addproductoalmacen',
  templateUrl: './addproductoalmacen.component.html',
  styleUrls: ['./addproductoalmacen.component.css']
})
export class AddproductoalmacenComponent  {

  public formProductoAlmacen: FormGroup;
  formControl = new FormControl('', [Validators.required]);
  response: any = {};
  disabled: boolean = true;

  unidades: any = [];
  categorias: any = [];

  constructor(
              private snackBar: MatSnackBar,
              private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<AddproductoalmacenComponent>, 
              @Inject(MAT_DIALOG_DATA) public data: any,
              public unidadalmacenService:UnidadalmacenService,
              public categoriaalmacenService:CategoriaalmacenService,
              public productoalmacenService: ProductoalmacenService,
              private router: Router,public dataService:DataService
              ) { }

    onNoClick(): void {
      this.dialogRef.close();
     }

    ngOnInit() {

      this.formularioProductoAlmacen();
      this.listarUnidad();
      this.listarCategoria();

    }

    listarUnidad(){
      this.unidadalmacenService.listarUnidadAlmacen()
      .subscribe(
        res=> {this.unidades=res;
        },
        err=> console.error(err)
      )
    }

    listarCategoria(){
      this.categoriaalmacenService.listarCategoriaAlmacen()
      .subscribe(
        res=> {this.categorias=res;
        },
        err=> console.error(err)
      )
    }

    formularioProductoAlmacen(){
      this.formProductoAlmacen = this.formBuilder.group({
        id_categoria    :  [this.data.id_categoria,Validators.required],
        id_unidad       :  [this.data.id_unidad, Validators.required],
        producto        :  [this.data.producto, Validators.required],
        imagen          :  [this.data.imagen, Validators.required],
      });
    }

  getErrorMessage() {
  return this.formControl.hasError('id') ? 'id no valido' :
  this.formControl.hasError('cantidad') ? 'cantidad no valida' :
  '';
  }

  agregarProductoAlmacen() {
    if(this.formProductoAlmacen.valid){
      this.productoalmacenService.agregarProductoAlmacen(this.formProductoAlmacen.value)
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
