import { Component, OnInit } from '@angular/core';
import { DataBaseService } from '../data-base.service';
import { Evento,HorarioRegistro,ListaTareas, Horario } from '../modelo';

@Component({
  selector: 'app-todo-hoy',
  templateUrl: './todo-hoy.component.html',
  styleUrls: ['./todo-hoy.component.css']
})
export class TodoHoyComponent implements OnInit {
  public eventos: Evento[]=[];
  public horarios: HorarioRegistro[]=[];
  public tareas: ListaTareas[]=[];

  constructor(private databaseService: DataBaseService) { }

  ngOnInit(): void {
    this.obtenerEventos();
    this.obtenerHorarios();
    this.obtenerTareas();
  }

  obtenerEventos(){
    return this.databaseService
    .obtenerTodoEventos(1)
    .subscribe((eventos: any) => this.eventos = eventos);
  }

  eliminarEvento(idEvento: number | undefined){
    this.databaseService
    .eliminarEvento(idEvento).subscribe(()=>this.obtenerEventos());
  }

  obtenerHorarios(){
    return this.databaseService
    .obtenerHorarios(1)
    .subscribe((horarios: any)=> this.horarios=horarios);
  }

  eliminarRegistro(idRegistro : number){
    return this.databaseService.eliminarRegistro(idRegistro).subscribe(()=>window.alert("Registro eliminado"));
  }

  obtenerTareas(){
    return this.databaseService
    .obtenerListas(1)
    .subscribe((tareas: any)=> this.tareas=tareas);
  }

  eliminarTarea(idTarea : number){
    return this.databaseService.eliminarTarea(idTarea).subscribe(()=>window.alert("Tarea eliminada"));
  }

  eliminarLista(idLista : number){
    return this.databaseService.eliminarLista(idLista).subscribe(()=>window.alert("Lista eliminada"));
  }

}
