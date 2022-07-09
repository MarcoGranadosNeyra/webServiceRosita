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
import { AlmacenPrincipal } from 'src/app/modelo/AlmacenPrincipal';
import { formatDate } from '@angular/common';
import { DataService } from 'src/app/service/data/data.service';
import { AddproductoalmacenprincipalComponent } from '../dialog/addproductoalmacenprincipal/addproductoalmacenprincipal.component';
import { SalidaalmacenprincipalComponent } from '../dialog/salidaalmacenprincipal/salidaalmacenprincipal.component';
import { IngresoalmacenprincipalComponent } from '../dialog/ingresoalmacenprincipal/ingresoalmacenprincipal.component';



@Component({
  selector: 'app-listaralmacenprincipal',
  templateUrl: './listaralmacenprincipal.component.html',
  styleUrls: ['./listaralmacenprincipal.component.css']
})
export class ListaralmacenprincipalComponent implements OnInit {

  isPopupOpened = true;

  persona:any=[];
  usuario:any=[];

  id_sucursal:number;

  displayedColumns: string[] = ['ID','PRODUCTO','CATEGORIA','UNIDAD','CANTIDAD','VENCIMIENTO','ACCIONES'];
 
  public dataSource: MatTableDataSource<AlmacenPrincipal>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  private dataArray: any;
  formularioFechas: FormGroup;

  constructor(
              private dialog :MatDialog,
              public dataService:DataService,
              private formBuilder:FormBuilder,
              private usuarioService:UsuarioService,
              private almacenPrincipalService:AlmacenprincipalService,
              private activateRoute:ActivatedRoute,
              private router : Router
              ) { }

  ngOnInit() {
    this.listarAlmacenPrincipal(this.dataService.id_sucursal)
    this.id_sucursal= this.dataService.id_sucursal;
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


listarAlmacenPrincipal(id_sucursal:number) {
      this.almacenPrincipalService.listarAlmacenPrincipal(id_sucursal)
      .subscribe(res => {
        this.dataArray = res;
        this.dataSource = new MatTableDataSource<AlmacenPrincipal>(this.dataArray);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(res)
      });
  }


  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }  

ingreso(id: number) {
  this.almacenPrincipalService.buscarAlmacenPrincipalProducto(id).subscribe(
    res => {
      this.isPopupOpened = true;
      const dialogRef = this.dialog.open(IngresoalmacenprincipalComponent, {
        width: '450px',
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
}

salida(id: number) {
  this.almacenPrincipalService.buscarAlmacenPrincipalProducto(id).subscribe(
    res => {
      this.isPopupOpened = true;
      const dialogRef = this.dialog.open(SalidaalmacenprincipalComponent, {
        width: '450px',
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
}


producto: string;
id_categoria: number;
id_unidad: number;
imagen: string;

add(){
  const dialogRef = this.dialog.open(AddproductoalmacenprincipalComponent, {
    width: '450px',
    data: {id_sucursal :this.id_sucursal,producto: this.producto, id_categoria: this.id_categoria,id_unidad:this.id_unidad,imagen:this.imagen}
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result === 1) {
      this.listarAlmacenPrincipal(1);
  }
  });
}
  
}