import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { windowWhen } from 'rxjs/operators';
import { DataBaseService } from '../data-base.service';
import { Horario, Registro } from '../modelo';

@Component({
  selector: 'app-modificar-horario',
  templateUrl: './modificar-horario.component.html',
  styleUrls: ['./modificar-horario.component.css']
})
export class ModificarHorarioComponent implements OnInit {

  private idRegistro : number = Number(this.route.snapshot.paramMap.get("id"));
  horario: Registro=new Registro("","","","",0,undefined);

  constructor(private databaseService: DataBaseService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.databaseService.obtenerRegistro(this.idRegistro).subscribe((registro: any)=> this.horario=registro);
  }

  onSubmit(){
    this.databaseService.modificarRegistro(this.horario).subscribe(()=>window.alert("Registro modificado correctamente"));
    this.volver();
  }

  volver(){
    this.router.navigate(['/todoHoy']);
  }
}
