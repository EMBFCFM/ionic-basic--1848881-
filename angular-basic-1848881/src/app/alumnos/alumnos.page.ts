import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Alumno } from './alumno.model';
import { AlumnosService } from './alumnos.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.page.html',
  styleUrls: ['./alumnos.page.scss'],
})
export class AlumnosPage implements OnInit, OnDestroy {

private alumno:Alumno[];
private subscription:Subscription= new Subscription();

  constructor(private alumnosService:AlumnosService) { }

  ngOnInit() {
    this.alumno=this.alumnosService.getAlumnos();
    this.alumnosService.getPersonajes().subscribe((
      Response:any)=>{
        console.log(Response);
      }
      );
  }

  ionViewWillEnter(){
    this.alumno=this.alumnosService.getAlumnos();
  }


  ngOnDestroy(){
    this.subscription.unsubscribe();
    console.log("Adios, liberaste la memoria")
  }
}
