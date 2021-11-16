import { Component, OnInit } from '@angular/core';
import { DataBaseService } from '../data-base.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Lista} from '../modelo';
@Component({
  selector: 'app-agregar-lista',
  templateUrl: './agregar-lista.component.html',
  styleUrls: ['./agregar-lista.component.css']
})
export class AgregarListaComponent implements OnInit {

  private idUsuario : number = Number(this.route.snapshot.paramMap.get("id"));
  lista :Lista= new Lista("","","",this.idUsuario,undefined);
  constructor(private databaseService: DataBaseService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.databaseService.ingresarLista(this.lista).subscribe(()=>window.alert("Lista registrada con éxito"));
    
    this.volver();
  }

  volver(){
    this.router.navigate(['/todoHoy']);
  }

}
