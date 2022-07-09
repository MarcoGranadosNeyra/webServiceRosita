import { Component, OnInit,ViewChild,EventEmitter ,Output} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import {MatAccordion} from '@angular/material/expansion';

import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { UsuarioService } from '../../service/usuario/usuario.service';
import { DataService } from 'src/app/service/data/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  sucursales: any = [];
  modulos: any = [];
  persona :any={};
  rol :any={};

  @Output()
  emisor : EventEmitter<string> = new EventEmitter<string>();

  constructor(private dataService:DataService,private usuarioService:UsuarioService,private observer: BreakpointObserver,private router: Router) { }

  ngOnInit(): void {
    this.listarMenuUsuario();
  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 1024px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }

  cerrarSession(){
    this.usuarioService.logout()
  }

  listarMenuUsuario(){
    this.usuarioService.listarModulosUsuario().subscribe(
      res => {
        this.sucursales=res.sucursales
        this.modulos=res.modulos
        this.persona=res.persona
        this.rol=res.rol
      },
        err=>console.error(err)
    );
  }

  miperfil(idPersona:number){
    this.router.navigate(['perfil/',idPersona]);

  }

  getIdSucursal(id_sucursal:number){
    this.dataService.id_sucursal=id_sucursal;
  }
  



}
