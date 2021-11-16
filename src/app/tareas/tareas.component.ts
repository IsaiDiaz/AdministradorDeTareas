import { Component, OnInit } from '@angular/core';
import { DataBaseService } from '../data-base.service';
import { ListaTareas } from '../modelo';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  public tareas: ListaTareas[]=[];


  constructor(private databaseService: DataBaseService){
    
   }

  ngOnInit(): void {
    this.obtenerTareas();
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
