import { Component, OnInit } from '@angular/core';
import { DataBaseService } from '../data-base.service';
import { HorarioRegistro } from '../modelo';
@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})
export class HorariosComponent implements OnInit {

  public horarios: HorarioRegistro[]=[]; 
  constructor(private databaseService: DataBaseService) { }

  ngOnInit(): void {
    this.obtenerHorarios();
  }

  obtenerHorarios(){
    return this.databaseService
    .obtenerHorarios(1)
    .subscribe((horarios: any)=> this.horarios=horarios);
  }

  eliminarRegistro(idRegistro : number){
    return this.databaseService.eliminarRegistro(idRegistro).subscribe(()=>window.alert("Registro eliminado"));
  }
}
