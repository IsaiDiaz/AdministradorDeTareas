import { Component, OnInit } from '@angular/core';
import { DataBaseService } from '../data-base.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Lista } from '../modelo';

@Component({
  selector: 'app-modificar-lista',
  templateUrl: './modificar-lista.component.html',
  styleUrls: ['./modificar-lista.component.css']
})
export class ModificarListaComponent implements OnInit {

  lista: Lista=new Lista("","","",0,undefined);

  constructor(private databaseService: DataBaseService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.obtenerLista();
  }

  obtenerLista(){
    this.databaseService.obtenerLista(Number(this.route.snapshot.paramMap.get("id"))).subscribe((lista : any)=> this.lista= lista);
  }

  onSubmit(){
    this.databaseService.modificarLista(this.lista).subscribe(()=>window.alert("Lista modificada correctamente"));
    this.volver();
  }

  volver(){
    this.router.navigate(['/todoHoy']);
  }

}
