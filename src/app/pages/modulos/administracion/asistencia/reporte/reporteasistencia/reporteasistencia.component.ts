import { Component, OnInit , ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario/usuario.service';
import { AsistenciaService } from 'src/app/service/asistencia/asistencia.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from 'src/app/tools/dialog/dialog.component';
import {FormBuilder, FormGroup,FormControl, Validators} from "@angular/forms";
import { Subject } from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTable} from '@angular/material/table';
import { Asistencia } from 'src/app/modelo/Asistencia';
import { formatDate } from '@angular/common';
import { DataService } from 'src/app/service/data/data.service';
import { EditpermisoAsistenciaComponent } from '../../dialog/editpermiso-asistencia/editpermiso-asistencia.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-reporteasistencia',
  templateUrl: './reporteasistencia.component.html',
  styleUrls: ['./reporteasistencia.component.css']
})
export class ReporteasistenciaComponent implements OnInit {

  isPopupOpened = true;

  persona:any=[];
  usuario:any=[];

  displayedColumns: string[] = ['ID','SUCURSAL','COLABORADOR','PERMISO','MOTIVO','FECHA','HORA','ACCIONES'];
 
  public dataSource: MatTableDataSource<Asistencia>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  private dataArray: any;
  formularioFechas: FormGroup;

  today: Date = new Date();
  pipe = new DatePipe('en-US');
  todayWithPipe = this.pipe.transform(Date.now(), 'dd/MM/yyyy');


  constructor(private dialog :MatDialog,public dataService:DataService,private formBuilder:FormBuilder,private usuarioService:UsuarioService,private asistenciaService:AsistenciaService,private activateRoute:ActivatedRoute,private router : Router) { }

  ngOnInit() {
    this.validarFechas();
    //this.listarPerfil();
    
  }

  listarPerfil(){
    this.usuarioService.listarPerfil()
    .subscribe(
      res => {
        this.persona=res.persona
        this.usuario=res.usuario
      },
      err => console.log(err)
    )
  }

  validarFechas(){
    this.formularioFechas = this.formBuilder.group({
      id_sucursal       :  [1, Validators.required],
      fecha1            :  [this.todayWithPipe, Validators.required],
      fecha2            :  [this.todayWithPipe, Validators.required]
    });
  }

  generarReporte(){
    this.listarReporteAsistencia();
  }


  listarReporteAsistencia() {
  if(this.formularioFechas.valid){
      this.asistenciaService.listarReporteAsistencia(this.formularioFechas.value)
      .subscribe(res => {
        this.dataArray = res;
        this.dataSource = new MatTableDataSource<Asistencia>(this.dataArray);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    }
  }


  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }  

  edit(id: number) {
   
    this.asistenciaService.buscarAsistencia(id).subscribe(
      res => {
        this.isPopupOpened = true;
        const dialogRef = this.dialog.open(EditpermisoAsistenciaComponent, {
          data: res
         
        });
        console.log(res)
        dialogRef.afterClosed().subscribe(result => {
          if (result === 1) {
              this.listarReporteAsistencia();
          }
        });
      },
      
      err => console.log(err)
    )
    
  }
  

add(id: number) {
  /*
  this.almacenService.buscarAlmacenPrincipalProducto(id).subscribe(
    res => {
      this.isPopupOpened = true;
      const dialogRef = this.dialog.open(AddComponent, {
        data: res
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result === 1) {
            this.listarAlmacenPrincipal(this.dataService.id_sucursal);
        }
      });
    },
    err => console.log(err)
  )
  */
}
  
}