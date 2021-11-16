import { Component, OnInit } from '@angular/core';
import { DataBaseService } from '../data-base.service';
import { Evento } from '../modelo';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modificar-evento',
  templateUrl: './modificar-evento.component.html',
  styleUrls: ['./modificar-evento.component.css']
})
export class ModificarEventoComponent implements OnInit {

  evento: Evento=new Evento("","","","",0,undefined);

  constructor(private databaseService: DataBaseService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.obtenerEvento();
  }

  obtenerEvento(){
    this.databaseService.obtenerEvento(Number(this.route.snapshot.paramMap.get("id"))).subscribe((evento: any)=>this.evento=evento);
  }

  onSubmit(){
    this.databaseService.modificarEvento(this.evento).subscribe(()=>window.alert("Evento modificado correctamente"));
    this.volver()
  }

  volver(){
    this.router.navigate(['/todoHoy']);
  }
}
