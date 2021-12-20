import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../interfaces/interfaz';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['../../app.component.css']
})
export class DetailsComponent implements OnInit {
  public usuarios:User[] = [] ;
  router: Router; 
  route: ActivatedRoute;
  usuario:User = {
    id: 0,
    fname:"" ,
    lname:"" ,
    year:"" ,
    mail:"" ,
    descripcion: "",
    pssw:""  
  } 
  constructor(router: Router, route: ActivatedRoute) {

    this.route = route;
    this.router = router;
  }

  ngOnInit(): void {
this.usuario = {
        id: Number(this.route.snapshot.paramMap.get('id')),
        fname: String(this.route.snapshot.paramMap.get('fname')),
        lname: String(this.route.snapshot.paramMap.get('lname')),
        year: String(this.route.snapshot.paramMap.get('year')),
        mail: String(this.route.snapshot.paramMap.get('mail')),
        descripcion: String(this.route.snapshot.paramMap.get('descripcion')),
        pssw: String(this.route.snapshot.paramMap.get('pssw'))
      } 
  }
  volver(){
    
    this.router.navigate(['home']);
  }
}
