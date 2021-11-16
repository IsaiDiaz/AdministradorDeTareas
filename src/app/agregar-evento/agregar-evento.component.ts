import { Component, OnInit } from '@angular/core';
import { Evento } from '../modelo';
import { Router, ActivatedRoute } from '@angular/router';
import { DataBaseService } from '../data-base.service';

@Component({
  selector: 'app-agregar-evento',
  templateUrl: './agregar-evento.component.html',
  styleUrls: ['./agregar-evento.component.css']
})
export class AgregarEventoComponent implements OnInit {
  
  private idUsuario : number = Number(this.route.snapshot.paramMap.get("id"));
  

  constructor(private route: ActivatedRoute,private databaseService: DataBaseService, private router: Router ) { }

  ngOnInit(): void {
  }

  evento : Evento= new Evento("","","","",this.idUsuario,undefined);

  onSubmit(){
    this.databaseService.ingresarEvento(this.evento).subscribe(()=>window.alert("Evento agregado correctamente"));
    this.volver();
  }

  volver() {
    this.router.navigate(['/todoHoy']);
  }
}
