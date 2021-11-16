import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEventoComponent } from './agregar-evento/agregar-evento.component';
import { AgregarHorarioComponent } from './agregar-horario/agregar-horario.component';
import { AgregarListaComponent } from './agregar-lista/agregar-lista.component';
import { AgregarTareaComponent } from './agregar-tarea/agregar-tarea.component';
import { EventosComponent } from './eventos/eventos.component';
import { HomeComponent } from './home/home.component';
import { HorariosComponent } from './horarios/horarios.component';
import { LoginComponent } from './login/login.component';
import { ModificarEventoComponent } from './modificar-evento/modificar-evento.component';
import { ModificarHorarioComponent } from './modificar-horario/modificar-horario.component';
import { ModificarListaComponent } from './modificar-lista/modificar-lista.component';
import { ModificarTareaComponent } from './modificar-tarea/modificar-tarea.component';
import { RegistroComponent } from './registro/registro.component';
import { TareasComponent } from './tareas/tareas.component';
import { TodoHoyComponent } from './todo-hoy/todo-hoy.component';
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'login/registro',
    component:RegistroComponent
  },
  {
    path: 'todoHoy',
    component:TodoHoyComponent
  },
  {
    path:'todoHoy/agregarEvento/:id',
    component:AgregarEventoComponent
  },
  {
    path:'todoHoy/modificarEvento/:id',
    component:ModificarEventoComponent
  },
  {
    path:'todoHoy/agregarHorario/:id',
    component:AgregarHorarioComponent
  },
  {
    path:'todoHoy/modificarHorario/:id',
    component:ModificarHorarioComponent
  },
  {
    path:'todoHoy/agregarLista/:id',
    component:AgregarListaComponent
  },
  {
    path:'todoHoy/modificarLista/:id',
    component:ModificarListaComponent
  },
  {
    path:'todoHoy/agregarTarea/:id',
    component:AgregarTareaComponent
  },
  {
    path:'todoHoy/modificarTarea/:id',
    component:ModificarTareaComponent
  },
  {
    path:'tareas',
    component:TareasComponent
  },
  {
    path:'horarios',
    component:HorariosComponent
  },
  {
    path:'eventos',
    component:EventosComponent
  },
  {
    path: "",redirectTo: "/home", pathMatch: "full"
  },
  {
    path: "**", redirectTo: "/mascotas"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
