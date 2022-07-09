import { Component, OnInit , ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario/usuario.service';
import { AlmacenprincipalService } from 'src/app/service/almacenprincipal/almacenprincipal.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from 'src/app/tools/dialog/dialog.component';
import {FormBuilder, FormGroup,FormControl, Validators} from "@angular/forms";
import { Subject } from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTable} from '@angular/material/table';
import { ProductoAlmacen } from 'src/app/modelo/ProductoAlmacen';
import { formatDate } from '@angular/common';
import { DataService } from 'src/app/service/data/data.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-listarsalidasalmacenprincipal',
  templateUrl: './listarsalidasalmacenprincipal.component.html',
  styleUrls: ['./listarsalidasalmacenprincipal.component.css']
})
export class ListarsalidasalmacenprincipalComponent implements OnInit {


  isPopupOpened = true;

  persona:any=[];
  usuario:any=[];

  displayedColumns: string[] = ['ID','PRODUCTO','CATEGORIA','UNIDAD','ZONA','CANTIDAD','FECHA','HORA'];
 
  public dataSource: MatTableDataSource<ProductoAlmacen>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  private dataArray: any;
  formularioFechas: FormGroup;

  today: Date = new Date();
  pipe = new DatePipe('en-US');
  todayWithPipe = this.pipe.transform(Date.now(), 'dd/MM/yyyy');


  constructor(
              private dialog :MatDialog,
              public dataService:DataService,
              private formBuilder:FormBuilder,
              private usuarioService:UsuarioService,
              private almacenprincipalService:AlmacenprincipalService,
              private activateRoute:ActivatedRoute,
              private router : Router
              ) { }

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
      this.almacenprincipalService.listarSalidasAlmacenPrincipal(this.formularioFechas.value)
      .subscribe(res => {
        this.dataArray = res;
        this.dataSource = new MatTableDataSource<ProductoAlmacen>(this.dataArray);
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
    /*
   
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
    */
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