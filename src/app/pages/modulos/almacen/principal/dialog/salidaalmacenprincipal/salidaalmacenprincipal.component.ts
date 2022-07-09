import {Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {AlmacenprincipalService} from 'src/app/service/almacenprincipal/almacenprincipal.service';
import {FormControl, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data/data.service';

@Component({
  selector: 'app-salidaalmacenprincipal',
  templateUrl: './salidaalmacenprincipal.component.html',
  styleUrls: ['./salidaalmacenprincipal.component.css']
})
export class SalidaalmacenprincipalComponent {

  public formAlmacen: FormGroup;
  formControl = new FormControl('', [Validators.required]);
  response: any = {};
  zona:any = {};

  constructor(
              private snackBar: MatSnackBar,
              private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<SalidaalmacenprincipalComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
              public almacenprincipalService: AlmacenprincipalService,
              private router: Router,
              public dataService:DataService) { }

    ngOnInit() {
      this.formularioAlmacen();
      this.listarZona();
    }

    onNoClick(): void {
      this.dialogRef.close();
     }

     listarZona(){
      this.almacenprincipalService.listarZonaAlmacen()
      .subscribe(
        res=> {this.zona=res;
        },
        err=> console.error(err)
      )
    }
  
    formularioAlmacen(){
      this.formAlmacen = this.formBuilder.group({
        id              :  [this.data.id, Validators.required],
        id_sucursal     :  [this.dataService.id_sucursal, Validators.required],
        id_zona         :  [this.data.id_zona, Validators.required],
        cantidad        :  [null, Validators.required],
        producto        :  [this.data.producto, Validators.required],

      });
    }

  getErrorMessage() {
  return this.formControl.hasError('id') ? 'id no valido' :
  this.formControl.hasError('cantidad') ? 'cantidad no valida' :
  '';
  }

  agregarSalidaAlmacenPrincipal() {
    if(this.formAlmacen.valid){
      this.almacenprincipalService.agregarSalidaAlmacenPrincipal(this.formAlmacen.value)
      .subscribe( res => {
        this.response=res;
        console.log(res)
        if(this.response.result==1){
          this.openSnackBar('Mensaje : ',this.response.message)  
          this.formAlmacen.reset();
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
