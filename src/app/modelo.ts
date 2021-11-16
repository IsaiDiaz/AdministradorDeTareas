
export class Usuario {
    constructor(
        public nombre: string,
        public contrasena: string,
        public userName: string,
        public idUsuario?: number,
    ){}
}
export class Evento {
    constructor(
        public nombre: string,
        public descripcion: string,
        public fecha: string,
        public hora: string,
        public idUsuario: number,
        public idEvento?: number
    ){}
}
export class Lista {
    constructor(
        public nombre: string,
        public descripcion: string,
        public fecha: string,
        public idUsuario: number,
        public idLista?: number
    ){}
}
export class Tarea {
    constructor(
        public nombre: string,
        public descripcion: string,
        public estado: boolean,
        public idLista: number,
        public idTarea?: number
    ){}
}
export class ListaTareas{
    constructor(
        public nombreLista: string,
        public descripcionLista: string,
        public fecha: Date,
        public idLista: number,
        public nombre: string,
        public descripcion: string,
        public estado: boolean,
        public idTarea: number
    ){}
}
export class Horario {
    constructor(
        public dia: string,
        public idUsuario: number,
        public idHorario?: number,
    ){}
}
export class Registro {
    constructor(
        public nombre: string,
        public descripcion: string,
        public horaInicio: string,
        public horaFinal: string,
        public idHorario: number,
        public idRegistro?:number
    ){}
}
export class HorarioRegistro{
    constructor(
        public dia: string,
        public idHorario: number,
        public idRegistro:number,
        public nombre: string,
        public descripcion: string,
        public horaInicio: string,
        public horaFinal: string,
    ){}
}

