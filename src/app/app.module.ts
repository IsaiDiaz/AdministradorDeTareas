import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideBarComponent } from './side-bar/side-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoHoyComponent } from './todo-hoy/todo-hoy.component';
import { AgregarEventoComponent } from './agregar-evento/agregar-evento.component';
import { ModificarEventoComponent } from './modificar-evento/modificar-evento.component';
import { AgregarHorarioComponent } from './agregar-horario/agregar-horario.component';
import { ModificarHorarioComponent } from './modificar-horario/modificar-horario.component';
import { AgregarListaComponent } from './agregar-lista/agregar-lista.component';
import { ModificarListaComponent } from './modificar-lista/modificar-lista.component';
import { AgregarTareaComponent } from './agregar-tarea/agregar-tarea.component';
import { ModificarTareaComponent } from './modificar-tarea/modificar-tarea.component';
import { TareasComponent } from './tareas/tareas.component';
import { HorariosComponent } from './horarios/horarios.component';
import { EventosComponent } from './eventos/eventos.component';



@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    TodoHoyComponent,
    AgregarEventoComponent,
    ModificarEventoComponent,
    AgregarHorarioComponent,
    ModificarHorarioComponent,
    AgregarListaComponent,
    ModificarListaComponent,
    AgregarTareaComponent,
    ModificarTareaComponent,
    TareasComponent,
    HorariosComponent,
    EventosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatTableModule,
    MatFormFieldModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
