import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private URL = environment.apiUrl;
  
  constructor(private http: HttpClient, private router: Router) { }

  login(user) {
    return this.http.post<any>(this.URL + '/login', user);
  }

  registro(user) {
    return this.http.post<any>(this.URL + '/usuario/add', user);
  }


  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  listarPerfil() {
    return this.http.get<any>(this.URL + '/perfil');
  }

  listarPerfiles() {
    return this.http.get<any>(this.URL + '/perfiles');
  }

  listarModulosUsuario() {
    return this.http.get<any>(this.URL + '/modulosUsuario');
  }

  listarUsuarioByUsuario(user: any) {
    return this.http.post<any>(this.URL + '/buscarUsuario', user);
  }

  agregarUsuarioPaciente(persona: any) {
    return this.http.post<any>(this.URL + '/usuarioPaciente/add', persona);
  }



}

