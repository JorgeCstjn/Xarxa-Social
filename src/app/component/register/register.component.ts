import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServeService } from '../service/serve.service';
import { User } from '../interfaces/interfaz';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../app.component.css']
})
export class RegisterComponent implements OnInit {
  usuarios = [];
  user:FormGroup;
  serveService;
  usuario:User = {
    id: 0,
    fname:"" ,
    lname:"" ,
    year:"" ,
    mail:"" ,
    descripcion: "",
    pssw:""  
  } 
  constructor(private formBuilder: FormBuilder, private router: Router, serveService: ServeService){
    this.formBuilder = formBuilder;
    this.serveService = serveService;
    this.user = new FormGroup({
      fname: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lname: new FormControl('', [Validators.required, Validators.minLength(2)]),
      year: new FormControl('', [Validators.required, Validators.minLength(2)]),
      mail: new FormControl('', [Validators.required, Validators.minLength(2)]),
      descripcion: new FormControl('', [Validators.required, Validators.minLength(2)]),
      pssw: new FormControl('', [Validators.required, Validators.minLength(2)]),
    });
  };
  ngOnInit() {
    console.log(this.serveService)
  }

  get data() { return this.user.controls; }

  onSubmit() {   

    if(this.usuario.fname.trim().length === 0){
      return;
    }
    if(this.usuario.lname.trim().length === 0){
      return;
    }
    if(this.usuario.year.trim().length === 0){
      return;
    }
    if(this.usuario.mail.trim().length === 0){
      return;
    }
    if(this.usuario.descripcion.trim().length === 0){
      return;
    }
    if(this.usuario.pssw.trim().length === 0){
      return;
    }
 
     this.router.navigate(['home', this.usuario]);
  }

  home() {
    this.router.navigate(['home']);
  }
}