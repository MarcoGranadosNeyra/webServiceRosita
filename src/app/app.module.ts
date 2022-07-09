import { LOCALE_ID,NgModule } from '@angular/core';
import localeES from '@angular/common/locales/es';
import {registerLocaleData} from '@angular/common';
import { DatePipe } from "@angular/common";

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptorService } from './service/TokenInterceptor/token-interceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import {SecurityGuard} from './guard/security.guard';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Angular material */
import { AngularMaterialModule } from './angularMaterial.module';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';

import { DialogComponent } from './tools/dialog/dialog.component';
import { PerfilComponent } from './pages/persona/perfil/perfil.component';
import { ValidarComponent } from './pages/persona/validar/validar.component';
import { RegistroComponent } from './pages/persona/registro/registro.component';
import { RegistroexitosoComponent } from './pages/persona/registroexitoso/registroexitoso.component';
import { EspecialidadComponent } from './pages/paciente/cita/especialidad/especialidad.component';
import { ExamenComponent } from './pages/paciente/cita/examen/examen.component';
import { FechaComponent } from './pages/paciente/cita/fecha/fecha.component';
import { MedicoComponent } from './pages/paciente/cita/medico/medico.component';
import { ConfirmarComponent } from './pages/paciente/cita/confirmar/confirmar.component';
import { ReservadoComponent } from './pages/paciente/cita/reservado/reservado.component';

import { AddpermisoAsistenciaComponent } from './pages/modulos/administracion/asistencia/dialog/addpermiso-asistencia/addpermiso-asistencia.component';
import { ReporteasistenciaComponent } from './pages/modulos/administracion/asistencia/reporte/reporteasistencia/reporteasistencia.component';
import { EditpermisoAsistenciaComponent } from './pages/modulos/administracion/asistencia/dialog/editpermiso-asistencia/editpermiso-asistencia.component';
import { ListproductoalmacenComponent } from './pages/modulos/mantenimiento/productoalmacen/listproductoalmacen/listproductoalmacen.component';
import { EditproductoalmacenComponent } from './pages/modulos/mantenimiento/productoalmacen/dialog/editproductoalmacen/editproductoalmacen.component';
import { AddproductoalmacenComponent } from './pages/modulos/mantenimiento/productoalmacen/dialog/addproductoalmacen/addproductoalmacen.component';
import { DelproductoalmacenComponent } from './pages/modulos/mantenimiento/productoalmacen/dialog/delproductoalmacen/delproductoalmacen.component';
import { ListaralmacenprincipalComponent } from './pages/modulos/almacen/principal/listaralmacenprincipal/listaralmacenprincipal.component';
import { IngresoalmacenprincipalComponent } from './pages/modulos/almacen/principal/dialog/ingresoalmacenprincipal/ingresoalmacenprincipal.component';
import { SalidaalmacenprincipalComponent } from './pages/modulos/almacen/principal/dialog/salidaalmacenprincipal/salidaalmacenprincipal.component';
import { AddproductoalmacenprincipalComponent } from './pages/modulos/almacen/principal/dialog/addproductoalmacenprincipal/addproductoalmacenprincipal.component';
import { ListaringresosalmacenprincipalComponent } from './pages/modulos/almacen/principal/listaringresosalmacenprincipal/listaringresosalmacenprincipal.component';
import { ListarsalidasalmacenprincipalComponent } from './pages/modulos/almacen/principal/listarsalidasalmacenprincipal/listarsalidasalmacenprincipal.component';


registerLocaleData(localeES,'es');

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,

    DialogComponent,
    PerfilComponent,
    ValidarComponent,
    RegistroComponent,
    RegistroexitosoComponent,
    EspecialidadComponent,
    ExamenComponent,
    FechaComponent,
    MedicoComponent,
    ConfirmarComponent,
    ReservadoComponent,


    ReporteasistenciaComponent,
    AddpermisoAsistenciaComponent,
    EditpermisoAsistenciaComponent,
    ListproductoalmacenComponent,
    EditproductoalmacenComponent,
    AddproductoalmacenComponent,
    DelproductoalmacenComponent,
    ListaralmacenprincipalComponent,
    IngresoalmacenprincipalComponent,
    SalidaalmacenprincipalComponent,
    AddproductoalmacenprincipalComponent,
    ListaringresosalmacenprincipalComponent,
    ListarsalidasalmacenprincipalComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    /*material */
    AngularMaterialModule,
  ],
  providers: [    
    SecurityGuard,
    {
      provide:LOCALE_ID,useValue:'es'}
      ,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    {
      provide:DatePipe
    },
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
