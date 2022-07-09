import { Component, OnInit , ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario/usuario.service';
import { ProductoalmacenService } from 'src/app/service/productoAlmacen/productoalmacen.service';
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
import { EditproductoalmacenComponent } from '../dialog/editproductoalmacen/editproductoalmacen.component';
import { AddproductoalmacenComponent } from '../dialog/addproductoalmacen/addproductoalmacen.component';
/*
import { AddComponent } from '../add/add.component';

*/

@Component({
  selector: 'app-listproductoalmacen',
  templateUrl: './listproductoalmacen.component.html',
  styleUrls: ['./listproductoalmacen.component.css']
})
export class ListproductoalmacenComponent implements OnInit {

  isPopupOpened = true;

  persona:any=[];
  usuario:any=[];

  displayedColumns: string[] = ['ID','PRODUCTO','CATEGORIA','UNIDAD','ACTIVO','ACCIONES'];
 
  public dataSource: MatTableDataSource<ProductoAlmacen>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  private dataArray: any;
  formularioFechas: FormGroup;

  constructor(
              private dialog :MatDialog,
              private snackBar: MatSnackBar,
              public dataService:DataService,
              private formBuilder:FormBuilder,
              private usuarioService:UsuarioService,
              private productoalmacenService:ProductoalmacenService,
              private activateRoute:ActivatedRoute,
              private router : Router) { }

  ngOnInit() {
    this.listarProductoAlmacen()
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


  listarProductoAlmacen() {
      this.productoalmacenService.listarProductoAlmacen()
      .subscribe(res => {
        this.dataArray = res;
        this.dataSource = new MatTableDataSource<ProductoAlmacen>(this.dataArray);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(res)
      });
  }


  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }  


edit(id: number) {
  this.productoalmacenService.buscarProductoAlmacen(id).subscribe(
    res => {
      console.log(res)
      this.isPopupOpened = true;
      const dialogRef = this.dialog.open(EditproductoalmacenComponent, {
        width: '450px',
        data: res
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result === 1) {
            this.listarProductoAlmacen();
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
  const dialogRef = this.dialog.open(AddproductoalmacenComponent, {
    width: '450px',
    data: {producto: this.producto, id_categoria: this.id_categoria,id_unidad:this.id_unidad,imagen:this.imagen}
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result === 1) {
      this.listarProductoAlmacen();
  }
  });
}


openSnackBar(message: string, action: string) {
  this.snackBar.open(message, action, {
    duration: 2000,
    verticalPosition: 'bottom',
    horizontalPosition:'right',
  });
}

confirmarDialogo(id:number):void{
  const dialogRef=this.dialog.open(DialogComponent,{
        width:'450px',
        data:'¿Esta seguro de desactivar el registro?'
  });

  dialogRef.afterClosed().subscribe(res=>{

    if (res) {
      this.eliminarProductoAlmacen(id);
      this.openSnackBar('Mensaje ','Registro Desactivado!')  
      
    }

  });
}


eliminarProductoAlmacen(id:number){
  this.productoalmacenService.eliminarProductoAlmacen(id).subscribe(
    res => {
      this.listarProductoAlmacen();
    },
    err => console.log(err)
  )
}

  
}