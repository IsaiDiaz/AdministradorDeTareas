import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelo';
import { DataBaseService } from '../data-base.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private databaseService: DataBaseService, private router: Router) { }

  ngOnInit(): void {
  }

  usuario= new Usuario ("","","",undefined)

  onSubmit(){
      this.databaseService.obtenerUsuario(this.usuario.userName,this.usuario.contrasena).subscribe();

      
  }

}
