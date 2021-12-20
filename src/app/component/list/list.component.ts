import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../interfaces/interfaz';
import { ServeService } from '../service/serve.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['../../app.component.css']
})

export class ListComponent implements OnInit {
    public usuarios;
    public serveServices;
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
  serveService: any;
  
 
    constructor(serveService:ServeService, router: Router, route: ActivatedRoute) {
      this.serveServices = serveService;
      this.usuarios = this.serveServices;
      this.route = route;
      this.router = router;
    }
  
    ngOnInit(): void { 
      
      this.usuario = {
        id: 0,
        fname: String(this.route.snapshot.paramMap.get('fname')),
        lname: String(this.route.snapshot.paramMap.get('lname')),
        year: String(this.route.snapshot.paramMap.get('year')),
        mail: String(this.route.snapshot.paramMap.get('mail')),
        descripcion: String(this.route.snapshot.paramMap.get('descripcion')),
        pssw: String(this.route.snapshot.paramMap.get('pssw'))
      } 
        this.usuario.id = this.serveServices.incrementar();
        if(this.usuario.fname != "null"){
       this.usuarios.push(this.usuario);
  
    }
}
    mostrarUser(user : User){
  
      this.router.navigate(['details', user]);
    }

    deleteUser(user : User){
      this.usuarios.deleteUserById(user.id);
    }
}