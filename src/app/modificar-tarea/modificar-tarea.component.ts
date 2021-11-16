import { Component, OnInit } from '@angular/core';
import { DataBaseService } from '../data-base.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Tarea } from '../modelo';

@Component({
  selector: 'app-modificar-tarea',
  templateUrl: './modificar-tarea.component.html',
  styleUrls: ['./modificar-tarea.component.css']
})
export class ModificarTareaComponent implements OnInit {
  tarea: Tarea= new Tarea("","",false,0,undefined);

  constructor(private databaseService: DataBaseService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.obtenerTarea();
  }

  obtenerTarea(){
    this.databaseService.obtenerTarea(Number(this.route.snapshot.paramMap.get("id"))).subscribe((tarea: any)=>this.tarea=tarea);
  }

  onSubmit(){
    this.databaseService.modificarTarea(this.tarea).subscribe(()=>window.alert("Tarea modificada correctamente"));
    this.volver();
  }

  volver(){
    this.router.navigate(['/todoHoy']);
  }
  
}
