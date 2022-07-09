import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecurityGuard } from './guard/security.guard';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { EspecialidadComponent } from './pages/paciente/cita/especialidad/especialidad.component';
import { ExamenComponent } from './pages/paciente/cita/examen/examen.component';
import { FechaComponent } from './pages/paciente/cita/fecha/fecha.component';
import { MedicoComponent } from './pages/paciente/cita/medico/medico.component';
import { ConfirmarComponent } from './pages/paciente/cita/confirmar/confirmar.component';
import { PerfilComponent } from './pages/persona/perfil/perfil.component';
import { RegistroComponent } from './pages/persona/registro/registro.component';
import { RegistroexitosoComponent } from './pages/persona/registroexitoso/registroexitoso.component';
import { ValidarComponent } from './pages/persona/validar/validar.component';
import { ReservadoComponent } from './pages/paciente/cita/reservado/reservado.component';

import { ReporteasistenciaComponent } from './pages/modulos/administracion/asistencia/reporte/reporteasistencia/reporteasistencia.component';
import { ListproductoalmacenComponent } from './pages/modulos/mantenimiento/productoalmacen/listproductoalmacen/listproductoalmacen.component';
import { ListaralmacenprincipalComponent } from './pages/modulos/almacen/principal/listaralmacenprincipal/listaralmacenprincipal.component';
import { ListaringresosalmacenprincipalComponent } from './pages/modulos/almacen/principal/listaringresosalmacenprincipal/listaringresosalmacenprincipal.component';
import { ListarsalidasalmacenprincipalComponent } from './pages/modulos/almacen/principal/listarsalidasalmacenprincipal/listarsalidasalmacenprincipal.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path:'login',
    component:LoginComponent
  },

  {path:'validarPersona',component:ValidarComponent},
  {path:'registro',component:RegistroComponent},
  {path:'registrado',component:RegistroexitosoComponent},

      {path:'main',component:MainComponent,children:[

        {path:'perfil/:id',component:PerfilComponent,canActivate : [SecurityGuard]},

        {path:'sucursal/lurin/controlasistencia',component:ReporteasistenciaComponent ,canActivate : [SecurityGuard]},

        {path:'sucursal/lurin/almacenprincipal',component:ListaralmacenprincipalComponent ,canActivate : [SecurityGuard]},
        /*reportes */
        {path:'sucursal/lurin/almacenprincipal/ingresos',component:ListaringresosalmacenprincipalComponent ,canActivate : [SecurityGuard]},
        {path:'sucursal/lurin/almacenprincipal/salidas',component:ListarsalidasalmacenprincipalComponent ,canActivate : [SecurityGuard]},
        /*MANTENIMIENTO */
        {path:'sucursal/lurin/productoalmacen',component:ListproductoalmacenComponent ,canActivate : [SecurityGuard]},

        /*
        {path:'sucursal/lurin/almacenprincipal',component:S1AlmacenprincipalComponent ,canActivate : [SecurityGuard]},
        {path:'sucursal/lurin/almacencocina',component:S1AlmacencocinaComponent ,canActivate : [SecurityGuard]},
        {path:'sucursal/praderas/almacenprincipal',component:S2AlmacenprincipalComponent ,canActivate : [SecurityGuard]},
        {path:'sucursal/praderas/almacencocina',component:S2AlmacencocinaComponent ,canActivate : [SecurityGuard]},
        */
      ]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


