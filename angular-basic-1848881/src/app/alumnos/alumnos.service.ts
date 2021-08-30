import { Injectable } from '@angular/core';
import { Alumno } from './alumno.model';
import { HttpClient } from '@angular/common/http';
import { Observable  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private alumnos: Alumno[]=[{
    id: '1',
    nombre:'Benito Gzz',
    edad:'36',
    matricula:'1170333',
    correo:'8976@dominio.com',
  },
  {
    id: '2',
    nombre:'Ramon Zapata',
    edad:'20',
    matricula:'1844881',
    correo:'razc@dominio.com',
  },
  {
    id: '3',
    nombre:'Luis Eduardio',
    edad:'25',
    matricula:'1648244',
    correo:'led@dominio.com',
  },
  {
    id: '4',
    nombre:'Luis Roberto',
    edad:'71',
    matricula:'1146333',
    correo:'eduardo@dominio.com',
  },
]; 
  constructor(private http: HttpClient) { }

  getAlumnos(){
    return [...this.alumnos];
  }

  getAlumno(idAlumno:string){
    return {...this.alumnos.find((alumno:Alumno)=>{
      return alumno.id ===idAlumno
    })}
  }

  borrarAlumno(idAlumno:string){
    this.alumnos.filter((alumno:Alumno)=>{
      return alumno.id!=idAlumno
    });
  }

  agregarAlumno(nombre:string,edad:string,matricula:string,correo:string){
    this.alumnos.push({
      nombre,
      edad,matricula,
      correo,
      id:this.alumnos.length+1+''
    })
  }

  getPersonajes() :Observable<any>{
    return this.http.get<any>('http://swapi.dev/api/people',{});
  }

  getPersonaje(idPersonaje:string): Observable<any>{
    return this.http.get<any>('http://swapi.dev/api/people/${idPersonaje}',{});
  }
}
