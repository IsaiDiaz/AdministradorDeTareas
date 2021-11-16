import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelo';
import { DataBaseService } from '../data-base.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private databaseService: DataBaseService) { }

  ngOnInit(): void {
  }

  usuario= new Usuario("","","",undefined);

  onSubmit(){
    this.databaseService.ingresarUsuario(this.usuario).subscribe(()=> window.alert("Usuario registrado correctamente"));
  }
}
