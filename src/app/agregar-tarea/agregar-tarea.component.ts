import { Component, OnInit } from '@angular/core';
import { DataBaseService } from '../data-base.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Tarea } from '../modelo';
@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.component.html',
  styleUrls: ['./agregar-tarea.component.css']
})
export class AgregarTareaComponent implements OnInit {

  private idLista: number = Number(this.route.snapshot.paramMap.get("id"));
  tarea: Tarea=new Tarea("","",false,this.idLista,undefined);

  constructor(private databaseService:DataBaseService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.databaseService.ingresarTarea(this.tarea).subscribe(()=>window.alert("Tarea registrada con éxito"));
    this.volver();
  }

  volver(){
    this.router.navigate(['/todoHoy']);
  }

}
