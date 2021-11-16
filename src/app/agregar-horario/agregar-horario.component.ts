import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataBaseService } from '../data-base.service';
import { Horario, Registro } from '../modelo';

@Component({
  selector: 'app-agregar-horario',
  templateUrl: './agregar-horario.component.html',
  styleUrls: ['./agregar-horario.component.css']
})
export class AgregarHorarioComponent implements OnInit {

  private idHorario : number = Number(this.route.snapshot.paramMap.get("id"));

  constructor(private databaseService:DataBaseService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  horario: Registro=new Registro("","","","",this.idHorario,undefined);

  onSubmit(){
    this.databaseService.ingresarRegistro(this.horario).subscribe(()=>window.alert("Horario registrado correctamente"));
    this.volver();
  }

  volver(){
    this.router.navigate(['/todoHoy']);
  }

}
