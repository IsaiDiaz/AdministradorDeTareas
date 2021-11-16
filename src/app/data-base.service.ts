import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario,Evento,Lista,Tarea,Horario,Registro } from './modelo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {
  baseUrl= environment.baseUrl

  constructor(private http: HttpClient) {}

  obtenerUsuario(userName: string, contrasena: string){
    return this.http.get(`${this.baseUrl}/obtenerUsuario.php?userName=${userName}&contrasena=${contrasena}`);
  }  

  obtenerListas(idUsuario: string | number){
    return this.http.get(`${this.baseUrl}/obtenerTodoListas.php?idUsuario=${idUsuario}`);
  }

  obtenerHorarios(idUsuario: string | number){
    return this.http.get(`${this.baseUrl}/obtenerTodoHorarios.php?idUsuario=${idUsuario}`);
  }

  obtenerTodoEventos(idUsuario: string | number){
    return this.http.get(`${this.baseUrl}/obtenerTodoEventos.php?idUsuario=${idUsuario}`);
  }

  obtenerTarea(idTarea: string | number){
    return this.http.get(`${this.baseUrl}/obtenerTarea.php?idTarea=${idTarea}`);
  }

  obtenerRegistro(idRegistro: string |number){
    return this.http.get(`${this.baseUrl}/obtenerRegistroHorario.php?idRegistro=${idRegistro}`);
  }

  obtenerLista(idLista: string|number){
    return this.http.get(`${this.baseUrl}/obtenerlistaTareas.php?idLista=${idLista}`);
  }

  obtenerHorario(idHorario: string|number){
    return this.http.get(`${this.baseUrl}/obtenerHorario.php?idHorario=${idHorario}`);
  }

  obtenerEvento(idEvento: string|number){
    return this.http.get(`${this.baseUrl}/obtenerEvento.php?idEvento=${idEvento}`);
  }

  modificarTarea(tarea: Tarea){
    return this.http.put(`${this.baseUrl}/modificarTarea.php`, tarea);
  }

  modificarRegistro(registro: Registro){
    return this.http.put(`${this.baseUrl}/modificarRegistro.php`, registro);
  }

  modificarLista(lista: Lista){
    return this.http.put(`${this.baseUrl}/modificarListaTareas.php`, lista);
  }

  modificarHorario(horario: Horario){
    return this.http.put(`${this.baseUrl}/modificarHorario.php`, horario);
  }

  modificarEvento(evento: Evento){
    return this.http.put(`${this.baseUrl}/modificarEvento.php`, evento);
  }

  ingresarUsuario(usuario: Usuario){
    return this.http.post(`${this.baseUrl}/ingresarUsuario.php`, usuario);
  }

  ingresarTarea(tarea: Tarea){
    return this.http.post(`${this.baseUrl}/ingresarTarea.php`, tarea);
  }

  ingresarRegistro(registro: Registro){
    return this.http.post(`${this.baseUrl}/ingresarRegistroHorario.php`, registro);
  }

  ingresarLista(lista: Lista){
    return this.http.post(`${this.baseUrl}/ingresarListaTareas.php`, lista);
  }

  ingresarHorario(horario: Horario){
    return this.http.post(`${this.baseUrl}/ingresarHorario.php`, horario);
  }

  ingresarEvento(evento: Evento){
    return this.http.post(`${this.baseUrl}/ingresarEvento.php`, evento);
  }

  eliminarTarea(idTarea: String | number){
    return this.http.delete(`${this.baseUrl}/eliminarTarea.php?idTarea=${idTarea}`);
  }

  eliminarRegistro(idRegistro: String | number){
    return this.http.delete(`${this.baseUrl}/eliminarRegistroHorario.php?idRegistro=${idRegistro}`);
  }

  eliminarLista(idLista: String | number){
    return this.http.delete(`${this.baseUrl}/eliminarLista.php?idLista=${idLista}`);
  }

  eliminarHorario(idHorario: String | number){
    return this.http.delete(`${this.baseUrl}/eliminarHorario.php?idHorario=${idHorario}`);
  }
  
  eliminarEvento(idEvento: undefined | number){
    return this.http.delete(`${this.baseUrl}/eliminarEvento.php?idEvento=${idEvento}`);
  }

}
