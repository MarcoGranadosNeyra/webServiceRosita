import {Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {AsistenciaService} from 'src/app/service/asistencia/asistencia.service';
import {FormControl, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data/data.service';

@Component({
  selector: 'app-editpermiso-asistencia',
  templateUrl: './editpermiso-asistencia.component.html',
  styleUrls: ['./editpermiso-asistencia.component.css']
})
export class EditpermisoAsistenciaComponent {


  public formAsistencia: FormGroup;
  formControl = new FormControl('', [Validators.required]);
  response: any = {};
  disabled: boolean = true;

  constructor(
              private snackBar: MatSnackBar,
              private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<EditpermisoAsistenciaComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
              public asistenciaService: AsistenciaService,
              private router: Router,
              public dataService:DataService
              ) { }

    onNoClick(): void {
      this.dialogRef.close();
     }
  
    ngOnInit() {
      this.formularioAsistencia();
    }

    formularioAsistencia(){
      this.formAsistencia = this.formBuilder.group({
        id              :  [this.data.id,Validators.required],
        permiso         :  [this.data.permiso, Validators.required],
        motivo          :  [this.data.motivo, Validators.required],
      });
    }

  getErrorMessage() {
  return this.formControl.hasError('id') ? 'id no valido' :
  this.formControl.hasError('cantidad') ? 'cantidad no valida' :
  '';
  }

  modificarAsistencia() {
    console.log(this.formAsistencia.value)
    if(this.formAsistencia.valid){
      this.asistenciaService.modificarAsistencia(this.formAsistencia.value)
      .subscribe( res => {
        this.response=res;
        if(this.response.result==1){
          this.openSnackBar('Mensaje : ',this.response.message)  
          this.formAsistencia.reset();
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
