import { Component, OnInit } from '@angular/core';
import { DataBaseService } from '../data-base.service';
import { Evento } from '../modelo';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  public eventos: Evento[]=[];

  constructor(private databaseService: DataBaseService) { }

  ngOnInit(): void {
    this.obtenerEventos();
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
}
